import { NextRequest, NextResponse } from 'next/server'
import { getOrderModel, orderToSavedData } from '@/models/Order'

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url)
    const paymentId = searchParams.get('payment_id')

    if (!paymentId) {
      return NextResponse.json({
        success: false,
        error: 'ID de pagamento não fornecido'
      }, { status: 400 })
    }

    console.log('🔍 Buscando dados para paymentId:', paymentId)

    const Order = await getOrderModel()
    const doc = await Order.findOne({ paymentId }).lean().exec()
    if (doc) {
      console.log('✅ Dados encontrados no MongoDB para:', paymentId)
      const data = orderToSavedData(doc as Parameters<typeof orderToSavedData>[0])
      return NextResponse.json({ success: true, data })
    }

    return NextResponse.json({
      success: false,
      error: 'Dados não encontrados ou expirados'
    }, { status: 404 })
  } catch (error) {
    console.error('💥 Erro na API get-report:', error)
    
    return NextResponse.json({
      success: false,
      error: 'Erro interno do servidor'
    }, { status: 500 })
  }
}

export async function DELETE(_request: NextRequest) {
  // Dados vêm do MongoDB; não há arquivo tmp a remover. Mantido para compatibilidade com o front.
  return NextResponse.json({ success: true, message: 'OK' })
}
