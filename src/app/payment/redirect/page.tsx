'use client'

import { useEffect, useState, Suspense } from 'react'
import { useSearchParams } from 'next/navigation'
import { CheckCircle, Loader2 } from 'lucide-react'

function PaymentRedirectContent() {
  const [redirecting, setRedirecting] = useState(true)
  const [message, setMessage] = useState('Processando seu pagamento...')
  const searchParams = useSearchParams()

  useEffect(() => {
    const findAndRedirectToLatestPayment = () => {
      const urlPaymentId = searchParams.get('payment_id')
      const urlEmail = searchParams.get('email')

      const paymentId = urlPaymentId || localStorage.getItem('last_payment_id') || ''
      const email = urlEmail || localStorage.getItem('last_customer_email') || ''

      setMessage('Redirecionando para seu relatório...')

      const params = new URLSearchParams({ status: 'success', auto_generate: 'true' })
      if (paymentId) params.set('payment_id', paymentId)
      if (email) params.set('email', email)

      window.location.href = `/success?${params.toString()}`
    }

    const timer = setTimeout(findAndRedirectToLatestPayment, 500)
    return () => clearTimeout(timer)
  }, [searchParams])

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-pink-50 to-indigo-50 dark:from-gray-900 dark:via-purple-900 dark:to-indigo-900 flex items-center justify-center px-4">
      <div className="max-w-md w-full bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-2xl text-center">
        <div className="w-16 h-16 bg-green-100 dark:bg-green-900 rounded-full flex items-center justify-center mx-auto mb-6">
          {redirecting ? (
            <Loader2 className="w-8 h-8 text-green-600 dark:text-green-400 animate-spin" />
          ) : (
            <CheckCircle className="w-8 h-8 text-green-600 dark:text-green-400" />
          )}
        </div>
        
        <h1 className="text-2xl font-bold text-gray-800 dark:text-gray-200 mb-4">
          Pagamento Confirmado! 🎉
        </h1>
        
        <p className="text-gray-600 dark:text-gray-400 mb-6">
          {message}
        </p>
        
        <div className="bg-purple-50 dark:bg-purple-900 rounded-xl p-4 mb-6">
          <p className="text-sm text-purple-700 dark:text-purple-300">
            <strong>Status:</strong> Pagamento processado com sucesso via Kiwify
          </p>
          <p className="text-xs text-purple-600 dark:text-purple-400 mt-1">
            Aguarde enquanto preparamos seu relatório místico completo
          </p>
        </div>
        
        <div className="text-xs text-gray-500 dark:text-gray-400">
          <p>✨ Você será redirecionado automaticamente em alguns segundos ✨</p>
        </div>
      </div>
    </div>
  )
}

export default function PaymentRedirectPage() {
  return (
    <Suspense fallback={
      <div className="min-h-screen bg-gradient-to-br from-purple-50 via-pink-50 to-indigo-50 dark:from-gray-900 dark:via-purple-900 dark:to-indigo-900 flex items-center justify-center px-4">
        <div className="max-w-md w-full bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-2xl text-center">
          <div className="w-16 h-16 bg-green-100 dark:bg-green-900 rounded-full flex items-center justify-center mx-auto mb-6">
            <Loader2 className="w-8 h-8 text-green-600 dark:text-green-400 animate-spin" />
          </div>
          <h1 className="text-2xl font-bold text-gray-800 dark:text-gray-200 mb-4">
            Processando...
          </h1>
        </div>
      </div>
    }>
      <PaymentRedirectContent />
    </Suspense>
  )
}
