import { NextRequest, NextResponse } from 'next/server'
import { buildCustomerReportSuccessUrl, resolveSiteOrigin } from '@/lib/customer-report-url'
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
    console.log('[WEBHOOK DEBUG] status extraído:', status)
    const isApproved = ['approved', 'paid', 'completed', 'paid_out'].includes(String(status).toLowerCase())
    console.log('[WEBHOOK DEBUG] isApproved:', isApproved)

    if (isApproved) {
      const customerEmail =
        body.Customer?.email ??
        body.customer_email ??
        body.email ??
        body.buyer?.email
      const orderId = body.order_id ?? body.id ?? body.transaction_id

      console.log('[WEBHOOK DEBUG] customerEmail:', customerEmail)
      console.log('[WEBHOOK DEBUG] orderId:', orderId)

      if (!customerEmail?.trim()) {
        console.warn('⚠️ Webhook sem email do cliente, ignorando')
        return NextResponse.json({ success: false, message: 'Payload sem email do cliente' }, { status: 400 })
      }

      const emailNormalized = String(customerEmail).trim().toLowerCase()
      console.log('[WEBHOOK DEBUG] emailNormalized para filtro:', emailNormalized)
      console.log('[WEBHOOK DEBUG] MONGO_URI definido:', !!process.env.MONGO_URI)

      const Order = await getOrderModel()
      console.log('[WEBHOOK DEBUG] Conexão MongoDB OK, buscando pedido...')

      const filter = { email: emailNormalized }
      console.log('[WEBHOOK DEBUG] Filtro MongoDB:', JSON.stringify(filter))

      const existing = await Order.findOne(filter).sort({ createdAt: -1 }).lean().exec()
      console.log('[WEBHOOK DEBUG] Pedido encontrado (findOne):', existing ? existing.paymentId : 'NENHUM')
      if (existing) {
        console.log('[WEBHOOK DEBUG] Email no banco:', existing.email, '| Status atual:', existing.paymentStatus)
      }

      const siteOrigin = resolveSiteOrigin(request)
      const customerReportUrl =
        existing?.paymentId != null
          ? buildCustomerReportSuccessUrl(siteOrigin, existing.paymentId, emailNormalized)
          : undefined

      const updated = await Order.findOneAndUpdate(
        filter,
        {
          paymentStatus: 'approved',
          paymentConfirmedAt: new Date(),
          kiwifyOrderId: orderId ?? undefined,
          ...(customerReportUrl && { customerReportUrl })
        },
        { sort: { createdAt: -1 }, returnDocument: 'after' }
      )
        .lean()
        .exec()

      console.log('[WEBHOOK DEBUG] Resultado findOneAndUpdate:', updated ? updated.paymentId : 'NULL')

      if (updated) {
        console.log('✅ Pedido atualizado no MongoDB:', updated.paymentId, '| Novo status:', updated.paymentStatus)
        return NextResponse.json({ success: true, message: 'Pagamento confirmado', paymentId: updated.paymentId })
      }

      console.log('[WEBHOOK DEBUG] Nenhum pedido encontrado para email:', emailNormalized)
      const allOrders = await Order.find({}).select('email paymentId').lean().exec()
      console.log('[WEBHOOK DEBUG] Total de pedidos no banco:', allOrders.length)
      console.log('[WEBHOOK DEBUG] Emails no banco:', allOrders.map(o => o.email))

      return NextResponse.json({ success: false, message: 'Dados do cliente não encontrados' }, { status: 404 })
    }

    console.log('[WEBHOOK DEBUG] Status não aprovado, ignorando:', status)
    return NextResponse.json({ success: true, message: 'Webhook recebido' })
  } catch (error) {
    console.error('💥 Erro no webhook Kiwify:', error)
    return NextResponse.json({ success: false, error: 'Erro interno do servidor' }, { status: 500 })
  }
}

export async function GET() {
  return NextResponse.json({ message: 'Webhook Kiwify ativo', timestamp: new Date().toISOString() })
}
