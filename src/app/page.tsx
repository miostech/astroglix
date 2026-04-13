'use client'

import { useState, useEffect, useMemo } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Country, State, City } from 'country-state-city'
import { Calendar, Star, Calculator, Sparkles, Heart, Zap, Eye, Crown, CreditCard, Lock, CheckCircle, Moon, Sun, MapPin, Compass, BookOpen, Target, TrendingUp, Users, Brain, Shield, Award, Gem, Clock, Lightbulb, AlertCircle, ChevronDown, ChevronUp, MessageCircle, X, ListOrdered } from 'lucide-react'
import { KIWIFY_PLANS, type PlanType } from '@/lib/stripe'
import { OFFERED_SERVICES, isWaitlistService } from '@/lib/offered-services'
import { buildWhatsAppServiceUrl } from '@/lib/whatsapp'
import { calculateLoveCompatibility, type LoveCompatibilityResult } from '@/lib/love-compatibility'
import DetailedReport from '@/components/DetailedReport'
import iconNumerologia from '@/app/icon_numerologia.png'
import iconAstrologia from '@/app/icon_astrologia.png'
import iconChinese from '@/app/icon_chinese.png'
import iconCartografia from '@/app/icon_cartografia.png'

import type { PersonalData, NumerologyResult, AstrologyResult, ChineseZodiac, AstrocartographyResult } from '@/lib/mystic-report-types'
import {
  calculateCompleteNumerology,
  calculateAstrology,
  getChineseZodiac,
  calculateAstrocartography
} from '@/lib/mystic-report-calculations'


const numerologyMeanings = {
  1: {
    title: 'O Líder',
    description: 'Independente, pioneiro, ambicioso',
    color: 'from-red-500 to-pink-500',
    advice: 'Desenvolva sua liderança natural e confie em sua capacidade de iniciar projetos. Evite ser muito dominador.',
    positives: ['Liderança natural', 'Independência', 'Iniciativa', 'Originalidade', 'Determinação'],
    negatives: ['Egoísmo', 'Impaciência', 'Arrogância', 'Teimosia', 'Dominação'],
    practices: ['Medite sobre humildade', 'Pratique trabalho em equipe', 'Desenvolva paciência', 'Cultive a empatia']
  },
  2: {
    title: 'O Cooperador',
    description: 'Diplomático, sensível, pacificador',
    color: 'from-blue-500 to-cyan-500',
    advice: 'Use sua habilidade natural para mediar conflitos e trabalhar em equipe. Evite ser muito dependente dos outros.',
    positives: ['Diplomacia', 'Cooperação', 'Sensibilidade', 'Paciência', 'Harmonia'],
    negatives: ['Dependência', 'Indecisão', 'Timidez', 'Pessimismo', 'Submissão'],
    practices: ['Fortaleça sua autoconfiança', 'Tome decisões independentes', 'Pratique assertividade', 'Valorize suas opiniões']
  },
  3: {
    title: 'O Comunicador',
    description: 'Criativo, expressivo, otimista',
    color: 'from-yellow-500 to-orange-500',
    advice: 'Expresse sua criatividade através da arte, escrita ou comunicação. Evite dispersar sua energia em muitos projetos.',
    positives: ['Criatividade', 'Comunicação', 'Otimismo', 'Inspiração', 'Sociabilidade'],
    negatives: ['Dispersão', 'Superficialidade', 'Exagero', 'Crítica', 'Instabilidade'],
    practices: ['Foque em um projeto por vez', 'Desenvolva disciplina', 'Pratique escuta ativa', 'Cultive profundidade']
  },
  4: {
    title: 'O Construtor',
    description: 'Prático, organizado, trabalhador',
    color: 'from-green-500 to-emerald-500',
    advice: 'Use sua disciplina para construir bases sólidas em sua vida. Evite ser muito rígido ou teimoso.',
    positives: ['Organização', 'Disciplina', 'Praticidade', 'Confiabilidade', 'Persistência'],
    negatives: ['Rigidez', 'Teimosia', 'Limitação', 'Pessimismo', 'Rotina excessiva'],
    practices: ['Cultive flexibilidade', 'Abra-se para mudanças', 'Pratique criatividade', 'Desenvolva espontaneidade']
  },
  5: {
    title: 'O Aventureiro',
    description: 'Livre, versátil, curioso',
    color: 'from-purple-500 to-violet-500',
    advice: 'Abrace mudanças e novas experiências. Evite compromissos que limitem sua liberdade excessivamente.',
    positives: ['Liberdade', 'Versatilidade', 'Curiosidade', 'Aventura', 'Progresso'],
    negatives: ['Instabilidade', 'Impaciência', 'Irresponsabilidade', 'Superficialidade', 'Inquietação'],
    practices: ['Desenvolva compromisso', 'Pratique responsabilidade', 'Cultive paciência', 'Aprofunde relacionamentos']
  },
  6: {
    title: 'O Cuidador',
    description: 'Responsável, amoroso, protetor',
    color: 'from-pink-500 to-rose-500',
    advice: 'Use seu dom natural para cuidar e nutrir outros. Evite se sacrificar demais pelos outros.',
    positives: ['Responsabilidade', 'Amor', 'Proteção', 'Harmonia', 'Cura'],
    negatives: ['Sacrifício excessivo', 'Interferência', 'Preocupação', 'Possessividade', 'Mártir'],
    practices: ['Pratique autocuidado', 'Estabeleça limites', 'Desenvolva independência', 'Cultive autoamor']
  },
  7: {
    title: 'O Místico',
    description: 'Analítico, espiritual, introspectivo',
    color: 'from-indigo-500 to-purple-500',
    advice: 'Desenvolva sua espiritualidade e busque conhecimento profundo. Evite se isolar demais do mundo.',
    positives: ['Espiritualidade', 'Análise', 'Intuição', 'Sabedoria', 'Profundidade'],
    negatives: ['Isolamento', 'Pessimismo', 'Crítica', 'Frieza', 'Melancolia'],
    practices: ['Conecte-se com outros', 'Pratique compaixão', 'Desenvolva sociabilidade', 'Cultive alegria']
  },
  8: {
    title: 'O Realizador',
    description: 'Ambicioso, material, poderoso',
    color: 'from-gray-600 to-gray-800',
    advice: 'Use sua ambição para alcançar sucesso material e reconhecimento. Evite ser muito materialista.',
    positives: ['Ambição', 'Poder', 'Organização', 'Eficiência', 'Sucesso'],
    negatives: ['Materialismo', 'Dominação', 'Impaciência', 'Estresse', 'Workaholism'],
    practices: ['Cultive espiritualidade', 'Pratique generosidade', 'Desenvolva paciência', 'Valorize relacionamentos']
  },
  9: {
    title: 'O Humanitário',
    description: 'Generoso, compassivo, universal',
    color: 'from-teal-500 to-cyan-500',
    advice: 'Dedique-se a causas humanitárias e use sua compaixão para ajudar outros. Evite ser muito idealista.',
    positives: ['Compaixão', 'Generosidade', 'Sabedoria', 'Universalidade', 'Inspiração'],
    negatives: ['Idealismo excessivo', 'Dispersão', 'Emoções intensas', 'Sacrifício', 'Desilusão'],
    practices: ['Seja prático', 'Foque objetivos', 'Desenvolva realismo', 'Cultive equilíbrio']
  },
  11: {
    title: 'O Visionário',
    description: 'Intuitivo, inspirador, espiritual',
    color: 'from-purple-600 to-indigo-600',
    advice: 'Confie em sua intuição e inspire outros com sua visão. Evite ser muito sensível às críticas.',
    positives: ['Intuição', 'Inspiração', 'Visão', 'Espiritualidade', 'Idealismo'],
    negatives: ['Sensibilidade excessiva', 'Nervosismo', 'Impraticidade', 'Extremos', 'Instabilidade'],
    practices: ['Desenvolva praticidade', 'Fortaleça autoconfiança', 'Pratique grounding', 'Cultive estabilidade']
  },
  22: {
    title: 'O Mestre Construtor',
    description: 'Visionário prático, realizador de sonhos',
    color: 'from-emerald-600 to-teal-600',
    advice: 'Combine visão com praticidade para realizar grandes projetos. Evite se sobrecarregar com responsabilidades.',
    positives: ['Visão prática', 'Liderança', 'Construção', 'Inspiração', 'Realização'],
    negatives: ['Pressão excessiva', 'Perfeccionismo', 'Estresse', 'Impaciência', 'Sobrecarga'],
    practices: ['Pratique relaxamento', 'Delegue responsabilidades', 'Cultive paciência', 'Desenvolva equilíbrio']
  },
  33: {
    title: 'O Mestre Professor',
    description: 'Curador, professor, guia espiritual',
    color: 'from-rose-600 to-pink-600',
    advice: 'Use seus dons para ensinar e curar outros. Evite carregar os problemas do mundo nos ombros.',
    positives: ['Cura', 'Ensino', 'Compaixão', 'Sabedoria', 'Orientação'],
    negatives: ['Sacrifício excessivo', 'Sobrecarga emocional', 'Mártir', 'Preocupação', 'Estresse'],
    practices: ['Pratique autocuidado', 'Estabeleça limites', 'Desenvolva desapego', 'Cultive leveza']
  }
}

// Frases inspiradoras dinâmicas
const inspirationalQuotes = [
  "Conhece-te a ti mesmo e conhecerás o universo e os deuses - Oráculo de Delfos",
  "O que está em cima é como o que está embaixo, e o que está embaixo é como o que está em cima - Hermes Trismegisto",
  "A sabedoria começa na admiração - Sócrates",
  "O universo não é apenas mais estranho do que imaginamos, é mais estranho do que podemos imaginar - J.B.S. Haldane",
  "Tudo no universo tem sua razão de ser. Cada partícula tem um propósito - Albert Einstein",
  "A vida é uma jornada, não um destino - Ralph Waldo Emerson",
  "Cada pessoa é única, com suas próprias características e potencial - Anônimo",
  "As estrelas não lutam contra a escuridão, elas simplesmente brilham - Anônimo",
  "Cada pessoa é um universo único, com suas próprias leis e mistérios - Anônimo",
  "O crescimento acontece quando você para de tentar controlar tudo e começa a confiar no processo - Anônimo",
  "Você não está perdido, você está apenas descobrindo novos caminhos - Anônimo",
  "O destino não é uma questão de chance, é uma questão de escolha - William Jennings Bryan",
  "Sua intuição conhece o caminho. Siga-a - Rumi",
  "A jornada de mil milhas começa com um único passo - Lao Tzu",
  "Você é mais forte do que sabe, mais corajoso do que acredita e mais sábio do que imagina - A.A. Milne"
]

