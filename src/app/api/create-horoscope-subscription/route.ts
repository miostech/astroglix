import { NextRequest, NextResponse } from 'next/server'

// Configuração da Kiwify para assinatura mensal de horóscopo
const HOROSCOPE_SUBSCRIPTION_CONFIG = {
  checkoutUrl: 'https://pay.kiwify.com.br/SEU_LINK_HOROSCOPO',
  currency: 'BRL',
  country: 'BR',
  productName: 'Assinatura Horóscopo Diário',
  productDescription: 'Receba seu horóscopo personalizado todos os dias no seu e-mail',
  price: 9.90,
  billingCycle: 'monthly'
}

export async function POST(request: NextRequest) {
  try {
    console.log('🌟 Iniciando criação de assinatura de horóscopo...')
    
    const body = await request.json()
    const { customerData, personalData } = body

    // Validação dos dados
    if (!customerData?.name || !customerData?.email) {
      return NextResponse.json({
        success: false,
        error: 'Dados do cliente são obrigatórios'
      }, { status: 400 })
    }

    if (!personalData?.birthDate) {
      return NextResponse.json({
        success: false,
        error: 'Data de nascimento é obrigatória para gerar horóscopo personalizado'
      }, { status: 400 })
    }

    console.log('✅ Dados validados:', {
      name: customerData.name,
      email: customerData.email,
      birthDate: personalData.birthDate
    })

    // Criar URL de pagamento personalizada para assinatura
    const paymentUrl = createHoroscopeSubscriptionUrl(
      customerData,
      HOROSCOPE_SUBSCRIPTION_CONFIG.checkoutUrl,
      `${process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000'}/payment/horoscope-success`,
      `${process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000'}/payment/cancel`
    )

    // Simular criação de sessão de pagamento (em produção, integrar com Kiwify API)
    const paymentId = `horoscope_sub_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`
    
    console.log('🚀 Assinatura de horóscopo criada:', {
      paymentId,
      customerEmail: customerData.email,
      amount: HOROSCOPE_SUBSCRIPTION_CONFIG.price
    })

    return NextResponse.json({
      success: true,
      paymentId,
      paymentUrl,
      amount: HOROSCOPE_SUBSCRIPTION_CONFIG.price,
      currency: HOROSCOPE_SUBSCRIPTION_CONFIG.currency,
      billingCycle: HOROSCOPE_SUBSCRIPTION_CONFIG.billingCycle,
      customerData: {
        name: customerData.name,
        email: customerData.email
      }
    })

  } catch (error) {
    console.error('❌ Erro ao criar assinatura de horóscopo:', error)
    
    return NextResponse.json({
      success: false,
      error: error instanceof Error ? error.message : 'Erro interno do servidor'
    }, { status: 500 })
  }
}

// Função para criar URL de assinatura personalizada
function createHoroscopeSubscriptionUrl(
  customerData: { name: string; email: string; cpf?: string },
  baseUrl: string,
  successUrl?: string,
  cancelUrl?: string
) {
  const params = new URLSearchParams({
    customer_name: customerData.name,
    customer_email: customerData.email,
    product_name: HOROSCOPE_SUBSCRIPTION_CONFIG.productName,
    product_description: HOROSCOPE_SUBSCRIPTION_CONFIG.productDescription,
    amount: HOROSCOPE_SUBSCRIPTION_CONFIG.price.toString(),
    currency: HOROSCOPE_SUBSCRIPTION_CONFIG.currency,
    billing_cycle: HOROSCOPE_SUBSCRIPTION_CONFIG.billingCycle,
    subscription_type: 'horoscope_daily',
    ...(customerData.cpf && { customer_cpf: customerData.cpf }),
    ...(successUrl && { success_url: successUrl }),
    ...(cancelUrl && { cancel_url: cancelUrl })
  })
  
  return `${baseUrl}?${params.toString()}`
}
