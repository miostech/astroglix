import { NextRequest, NextResponse } from 'next/server'
import { z } from 'zod'
import { getSiteVisitModel } from '@/models/SiteVisit'

const bodySchema = z.object({
  path: z.string().trim().min(1).max(512)
})

function isTrackablePath(path: string): boolean {
  if (!path.startsWith('/')) return false
  if (path.startsWith('/astro')) return false
  if (path.startsWith('/api')) return false
  if (path.startsWith('/_next')) return false
  if (path.startsWith('/favicon')) return false
  if (path.includes('..')) return false
  return true
}

export async function POST(request: NextRequest) {
  try {
    let json: unknown
    try {
      json = await request.json()
    } catch {
      return NextResponse.json({ ok: false }, { status: 400 })
    }
    const parsed = bodySchema.safeParse(json)
    if (!parsed.success) {
      return NextResponse.json({ ok: false }, { status: 400 })
    }
    const path = parsed.data.path.split('?')[0] ?? parsed.data.path
    if (!isTrackablePath(path)) {
      return NextResponse.json({ ok: true, skipped: true })
    }

    const SiteVisit = await getSiteVisitModel()
    await SiteVisit.create({ path })
    return NextResponse.json({ ok: true })
  } catch (e) {
    console.error('[site-visit]', e)
    return NextResponse.json({ ok: false }, { status: 503 })
  }
}
