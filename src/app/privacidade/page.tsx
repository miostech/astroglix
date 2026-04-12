import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowLeft, Shield } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Política de Privacidade — Astroglix',
  description: 'Como o Astroglix coleta, usa e protege seus dados pessoais.',
}

export default function PrivacidadePage() {
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
              <Shield className="w-6 h-6 text-white" />
            </div>
            <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white">
              Política de Privacidade
            </h1>
          </div>
          <p className="text-sm text-gray-500 dark:text-gray-400">
            Última atualização: {new Date().toLocaleDateString('pt-BR', { day: 'numeric', month: 'long', year: 'numeric' })}
          </p>
        </header>

        <article className="prose prose-gray dark:prose-invert max-w-none space-y-8 text-gray-700 dark:text-gray-300">
          <section>
            <h2 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">1. Introdução</h2>
            <p>
              O Astroglix está comprometido com a proteção da sua privacidade. Esta Política de Privacidade descreve
              quais dados pessoais coletamos, como os utilizamos, com quem podemos compartilhá-los e quais são os seus
              direitos, em conformidade com a Lei Geral de Proteção de Dados (LGPD – Lei nº 13.709/2018).
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">2. Dados que coletamos</h2>
            <p className="mb-3">Podemos coletar os seguintes dados:</p>
            <ul className="list-disc pl-6 space-y-1">
              <li><strong>Dados de identificação:</strong> nome completo, e-mail.</li>
              <li>
                <strong>Lista de espera da Mentoria:</strong> quando você usa o formulário «Entrar na lista de espera» na
                página inicial, coletamos nome completo, telefone e e-mail apenas para registrar seu interesse e
                retornar o contato sobre vagas da mentoria. Esses registros são armazenados em nosso banco de dados
                (MongoDB), em coleção própria de leads, separada dos pedidos de relatório.
              </li>
              <li><strong>Dados para o relatório:</strong> data de nascimento, horário e local de nascimento, cidade atual e, no plano de compatibilidade amorosa, nome e data de nascimento do parceiro.</li>
              <li><strong>Dados de transação:</strong> informações de pagamento são processadas pela plataforma Kiwify; podemos receber identificadores de transação e status do pagamento para entrega do produto.</li>
              <li><strong>Dados técnicos:</strong> endereço IP, tipo de navegador, páginas visitadas e data/hora de acesso, quando necessário para o funcionamento e segurança do site.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">3. Finalidade do tratamento</h2>
            <p>
              Utilizamos seus dados para: (a) gerar e entregar o relatório personalizado; (b) processar o pagamento e
              confirmar a compra; (c) enviar comunicações relacionadas ao pedido e, quando autorizado, ofertas e
              novidades; (d) melhorar nossos serviços e a experiência no site; (e) cumprir obrigações legais e
              regulatórias; (f) em relação à lista de espera da Mentoria, registrar seu interesse e entrar em contato por
              telefone, WhatsApp ou e-mail quando houver vaga ou informações relevantes, conforme os dados que você
              informou no formulário.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">4. Base legal (LGPD)</h2>
            <p>
              O tratamento dos dados está fundamentado na execução do contrato (entrega do relatório), no legítimo
              interesse (melhoria dos serviços e segurança), no consentimento quando você envia voluntariamente o
              formulário da lista de espera da Mentoria (ato consciente de fornecer dados para ser contatado) e, quando
              aplicável, no seu consentimento para marketing.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">5. Compartilhamento de dados</h2>
            <p>
              Seus dados podem ser compartilhados com: (a) processadores de pagamento (ex.: Kiwify), para concluir a
              transação; (b) provedores de infraestrutura (hospedagem, e-mail), sob contrato que exige proteção dos dados;
              (c) autoridades, quando exigido por lei. Não vendemos seus dados pessoais a terceiros.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">6. Retenção e segurança</h2>
            <p>
              Mantemos os dados pelo tempo necessário para cumprir as finalidades descritas e obrigações legais. Adotamos
              medidas técnicas e organizacionais para proteger seus dados contra acesso não autorizado, perda ou alteração
              indevida.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">7. Seus direitos (LGPD)</h2>
            <p className="mb-3">Você tem direito a:</p>
            <ul className="list-disc pl-6 space-y-1">
              <li>Confirmar a existência de tratamento de dados.</li>
              <li>Acessar seus dados.</li>
              <li>Corrigir dados incompletos ou desatualizados.</li>
              <li>Solicitar a anonimização, bloqueio ou eliminação de dados desnecessários ou tratados em desconformidade.</li>
              <li>Revogar o consentimento, quando o tratamento tiver essa base.</li>
            </ul>
            <p className="mt-3">
              Para exercer esses direitos, entre em contato pelo e-mail{' '}
              <a href="mailto:contato@astroglix.com.br" className="text-purple-600 dark:text-purple-400 hover:underline">
                contato@astroglix.com.br
              </a>.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">8. Cookies e tecnologias similares</h2>
            <p>
              O site pode utilizar cookies e tecnologias similares para funcionamento técnico, preferências e análise de
              uso. Você pode configurar seu navegador para recusar ou limitar cookies; parte das funcionalidades pode
              ficar limitada.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">9. Alterações</h2>
            <p>
              Esta política pode ser atualizada. Alterações relevantes serão comunicadas nesta página, com nova data de
              “Última atualização”. Recomendamos a leitura periódica deste documento.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">10. Contato</h2>
            <p>
              Dúvidas ou solicitações sobre privacidade e dados pessoais:{' '}
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
