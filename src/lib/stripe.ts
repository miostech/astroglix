// Configuração da Kiwify (pagamentos)
export const KIWIFY_CONFIG = {
  checkoutUrl: 'https://pay.kiwify.com.br/UFB5v6k', // Substitua pelo link do seu produto na Kiwify
  currency: 'BRL',
  country: 'BR',
  productName: 'Astroglix — Mapa do destino',
  productDescription: 'Numerologia, Astrologia, Zodíaco Chinês e Astrocartografia',
  price: 35.9
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
