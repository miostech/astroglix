/** Número padrão do atendimento (somente dígitos, com DDI 55). */
const DEFAULT_WHATSAPP_DIGITS = '5511914191001'

/**
 * Link do WhatsApp com texto pré-preenchido.
 * Opcional: `NEXT_PUBLIC_WHATSAPP_PHONE` só com dígitos para sobrescrever o padrão.
 */
export function buildWhatsAppServiceUrl(message: string): string {
  const fromEnv = process.env.NEXT_PUBLIC_WHATSAPP_PHONE?.replace(/\D/g, '') ?? ''
  const digits = fromEnv || DEFAULT_WHATSAPP_DIGITS
  const text = encodeURIComponent(message)
  return `https://wa.me/${digits}?text=${text}`
}
