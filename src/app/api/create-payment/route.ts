import { NextRequest, NextResponse } from 'next/server'
import { createKiwifyPaymentUrl, KIWIFY_PLANS, type PlanType } from '@/lib/stripe'
import { getOrderModel } from '@/models/Order'

export async function POST(request: NextRequest) {
  try {
    const { planType, amount, currency, customerData, personalData } = await request.json()

    const plan: PlanType = planType === 'love_compatibility' ? 'love_compatibility' : 'one_time'
    const planConfig = KIWIFY_PLANS[plan]

    console.log('🔥 Criando pagamento Kiwify:', { planType: plan, amount, currency })

    if (!customerData?.name || !customerData?.email) {
      return NextResponse.json({
        success: false,
        error: 'Nome e email são obrigatórios para o pagamento.'
      }, { status: 400 })
    }

    if (amount !== planConfig.price) {
      return NextResponse.json({
        success: false,
        error: 'Valor do produto não corresponde ao esperado.'
      }, { status: 400 })
    }

    if (plan === 'love_compatibility') {
      const partnerName = personalData?.partnerFullName != null ? String(personalData.partnerFullName).trim() : ''
      const partnerDate = personalData?.partnerBirthDate != null ? String(personalData.partnerBirthDate).trim() : ''
      if (!partnerName || !partnerDate) {
        return NextResponse.json({
          success: false,
          error: 'Para o plano com compatibilidade amorosa, preencha o nome e a data de nascimento do(a) parceiro(a).'
        }, { status: 400 })
      }
    }

    const paymentId = `kiwify_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`

    const email = (customerData.email ?? '').trim().toLowerCase()
    const successUrl = `${request.nextUrl.origin}/payment/redirect?payment_id=${paymentId}&email=${encodeURIComponent(email)}`
    const cancelUrl = `${request.nextUrl.origin}/success?status=canceled&canceled=true`

    const partnerFullName = plan === 'love_compatibility' && personalData?.partnerFullName != null ? String(personalData.partnerFullName).trim() : null
    const partnerBirthDate = plan === 'love_compatibility' && personalData?.partnerBirthDate != null ? String(personalData.partnerBirthDate).trim() : null

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
          planType: plan,
          amount,
          currency: currency ?? 'BRL',
          paymentStatus: 'pending',
          ...(partnerFullName && partnerBirthDate && { partnerFullName, partnerBirthDate })
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
      planConfig.checkoutUrl,
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
          name: planConfig.productName,
          description: planConfig.productDescription,
          price: planConfig.price,
          currency: planConfig.currency
        }
      }
    })
  } catch (error) {
    console.error('💥 Erro ao criar pagamento Kiwify:', error)
    const errorMessage = error instanceof Error ? error.message : 'Erro interno do servidor'
    return NextResponse.json({ success: false, error: errorMessage }, { status: 500 })
  }
}
