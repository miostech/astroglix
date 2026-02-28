import { NextRequest, NextResponse } from 'next/server'
import { getOrderModel, orderToSavedData } from '@/models/Order'

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url)
    const customerEmail = searchParams.get('email')

    console.log('🔍 Buscando último pagamento para:', { customerEmail })

    if (!customerEmail?.trim()) {
      return NextResponse.json({
        success: false,
        error: 'email é obrigatório'
      }, { status: 400 })
    }

    const Order = await getOrderModel()
    const doc = await Order.findOne({ email: customerEmail.trim().toLowerCase() })
      .sort({ createdAt: -1 })
      .lean()
      .exec()

    if (doc) {
      console.log('✅ Último pagamento encontrado no MongoDB:', doc.paymentId)
      const data = orderToSavedData(doc as Parameters<typeof orderToSavedData>[0])
      return NextResponse.json({ success: true, data })
    }

    return NextResponse.json({
      success: false,
      error: 'Nenhum pagamento encontrado'
    }, { status: 404 })
  } catch (error) {
    console.error('💥 Erro na API get-latest-payment:', error)
    
    return NextResponse.json({
      success: false,
      error: 'Erro interno do servidor'
    }, { status: 500 })
  }
}
