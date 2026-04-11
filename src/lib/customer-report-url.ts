import type { NextRequest } from 'next/server'

/**
 * URL da página de sucesso com parâmetros para reabrir o relatório / mapa.
 * Ex.: /success?status=success&auto_generate=true&payment_id=...&email=...
 */
export function buildCustomerReportSuccessUrl(
  siteOrigin: string,
  paymentId: string,
  email: string
): string {
  const base = siteOrigin.replace(/\/$/, '')
  const u = new URL(`${base}/success`)
  u.searchParams.set('status', 'success')
  u.searchParams.set('auto_generate', 'true')
  u.searchParams.set('payment_id', paymentId)
  u.searchParams.set('email', email.trim().toLowerCase())
  return u.toString()
}

/**
 * Origem pública do site (ex.: https://www.astroglix.com).
 * Preferir NEXT_PUBLIC_SITE_URL em produção se o pedido à API não refletir o domínio canónico.
 */
export function resolveSiteOrigin(request: NextRequest): string {
  const fromEnv = process.env.NEXT_PUBLIC_SITE_URL?.trim()
  if (fromEnv) return fromEnv.replace(/\/$/, '')
  return request.nextUrl.origin
}
