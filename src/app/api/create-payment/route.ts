import { NextRequest, NextResponse } from 'next/server'
import { createKiwifyPaymentUrl, KIWIFY_CONFIG } from '@/lib/stripe'
import { getOrderModel } from '@/models/Order'

export async function POST(request: NextRequest) {
  try {
    const { planType, amount, currency, customerData, personalData } = await request.json()

    console.log('🔥 Criando pagamento Kiwify:', { planType, amount, currency })

    if (!customerData?.name || !customerData?.email) {
      return NextResponse.json({
        success: false,
        error: 'Nome e email são obrigatórios para o pagamento.'
      }, { status: 400 })
    }

    if (amount !== KIWIFY_CONFIG.price) {
      return NextResponse.json({
        success: false,
        error: 'Valor do produto não corresponde ao esperado.'
      }, { status: 400 })
    }

    const paymentId = `kiwify_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`

    const email = (customerData.email ?? '').trim().toLowerCase()
    const successUrl = `${request.nextUrl.origin}/payment/redirect?payment_id=${paymentId}&email=${encodeURIComponent(email)}`
    const cancelUrl = `${request.nextUrl.origin}/success?status=canceled&canceled=true`

    if (personalData) {
      try {
        const Order = await getOrderModel()
        await Order.create({
          paymentId,
          fullName: personalData.fullName ?? customerData.name,
          email: (personalData.email ?? customerData.email).trim().toLowerCase(),
          birthDate: personalData.birthDate ?? '',
          birthTime: personalData.birthTime ?? '',
          birthPlace: personalData.birthPlace ?? '',
          currentCity: personalData.currentCity ?? '',
          planType: planType ?? 'one_time',
          amount,
          currency: currency ?? 'BRL',
          paymentStatus: 'pending'
        })
        console.log('✅ Pedido salvo no MongoDB:', paymentId)
      } catch (mongoError) {
        console.error('⚠️ Erro ao salvar pedido no MongoDB:', mongoError)
      }
    }

    const paymentUrl = createKiwifyPaymentUrl(
      {
        name: customerData.name,
        email: customerData.email,
        cpf: customerData.cpf
      },
      undefined,
      successUrl,
      cancelUrl
    )

    console.log('✅ URL Kiwify criada:', paymentUrl)

    return NextResponse.json({
      success: true,
      paymentUrl,
      paymentId,
      paymentMethod: 'kiwify',
      data: {
        url: paymentUrl,
        paymentId,
        customerData: { name: customerData.name, email: customerData.email },
        product: {
          name: KIWIFY_CONFIG.productName,
          description: KIWIFY_CONFIG.productDescription,
          price: KIWIFY_CONFIG.price,
          currency: KIWIFY_CONFIG.currency
        }
      }
    })
  } catch (error) {
    console.error('💥 Erro ao criar pagamento Kiwify:', error)
    const errorMessage = error instanceof Error ? error.message : 'Erro interno do servidor'
    return NextResponse.json({ success: false, error: errorMessage }, { status: 500 })
  }
}
