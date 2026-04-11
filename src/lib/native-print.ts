/**
 * Impressão no documento principal (window.print) no mesmo turno do clique.
 * Necessário no iOS/WebKit: print() após setTimeout ou após Promise perde o "user gesture"
 * e o diálogo não abre. O react-to-print agenda print no iframe após 500ms em mobile.
 */

export type NativePrintMode = 'full' | 'basic'

const MOBILE_UA =
  /Android|webOS|iPhone|iPad|iPod|BlackBerry|Windows Phone/i

/**
 * Navegadores embutidos em apps (Instagram, Facebook, etc.) costumam não expor
 * impressão/PDF ou ignoram window.print. Não há API fiável; usamos heurística de UA.
 */
const IN_APP_OR_EMBEDDED_UA =
  /Instagram|FBAN|FBAV|FB_IAB|FBIOS|Line\/|LinkedInApp|Snapchat|TikTok|Pinterest|musical_ly|BytedanceWebView|MicroMessenger|Twitter for iPhone|Twitter for Android|Threads/i

export function isLikelyRestrictedInAppBrowser(): boolean {
  if (typeof navigator === 'undefined') return false
  const ua =
    navigator.userAgent ??
    (navigator as Navigator & { vendor?: string }).vendor ??
    ''
  return IN_APP_OR_EMBEDDED_UA.test(ua)
}

export async function copyTextToClipboard(text: string): Promise<boolean> {
  try {
    if (navigator.clipboard?.writeText) {
      await navigator.clipboard.writeText(text)
      return true
    }
  } catch {
    /* WebView pode bloquear clipboard sem permissão */
  }
  try {
    const ta = document.createElement('textarea')
    ta.value = text
    ta.setAttribute('readonly', '')
    ta.style.position = 'fixed'
    ta.style.left = '-9999px'
    document.body.appendChild(ta)
    ta.select()
    const ok = document.execCommand('copy')
    document.body.removeChild(ta)
    return ok
  } catch {
    return false
  }
}

export function tryOpenUrlInNewTab(url: string): void {
  window.open(url, '_blank', 'noopener,noreferrer')
}

export function shouldUseNativeDocumentPrint(): boolean {
  if (typeof navigator === 'undefined') return false
  const ua =
    navigator.userAgent ??
    (navigator as Navigator & { vendor?: string }).vendor ??
    ''
  return MOBILE_UA.test(ua)
}

/**
 * Abre o fluxo Salvar PDF / Imprimir do sistema. Chamar diretamente no handler onClick.
 */
export function requestNativeDocumentPrint(options: {
  documentTitle?: string
  printMode?: NativePrintMode
  onDialogClose?: () => void
}): void {
  const { documentTitle, printMode = 'full', onDialogClose } = options
  const root = document.documentElement
  const prevMode = root.getAttribute('data-print-mode')
  const prevTitle = document.title

  root.setAttribute('data-print-mode', printMode)
  if (documentTitle) document.title = documentTitle

  let finished = false
  const cleanup = () => {
    if (finished) return
    finished = true
    if (prevMode === null) root.removeAttribute('data-print-mode')
    else root.setAttribute('data-print-mode', prevMode)
    document.title = prevTitle
    onDialogClose?.()
  }

  const onAfterPrint = () => {
    window.removeEventListener('afterprint', onAfterPrint)
    cleanup()
  }

  window.addEventListener('afterprint', onAfterPrint)
  window.print()
  // Safari iOS por vezes não dispara afterprint
  window.setTimeout(() => {
    window.removeEventListener('afterprint', onAfterPrint)
    cleanup()
  }, 2500)
}
