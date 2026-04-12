import { NextResponse } from 'next/server'
import { ASTRO_SESSION_COOKIE } from '@/lib/astro-gate-token'

export const runtime = 'edge'

export async function GET(request: Request) {
  const url = new URL('/astro/login', request.url)
  const res = NextResponse.redirect(url)
  res.cookies.set(ASTRO_SESSION_COOKIE, '', {
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    sameSite: 'lax',
    path: '/astro',
    maxAge: 0
  })
  return res
}
