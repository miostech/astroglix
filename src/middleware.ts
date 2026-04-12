import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
import { ASTRO_SESSION_COOKIE, verifyAstroSession } from '@/lib/astro-gate-token'

export async function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl

  if (!pathname.startsWith('/astro')) {
    return NextResponse.next()
  }

  if (pathname === '/astro/login' || pathname === '/astro/logout') {
    return NextResponse.next()
  }

  const secret = process.env.ASTRO_SESSION_SECRET
  if (!secret) {
    return new NextResponse(
      'Área /astro: defina ASTRO_SESSION_SECRET e ASTRO_PAGE_PASSWORD no ambiente.',
      { status: 503, headers: { 'content-type': 'text/plain; charset=utf-8' } }
    )
  }

  const token = request.cookies.get(ASTRO_SESSION_COOKIE)?.value
  const ok = await verifyAstroSession(token, secret)
  if (!ok) {
    const url = request.nextUrl.clone()
    url.pathname = '/astro/login'
    url.searchParams.set('from', `${pathname}${request.nextUrl.search}`)
    return NextResponse.redirect(url)
  }

  return NextResponse.next()
}

export const config = {
  matcher: ['/astro', '/astro/:path*']
}
