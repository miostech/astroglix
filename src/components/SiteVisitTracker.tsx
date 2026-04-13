'use client'

import { usePathname } from 'next/navigation'
import { useEffect, useRef } from 'react'

function shouldTrack(pathname: string | null): pathname is string {
  if (!pathname || !pathname.startsWith('/')) return false
  if (pathname.startsWith('/astro')) return false
  if (pathname.startsWith('/api')) return false
  if (pathname.startsWith('/_next')) return false
  return true
}

export function SiteVisitTracker() {
  const pathname = usePathname()
  const lastRef = useRef<{ path: string; at: number } | null>(null)

  useEffect(() => {
    if (!shouldTrack(pathname)) return
    const now = Date.now()
    if (lastRef.current?.path === pathname && now - lastRef.current.at < 1500) return
    lastRef.current = { path: pathname, at: now }

    void fetch('/api/site-visit', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ path: pathname })
    }).catch(() => {})
  }, [pathname])

  return null
}
