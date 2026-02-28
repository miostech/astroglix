import { NextRequest, NextResponse } from 'next/server'
import { getOrderModel } from '@/models/Order'

export async function PATCH(
  _request: NextRequest,
  { params }: { params: Promise<{ paymentId: string }> }
) {
  try {
    const { paymentId } = await params
    if (!paymentId) {
      return NextResponse.json(
        { success: false, error: 'paymentId é obrigatório' },
        { status: 400 }
      )
    }

    const body = await _request.json().catch(() => ({}))
    const paymentStatus = body.paymentStatus ?? 'approved'
    const paymentConfirmedAt = body.paymentConfirmedAt ?? new Date().toISOString()
    const kiwifyOrderId = body.kiwifyOrderId ?? undefined

    const Order = await getOrderModel()
    const doc = await Order.findOneAndUpdate(
      { paymentId },
      {
        paymentStatus,
        paymentConfirmedAt: paymentStatus === 'approved' ? new Date(paymentConfirmedAt) : null,
        ...(kiwifyOrderId != null && { kiwifyOrderId })
      },
      { new: true }
    )
      .lean()
      .exec()

    if (!doc) {
      return NextResponse.json(
        { success: false, error: 'Pedido não encontrado' },
        { status: 404 }
      )
    }

    return NextResponse.json({
      success: true,
      message: 'Status atualizado',
      paymentId: doc.paymentId,
      paymentStatus: doc.paymentStatus
    })
  } catch (error) {
    console.error('💥 Erro na API orders status PATCH:', error)
    return NextResponse.json(
      { success: false, error: 'Erro interno do servidor' },
      { status: 500 }
    )
  }
}
