import { NextResponse } from 'next/server'
import {
  ASTRO_SESSION_COOKIE,
  signAstroSession,
  timingSafeEqualPassword
} from '@/lib/astro-gate-token'

export const runtime = 'edge'

const TTL_MS = 7 * 24 * 60 * 60 * 1000

export async function POST(request: Request) {
  const sessionSecret = process.env.ASTRO_SESSION_SECRET
  const expectedPassword = process.env.ASTRO_PAGE_PASSWORD

  if (!sessionSecret || !expectedPassword) {
    return NextResponse.json(
      { success: false, error: 'Servidor sem ASTRO_SESSION_SECRET ou ASTRO_PAGE_PASSWORD.' },
      { status: 503 }
    )
  }

  let body: { password?: string }
  try {
    body = await request.json()
  } catch {
    return NextResponse.json({ success: false, error: 'Corpo inválido.' }, { status: 400 })
  }

  const password = typeof body.password === 'string' ? body.password : ''
  if (!timingSafeEqualPassword(password, expectedPassword)) {
    return NextResponse.json({ success: false, error: 'Senha incorreta.' }, { status: 401 })
  }

  const token = await signAstroSession(sessionSecret, TTL_MS)
  const res = NextResponse.json({ success: true })
  res.cookies.set(ASTRO_SESSION_COOKIE, token, {
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    sameSite: 'lax',
    path: '/astro',
    maxAge: Math.floor(TTL_MS / 1000)
  })
  return res
}
