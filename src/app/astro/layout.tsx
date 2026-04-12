import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Relatório — Astroglix (interno)',
  description:
    'Geração de relatório sem checkout. Protegido por senha (ASTRO_PAGE_PASSWORD + ASTRO_SESSION_SECRET). Não indexado.',
  robots: { index: false, follow: false }
}

export default function AstroLayout({ children }: { children: React.ReactNode }) {
  return children
}