const FAQ_ITEMS: { pergunta: string; resposta: string }[] = [
  // { pergunta: 'Isso é adivinhação?', resposta: 'Não. O Astroglix não é adivinhação. Ele é um mapa personalizado baseado nos seus dados de nascimento, que analisa ciclos, tendências e potenciais da sua vida. O objetivo não é prever o futuro, mas oferecer direcionamento e autoconhecimento para ajudar você a tomar decisões mais conscientes.' },
  { pergunta: 'Mapa natal e mapa astral são diferentes?', resposta: 'Na prática, são sinônimos. Ambos se referem ao mapa do céu no seu nascimento. Aqui a diferença é a qualidade da interpretação e a estrutura do relatório.' },
  { pergunta: 'Os valores dos serviços aparecem no site?', resposta: 'Cada serviço tem um valor diferente. Use «Saiba mais» para abrir o WhatsApp com uma mensagem já identificando o serviço escolhido que informaremos valores e prazos no atendimento.' },
  { pergunta: 'Preciso saber a hora de nascimento?', resposta: 'Para o relatório online integrado: a hora melhora muito (Ascendente e casas dependem da hora). Se não souber, entregamos uma versão essencial. Para serviços sob medida, orientamos no contato.' },
  { pergunta: 'Em quanto tempo eu recebo?', resposta: 'O prazo varia conforme o serviço e a fila de atendimento. Normalmente de 1 a 10 dias, combinamos no WhatsApp.' },
  { pergunta: 'Como vou receber?', resposta: 'A forma de entrega depende do serviço escolhido e é alinhada no atendimento, mas pode ser em PDF ou áudio.' },
  { pergunta: 'Posso pedir reembolso?', resposta: 'Por ser produto digital e personalizado, o reembolso só é possível até 7 dias após a compra e antes da geração do relatório. Após a entrega, não há reembolso. Consulte os Termos de uso para detalhes.' },
  { pergunta: 'Meus dados estão seguros?', resposta: 'Sim. Coletamos apenas o necessário para gerar o relatório. Você pode solicitar exclusão a qualquer momento (LGPD).' }
  
]

