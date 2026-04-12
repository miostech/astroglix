'use client'

import { useState, Suspense } from 'react'
import { useSearchParams } from 'next/navigation'
import Link from 'next/link'
import Image from 'next/image'
import { Lock, AlertCircle } from 'lucide-react'

function safeRedirectTarget(raw: string | null): string {
  if (!raw || !raw.startsWith('/astro')) return '/astro'
  if (raw.startsWith('/astro/login') || raw.startsWith('/astro/logout')) return '/astro'
  if (raw.includes('//') || raw.includes('\\')) return '/astro'
  return raw
}

function LoginForm() {
  const searchParams = useSearchParams()
  const from = safeRedirectTarget(searchParams.get('from'))

  const [password, setPassword] = useState('')
  const [error, setError] = useState<string | null>(null)
  const [loading, setLoading] = useState(false)

  const submit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError(null)
    setLoading(true)
    try {
      const res = await fetch('/api/astro-auth', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ password })
      })
      const data = (await res.json()) as { success?: boolean; error?: string }
      if (!res.ok || !data.success) {
        setError(data.error ?? 'Não foi possível entrar.')
        return
      }
      window.location.href = from
    } catch {
      setError('Erro de rede. Tente de novo.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="min-h-screen min-h-[100dvh] flex items-center justify-center p-4 bg-gradient-to-br from-purple-50 via-pink-50 to-indigo-50 dark:from-gray-900 dark:via-purple-900 dark:to-indigo-900">
      <div className="w-full max-w-md rounded-3xl bg-white dark:bg-gray-800 shadow-xl border border-gray-200 dark:border-gray-700 p-6 sm:p-8">
        <div className="flex justify-center mb-6">
          <Image src="/logo_astroglix2.png" alt="Astroglix" width={200} height={80} className="h-16 w-auto object-contain" />
        </div>
        <div className="flex items-center gap-2 mb-2 text-gray-900 dark:text-white">
          <Lock className="w-5 h-5 text-purple-600 dark:text-purple-400" />
          <h1 className="text-lg font-bold">Acesso à área interna</h1>
        </div>
        <p className="text-sm text-gray-600 dark:text-gray-400 mb-6">
          Digite a senha admin.
        </p>
        <form onSubmit={(e) => void submit(e)} className="space-y-4">
          <div>
            <label htmlFor="astro-pw" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1.5">
              Senha
            </label>
            <input
              id="astro-pw"
              type="password"
              autoComplete="current-password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-3 rounded-2xl border border-gray-200 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100"
              placeholder="••••••••"
              required
            />
          </div>
          {error && (
            <div className="flex gap-2 text-sm text-red-600 dark:text-red-400" role="alert">
              <AlertCircle className="w-5 h-5 shrink-0" />
              {error}
            </div>
          )}
          <button
            type="submit"
            disabled={loading || !password}
            className="w-full py-3 rounded-full font-semibold text-white bg-gradient-to-r from-purple-600 to-pink-600 hover:opacity-90 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {loading ? 'Entrando…' : 'Entrar'}
          </button>
        </form>
        <p className="mt-6 text-center text-sm">
          <Link href="/" className="text-purple-600 dark:text-purple-400 hover:underline">
            Voltar ao site público
          </Link>
        </p>
      </div>
    </div>
  )
}

export default function AstroLoginPage() {
  return (
    <Suspense fallback={<div className="min-h-[50vh] flex items-center justify-center text-gray-500">Carregando…</div>}>
      <LoginForm />
    </Suspense>
  )
}
