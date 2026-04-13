'use client'

import { useCallback, useEffect, useState } from 'react'
import { BarChart3 } from 'lucide-react'

type Range = 'today' | '7d' | '30d' | 'all'

const LABELS: Record<Range, string> = {
  today: 'Hoje',
  '7d': '7 dias',
  '30d': '30 dias',
  all: 'Tudo'
}

export function AstroSiteVisitStats() {
  const [range, setRange] = useState<Range>('7d')
  const [count, setCount] = useState<number | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  const load = useCallback(async (r: Range) => {
    setLoading(true)
    setError(null)
    try {
      const res = await fetch(`/astro/stats?range=${r}`, { credentials: 'same-origin' })
      if (!res.ok) {
        setError(res.status === 401 ? 'Sessão expirada.' : 'Indisponível')
        setCount(null)
        return
      }
      const data = (await res.json()) as { count?: number }
      setCount(typeof data.count === 'number' ? data.count : null)
    } catch {
      setError('Indisponível')
      setCount(null)
    } finally {
      setLoading(false)
    }
  }, [])

  useEffect(() => {
    void load(range)
  }, [range, load])

  return (
    <div
      className="fixed bottom-3 right-3 z-[70] max-w-[min(100vw-1.5rem,18rem)] rounded-2xl border border-purple-200/80 bg-white/95 p-3 shadow-lg backdrop-blur-sm dark:border-purple-800/60 dark:bg-gray-900/95"
      role="region"
      aria-label="Visitas no site público"
    >
      <div className="mb-2 flex items-center gap-2 text-xs font-semibold text-purple-800 dark:text-purple-200">
        <BarChart3 className="h-4 w-4 shrink-0 opacity-80" aria-hidden />
        <span>Visitas (site público)</span>
      </div>
      <div className="mb-2 flex flex-wrap gap-1">
        {(Object.keys(LABELS) as Range[]).map((r) => (
          <button
            key={r}
            type="button"
            onClick={() => setRange(r)}
            className={`rounded-lg px-2 py-1 text-[11px] font-medium transition-colors ${
              range === r
                ? 'bg-purple-600 text-white dark:bg-purple-500'
                : 'bg-purple-50 text-purple-800 hover:bg-purple-100 dark:bg-purple-950/80 dark:text-purple-200 dark:hover:bg-purple-900/80'
            }`}
          >
            {LABELS[r]}
          </button>
        ))}
      </div>
      <p className="text-2xl font-bold tabular-nums text-gray-900 dark:text-gray-100">
        {loading ? '…' : error ? '—' : (count ?? 0).toLocaleString('pt-BR')}
      </p>
      {error && <p className="mt-1 text-[10px] text-red-600 dark:text-red-400">{error}</p>}
      <p className="mt-1 text-[10px] leading-snug text-gray-500 dark:text-gray-400">
        Cada abertura de página (fora de /astro). &quot;Hoje&quot; no fuso de São Paulo.
      </p>
    </div>
  )
}
