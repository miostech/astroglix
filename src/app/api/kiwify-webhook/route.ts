import { NextRequest, NextResponse } from 'next/server'
import { readFile, writeFile } from 'fs/promises'
import { join } from 'path'
import { getOrderModel } from '@/models/Order'

/**
 * Webhook para notificações de pagamento da Kiwify.
 * Configure na Kiwify: URL = https://seu-dominio.com/api/kiwify-webhook
 * A Kiwify pode enviar status como: approved, paid, completed, etc.
 */
export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    console.log('🔔 Webhook Kiwify recebido:', body)

    const status = body.status ?? body.payment_status ?? body.order_status
    const isApproved = ['approved', 'paid', 'completed', 'paid_out'].includes(String(status).toLowerCase())

    if (isApproved) {
      const customerEmail =
        body.Customer?.email ??
        body.customer_email ??
        body.email ??
        body.buyer?.email
      const customerName =
        body.Customer?.full_name ??
        body.Customer?.first_name ??
        body.customer_name ??
        body.name ??
        body.buyer?.name ??
        ''
      const orderId = body.order_id ?? body.id ?? body.transaction_id

      console.log('✅ Pagamento aprovado na Kiwify:', { customer_email: customerEmail, customer_name: customerName, order_id: orderId })

      if (!customerEmail?.trim()) {
        console.warn('⚠️ Webhook sem email do cliente (Customer.email), ignorando atualização de pedido')
        return NextResponse.json({ success: false, message: 'Payload sem email do cliente' }, { status: 400 })
      }

      const tmpDir = join(process.cwd(), 'tmp')
      const fs = require('fs')
      const files = fs.readdirSync(tmpDir).filter((file: string) => file.endsWith('.json') && file.startsWith('kiwify_'))

      let foundData = null
      let foundFile = null

      for (const file of files) {
        try {
          const filePath = join(tmpDir, file)
          const fileContent = await readFile(filePath, 'utf-8')
          const data = JSON.parse(fileContent)
          if (data.customerData?.email === customerEmail && (!customerName || data.customerData?.name === customerName)) {
            foundData = data
            foundFile = file
            break
          }
        } catch {
          // ignorar arquivo inválido
        }
      }

      if (foundData && foundFile) {
        foundData.paymentStatus = 'approved'
        foundData.kiwifyOrderId = orderId
        foundData.paymentConfirmedAt = new Date().toISOString()
        const filePath = join(tmpDir, foundFile)
        await writeFile(filePath, JSON.stringify(foundData, null, 2))
        console.log('✅ Dados atualizados com status de pagamento aprovado (tmp)')
      }

      try {
        const Order = await getOrderModel()
        const filter: { email: string; fullName?: string } = {
          email: String(customerEmail).trim().toLowerCase()
        }
        if (customerName?.trim()) {
          filter.fullName = customerName.trim()
        }
        const updated = await Order.findOneAndUpdate(
          filter,
          {
            paymentStatus: 'approved',
            paymentConfirmedAt: new Date(),
            kiwifyOrderId: orderId ?? undefined
          },
          { sort: { createdAt: -1 }, new: true }
        )
          .lean()
          .exec()
        if (updated) {
          console.log('✅ Pedido atualizado no MongoDB:', updated.paymentId)
          return NextResponse.json({ success: true, message: 'Pagamento confirmado', paymentId: updated.paymentId })
        }
      } catch (mongoError) {
        console.error('⚠️ Erro ao atualizar pedido no MongoDB:', mongoError)
      }

      if (foundData) {
        return NextResponse.json({ success: true, message: 'Pagamento confirmado', paymentId: foundData.paymentId })
      }

      return NextResponse.json({ success: false, message: 'Dados do cliente não encontrados' }, { status: 404 })
    }

    return NextResponse.json({ success: true, message: 'Webhook recebido' })
  } catch (error) {
    console.error('💥 Erro no webhook Kiwify:', error)
    return NextResponse.json({ success: false, error: 'Erro interno do servidor' }, { status: 500 })
  }
}

export async function GET() {
  return NextResponse.json({ message: 'Webhook Kiwify ativo', timestamp: new Date().toISOString() })
}
