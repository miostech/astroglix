'use client'

import { useState } from 'react'
import { Copy, ExternalLink } from 'lucide-react'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog'
import { copyTextToClipboard, tryOpenUrlInNewTab } from '@/lib/native-print'

type PdfWebViewHelpDialogProps = {
  open: boolean
  onOpenChange: (open: boolean) => void
}

export function PdfWebViewHelpDialog({
  open,
  onOpenChange,
}: PdfWebViewHelpDialogProps) {
  const [copyFeedback, setCopyFeedback] = useState<'idle' | 'ok' | 'fail'>('idle')

  const pageUrl =
    typeof window !== 'undefined' ? window.location.href : ''

  const handleCopy = async () => {
    const ok = await copyTextToClipboard(pageUrl)
    setCopyFeedback(ok ? 'ok' : 'fail')
    window.setTimeout(() => setCopyFeedback('idle'), 2500)
  }

  const handleTryExternal = () => {
    tryOpenUrlInNewTab(pageUrl)
  }

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>PDF no app do Instagram ou Facebook</DialogTitle>
          <DialogDescription className="text-left text-sm leading-relaxed">
            Nesses apps o site abre num navegador interno que, na prática, não
            permite usar «Imprimir» ou «Guardar como PDF» como no Safari ou no
            Chrome.
            <br />
            <br />
            <strong className="text-foreground">O que fazer:</strong> abra esta
            mesma página no Safari (iOS) ou no Chrome (Android), por exemplo pelo
            menu do app (⋯ ou ⋮) em «Abrir no Safari» ou «Abrir no navegador», e
            volte a tocar em «Baixar relatório em PDF».
          </DialogDescription>
        </DialogHeader>
        <DialogFooter className="flex-col gap-2 sm:flex-col">
          <button
            type="button"
            onClick={handleCopy}
            className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-purple-600 px-4 py-3 text-sm font-semibold text-white hover:bg-purple-700"
          >
            <Copy className="size-4 shrink-0" />
            {copyFeedback === 'ok'
              ? 'Link copiado'
              : copyFeedback === 'fail'
                ? 'Não foi possível copiar — selecione o link manualmente'
                : 'Copiar link desta página'}
          </button>
          <button
            type="button"
            onClick={handleTryExternal}
            className="inline-flex w-full items-center justify-center gap-2 rounded-xl border border-purple-200 bg-white px-4 py-3 text-sm font-semibold text-purple-800 hover:bg-purple-50 dark:border-purple-800 dark:bg-gray-900 dark:text-purple-100 dark:hover:bg-gray-800"
          >
            <ExternalLink className="size-4 shrink-0" />
            Tentar abrir no navegador
          </button>
          <p className="text-center text-xs text-muted-foreground">
            Se o botão acima não abrir o Safari/Chrome, use o menu do app
            (Abrir no navegador).
          </p>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}
