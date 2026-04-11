// Configuração da Kiwify por plano
export type PlanType = 'one_time' | 'love_compatibility'

export const KIWIFY_CONFIG = {
  checkoutUrl: 'https://pay.kiwify.com.br/nJhkPe0',
  currency: 'BRL',
  country: 'BR',
  productName: 'Astroglix — Mapa do destino',
  productDescription: 'Numerologia, Astrologia, Zodíaco Chinês e Astrocartografia',
  price: 35.9
}

/** Plano com compatibilidade amorosa: segundo produto Kiwify */
export const KIWIFY_LOVE_CONFIG = {
  checkoutUrl: 'https://pay.kiwify.com.br/74vtTMP',
  currency: 'BRL',
  country: 'BR',
  productName: 'Astroglix — Mapa do destino + Compatibilidade amorosa',
  productDescription: 'Numerologia, Astrologia, Zodíaco Chinês, Astrocartografia e Compatibilidade amorosa',
  price: 44.9
}

export const KIWIFY_PLANS: Record<PlanType, { checkoutUrl: string; price: number; productName: string; productDescription: string; currency: string }> = {
  one_time: KIWIFY_CONFIG,
  love_compatibility: KIWIFY_LOVE_CONFIG
}

/** Cria URL de checkout Kiwify com dados do cliente e URLs de retorno */
export const createKiwifyPaymentUrl = (
  customerData: { name: string; email: string; cpf?: string },
  baseUrl?: string,
  successUrl?: string,
  cancelUrl?: string
) => {
  const checkoutUrl = baseUrl || KIWIFY_CONFIG.checkoutUrl
  const params = new URLSearchParams({
    name: customerData.name,
    email: customerData.email,
    ...(customerData.cpf && { cpf: customerData.cpf }),
    ...(successUrl && { success_url: successUrl }),
    ...(cancelUrl && { cancel_url: cancelUrl })
  })
  return `${checkoutUrl}?${params.toString()}`
}
