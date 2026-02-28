import { NextRequest, NextResponse } from 'next/server'
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
      const orderId = body.order_id ?? body.id ?? body.transaction_id

      console.log('✅ Pagamento aprovado na Kiwify:', { customer_email: customerEmail, order_id: orderId })

      if (!customerEmail?.trim()) {
        console.warn('⚠️ Webhook sem email do cliente (Customer.email), ignorando atualização de pedido')
        return NextResponse.json({ success: false, message: 'Payload sem email do cliente' }, { status: 400 })
      }

      const Order = await getOrderModel()
      const filter = { email: String(customerEmail).trim().toLowerCase() }
      const updated = await Order.findOneAndUpdate(
        filter,
        {
          paymentStatus: 'approved',
          paymentConfirmedAt: new Date(),
          kiwifyOrderId: orderId ?? undefined
        },
        { sort: { createdAt: -1 }, returnDocument: 'after' }
      )
        .lean()
        .exec()

      if (updated) {
        console.log('✅ Pedido atualizado no MongoDB:', updated.paymentId)
        return NextResponse.json({ success: true, message: 'Pagamento confirmado', paymentId: updated.paymentId })
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
