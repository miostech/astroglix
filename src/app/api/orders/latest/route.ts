import { NextRequest, NextResponse } from 'next/server'
import { getOrderModel, orderToSavedData } from '@/models/Order'

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url)
    const email = searchParams.get('email')
    const name = searchParams.get('name')

    if (!email?.trim()) {
      return NextResponse.json(
        { success: false, error: 'email é obrigatório' },
        { status: 400 }
      )
    }

    const Order = await getOrderModel()
    const filter: { email: string; fullName?: string } = {
      email: email.trim().toLowerCase()
    }
    if (name?.trim()) {
      filter.fullName = name.trim()
    }

    const doc = await Order.findOne(filter)
      .sort({ createdAt: -1 })
      .lean()
      .exec()

    if (!doc) {
      return NextResponse.json(
        { success: false, error: 'Nenhum pagamento encontrado' },
        { status: 404 }
      )
    }

    const data = orderToSavedData(doc as Parameters<typeof orderToSavedData>[0])
    return NextResponse.json({ success: true, data })
  } catch (error) {
    console.error('💥 Erro na API orders/latest GET:', error)
    return NextResponse.json(
      { success: false, error: 'Erro interno do servidor' },
      { status: 500 }
    )
  }
}
