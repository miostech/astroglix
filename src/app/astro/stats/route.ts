import { NextRequest, NextResponse } from 'next/server'
import { ASTRO_SESSION_COOKIE, verifyAstroSession } from '@/lib/astro-gate-token'
import { startOfTodayBrazil } from '@/lib/brazil-today'
import { getSiteVisitModel } from '@/models/SiteVisit'

export const dynamic = 'force-dynamic'

const RANGES = ['today', '7d', '30d', 'all'] as const
type Range = (typeof RANGES)[number]

function parseRange(s: string | null): Range {
  if (s && RANGES.includes(s as Range)) return s as Range
  return '7d'
}

function lowerBound(range: Range): Date | null {
  const now = Date.now()
  switch (range) {
    case 'today':
      return startOfTodayBrazil()
    case '7d':
      return new Date(now - 7 * 24 * 60 * 60 * 1000)
    case '30d':
      return new Date(now - 30 * 24 * 60 * 60 * 1000)
    case 'all':
      return null
    default:
      return new Date(now - 7 * 24 * 60 * 60 * 1000)
  }
}

export async function GET(request: NextRequest) {
  const secret = process.env.ASTRO_SESSION_SECRET
  const token = request.cookies.get(ASTRO_SESSION_COOKIE)?.value
  const ok = await verifyAstroSession(token, secret)
  if (!ok) {
    return NextResponse.json({ error: 'Não autorizado.' }, { status: 401 })
  }

  const range = parseRange(request.nextUrl.searchParams.get('range'))
  const from = lowerBound(range)

  try {
    const SiteVisit = await getSiteVisitModel()
    const filter = from ? { createdAt: { $gte: from } } : {}
    const count = await SiteVisit.countDocuments(filter)
    return NextResponse.json({ count, range })
  } catch (e) {
    console.error('[astro/stats]', e)
    return NextResponse.json({ error: 'Falha ao consultar visitas.' }, { status: 503 })
  }
}
