import { NextRequest, NextResponse } from 'next/server'
import { getOrderModel, orderToSavedData } from '@/models/Order'

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url)
    const paymentId = searchParams.get('payment_id')

    if (!paymentId) {
      return NextResponse.json(
        { success: false, error: 'payment_id é obrigatório' },
        { status: 400 }
      )
    }

    const Order = await getOrderModel()
    const doc = await Order.findOne({ paymentId }).lean().exec()

    if (!doc) {
      return NextResponse.json(
        { success: false, error: 'Pedido não encontrado' },
        { status: 404 }
      )
    }

    const data = orderToSavedData(doc as Parameters<typeof orderToSavedData>[0])
    return NextResponse.json({ success: true, data })
  } catch (error) {
    console.error('💥 Erro na API orders GET:', error)
    return NextResponse.json(
      { success: false, error: 'Erro interno do servidor' },
      { status: 500 }
    )
  }
}
