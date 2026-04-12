/** Nome do cookie httpOnly que libera /astro (exceto /astro/login). */
export const ASTRO_SESSION_COOKIE = 'astro_session'

const encoder = new TextEncoder()

function hexFromBuffer(buf: ArrayBuffer): string {
  return Array.from(new Uint8Array(buf), (b) => b.toString(16).padStart(2, '0')).join('')
}

function timingSafeEqualUtf8(a: string, b: string): boolean {
  if (a.length !== b.length) return false
  let r = 0
  for (let i = 0; i < a.length; i++) {
    r |= a.charCodeAt(i) ^ b.charCodeAt(i)
  }
  return r === 0
}

async function importHmacKey(secret: string): Promise<CryptoKey> {
  return crypto.subtle.importKey('raw', encoder.encode(secret), { name: 'HMAC', hash: 'SHA-256' }, false, ['sign'])
}

/** Gera token `expMs.nonceHex.sigHex` assinado com o segredo. */
export async function signAstroSession(secret: string, ttlMs: number): Promise<string> {
  const expMs = Date.now() + ttlMs
  const nonce = crypto.getRandomValues(new Uint8Array(16))
  const nonceHex = hexFromBuffer(nonce.buffer)
  const payload = `${expMs}.${nonceHex}`
  const key = await importHmacKey(secret)
  const sig = await crypto.subtle.sign('HMAC', key, encoder.encode(payload))
  return `${payload}.${hexFromBuffer(sig)}`
}

/** Valida assinatura e expiração (Edge-safe). */
export async function verifyAstroSession(token: string | undefined, secret: string | undefined): Promise<boolean> {
  if (!token || !secret) return false
  const parts = token.split('.')
  if (parts.length !== 3) return false
  const [expStr, nonceHex, sigHex] = parts
  const expMs = Number(expStr)
  if (!Number.isFinite(expMs) || nonceHex.length !== 32) return false
  if (Date.now() > expMs) return false
  const payload = `${expStr}.${nonceHex}`
  const key = await importHmacKey(secret)
  const sig = await crypto.subtle.sign('HMAC', key, encoder.encode(payload))
  const expectedHex = hexFromBuffer(sig)
  return timingSafeEqualUtf8(expectedHex, sigHex)
}

/** Compara senha com resistente a timing (comprimentos iguais). */
export function timingSafeEqualPassword(input: string, expected: string | undefined): boolean {
  if (expected == null || expected.length === 0) return false
  if (input.length !== expected.length) return false
  return timingSafeEqualUtf8(input, expected)
}
