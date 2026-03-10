import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowLeft, FileText } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Termos de Uso — Astroglix',
  description: 'Termos e condições de uso do site e dos serviços Astroglix.',
}

export default function TermosPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-pink-50 to-indigo-50 dark:from-gray-900 dark:via-purple-900/30 dark:to-indigo-900/30">
      <div className="container mx-auto px-4 py-8 sm:py-12 max-w-3xl">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-purple-600 dark:text-purple-400 hover:text-purple-700 dark:hover:text-purple-300 font-medium mb-8 transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          Voltar ao início
        </Link>

        <header className="mb-10">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center">
              <FileText className="w-6 h-6 text-white" />
            </div>
            <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white">
              Termos de Uso
            </h1>
          </div>
          <p className="text-sm text-gray-500 dark:text-gray-400">
            Última atualização: {new Date().toLocaleDateString('pt-BR', { day: 'numeric', month: 'long', year: 'numeric' })}
          </p>
        </header>

        <article className="prose prose-gray dark:prose-invert max-w-none space-y-8 text-gray-700 dark:text-gray-300">
          <section>
            <h2 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">1. Aceitação dos termos</h2>
            <p>
              Ao acessar e utilizar o site Astroglix e os serviços oferecidos, você declara ter lido, compreendido e aceito
              integralmente estes Termos de Uso. Caso não concorde com qualquer disposição, solicitamos que não utilize
              nossos serviços.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">2. Descrição dos serviços</h2>
            <p>
              O Astroglix oferece relatórios personalizados de autoconhecimento com base em numerologia, astrologia ocidental,
              tradição oriental (Zodíaco Chinês) e astrocartografia. Os conteúdos são de caráter informativo e de entretenimento,
              destinados à reflexão e ao autoconhecimento. <strong>Não substituem orientação médica, psicológica, jurídica ou
              profissional de qualquer natureza.</strong>
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">3. Cadastro e dados pessoais</h2>
            <p>
              Para adquirir e receber os relatórios, é necessário informar dados como nome completo, e-mail, data e local de
              nascimento e, quando aplicável, dados do parceiro (no plano de compatibilidade). Você é responsável pela
              veracidade das informações fornecidas. O tratamento dos dados pessoais está detalhado em nossa{' '}
              <Link href="/privacidade" className="text-purple-600 dark:text-purple-400 hover:underline">Política de Privacidade</Link>.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">4. Pagamento e entrega</h2>
            <p>
              O pagamento é processado de forma segura por meio da plataforma Kiwify. Os valores e condições de cada plano
              estão descritos no site no momento da compra. O relatório é gerado e disponibilizado após a confirmação do
              pagamento, conforme o fluxo informado na página de sucesso e por e-mail.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">5. Reembolso e cancelamento</h2>
            <p>
              Por se tratar de produto digital e personalizado, <strong>o reembolso só é possível antes da geração e entrega
              do relatório</strong>. Após a entrega do conteúdo, não há direito a reembolso. Em caso de dúvida sobre
              elegibilidade ao reembolso, entre em contato pelo e-mail{' '}
              <a href="mailto:contato@astroglix.com.br" className="text-purple-600 dark:text-purple-400 hover:underline">
                contato@astroglix.com.br
              </a>.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">6. Uso do conteúdo</h2>
            <p>
              O relatório é de uso pessoal e não exclusivo do comprador. É vedada a reprodução, revenda, distribuição ou
              uso comercial do conteúdo sem autorização prévia do Astroglix. O usuário pode armazenar e consultar o
              relatório para fins pessoais.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">7. Limitação de responsabilidade</h2>
            <p>
              O Astroglix não se responsabiliza por decisões tomadas com base nos relatórios. Os conteúdos são informativos
              e de autoconhecimento e não constituem aconselhamento profissional. O usuário utiliza os serviços por sua
              conta e risco.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">8. Alterações</h2>
            <p>
              Estes Termos de Uso podem ser alterados a qualquer momento. A versão vigente será sempre a publicada nesta
              página, com a data da última atualização. O uso continuado do site após alterações constitui aceitação das
              novas condições.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">9. Contato</h2>
            <p>
              Para questões sobre estes termos ou sobre os serviços, entre em contato:{' '}
              <a href="mailto:contato@astroglix.com.br" className="text-purple-600 dark:text-purple-400 hover:underline">
                contato@astroglix.com.br
              </a>.
            </p>
          </section>
        </article>

        <footer className="mt-12 pt-8 border-t border-gray-200 dark:border-gray-700">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-purple-600 dark:text-purple-400 hover:text-purple-700 dark:hover:text-purple-300 font-medium transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Voltar ao início
          </Link>
        </footer>
      </div>
    </div>
  )
}