function LpFaq() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)
  return (
    <section className="max-w-4xl mx-auto px-3 sm:px-4 py-8 sm:py-16 border-t border-gray-200 dark:border-gray-700">
      <h2 className="text-xl sm:text-[30px] leading-tight sm:leading-[36px] font-semibold text-gray-900 dark:text-white mb-6 sm:mb-8">
        Perguntas frequentes
      </h2>
      <div className="space-y-2 sm:space-y-3">
        {FAQ_ITEMS.map((item, i) => (
          <div key={i} className="border border-gray-200/80 dark:border-gray-700/80 rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow">
            <button
              type="button"
              onClick={() => setOpenIndex(openIndex === i ? null : i)}
              className="w-full flex items-center justify-between gap-3 min-h-[52px] sm:min-h-0 px-4 sm:px-5 py-4 text-left text-[15px] sm:text-[18px] leading-[22px] sm:leading-[28px] font-medium text-gray-900 dark:text-white bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-700/50 transition-colors rounded-2xl"
            >
              <span className="text-left pr-2">{item.pergunta}</span>
              {openIndex === i ? <ChevronUp className="w-5 h-5 flex-shrink-0 opacity-70" /> : <ChevronDown className="w-5 h-5 flex-shrink-0 opacity-70" />}
            </button>
            {openIndex === i && (
              <div className="px-4 sm:px-5 py-4 border-t border-gray-100 dark:border-gray-700 bg-gray-50/80 dark:bg-gray-800/80 text-[15px] sm:text-[18px] leading-[24px] sm:leading-[28px] text-gray-600 dark:text-gray-400 rounded-b-2xl">
                {item.resposta}
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  )
}

// Função para selecionar uma frase baseada nos dados pessoais
const getPersonalizedQuote = (personalData: PersonalData) => {
  // Usar o nome e data de nascimento para criar um hash determinístico
  const seed = personalData.fullName + personalData.birthDate
  let hash = 0
  for (let i = 0; i < seed.length; i++) {
    hash = ((hash << 5) - hash + seed.charCodeAt(i)) & 0xffffffff
  }
  const index = Math.abs(hash) % inspirationalQuotes.length
  return inspirationalQuotes[index]
}

/**
 * Formulário de dados + checkout Kiwify na home.
 * Por padrão fica oculto; para reativar, defina `NEXT_PUBLIC_SHOW_PAYMENT_FORM=true` no ambiente (build).
 */
const PAYMENT_FORM_ENABLED = process.env.NEXT_PUBLIC_SHOW_PAYMENT_FORM === 'true'

/** Enquanto o campo de e-mail do formulário estiver oculto, o checkout usa este valor na API (Kiwify exige e-mail). */
const CHECKOUT_EMAIL_PLACEHOLDER = 'checkout@pendente.astroglix.com'

export default function MysticReportApp() {
  const [personalData, setPersonalData] = useState<PersonalData>({
    fullName: '',
    email: '',
    birthDate: '',
    birthTime: '',
    birthPlace: '',
    currentCity: ''
  })
  const [currentStep, setCurrentStep] = useState(1)
  const [selectedPlan, setSelectedPlan] = useState<PlanType>('one_time')
  const [mysticReport, setMysticReport] = useState<{
    numerology: NumerologyResult
    astrology: AstrologyResult
    chineseZodiac: ChineseZodiac
    astrocartography: AstrocartographyResult
    loveCompatibility?: LoveCompatibilityResult
  } | null>(null)
  const [isProcessingPayment, setIsProcessingPayment] = useState(false)
  const [paymentError, setPaymentError] = useState<string | null>(null)
  const [isHoroscopeSubscribed, setIsHoroscopeSubscribed] = useState(false)
  const [birthCountryCode, setBirthCountryCode] = useState('')
  const [birthStateCode, setBirthStateCode] = useState('')
  const [birthCityName, setBirthCityName] = useState('')
  const [mentoriaWaitlistOpen, setMentoriaWaitlistOpen] = useState(false)
  const [mentoriaForm, setMentoriaForm] = useState({ fullName: '', phone: '', email: '' })
  const [mentoriaSubmitting, setMentoriaSubmitting] = useState(false)
  const [mentoriaFormError, setMentoriaFormError] = useState<string | null>(null)
  const [mentoriaFormSuccess, setMentoriaFormSuccess] = useState(false)

  const countries = useMemo(() => {
    const list = Country.getAllCountries()
    return list.sort((a, b) => {
      if (a.isoCode === 'BR') return -1
      if (b.isoCode === 'BR') return 1
      return a.name.localeCompare(b.name)
    })
  }, [])
  const states = useMemo(() => (birthCountryCode ? State.getStatesOfCountry(birthCountryCode).sort((a, b) => a.name.localeCompare(b.name)) : []), [birthCountryCode])
  const cities = useMemo(() => {
    if (!birthCountryCode) return []
    const list = birthStateCode
      ? City.getCitiesOfState(birthCountryCode, birthStateCode)
      : City.getCitiesOfCountry(birthCountryCode)
    return (list ?? []).sort((a, b) => (a?.name ?? '').localeCompare(b?.name ?? ''))
  }, [birthCountryCode, birthStateCode])

  const updateBirthPlaceFromSelection = (countryCode: string, stateCode: string, cityName: string) => {
    const parts: string[] = []
    if (cityName) parts.push(cityName)
    if (stateCode && countryCode) {
      const s = State.getStateByCodeAndCountry(stateCode, countryCode)
      if (s?.name) parts.push(s.name)
    }
    if (countryCode) {
      const c = Country.getCountryByCode(countryCode)
      if (c?.name) parts.push(c.name)
    }
    setPersonalData(prev => ({ ...prev, birthPlace: parts.join(', ') }))
  }

  // Formulário sempre inicia vazio (não preenche a partir do localStorage)

  // Ao mostrar o relatório (passo 2), rolar para o topo da página
  useEffect(() => {
    if (currentStep === 2) {
      window.scrollTo({ top: 0, behavior: 'auto' })
    }
  }, [currentStep])

  useEffect(() => {
    if (selectedPlan !== 'love_compatibility') {
      setPersonalData((prev) => ({ ...prev, partnerFullName: '', partnerBirthDate: '' }))
    }
  }, [selectedPlan])

  const handlePayment = async () => {
    setIsProcessingPayment(true)
    setPaymentError(null)

    try {
      // Validação básica
      if (!personalData.fullName.trim()) {
        throw new Error('Por favor, preencha seu nome completo antes de continuar.')
      }

      const checkoutEmail = personalData.email.trim() || CHECKOUT_EMAIL_PLACEHOLDER

      if (!personalData.birthDate) {
        throw new Error('Por favor, preencha sua data de nascimento antes de continuar.')
      }

      if (!personalData.birthPlace.trim()) {
        throw new Error('Por favor, selecione o local de nascimento (país, estado e cidade) antes de continuar.')
      }

      if (!personalData.currentCity.trim()) {
        throw new Error('Por favor, preencha a cidade de residência atual antes de continuar.')
      }

      if (selectedPlan === 'love_compatibility') {
        if (!personalData.partnerFullName?.trim()) {
          throw new Error('Para o plano com compatibilidade amorosa, preencha o nome completo do(a) parceiro(a).')
        }
        if (!personalData.partnerBirthDate?.trim()) {
          throw new Error('Para o plano com compatibilidade amorosa, preencha a data de nascimento do(a) parceiro(a).')
        }
      }

      const planConfig = KIWIFY_PLANS[selectedPlan]
      const controller = new AbortController()
      const timeoutId = setTimeout(() => controller.abort(), 30000)
      const response = await fetch('/api/create-payment', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          planType: selectedPlan,
          amount: planConfig.price,
          currency: 'BRL',
          customerData: {
            name: personalData.fullName.trim(),
            email: checkoutEmail
          },
          personalData: {
            fullName: personalData.fullName.trim(),
            email: checkoutEmail,
            birthDate: personalData.birthDate,
            birthTime: personalData.birthTime ?? '',
            birthPlace: personalData.birthPlace.trim(),
            currentCity: personalData.currentCity.trim(),
            ...(selectedPlan === 'love_compatibility' && personalData.partnerFullName != null && personalData.partnerBirthDate != null && {
              partnerFullName: personalData.partnerFullName.trim(),
              partnerBirthDate: personalData.partnerBirthDate.trim()
            })
          }
        }),
        signal: controller.signal
      })
      clearTimeout(timeoutId)

      const data = await response.json()
      if (!response.ok) {
        throw new Error(data.error || 'Erro ao iniciar pagamento. Tente novamente.')
      }
      if (!data.success || !data.paymentUrl) {
        throw new Error('Resposta inválida do servidor de pagamento.')
      }

      // Salvar no localStorage para a página de sucesso identificar o cliente ao retornar da Kiwify
      if (typeof window !== 'undefined') {
        window.localStorage.setItem('last_payment_id', data.paymentId ?? '')
        window.localStorage.setItem('last_customer_name', personalData.fullName.trim())
        window.localStorage.setItem('last_customer_email', checkoutEmail)
        if (selectedPlan === 'love_compatibility' && personalData.partnerFullName?.trim() && personalData.partnerBirthDate?.trim()) {
          window.localStorage.setItem('last_partner_full_name', personalData.partnerFullName.trim())
          window.localStorage.setItem('last_partner_birth_date', personalData.partnerBirthDate.trim())
        }
      }

      window.location.href = data.paymentUrl
      return
    } catch (error) {
      console.error('Erro ao gerar análise:', error)
      let userMessage = 'Erro ao gerar análise. Tente novamente.'
      if (error instanceof Error && error.message) {
        userMessage = error.message
      }
      setPaymentError(userMessage)
    } finally {
      setIsProcessingPayment(false)
    }
  }

  const handleGenerateReport = async () => {
    if (!personalData.fullName.trim() || !personalData.birthDate) return

    const numerology = calculateCompleteNumerology(personalData.fullName, personalData.birthDate)
    const astrology = calculateAstrology(personalData.birthDate, personalData.birthTime, personalData.birthPlace)
    const chineseZodiac = getChineseZodiac(personalData.birthDate)
    const astrocartography = calculateAstrocartography(personalData.fullName, personalData.birthDate, personalData.birthTime, personalData.birthPlace, personalData.currentCity)

    let loveCompatibility: LoveCompatibilityResult | undefined
    if (personalData.partnerFullName?.trim() && personalData.partnerBirthDate?.trim()) {
      loveCompatibility = calculateLoveCompatibility(
        personalData.birthDate,
        personalData.fullName,
        personalData.partnerBirthDate,
        personalData.partnerFullName
      )
    }

    setMysticReport({
      numerology,
      astrology,
      chineseZodiac,
      astrocartography,
      ...(loveCompatibility && { loveCompatibility })
    })

    // Mudar para o passo 2 para mostrar o relatório
    setCurrentStep(2)

    // Verificar se tem assinatura de horóscopo ativa
    if (personalData.email) {
      try {
        const response = await fetch('/api/check-horoscope-subscription', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ email: personalData.email })
        })
        const data = await response.json()
        if (data.success) {
          setIsHoroscopeSubscribed(data.isSubscribed)
        }
      } catch (error) {
        console.error('Erro ao verificar assinatura de horóscopo:', error)
      }
    }

    setCurrentStep(2)
  }

  /** Gera e exibe o relatório sem passar pelo pagamento (uso interno/teste). */
  const handleTestReport = () => {
    if (!personalData.fullName.trim() || !personalData.birthDate) {
      setPaymentError('Para testar, preencha pelo menos nome e data de nascimento.')
      return
    }
    if (selectedPlan === 'love_compatibility' && (!personalData.partnerFullName?.trim() || !personalData.partnerBirthDate?.trim())) {
      setPaymentError('No plano compatibilidade amorosa, preencha nome e data do(a) parceiro(a) para testar.')
      return
    }
    setPaymentError(null)
    const birthPlace = personalData.birthPlace.trim() || 'São Paulo, São Paulo, Brasil'
    const currentCity = personalData.currentCity.trim() || 'São Paulo'

    const numerology = calculateCompleteNumerology(personalData.fullName, personalData.birthDate)
    const astrology = calculateAstrology(personalData.birthDate, personalData.birthTime, birthPlace)
    const chineseZodiac = getChineseZodiac(personalData.birthDate)
    const astrocartography = calculateAstrocartography(personalData.fullName, personalData.birthDate, personalData.birthTime ?? '', birthPlace, currentCity)

    let loveCompatibility: LoveCompatibilityResult | undefined
    if (personalData.partnerFullName?.trim() && personalData.partnerBirthDate?.trim()) {
      loveCompatibility = calculateLoveCompatibility(
        personalData.birthDate,
        personalData.fullName,
        personalData.partnerBirthDate,
        personalData.partnerFullName
      )
    }

    setMysticReport({
      numerology,
      astrology,
      chineseZodiac,
      astrocartography,
      ...(loveCompatibility && { loveCompatibility })
    })
    setCurrentStep(2)
  }

  const openMentoriaWaitlist = () => {
    setMentoriaFormError(null)
    setMentoriaFormSuccess(false)
    setMentoriaWaitlistOpen(true)
  }

  const closeMentoriaWaitlist = () => {
    setMentoriaWaitlistOpen(false)
    setMentoriaFormError(null)
    setMentoriaSubmitting(false)
  }

  const submitMentoriaWaitlist = async (e: React.FormEvent) => {
    e.preventDefault()
    setMentoriaFormError(null)
    setMentoriaFormSuccess(false)
    setMentoriaSubmitting(true)
    try {
      const res = await fetch('/api/mentoria-waitlist', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          fullName: mentoriaForm.fullName.trim(),
          phone: mentoriaForm.phone.trim(),
          email: mentoriaForm.email.trim()
        })
      })
      const data = (await res.json()) as { success?: boolean; error?: string }
      if (!res.ok || !data.success) {
        setMentoriaFormError(data.error ?? 'Não foi possível enviar. Tente novamente.')
        return
      }
      setMentoriaFormSuccess(true)
      setMentoriaForm({ fullName: '', phone: '', email: '' })
    } catch {
      setMentoriaFormError('Erro de conexão. Verifique a internet e tente de novo.')
    } finally {
      setMentoriaSubmitting(false)
    }
  }

  const renderDataCollection = () => {
    if (!PAYMENT_FORM_ENABLED) {
      return null
    }
    return (
    <div id="payment-form" className="max-w-2xl mx-auto px-3 sm:px-4 animate-fade-in-up delay-500 scroll-mt-24">
      <div className="bg-white dark:bg-gray-800 rounded-3xl p-4 sm:p-8 shadow-xl border border-gray-100/80 dark:border-gray-700/80 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-purple-500 via-pink-500 to-purple-500 animate-shimmer rounded-t-3xl"></div>
        <div className="text-center mb-6 sm:mb-8">
          <div className="flex justify-center mb-4">
            <Image src="/logo_astroglix2.png" alt="Astroglix" width={240} height={96} className="h-20 sm:h-24 w-auto object-contain" />
          </div>
          <h2 className="text-xl sm:text-2xl font-bold text-gray-800 dark:text-gray-200 mb-2">
            Informações Necessárias para Análise
          </h2>
          <p className="text-sm sm:text-base text-gray-600 dark:text-gray-400 mb-4">
            A precisão dos dados influencia diretamente na qualidade e profundidade da análise
          </p>

          {/* Opção do relatório online (checkout) */}
          <div className="mb-6">
            <p className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-3">Relatório online integrado</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
              <button
                type="button"
                onClick={() => setSelectedPlan('one_time')}
                className={`rounded-2xl p-4 sm:p-5 border-2 text-left transition-all ${
                  selectedPlan === 'one_time'
                    ? 'border-purple-500 bg-purple-50 dark:bg-purple-900/30 dark:border-purple-400'
                    : 'border-gray-200 dark:border-gray-600 bg-white dark:bg-gray-700/50 hover:border-purple-300 dark:hover:border-purple-600'
                }`}
              >
                <div className="flex items-center justify-between mb-2">
                  <span className="font-semibold text-gray-800 dark:text-gray-200">Análise 4 em 1</span>
                  {selectedPlan === 'one_time' && <CheckCircle className="w-5 h-5 text-purple-500 flex-shrink-0" />}
                </div>
                <p className="text-sm font-medium text-purple-600 dark:text-purple-400 mb-2">Numerologia, astrologia, zodíaco chinês e astrocartografia</p>
                <p className="text-xs text-gray-600 dark:text-gray-400">
                  Um relatório automatizado na hora, após o pagamento seguro.
                </p>
              </button>
              <button
                type="button"
                onClick={() => setSelectedPlan('love_compatibility')}
                className={`rounded-2xl p-4 sm:p-5 border-2 text-left transition-all ${
                  selectedPlan === 'love_compatibility'
                    ? 'border-pink-500 bg-pink-50 dark:bg-pink-900/30 dark:border-pink-400'
                    : 'border-gray-200 dark:border-gray-600 bg-white dark:bg-gray-700/50 hover:border-pink-300 dark:hover:border-pink-600'
                }`}
              >
                <div className="flex items-center justify-between mb-2">
                  <span className="font-semibold text-gray-800 dark:text-gray-200">+ Compatibilidade amorosa no relatório</span>
                  {selectedPlan === 'love_compatibility' && <CheckCircle className="w-5 h-5 text-pink-500 flex-shrink-0" />}
                </div>
                <p className="text-sm font-medium text-pink-600 dark:text-pink-400 mb-2">Tudo da opção anterior</p>
                <p className="text-xs text-gray-600 dark:text-gray-400">
                  Os dados do(a) parceiro(a) aparecem logo abaixo (obrigatórios). Bloco extra de compatibilidade no mesmo relatório.
                </p>
              </button>
            </div>

            {selectedPlan === 'love_compatibility' && (
              <div className="mt-4 rounded-2xl border-2 border-pink-300 dark:border-pink-600 bg-pink-50/80 dark:bg-pink-950/40 p-4 sm:p-5 shadow-sm">
                <p className="text-sm font-semibold text-pink-900 dark:text-pink-100 mb-1">Compatibilidade amorosa</p>
                <p className="text-xs text-pink-800/90 dark:text-pink-200/90 mb-4">
                  Preencha nome e data de nascimento do(a) parceiro(a) para incluir a análise a dois no relatório.
                </p>
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-800 dark:text-gray-200 mb-2">
                      Nome completo do(a) parceiro(a) *
                    </label>
                    <input
                      type="text"
                      value={personalData.partnerFullName ?? ''}
                      onChange={(e) => setPersonalData((prev) => ({ ...prev, partnerFullName: e.target.value }))}
                      className="w-full px-4 sm:px-5 py-3 sm:py-3.5 border border-pink-200 dark:border-pink-700 rounded-2xl focus:ring-2 focus:ring-pink-400/50 focus:border-pink-400 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 text-sm sm:text-base transition-shadow focus:shadow-md"
                      placeholder="Nome completo do(a) parceiro(a)"
                      autoComplete="name"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-800 dark:text-gray-200 mb-2">
                      Data de nascimento do(a) parceiro(a) *
                    </label>
                    <input
                      type="date"
                      value={personalData.partnerBirthDate ?? ''}
                      onChange={(e) => setPersonalData((prev) => ({ ...prev, partnerBirthDate: e.target.value }))}
                      className="w-full px-4 sm:px-5 py-3 sm:py-3.5 border border-pink-200 dark:border-pink-700 rounded-2xl focus:ring-2 focus:ring-pink-400/50 focus:border-pink-400 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 text-sm sm:text-base transition-shadow focus:shadow-md"
                    />
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>

        <div className="space-y-4 sm:space-y-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              Nome Completo *
            </label>
            <input
              type="text"
              value={personalData.fullName}
              onChange={(e) => setPersonalData(prev => ({ ...prev, fullName: e.target.value }))}
              className="w-full px-4 sm:px-5 py-3 sm:py-3.5 border border-gray-200 dark:border-gray-600 rounded-2xl focus:ring-2 focus:ring-purple-400/50 focus:border-purple-400 bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 text-sm sm:text-base transition-shadow focus:shadow-md"
              placeholder="Seu nome completo como no documento"
            />
            <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">
              Fundamental para análise numerológica precisa
            </p>
          </div>

          {/* E-mail desativado por enquanto — reativar quando for usar.
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              E-mail *
            </label>
            <input
              type="email"
              value={personalData.email}
              onChange={(e) => setPersonalData(prev => ({ ...prev, email: e.target.value }))}
              className="w-full px-4 sm:px-5 py-3 sm:py-3.5 border border-gray-200 dark:border-gray-600 rounded-2xl focus:ring-2 focus:ring-purple-400/50 focus:border-purple-400 bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 text-sm sm:text-base transition-shadow focus:shadow-md"
              placeholder="seu@email.com"
            />
            <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">
              Necessário para processar o pagamento e enviar sua análise
            </p>
          </div>
          */}

          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              Data de Nascimento *
            </label>
            <input
              type="date"
              value={personalData.birthDate}
              onChange={(e) => setPersonalData(prev => ({ ...prev, birthDate: e.target.value }))}
              className="w-full px-4 sm:px-5 py-3 sm:py-3.5 border border-gray-200 dark:border-gray-600 rounded-2xl focus:ring-2 focus:ring-purple-400/50 focus:border-purple-400 bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 text-sm sm:text-base transition-shadow focus:shadow-md"
            />
            <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">
              Base para todos os cálculos astrológicos e numerológicos
            </p>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              Hora de Nascimento
            </label>
            <input
              type="time"
              value={personalData.birthTime}
              onChange={(e) => setPersonalData(prev => ({ ...prev, birthTime: e.target.value }))}
              className="w-full px-4 sm:px-5 py-3 sm:py-3.5 border border-gray-200 dark:border-gray-600 rounded-2xl focus:ring-2 focus:ring-purple-400/50 focus:border-purple-400 bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 text-sm sm:text-base transition-shadow focus:shadow-md"
            />
            <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">
              Importante para cálculos de ascendente e casas astrológicas
            </p>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              Local de Nascimento *
            </label>
            <p className="text-xs text-gray-500 dark:text-gray-400 mb-3">
              Selecione país, estado e cidade para evitar erros de digitação
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4">
              <div>
                <label className="block text-xs font-medium text-gray-500 dark:text-gray-400 mb-1.5">País</label>
                <select
                  value={birthCountryCode}
                  onChange={(e) => {
                    const v = e.target.value
                    setBirthCountryCode(v)
                    setBirthStateCode('')
                    setBirthCityName('')
                    updateBirthPlaceFromSelection(v, '', '')
                  }}
                  className="w-full px-4 py-3 border border-gray-200 dark:border-gray-600 rounded-2xl focus:ring-2 focus:ring-purple-400/50 focus:border-purple-400 bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 text-sm sm:text-base"
                >
                  <option value="">Selecione o país</option>
                  {countries.map((c) => (
                    <option key={c.isoCode} value={c.isoCode}>{c.name}</option>
                  ))}
                </select>
              </div>
              <div>
                <label className="block text-xs font-medium text-gray-500 dark:text-gray-400 mb-1.5">Estado / Região</label>
                <select
                  value={birthStateCode}
                  onChange={(e) => {
                    const v = e.target.value
                    setBirthStateCode(v)
                    setBirthCityName('')
                    updateBirthPlaceFromSelection(birthCountryCode, v, '')
                  }}
                  disabled={!birthCountryCode}
                  className="w-full px-4 py-3 border border-gray-200 dark:border-gray-600 rounded-2xl focus:ring-2 focus:ring-purple-400/50 focus:border-purple-400 bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 text-sm sm:text-base disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  <option value="">{states.length ? 'Estado' : '—'}</option>
                  {states.map((s) => (
                    <option key={s.isoCode} value={s.isoCode}>{s.name}</option>
                  ))}
                </select>
              </div>
              <div>
                <label className="block text-xs font-medium text-gray-500 dark:text-gray-400 mb-1.5">Cidade</label>
                <select
                  value={birthCityName}
                  onChange={(e) => {
                    const v = e.target.value
                    setBirthCityName(v)
                    updateBirthPlaceFromSelection(birthCountryCode, birthStateCode, v)
                  }}
                  disabled={!birthCountryCode || cities.length === 0}
                  className="w-full px-4 py-3 border border-gray-200 dark:border-gray-600 rounded-2xl focus:ring-2 focus:ring-purple-400/50 focus:border-purple-400 bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 text-sm sm:text-base disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  <option value="">Cidade</option>
                  {cities.map((city) => (
                    <option key={`${city.stateCode}-${city.name}`} value={city.name}>{city.name}</option>
                  ))}
                </select>
              </div>
            </div>
            <p className="text-xs text-gray-500 dark:text-gray-400 mt-2">
              Fundamental para análise astrocartográfica precisa
            </p>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              Cidade de residência atual *
            </label>
            <input
              type="text"
              value={personalData.currentCity}
              onChange={(e) => setPersonalData(prev => ({ ...prev, currentCity: e.target.value }))}
              className="w-full px-4 sm:px-5 py-3 sm:py-3.5 border border-gray-200 dark:border-gray-600 rounded-2xl focus:ring-2 focus:ring-purple-400/50 focus:border-purple-400 bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 text-sm sm:text-base transition-shadow focus:shadow-md"
              placeholder="Ex: São Paulo, Lisboa, Madrid"
            />
            <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">
              Para benefícios e pontos de atenção na astrocartografia do seu dia a dia
            </p>
          </div>

          {/* Erro de pagamento */}
          {paymentError && (
            <div className="bg-red-50 dark:bg-red-900/30 border border-red-200 dark:border-red-800 rounded-2xl p-4">
              <div className="flex items-start gap-3">
                <div className="w-5 h-5 text-red-500 mt-0.5 flex-shrink-0">
                  <AlertCircle className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm font-medium text-red-800 dark:text-red-200 mb-1">
                    Erro no Processamento
                  </h4>
                  <p className="text-sm text-red-700 dark:text-red-300">
                    {paymentError}
                  </p>
                </div>
              </div>
            </div>
          )}

          <button
            onClick={handlePayment}
            disabled={
              !personalData.fullName.trim() || !personalData.birthDate ||
              !personalData.birthPlace.trim() || !personalData.currentCity.trim() || isProcessingPayment ||
              (selectedPlan === 'love_compatibility' && (!personalData.partnerFullName?.trim() || !personalData.partnerBirthDate?.trim()))
            }
            className="w-full bg-gradient-to-r from-purple-600 to-pink-600 text-white py-3.5 sm:py-4 px-6 sm:px-8 rounded-full font-semibold text-base sm:text-lg hover:from-purple-700 hover:to-pink-700 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed shadow-lg hover:shadow-xl disabled:hover:shadow-lg disabled:transform-none hover:scale-[1.02] active:scale-[0.98]"
          >
            <div className="flex items-center justify-center gap-2">
              {isProcessingPayment ? (
                <>
                  <div className="animate-spin rounded-full h-4 w-4 sm:h-5 sm:w-5 border-b-2 border-white"></div>
                  <span className="text-sm sm:text-base">Processando Pagamento...</span>
                </>
              ) : (
                <>
                  <CreditCard className="w-4 h-4 sm:w-5 sm:h-5" />
                  <span className="text-sm sm:text-base">Gerar Análise Astrológica Completa</span>
                </>
              )}
            </div>
          </button>

          {/* Botão de teste — descomentar para usar em localhost
          <button
            type="button"
            onClick={handleTestReport}
            disabled={!personalData.fullName.trim() || !personalData.birthDate || (selectedPlan === 'love_compatibility' && (!personalData.partnerFullName?.trim() || !personalData.partnerBirthDate?.trim()))}
            className="w-full mt-3 py-3 px-6 rounded-full font-medium text-sm text-gray-600 dark:text-gray-400 border border-gray-300 dark:border-gray-600 bg-transparent hover:bg-gray-100 dark:hover:bg-gray-700 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
          >
            Ver relatório (teste — sem pagamento)
          </button>
          */}

          <div className="text-center">
            <div className="flex items-center justify-center gap-2 text-xs sm:text-sm text-gray-500 dark:text-gray-400">
              <Lock className="w-3 h-3 sm:w-4 sm:h-4" />
              <span>Processamento 100% seguro via Kiwify</span>
            </div>
          </div>
        </div>
      </div>
    </div>
    )
  }

  const renderMysticReport = () => {
    if (!mysticReport) return null

    const reportData = {
      personalData: {
        fullName: personalData.fullName,
        ...(personalData.email.trim() ? { email: personalData.email.trim() } : {}),
        birthDate: personalData.birthDate,
        birthTime: personalData.birthTime,
        birthPlace: personalData.birthPlace,
        currentCity: personalData.currentCity
      },
      numerology: mysticReport.numerology,
      astrology: mysticReport.astrology,
      chineseZodiac: mysticReport.chineseZodiac,
      astrocartography: mysticReport.astrocartography,
      ...(mysticReport.loveCompatibility && { loveCompatibility: mysticReport.loveCompatibility })
    }

    return (
      <DetailedReport reportData={reportData} />
    )
  }

  const renderOldMysticReport = () => {
    if (!mysticReport) return null

    return (
      <div className="space-y-8 sm:space-y-12 px-4">
        {/* Header do Relatório */}
        <div className="text-center bg-gradient-to-r from-purple-50 to-pink-50 dark:from-purple-900 dark:to-pink-900 rounded-2xl p-6 sm:p-8">
          <div className="w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-6">
            <BookOpen className="w-8 h-8 sm:w-10 sm:h-10 text-white" />
          </div>
          <h1 className="text-2xl sm:text-4xl font-bold text-gray-800 dark:text-gray-200 mb-4">
            Análise Astrológica Completa
          </h1>
          <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-400 mb-2">
            {personalData.fullName}
          </p>
          <p className="text-sm sm:text-base text-gray-500 dark:text-gray-500">
            Nascido em {new Date(personalData.birthDate).toLocaleDateString('pt-BR')}
            {personalData.birthTime && ` às ${personalData.birthTime}`}
            {personalData.birthPlace && ` em ${personalData.birthPlace}`}
          </p>
          <div className="mt-4 sm:mt-6 text-xs sm:text-sm text-gray-600 dark:text-gray-400 italic">
            "Conhece-te a ti mesmo e conhecerás o universo e os deuses" - Oráculo de Delfos
          </div>
        </div>

        {/* Seção 1: Numerologia Pessoal */}
        <div className="bg-gradient-to-r from-purple-50 to-pink-50 dark:from-purple-900 dark:to-pink-900 rounded-2xl p-6 sm:p-8">
          <div className="text-center mb-6 sm:mb-8">
            <div className="w-12 h-12 sm:w-16 sm:h-16 flex items-center justify-center mx-auto mb-4 p-1.5 sm:p-2">
              <Image src={iconNumerologia} alt="Numerologia" className="w-full h-full object-contain" />
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 dark:text-gray-200 mb-2">
              1. Análise Numerológica Pitagórica
            </h2>
            <p className="text-sm sm:text-base text-gray-600 dark:text-gray-400">
              Os números fundamentais que influenciam sua personalidade e trajetória de vida
            </p>
          </div>

          {/* Números Principais */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-6 sm:mb-8">
            {[
              { number: mysticReport.numerology.lifePathNumber, title: 'Caminho da Vida', icon: Star, description: 'Sua missão principal nesta encarnação' },
              { number: mysticReport.numerology.destinyNumber, title: 'Número do Destino', icon: Crown, description: 'Seu potencial máximo a ser alcançado' },
              { number: mysticReport.numerology.soulNumber, title: 'Número da Alma', icon: Heart, description: 'Suas motivações mais profundas' },
              { number: mysticReport.numerology.personalityNumber, title: 'Personalidade', icon: Eye, description: 'Como outros te percebem' }
            ].map((item, index) => {
              const meaning = numerologyMeanings[item.number as keyof typeof numerologyMeanings]
              return (
                <div key={index} className="bg-white dark:bg-gray-800 rounded-xl p-4 sm:p-6 shadow-lg">
                  <div className="flex items-center gap-2 sm:gap-3 mb-3 sm:mb-4">
                    <div className={`w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-gradient-to-r ${meaning?.color} flex items-center justify-center`}>
                      <item.icon className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="font-bold text-sm sm:text-base text-gray-800 dark:text-gray-200">{item.title}</h3>
                      <p className="text-xs text-gray-600 dark:text-gray-400">Número {item.number}</p>
                    </div>
                  </div>
                  <h4 className="font-semibold text-base sm:text-lg text-gray-800 dark:text-gray-200 mb-2">{meaning?.title}</h4>
                  <p className="text-gray-600 dark:text-gray-400 text-xs sm:text-sm mb-3">{meaning?.description}</p>

                  {/* Pontos Positivos */}
                  <div className="mb-3">
                    <h5 className="text-xs font-semibold text-green-600 dark:text-green-400 mb-1">PONTOS POSITIVOS:</h5>
                    <div className="flex flex-wrap gap-1">
                      {meaning?.positives.slice(0, 3).map((positive, idx) => (
                        <span key={idx} className="bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 px-2 py-1 rounded text-xs">
                          {positive}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Pontos Negativos */}
                  <div className="mb-3">
                    <h5 className="text-xs font-semibold text-red-600 dark:text-red-400 mb-1">PONTOS DE ATENÇÃO:</h5>
                    <div className="flex flex-wrap gap-1">
                      {meaning?.negatives.slice(0, 3).map((negative, idx) => (
                        <span key={idx} className="bg-red-100 dark:bg-red-900 text-red-800 dark:text-red-200 px-2 py-1 rounded text-xs">
                          {negative}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* O que fazer */}
                  <div className="mt-4 p-3 bg-gray-50 dark:bg-gray-700 rounded-lg">
                    <p className="text-xs text-gray-600 dark:text-gray-400">
                      <strong>Orientação:</strong> {meaning?.advice}
                    </p>
                  </div>
                </div>
              )
            })}
          </div>
        </div>

        {/* Mensagem Final Inspiradora */}
        <div className="text-center bg-gradient-to-r from-purple-50 to-pink-50 dark:from-purple-900 dark:to-pink-900 rounded-2xl p-6 sm:p-8">
          <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-4">
            <Star className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
          </div>
          <h3 className="text-xl sm:text-2xl font-bold text-gray-800 dark:text-gray-200 mb-4">
            Sua Jornada de Autoconhecimento
          </h3>
          <div className="max-w-4xl mx-auto space-y-4 text-sm sm:text-base text-gray-600 dark:text-gray-400">
            <p>
              Esta análise representa uma ferramenta valiosa para seu desenvolvimento pessoal e compreensão de si mesmo.
              Cada elemento numerológico, astrológico e simbólico oferece insights sobre sua natureza e potencial.
            </p>
            <p>
              Utilize essas informações como guia para suas decisões e escolhas de vida. O autoconhecimento é fundamental
              para viver de forma mais consciente e alinhada com seus valores e objetivos.
            </p>
          </div>
          <div className="mt-6 sm:mt-8 p-4 sm:p-6 bg-white dark:bg-gray-800 rounded-xl max-w-2xl mx-auto">
            <p className="text-base sm:text-lg font-semibold text-gray-800 dark:text-gray-200 mb-2">
              "O autoconhecimento é o fundamento de toda sabedoria."
            </p>
            <p className="text-xs sm:text-sm text-gray-500 dark:text-gray-400 italic">
              - Aristóteles
            </p>
          </div>
          <div className="mt-4 sm:mt-6 text-xs sm:text-sm text-gray-500 dark:text-gray-400">
            <p>Que este relatório ilumine seu caminho e desperte o potencial que já existe dentro de você</p>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen min-h-[100dvh] bg-gradient-to-br from-purple-50 via-pink-50 to-indigo-50 dark:from-gray-900 dark:via-purple-900 dark:to-indigo-900 overflow-x-hidden">
      <div className="container mx-auto px-3 sm:px-4 py-4 sm:py-8 max-w-full">
        {/* Header */}
        {currentStep === 1 && (
          <>
            {/* Header */}
            <header className="sticky top-0 z-50 bg-white/80 dark:bg-gray-900/80 backdrop-blur-md rounded-b-2xl border-b border-x border-gray-200/50 dark:border-gray-700/50 mx-2 sm:mx-6 mt-2 sm:mt-3 overflow-visible">
              <div className="max-w-4xl mx-auto px-4 py-1 sm:py-2 flex items-end justify-center sm:justify-center gap-4 sm:gap-6 min-h-0 overflow-visible">
                <Link
                  href="/"
                  className="shrink-0 flex items-end -mb-10 sm:-mb-12"
                  aria-label="Astroglix - início"
                >
                  <Image src="/logo_astroglix2.png" alt="Astroglix" width={240} height={96} className="h-28 sm:h-32 w-auto object-contain object-left-bottom" />
                </Link>
                <nav className="hidden sm:flex items-center gap-1 sm:gap-2" aria-label="Menu principal">
                  <a
                    href="#servicos"
                    className="min-h-[44px] min-w-[44px] inline-flex items-center justify-center px-3 sm:px-4 py-2.5 rounded-full text-[13px] sm:text-[15px] font-medium text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-gray-800/80 transition-colors"
                  >
                    Serviços
                  </a>
                  <a
                    href="#como-funciona"
                    className="min-h-[44px] inline-flex items-center justify-center px-3 sm:px-4 py-2.5 rounded-full text-[13px] sm:text-[15px] font-medium bg-gray-900 dark:bg-white text-white dark:text-gray-900 hover:opacity-90 transition-opacity"
                  >
                    Como funciona
                  </a>
                </nav>
              </div>
            </header>

            {/* Hero como na referência */}
            <section className="max-w-4xl mx-auto px-4 sm:px-4 pt-14 sm:pt-16 pb-10 sm:pb-16 text-center">
              <h1 className="text-2xl sm:text-3xl md:text-[36px] leading-tight sm:leading-[40px] font-bold mb-4 sm:mb-6 bg-gradient-to-r from-purple-600 to-pink-600 dark:from-purple-400 dark:to-pink-400 bg-clip-text text-transparent text-balance">
                Seu mapa revela<br />
                o manual de instruções para sua vida.
              </h1>
              <div className="relative mb-6 sm:mb-8 rounded-xl sm:rounded-2xl overflow-hidden shadow-xl border border-gray-200 dark:border-gray-700 aspect-video w-full max-w-2xl mx-auto bg-gray-800 min-h-[200px] sm:min-h-0">
                <video
                  className="w-full h-full object-cover"
                  src="/Astroglix_site_horizontal.mp4"
                  poster="/video-poster.png"
                  title="Astroglix site horizontal"
                  controls
                  playsInline
                  loop
                  preload="auto"
                >
                  Seu navegador não suporta vídeo HTML5.
                </video>
              </div>
              <p className="text-base sm:text-[18px] leading-relaxed sm:leading-[28px] font-semibold text-gray-800 dark:text-gray-200 mb-3 sm:mb-4 text-balance">
                Não é previsão.<br />É clareza de quem você é e pra onde pode ir.
              </p>
              <ul className="flex flex-col sm:flex-row sm:flex-wrap sm:justify-center gap-3 sm:gap-x-6 sm:gap-y-2 text-[14px] sm:text-[14px] leading-[22px] sm:leading-[28px] text-gray-600 dark:text-gray-400 list-none mb-6 sm:mb-8 text-left sm:text-center max-w-xs sm:max-w-none mx-auto">
                <li className="flex items-center gap-2">✨ Entenda seus ciclos</li>
                <li className="flex items-center gap-2">✨ Descubra seus potenciais ocultos</li>
                <li className="flex items-center gap-2">✨ Identifique os melhores movimentos</li>
                <li className="flex items-center gap-2">✨ Tome decisões com consciência</li>
              </ul>
              <div className="flex flex-col sm:flex-row justify-center items-stretch sm:items-center gap-3 sm:gap-4">
                <a
                  href="#servicos"
                  className="min-h-[48px] sm:min-h-0 inline-flex items-center justify-center px-6 sm:px-8 py-3.5 rounded-full font-normal text-[14px] leading-[20px] bg-gray-900 dark:bg-white text-white dark:text-gray-900 hover:opacity-90 transition-all hover:shadow-lg active:scale-[0.98] touch-manipulation"
                >
                  Ver serviços
                </a>
                <a
                  href="#como-funciona"
                  className="min-h-[48px] sm:min-h-0 inline-flex items-center justify-center px-6 sm:px-8 py-3.5 rounded-full font-normal text-[14px] leading-[20px] border-2 border-gray-900 dark:border-white text-gray-900 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-800 transition-all hover:shadow-md active:scale-[0.98] touch-manipulation"
                >
                  Como funciona
                </a>
              </div>
            </section>

            {/* Quatro sistemas, uma leitura */}
            <section className="max-w-4xl mx-auto px-4 sm:px-4 py-8 sm:py-16 border-t border-gray-200 dark:border-gray-700">
              <h2 className="text-xl sm:text-[30px] leading-tight sm:leading-[36px] font-semibold text-gray-900 dark:text-white mb-3 sm:mb-4">
                Quatro sistemas, uma leitura
              </h2>
              <p className="text-base sm:text-[18px] leading-relaxed sm:leading-[28px] text-gray-600 dark:text-gray-400 mb-4">
                O método Astroglix cruza numerologia, astrologia ocidental, tradição oriental (Vietnamita/Chinesa) e astrocartografia para oferecer uma visão integrada, sem promessas absolutas, com racionalidade acima da narrativa.
              </p>
              <p className="text-base sm:text-[18px] leading-relaxed sm:leading-[28px] text-gray-600 dark:text-gray-400 mb-6">
                Racionalidade acima da narrativa. Cada conclusão é apresentada como hipótese e recomendação, não como destino fixo.
              </p>
              {/* <button
                type="button"
                onClick={() => document.getElementById('payment-form')?.scrollIntoView({ behavior: 'smooth', block: 'start' })}
                className="px-6 py-3 rounded-full border-2 border-gray-900 dark:border-white text-[14px] leading-[20px] text-gray-900 dark:text-white font-normal hover:bg-gray-100 dark:hover:bg-gray-800 transition-all hover:shadow-md"
              >
                Ver preview do relatório (sumário)
              </button> */}
            </section>

            {/* O que você pode explorar */}
            <section className="max-w-6xl mx-auto px-3 sm:px-4 py-8 sm:py-16 border-t border-gray-200 dark:border-gray-700">
              <h2 className="text-xl sm:text-[30px] leading-tight sm:leading-[36px] font-semibold text-gray-900 dark:text-white mb-6 sm:mb-8">
                O que você pode explorar
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
                <div className="bg-white dark:bg-gray-800 rounded-2xl p-4 sm:p-6 shadow-sm border border-gray-100/80 dark:border-gray-700/80 hover:shadow-md hover:border-gray-200 dark:hover:border-gray-600 transition-all">
                  <h3 className="text-[15px] sm:text-[16px] leading-[22px] sm:leading-[24px] font-medium text-gray-900 dark:text-white mb-2">Propósito</h3>
                  <p className="text-[15px] sm:text-[18px] leading-[24px] sm:leading-[28px] text-gray-600 dark:text-gray-400">Clareza sobre seus talentos naturais e direções que fazem sentido para você.</p>
                </div>
                <div className="bg-white dark:bg-gray-800 rounded-2xl p-4 sm:p-6 shadow-sm border border-gray-100/80 dark:border-gray-700/80 hover:shadow-md hover:border-gray-200 dark:hover:border-gray-600 transition-all">
                  <h3 className="text-[15px] sm:text-[16px] leading-[22px] sm:leading-[24px] font-medium text-gray-900 dark:text-white mb-2">Relacionamentos</h3>
                  <p className="text-[15px] sm:text-[18px] leading-[24px] sm:leading-[28px] text-gray-600 dark:text-gray-400">Insights sobre padrões de vínculo e compatibilidades.</p>
                </div>
                <div className="bg-white dark:bg-gray-800 rounded-2xl p-4 sm:p-6 shadow-sm border border-gray-100/80 dark:border-gray-700/80 hover:shadow-md hover:border-gray-200 dark:hover:border-gray-600 transition-all">
                  <h3 className="text-[15px] sm:text-[16px] leading-[22px] sm:leading-[24px] font-medium text-gray-900 dark:text-white mb-2">Carreira</h3>
                  <p className="text-[15px] sm:text-[18px] leading-[24px] sm:leading-[28px] text-gray-600 dark:text-gray-400">Vocação e momentos favoráveis para decisões profissionais.</p>
                </div>
                <div className="bg-white dark:bg-gray-800 rounded-2xl p-4 sm:p-6 shadow-sm border border-gray-100/80 dark:border-gray-700/80 hover:shadow-md hover:border-gray-200 dark:hover:border-gray-600 transition-all">
                  <h3 className="text-[15px] sm:text-[16px] leading-[22px] sm:leading-[24px] font-medium text-gray-900 dark:text-white mb-2">Decisões</h3>
                  <p className="text-[15px] sm:text-[18px] leading-[24px] sm:leading-[28px] text-gray-600 dark:text-gray-400">Estrutura para priorizar e agir com mais consciência.</p>
                </div>
                <div className="bg-white dark:bg-gray-800 rounded-2xl p-4 sm:p-6 shadow-sm border border-gray-100/80 dark:border-gray-700/80 hover:shadow-md hover:border-gray-200 dark:hover:border-gray-600 transition-all">
                  <h3 className="text-[15px] sm:text-[16px] leading-[22px] sm:leading-[24px] font-medium text-gray-900 dark:text-white mb-2">Emoções</h3>
                  <p className="text-[15px] sm:text-[18px] leading-[24px] sm:leading-[28px] text-gray-600 dark:text-gray-400">Leitura de temas emocionais e ciclos internos.</p>
                </div>
                <div className="bg-white dark:bg-gray-800 rounded-2xl p-4 sm:p-6 shadow-sm border border-gray-100/80 dark:border-gray-700/80 hover:shadow-md hover:border-gray-200 dark:hover:border-gray-600 transition-all">
                  <h3 className="text-[15px] sm:text-[16px] leading-[22px] sm:leading-[24px] font-medium text-gray-900 dark:text-white mb-2">Locais de potência</h3>
                  <p className="text-[15px] sm:text-[18px] leading-[24px] sm:leading-[28px] text-gray-600 dark:text-gray-400">Astrocartografia: regiões do mundo que ressoam com seus objetivos.</p>
                </div>
              </div>
            </section>

            {/* Serviços — contato WhatsApp */}
            <section id="servicos" className="max-w-4xl mx-auto px-3 sm:px-4 py-8 sm:py-16 border-t border-gray-200 dark:border-gray-700 scroll-mt-20">
              <h2 className="text-xl sm:text-[30px] leading-tight sm:leading-[36px] font-semibold text-gray-900 dark:text-white mb-2">
                Serviços
              </h2>
              <p className="text-base sm:text-[18px] leading-relaxed sm:leading-[28px] text-gray-600 dark:text-gray-400 mb-6 sm:mb-8">
                Valores e prazos combinamos no atendimento. Use «Saiba mais» para falar no WhatsApp com o serviço já identificado na mensagem. Na Mentoria, as vagas podem estar esgotadas: use «Entrar na lista de espera» para deixar seus dados.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
                {OFFERED_SERVICES.map((service) => (
                  <div
                    key={service.id}
                    className="bg-white dark:bg-gray-800 rounded-3xl p-4 sm:p-6 shadow-lg border border-gray-100/80 dark:border-gray-700/80 flex flex-col"
                  >
                    <h3 className="text-[15px] sm:text-[17px] leading-snug font-semibold text-gray-900 dark:text-white mb-1">
                      {service.title}
                    </h3>
                    <p className="text-[13px] sm:text-[15px] text-gray-500 dark:text-gray-400 mb-4">
                      {service.subtitle}
                    </p>
                    <ul className="space-y-2 text-[14px] sm:text-[16px] leading-[22px] sm:leading-[26px] text-gray-600 dark:text-gray-400 mb-6 flex-grow list-none">
                      {service.features.map((line) => (
                        <li key={line} className="flex gap-2">
                          <span className="text-green-600 dark:text-green-400 flex-shrink-0" aria-hidden>✅</span>
                          <span>{line}</span>
                        </li>
                      ))}
                    </ul>
                    {isWaitlistService(service) ? (
                      <button
                        type="button"
                        onClick={openMentoriaWaitlist}
                        className="min-h-[48px] inline-flex items-center justify-center gap-2 w-full px-8 py-3.5 rounded-full font-medium text-[14px] leading-[20px] bg-gradient-to-r from-violet-600 to-purple-600 text-white hover:opacity-90 transition-all hover:shadow-lg"
                      >
                        <ListOrdered className="w-5 h-5 flex-shrink-0" aria-hidden />
                        Entrar na lista de espera
                      </button>
                    ) : (
                      <a
                        href={buildWhatsAppServiceUrl(service.whatsappPrefill)}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="min-h-[48px] inline-flex items-center justify-center gap-2 w-full px-8 py-3.5 rounded-full font-medium text-[14px] leading-[20px] bg-gray-900 dark:bg-white text-white dark:text-gray-900 hover:opacity-90 transition-all hover:shadow-lg"
                      >
                        <MessageCircle className="w-5 h-5 flex-shrink-0" aria-hidden />
                        Saiba mais
                      </a>
                    )}
                  </div>
                ))}
              </div>
            </section>

            {/* Como funciona */}
            <section id="como-funciona" className="max-w-4xl mx-auto px-3 sm:px-4 py-8 sm:py-16 border-t border-gray-200 dark:border-gray-700 scroll-mt-20">
              <h2 className="text-xl sm:text-[30px] leading-tight sm:leading-[36px] font-semibold text-gray-900 dark:text-white mb-6 sm:mb-8">
                Como funciona
              </h2>
              <ol className="list-none space-y-4 sm:space-y-6">
                {[
                  { n: '1', text: 'Na seção Serviços, escolha o que faz sentido e clique em «Saiba mais» para falar no WhatsApp com a mensagem já preenchida.' },
                  { n: '2', text: 'No atendimento, alinhamos escopo, valores e prazos do serviço escolhido.' },
                  { n: '3', text: 'Enviamos orientações sobre dados que precisamos (nascimento, nomes, contexto) conforme cada leitura.' },
                  { n: '4', text: 'Receba o material no combinado e tire dúvidas diretamente no WhatsApp.' }
                ].map(({ n, text }) => (
                  <li key={n} className="flex gap-3 sm:gap-4">
                    <span className="flex-shrink-0 w-10 h-10 rounded-full bg-gray-900 dark:bg-white text-white dark:text-gray-900 flex items-center justify-center font-bold text-[14px] leading-[20px] shadow-sm">
                      {n}
                    </span>
                    <p className="text-[15px] sm:text-[18px] leading-[24px] sm:leading-[28px] text-gray-600 dark:text-gray-400 pt-0.5">{text}</p>
                  </li>
                ))}
              </ol>
            </section>

            {/* FAQ */}
            <LpFaq />

            {/* Prova social compacta */}
            <div className="max-w-4xl mx-auto mb-8 sm:mb-12 px-3 sm:px-4">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 text-center">
                <div className="bg-white dark:bg-gray-800 rounded-3xl p-4 sm:p-6 shadow-sm border border-gray-100/80 dark:border-gray-700/80 hover:shadow-md transition-shadow">
                  <div className="text-2xl sm:text-[30px] leading-tight sm:leading-[36px] font-semibold text-gray-900 dark:text-white mb-2">4 em 1</div>
                  <p className="text-[15px] sm:text-[18px] leading-[24px] sm:leading-[28px] text-gray-600 dark:text-gray-400">Disciplinas integradas em uma análise única</p>
                </div>
                <div className="bg-white dark:bg-gray-800 rounded-3xl p-4 sm:p-6 shadow-sm border border-gray-100/80 dark:border-gray-700/80 hover:shadow-md transition-shadow">
                  <div className="text-2xl sm:text-[30px] leading-tight sm:leading-[36px] font-semibold text-gray-900 dark:text-white mb-2">100%</div>
                  <p className="text-[15px] sm:text-[18px] leading-[24px] sm:leading-[28px] text-gray-600 dark:text-gray-400">Análise personalizada com seus dados</p>
                </div>
                <div className="bg-white dark:bg-gray-800 rounded-3xl p-4 sm:p-6 shadow-sm border border-gray-100/80 dark:border-gray-700/80 hover:shadow-md transition-shadow">
                  <div className="flex justify-center mb-2"><MessageCircle className="w-8 h-8 sm:w-10 sm:h-10 text-gray-700 dark:text-gray-300" /></div>
                  <p className="text-[15px] sm:text-[18px] leading-[24px] sm:leading-[28px] text-gray-600 dark:text-gray-400">Contato direto para alinhar entrega e dúvidas</p>
                </div>
              </div>
            </div>
          </>
        )}

        {/* Passos 1–2 do relatório online (só quando o checkout na home estiver ativo) */}
        {PAYMENT_FORM_ENABLED && currentStep <= 1 && (
          <div className="flex justify-center mb-8 sm:mb-12">
            <div className="flex items-center space-x-4">
              <div className={`w-8 h-8 sm:w-10 sm:h-10 rounded-full flex items-center justify-center text-sm sm:text-base ${currentStep >= 1 ? 'bg-purple-500 text-white' : 'bg-gray-200 text-gray-500'}`}>
                1
              </div>
              <div className={`w-12 h-1 sm:w-16 ${currentStep >= 2 ? 'bg-purple-500' : 'bg-gray-200'}`}></div>
              <div className={`w-8 h-8 sm:w-10 sm:h-10 rounded-full flex items-center justify-center text-sm sm:text-base ${currentStep >= 2 ? 'bg-purple-500 text-white' : 'bg-gray-200 text-gray-500'}`}>
                2
              </div>
            </div>
          </div>
        )}

        {/* Navigation Bar - 5 Cards - Fixed at Top */}
        {currentStep === 2 && (
          <div className="sticky top-0 z-50 bg-white dark:bg-gray-900 py-3 sm:py-4 border-b border-gray-200 dark:border-gray-700 shadow-md -mx-3 sm:mx-0 px-0">
            <div className="container mx-auto overflow-x-auto overflow-y-hidden">
              <div className="flex justify-start sm:justify-center gap-2 sm:gap-4 px-3 sm:px-4 pb-1 min-w-0">
                <button
                  onClick={() => {
                    document.getElementById('numerologia')?.scrollIntoView({ behavior: 'smooth', block: 'start' })
                  }}
                  className="flex flex-col items-center gap-1.5 sm:gap-2 rounded-xl p-3 sm:p-6 transition-all duration-300 shadow-lg min-w-[88px] sm:min-w-[140px] min-h-[72px] sm:min-h-0 bg-white dark:bg-gray-800 hover:shadow-xl hover:bg-gradient-to-br hover:from-purple-50 hover:to-pink-50 dark:hover:from-purple-900/50 dark:hover:to-pink-900/50 cursor-pointer touch-manipulation"
                >
                  <Calculator className="w-5 h-5 sm:w-8 sm:h-8 text-purple-600 dark:text-purple-400 shrink-0" />
                  <span className="text-[11px] sm:text-base font-semibold text-gray-800 dark:text-gray-200 text-center leading-tight">Numerologia</span>
                </button>

                <button
                  onClick={() => {
                    document.getElementById('astrologia')?.scrollIntoView({ behavior: 'smooth', block: 'start' })
                  }}
                  className="flex flex-col items-center gap-1.5 sm:gap-2 rounded-xl p-3 sm:p-6 transition-all duration-300 shadow-lg min-w-[88px] sm:min-w-[140px] min-h-[72px] sm:min-h-0 bg-white dark:bg-gray-800 hover:shadow-xl hover:bg-gradient-to-br hover:from-blue-50 hover:to-indigo-50 dark:hover:from-blue-900/50 dark:hover:to-indigo-900/50 cursor-pointer touch-manipulation"
                >
                  <Image src={iconAstrologia} alt="Astrologia" className="w-5 h-5 sm:w-8 sm:h-8 shrink-0 object-contain" />
                  <span className="text-[11px] sm:text-base font-semibold text-gray-800 dark:text-gray-200 text-center leading-tight">Astrologia</span>
                </button>

                <button
                  onClick={() => {
                    document.getElementById('zodiaco-chines')?.scrollIntoView({ behavior: 'smooth', block: 'start' })
                  }}
                  className="flex flex-col items-center gap-1.5 sm:gap-2 rounded-xl p-3 sm:p-6 transition-all duration-300 shadow-lg min-w-[88px] sm:min-w-[140px] min-h-[72px] sm:min-h-0 bg-white dark:bg-gray-800 hover:shadow-xl hover:bg-gradient-to-br hover:from-red-50 hover:to-orange-50 dark:hover:from-red-900/50 dark:hover:to-orange-900/50 cursor-pointer touch-manipulation"
                >
                  <Image src={iconChinese} alt="Zodíaco Chinês" className="w-5 h-5 sm:w-8 sm:h-8 shrink-0 object-contain" />
                  <span className="text-[11px] sm:text-base font-semibold text-gray-800 dark:text-gray-200 text-center leading-tight">Zodíaco</span>
                </button>

                <button
                  onClick={() => {
                    document.getElementById('astrocartografia')?.scrollIntoView({ behavior: 'smooth', block: 'start' })
                  }}
                  className="flex flex-col items-center gap-1.5 sm:gap-2 rounded-xl p-3 sm:p-6 transition-all duration-300 shadow-lg min-w-[88px] sm:min-w-[140px] min-h-[72px] sm:min-h-0 bg-white dark:bg-gray-800 hover:shadow-xl hover:bg-gradient-to-br hover:from-green-50 hover:to-teal-50 dark:hover:from-green-900/50 dark:hover:to-teal-900/50 cursor-pointer touch-manipulation"
                >
                  <Image src={iconCartografia} alt="Astrocartografia" className="w-5 h-5 sm:w-8 sm:h-8 shrink-0 object-contain" />
                  <span className="text-[11px] sm:text-base font-semibold text-gray-800 dark:text-gray-200 text-center leading-tight">Astrocartografia</span>
                </button>

                <button
                  onClick={() => {
                    document.getElementById('horoscope-section')?.scrollIntoView({ behavior: 'smooth', block: 'start' })
                  }}
                  className="flex flex-col items-center gap-1.5 sm:gap-2 rounded-xl p-3 sm:p-6 transition-all duration-300 shadow-lg min-w-[88px] sm:min-w-[140px] min-h-[72px] sm:min-h-0 bg-white dark:bg-gray-800 hover:shadow-xl hover:bg-gradient-to-br hover:from-yellow-50 hover:to-amber-50 dark:hover:from-yellow-900/50 dark:hover:to-amber-900/50 cursor-pointer touch-manipulation"
                >
                  <Sparkles className="w-5 h-5 sm:w-8 sm:h-8 text-yellow-600 dark:text-yellow-400 shrink-0" />
                  <span className="text-[11px] sm:text-base font-semibold text-gray-800 dark:text-gray-200 text-center leading-tight">Horóscopo</span>
                </button>

                {mysticReport?.loveCompatibility && (
                  <button
                    onClick={() => {
                      document.getElementById('compatibilidade')?.scrollIntoView({ behavior: 'smooth', block: 'start' })
                    }}
                    className="flex flex-col items-center gap-1.5 sm:gap-2 rounded-xl p-3 sm:p-6 transition-all duration-300 shadow-lg min-w-[88px] sm:min-w-[140px] min-h-[72px] sm:min-h-0 bg-white dark:bg-gray-800 hover:shadow-xl hover:bg-gradient-to-br hover:from-pink-50 hover:to-rose-50 dark:hover:from-pink-900/50 dark:hover:to-rose-900/50 cursor-pointer touch-manipulation"
                  >
                    <Heart className="w-5 h-5 sm:w-8 sm:h-8 text-pink-600 dark:text-pink-400 shrink-0" />
                    <span className="text-[11px] sm:text-base font-semibold text-gray-800 dark:text-gray-200 text-center leading-tight">Compatibilidade</span>
                  </button>
                )}
              </div>
            </div>
          </div>
        )}

        {/* Formulário de pagamento — ligado a PAYMENT_FORM_ENABLED / NEXT_PUBLIC_SHOW_PAYMENT_FORM */}
        {currentStep === 1 && renderDataCollection()}
        {currentStep === 2 && renderMysticReport()}

        {/* Footer como na referência */}
        <footer className="mt-8 sm:mt-16 py-8 sm:py-12 rounded-t-3xl border-t border-gray-200/80 dark:border-gray-700/80 bg-gray-50 dark:bg-gray-900/50 shadow-[0_-4px_20px_-8px_rgba(0,0,0,0.08)] dark:shadow-[0_-4px_20px_-8px_rgba(0,0,0,0.2)]">
          <div className="container mx-auto px-3 sm:px-4 max-w-6xl">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 sm:gap-8 mb-6 sm:mb-8">
              <div className="min-w-0">
                <Image src="/logo_astroglix2.png" alt="Astroglix" width={240} height={96} className="h-28 sm:h-32 w-auto object-contain mb-3" />
                <p className="text-[14px] sm:text-[16px] leading-[22px] sm:leading-[24px] text-gray-600 dark:text-gray-400">
                  Leitura estratégica  integrando numerologia, astrologia e sistemas orientais.
                </p>
                <p className="text-[13px] sm:text-[14px] leading-[18px] sm:leading-[20px] text-gray-500 dark:text-gray-500 mt-2">
                  Sem promessas absolutas. Com método. • Dados protegidos • LGPD • Atendimento via WhatsApp
                </p>
              </div>
              <div>
                <p className="text-[15px] sm:text-[16px] leading-[22px] sm:leading-[24px] font-semibold text-gray-900 dark:text-white mb-3">Produto</p>
                <ul className="space-y-2 text-[14px] sm:text-[16px] leading-[22px] sm:leading-[24px]">
                  <li><a href="#servicos" className="text-gray-600 dark:text-gray-400 hover:underline min-h-[44px] inline-flex items-center">Serviços</a></li>
                  <li><a href="#como-funciona" className="text-gray-600 dark:text-gray-400 hover:underline min-h-[44px] inline-flex items-center">Como funciona</a></li>
                </ul>
              </div>
              <div>
                <p className="text-[15px] sm:text-[16px] leading-[22px] sm:leading-[24px] font-semibold text-gray-900 dark:text-white mb-3">Legal</p>
                <ul className="space-y-2 text-[14px] sm:text-[16px] leading-[22px] sm:leading-[24px]">
                  <li><a href="/termos" className="text-gray-600 dark:text-gray-400 hover:underline min-h-[44px] inline-flex items-center">Termos de uso</a></li>
                  <li><a href="/privacidade" className="text-gray-600 dark:text-gray-400 hover:underline min-h-[44px] inline-flex items-center">Privacidade</a></li>
                </ul>
              </div>
              <div>
                <p className="text-[15px] sm:text-[16px] leading-[22px] sm:leading-[24px] font-semibold text-gray-900 dark:text-white mb-3">Contato</p>
                <a href="mailto:contato@astroglix.com" className="text-[14px] sm:text-[16px] leading-[22px] sm:leading-[24px] text-gray-600 dark:text-gray-400 hover:underline break-all">
                  contato@astroglix.com
                </a>
              </div>
            </div>
            <p className="text-[13px] sm:text-[14px] leading-[18px] sm:leading-[20px] text-gray-500 dark:text-gray-500 mb-2">
              Os relatórios têm caráter informativo e de autoconhecimento. Não substituem orientação médica, psicológica ou jurídica.
            </p>
            <p className="text-[13px] sm:text-[14px] leading-[18px] sm:leading-[20px] text-gray-500 dark:text-gray-500">
              © {new Date().getFullYear()} Astroglix. Todos os direitos reservados.
            </p>
          </div>
        </footer>

        {mentoriaWaitlistOpen && (
          <div
            className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm"
            role="dialog"
            aria-modal="true"
            aria-labelledby="mentoria-waitlist-title"
            onClick={closeMentoriaWaitlist}
          >
            <div
              className="relative w-full max-w-md rounded-3xl bg-white dark:bg-gray-800 shadow-2xl border border-gray-200 dark:border-gray-700 p-5 sm:p-6"
              onClick={(ev) => ev.stopPropagation()}
            >
              <button
                type="button"
                onClick={closeMentoriaWaitlist}
                className="absolute top-3 right-3 p-2 rounded-full text-gray-500 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
                aria-label="Fechar"
              >
                <X className="w-5 h-5" />
              </button>
              <h3 id="mentoria-waitlist-title" className="text-lg sm:text-xl font-bold text-gray-900 dark:text-white pr-10 mb-3">
                Lista de espera — Mentoria
              </h3>
              <p className="text-sm sm:text-[15px] leading-relaxed text-gray-600 dark:text-gray-400 mb-5">
                Nossas vagas para mentoria estão esgotadas no momento. O valor da mentoria é{' '}
                <span className="font-semibold text-gray-800 dark:text-gray-200">R$ 800,00</span>.
                Se quiser entrar na lista de espera, deixe seus dados e entraremos em contato em breve.
              </p>
              <form onSubmit={submitMentoriaWaitlist} className="space-y-4">
                <div>
                  <label htmlFor="mentoria-nome" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1.5">
                    Nome completo *
                  </label>
                  <input
                    id="mentoria-nome"
                    type="text"
                    autoComplete="name"
                    required
                    value={mentoriaForm.fullName}
                    onChange={(e) => setMentoriaForm((f) => ({ ...f, fullName: e.target.value }))}
                    className="w-full px-4 py-3 rounded-2xl border border-gray-200 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 text-sm focus:ring-2 focus:ring-purple-400/50 focus:border-purple-400"
                    placeholder="Seu nome"
                  />
                </div>
                <div>
                  <label htmlFor="mentoria-telefone" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1.5">
                    Telefone *
                  </label>
                  <input
                    id="mentoria-telefone"
                    type="tel"
                    autoComplete="tel"
                    required
                    value={mentoriaForm.phone}
                    onChange={(e) => setMentoriaForm((f) => ({ ...f, phone: e.target.value }))}
                    className="w-full px-4 py-3 rounded-2xl border border-gray-200 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 text-sm focus:ring-2 focus:ring-purple-400/50 focus:border-purple-400"
                    placeholder="Ex: +55 (11) 99999-9999"
                  />
                </div>
                <div>
                  <label htmlFor="mentoria-email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1.5">
                    E-mail *
                  </label>
                  <input
                    id="mentoria-email"
                    type="email"
                    autoComplete="email"
                    required
                    value={mentoriaForm.email}
                    onChange={(e) => setMentoriaForm((f) => ({ ...f, email: e.target.value }))}
                    className="w-full px-4 py-3 rounded-2xl border border-gray-200 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 text-sm focus:ring-2 focus:ring-purple-400/50 focus:border-purple-400"
                    placeholder="seu@email.com"
                  />
                </div>
                {mentoriaFormError && (
                  <p className="text-sm text-red-600 dark:text-red-400" role="alert">
                    {mentoriaFormError}
                  </p>
                )}
                {mentoriaFormSuccess && (
                  <p className="text-sm text-green-600 dark:text-green-400">
                    Obrigada! Recebemos seus dados e entraremos em contato em breve.
                  </p>
                )}
                <div className="flex flex-col-reverse sm:flex-row gap-3 pt-1">
                  <button
                    type="button"
                    onClick={closeMentoriaWaitlist}
                    className="min-h-[48px] flex-1 rounded-full border-2 border-gray-300 dark:border-gray-600 text-gray-800 dark:text-gray-200 font-medium text-sm hover:bg-gray-50 dark:hover:bg-gray-700/50 transition-colors"
                  >
                    Fechar
                  </button>
                  <button
                    type="submit"
                    disabled={mentoriaSubmitting}
                    className="min-h-[48px] flex-1 rounded-full bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold text-sm hover:opacity-90 disabled:opacity-50 disabled:cursor-not-allowed transition-opacity"
                  >
                    {mentoriaSubmitting ? 'Enviando…' : 'Enviar'}
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}