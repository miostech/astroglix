'use client'

import { useEffect, useState, useCallback, useRef, Suspense } from 'react'
import { useSearchParams } from 'next/navigation'
import { CheckCircle, XCircle, ArrowLeft, BookOpen, Star, Download } from 'lucide-react'
import Link from 'next/link'
import DetailedReport from '@/components/DetailedReport'
import { calculateLoveCompatibility } from '@/lib/love-compatibility'
import { PdfWebViewHelpDialog } from '@/components/PdfWebViewHelpDialog'
import {
  isLikelyRestrictedInAppBrowser,
  requestNativeDocumentPrint,
} from '@/lib/native-print'

function SuccessPageContent() {
  const searchParams = useSearchParams()
  const sessionId = searchParams.get('session_id')
  const canceled = searchParams.get('canceled')
  const paymentId = searchParams.get('payment_id')
  const status = searchParams.get('status')
  const autoGenerate = searchParams.get('auto_generate')
  const [paymentStatus, setPaymentStatus] = useState<'loading' | 'success' | 'error'>('loading')
  const [reportData, setReportData] = useState<any>(null)
  const [isGeneratingReport, setIsGeneratingReport] = useState(false)
  const [isDownloadingPDF, setIsDownloadingPDF] = useState(false)
  const [pdfWebViewHelpOpen, setPdfWebViewHelpOpen] = useState(false)
  const reportRef = useRef<HTMLDivElement>(null)

  // Função para gerar o relatório místico COMPLETO
  const calculateCompleteNumerology = (fullName: string, date: string) => {
    const reduceToSingleDigit = (num: number): number => {
      while (num > 9 && num !== 11 && num !== 22 && num !== 33) {
        num = num.toString().split('').reduce((sum, digit) => sum + parseInt(digit), 0)
      }
      return num
    }

    const getLetterValue = (letter: string): number => {
      const values: { [key: string]: number } = {
        a: 1, b: 2, c: 3, d: 4, e: 5, f: 6, g: 7, h: 8, i: 9,
        j: 1, k: 2, l: 3, m: 4, n: 5, o: 6, p: 7, q: 8, r: 9,
        s: 1, t: 2, u: 3, v: 4, w: 5, x: 6, y: 7, z: 8
      }
      return values[letter.toLowerCase()] || 0
    }

    const birthDate = new Date(date)
    const day = birthDate.getDate()
    const month = birthDate.getMonth() + 1
    const year = birthDate.getFullYear()

    // Números básicos
    const dateNumbers = date.replace(/\D/g, '').split('').map(Number)
    const lifePathSum = dateNumbers.reduce((sum, num) => sum + num, 0)
    const lifePathNumber = reduceToSingleDigit(lifePathSum)

    const consonants = fullName.toLowerCase().replace(/[aeiouàáâãäèéêëìíîïòóôõöùúûü\s]/g, '')
    const personalitySum = consonants.split('').reduce((sum, char) => sum + getLetterValue(char), 0)
    const personalityNumber = reduceToSingleDigit(personalitySum)

    const vowels = fullName.toLowerCase().replace(/[^aeiouàáâãäèéêëìíîïòóôõöùúûü]/g, '')
    const soulSum = vowels.split('').reduce((sum, char) => sum + getLetterValue(char), 0)
    const soulNumber = reduceToSingleDigit(soulSum)

    const allLetters = fullName.toLowerCase().replace(/[^a-záàáâãäèéêëìíîïòóôõöùúûü]/g, '')
    const destinySum = allLetters.split('').reduce((sum, char) => sum + getLetterValue(char), 0)
    const destinyNumber = reduceToSingleDigit(destinySum)

    // Número Psíquico (dia de nascimento)
    const psychicNumber = reduceToSingleDigit(day)

    // Talentos Ocultos (números que aparecem menos no nome)
    const nameNumbers = allLetters.split('').map(char => getLetterValue(char))
    const numberFrequency = nameNumbers.reduce((acc, num) => {
      acc[num] = (acc[num] || 0) + 1
      return acc
    }, {} as {[key: number]: number})
    
    const missingNumbers = [1,2,3,4,5,6,7,8,9].filter(n => !numberFrequency[n])
    const hiddenTalents = missingNumbers.length > 0 ? missingNumbers : [Object.keys(numberFrequency).reduce((a, b) => numberFrequency[parseInt(a)] < numberFrequency[parseInt(b)] ? a : b)]

    // Lições Cármicas (números faltantes no nome)
    const karmicLessons = missingNumbers

    // Dívidas Cármicas (13, 14, 16, 19)
    const karmicDebts: number[] = []
    if (destinySum === 13 || destinySum === 14 || destinySum === 16 || destinySum === 19) karmicDebts.push(destinySum)
    if (lifePathSum === 13 || lifePathSum === 14 || lifePathSum === 16 || lifePathSum === 19) karmicDebts.push(lifePathSum)

    // Ciclos de Vida (divididos em 3 períodos)
    const firstCycle = reduceToSingleDigit(month)
    const secondCycle = reduceToSingleDigit(day)
    const thirdCycle = reduceToSingleDigit(year)
    
    // Ano, Mês e Dia Pessoal (baseado na data atual)
    const today = new Date()
    const currentYear = today.getFullYear()
    const currentMonth = today.getMonth() + 1
    const currentDay = today.getDate()
    
    const personalYearSum = month + day + reduceToSingleDigit(currentYear)
    const personalYear = reduceToSingleDigit(personalYearSum)
    
    const personalMonthSum = personalYear + currentMonth
    const personalMonth = reduceToSingleDigit(personalMonthSum)
    
    const personalDaySum = personalMonth + currentDay
    const personalDay = reduceToSingleDigit(personalDaySum)

    // Desafios (diferenças entre números)
    const challenge1 = Math.abs(reduceToSingleDigit(month) - reduceToSingleDigit(day))
    const challenge2 = Math.abs(reduceToSingleDigit(day) - reduceToSingleDigit(year))
    const challenge3 = Math.abs(challenge1 - challenge2)
    const challenge4 = Math.abs(reduceToSingleDigit(month) - reduceToSingleDigit(year))

    // Momentos Decisivos (Pinnacles)
    const pinnacle1 = reduceToSingleDigit(month + day)
    const pinnacle2 = reduceToSingleDigit(day + year)
    const pinnacle3 = reduceToSingleDigit(pinnacle1 + pinnacle2)
    const pinnacle4 = reduceToSingleDigit(month + year)

    return {
      lifePathNumber,
      personalityNumber,
      soulNumber,
      destinyNumber,
      expressionNumber: destinyNumber,
      impressionNumber: personalityNumber,
      psychicNumber,
      hiddenTalents,
      karmicLessons,
      karmicDebts,
      lifeCycles: { first: firstCycle, second: secondCycle, third: thirdCycle },
      personalYear,
      personalMonth,
      personalDay,
      challenges: [challenge1, challenge2, challenge3, challenge4],
      pinnacles: [pinnacle1, pinnacle2, pinnacle3, pinnacle4]
    }
  }

  const calculateAstrology = (date: string, time: string, place: string) => {
    const birthDate = new Date(date)
    const month = birthDate.getMonth() + 1
    const day = birthDate.getDate()

    // Determinar signo solar
    let sunSign = ''
    if ((month === 3 && day >= 21) || (month === 4 && day <= 19)) sunSign = 'Áries'
    else if ((month === 4 && day >= 20) || (month === 5 && day <= 20)) sunSign = 'Touro'
    else if ((month === 5 && day >= 21) || (month === 6 && day <= 20)) sunSign = 'Gêmeos'
    else if ((month === 6 && day >= 21) || (month === 7 && day <= 22)) sunSign = 'Câncer'
    else if ((month === 7 && day >= 23) || (month === 8 && day <= 22)) sunSign = 'Leão'
    else if ((month === 8 && day >= 23) || (month === 9 && day <= 22)) sunSign = 'Virgem'
    else if ((month === 9 && day >= 23) || (month === 10 && day <= 22)) sunSign = 'Libra'
    else if ((month === 10 && day >= 23) || (month === 11 && day <= 21)) sunSign = 'Escorpião'
    else if ((month === 11 && day >= 22) || (month === 12 && day <= 21)) sunSign = 'Sagitário'
    else if ((month === 12 && day >= 22) || (month === 1 && day <= 19)) sunSign = 'Capricórnio'
    else if ((month === 1 && day >= 20) || (month === 2 && day <= 18)) sunSign = 'Aquário'
    else sunSign = 'Peixes'

    const signs = ['Áries', 'Touro', 'Gêmeos', 'Câncer', 'Leão', 'Virgem', 'Libra', 'Escorpião', 'Sagitário', 'Capricórnio', 'Aquário', 'Peixes']
    const moonSign = signs[(day + month) % signs.length]
    const ascendant = signs[(day * month) % signs.length]

    return {
      sunSign,
      moonSign,
      ascendant,
      planets: {
        'Mercúrio': { sign: signs[(day + 1) % signs.length], house: (day % 12) + 1 },
        'Vênus': { sign: signs[(day + 2) % signs.length], house: ((day + 1) % 12) + 1 },
        'Marte': { sign: signs[(day + 3) % signs.length], house: ((day + 2) % 12) + 1 }
      },
      aspects: [
        `Sol em ${sunSign} em conjunção com Mercúrio - comunicação poderosa`,
        `Lua em ${moonSign} em trígono com Vênus - harmonia emocional`
      ],
      currentTransits: [
        'Júpiter transitando pela casa 7 - período favorável para relacionamentos',
        'Saturno transitando pela casa 10 - foco na carreira'
      ],
      houses: {
        1: 'Personalidade e aparência física',
        2: 'Valores pessoais e recursos financeiros',
        3: 'Comunicação e relacionamentos próximos',
        4: 'Lar, família e raízes emocionais',
        5: 'Criatividade, romance e filhos',
        6: 'Trabalho, saúde e rotina diária',
        7: 'Relacionamentos e parcerias',
        8: 'Transformação e recursos compartilhados',
        9: 'Filosofia, viagens e ensino superior',
        10: 'Carreira e reputação pública',
        11: 'Amizades e objetivos futuros',
        12: 'Espiritualidade e subconsciente'
      }
    }
  }

  const getChineseZodiac = (date: string) => {
    const year = new Date(date).getFullYear()
    const zodiacIndex = year % 12
    const elementIndex = year % 10
    
    // Determinar elemento baseado no ano
    const elements = ['Metal', 'Metal', 'Água', 'Água', 'Madeira', 'Madeira', 'Fogo', 'Fogo', 'Terra', 'Terra']
    const element = elements[elementIndex]
    
    // Determinar Yin ou Yang (anos pares = Yang, ímpares = Yin)
    const yinYang = year % 2 === 0 ? 'Yang' : 'Yin'
    
    const chineseZodiacData: {[key: number]: any} = {
      0: { 
        animal: 'Macaco', 
        traits: ['Inteligente', 'Criativo', 'Versátil', 'Curioso'], 
        luckyNumbers: [4, 9],
        strengths: 'Adaptabilidade excepcional, pensamento rápido, habilidade para resolver problemas complexos',
        weaknesses: 'Pode ser impaciente, disperso e ter dificuldade em manter o foco',
        careerTalents: 'Empreendedorismo, vendas, tecnologia, entretenimento',
        loveCompatibility: ['Rato', 'Dragão'],
        careerCompatibility: ['Rato', 'Serpente'],
        challenges: 'Aprender a ter paciência e persistência nas tarefas'
      },
      1: { 
        animal: 'Galo', 
        traits: ['Corajoso', 'Honesto', 'Trabalhador', 'Pontual'], 
        luckyNumbers: [5, 7, 8],
        strengths: 'Organização impecável, confiabilidade, dedicação ao trabalho',
        weaknesses: 'Perfeccionismo excessivo, pode ser crítico demais',
        careerTalents: 'Administração, contabilidade, medicina, ensino',
        loveCompatibility: ['Boi', 'Serpente'],
        careerCompatibility: ['Dragão', 'Serpente'],
        challenges: 'Aceitar imperfeições e desenvolver flexibilidade'
      },
      2: { 
        animal: 'Cão', 
        traits: ['Leal', 'Responsável', 'Confiável', 'Protetor'], 
        luckyNumbers: [3, 4, 9],
        strengths: 'Lealdade inabalável, senso de justiça, habilidade de inspirar confiança',
        weaknesses: 'Tendência à preocupação excessiva e ansiedade',
        careerTalents: 'Advocacia, serviço social, segurança, medicina veterinária',
        loveCompatibility: ['Tigre', 'Cavalo'],
        careerCompatibility: ['Coelho', 'Tigre'],
        challenges: 'Aprender a relaxar e confiar mais nos outros'
      },
      3: { 
        animal: 'Porco', 
        traits: ['Generoso', 'Compassivo', 'Diligente', 'Sincero'], 
        luckyNumbers: [2, 5, 8],
        strengths: 'Bondade natural, capacidade de perdoar, amor pela vida',
        weaknesses: 'Ingenuidade, tendência a ser usado pelos outros',
        careerTalents: 'Hospitalidade, artes culinárias, assistência social, artes',
        loveCompatibility: ['Cabra', 'Coelho'],
        careerCompatibility: ['Tigre', 'Cabra'],
        challenges: 'Desenvolver discernimento e estabelecer limites saudáveis'
      },
      4: { 
        animal: 'Rato', 
        traits: ['Inteligente', 'Adaptável', 'Charmoso', 'Ambicioso'], 
        luckyNumbers: [2, 3],
        strengths: 'Perspicácia nos negócios, charme natural, habilidade de economizar',
        weaknesses: 'Pode ser ganancioso ou excessivamente crítico',
        careerTalents: 'Finanças, negócios, escrita, pesquisa',
        loveCompatibility: ['Dragão', 'Macaco'],
        careerCompatibility: ['Boi', 'Macaco'],
        challenges: 'Equilibrar ambição com generosidade'
      },
      5: { 
        animal: 'Boi', 
        traits: ['Determinado', 'Confiável', 'Forte', 'Metódico'], 
        luckyNumbers: [1, 9],
        strengths: 'Perseverança extraordinária, força de vontade, confiabilidade total',
        weaknesses: 'Teimosia, resistência a mudanças',
        careerTalents: 'Agricultura, construção, medicina, administração',
        loveCompatibility: ['Rato', 'Serpente'],
        careerCompatibility: ['Galo', 'Serpente'],
        challenges: 'Desenvolver flexibilidade e abertura para novas ideias'
      },
      6: { 
        animal: 'Tigre', 
        traits: ['Corajoso', 'Competitivo', 'Carismático', 'Aventureiro'], 
        luckyNumbers: [1, 3, 4],
        strengths: 'Liderança natural, coragem incomparável, carisma magnético',
        weaknesses: 'Impulsividade, tendência a assumir riscos desnecessários',
        careerTalents: 'Liderança, esportes, militares, empreendedorismo',
        loveCompatibility: ['Cavalo', 'Cão'],
        careerCompatibility: ['Dragão', 'Cavalo'],
        challenges: 'Aprender a pensar antes de agir e desenvolver paciência'
      },
      7: { 
        animal: 'Coelho', 
        traits: ['Gentil', 'Elegante', 'Responsável', 'Diplomático'], 
        luckyNumbers: [3, 4, 6],
        strengths: 'Diplomacia refinada, sensibilidade artística, habilidade de mediar conflitos',
        weaknesses: 'Indecisão, evitação de confrontos',
        careerTalents: 'Artes, design, diplomacia, psicologia',
        loveCompatibility: ['Cabra', 'Porco'],
        careerCompatibility: ['Cão', 'Porco'],
        challenges: 'Desenvolver assertividade e tomar decisões difíceis'
      },
      8: { 
        animal: 'Dragão', 
        traits: ['Confiante', 'Inteligente', 'Entusiasmado', 'Visionário'], 
        luckyNumbers: [1, 6, 7],
        strengths: 'Energia ilimitada, visão de futuro, capacidade de inspirar multidões',
        weaknesses: 'Arrogância, impaciência com detalhes',
        careerTalents: 'Política, entretenimento, inovação tecnológica, liderança empresarial',
        loveCompatibility: ['Rato', 'Macaco'],
        careerCompatibility: ['Galo', 'Rato'],
        challenges: 'Cultivar humildade e atenção aos detalhes'
      },
      9: { 
        animal: 'Serpente', 
        traits: ['Sábio', 'Intuitivo', 'Misterioso', 'Sofisticado'], 
        luckyNumbers: [2, 8, 9],
        strengths: 'Sabedoria profunda, intuição aguçada, capacidade analítica',
        weaknesses: 'Desconfiança, tendência ao ciúme',
        careerTalents: 'Filosofia, pesquisa científica, investimentos, psicologia',
        loveCompatibility: ['Boi', 'Galo'],
        careerCompatibility: ['Macaco', 'Galo'],
        challenges: 'Aprender a confiar e ser mais aberto emocionalmente'
      },
      10: { 
        animal: 'Cavalo', 
        traits: ['Energético', 'Independente', 'Alegre', 'Livre'], 
        luckyNumbers: [2, 3, 7],
        strengths: 'Independência robusta, otimismo contagiante, energia inesgotável',
        weaknesses: 'Inquietude, dificuldade em compromissos de longo prazo',
        careerTalents: 'Viagens, jornalismo, esportes, vendas',
        loveCompatibility: ['Tigre', 'Cão'],
        careerCompatibility: ['Cabra', 'Tigre'],
        challenges: 'Desenvolver consistência e honrar compromissos'
      },
      11: { 
        animal: 'Cabra', 
        traits: ['Gentil', 'Compassivo', 'Artístico', 'Pacífico'], 
        luckyNumbers: [3, 9, 4],
        strengths: 'Criatividade excepcional, empatia profunda, habilidades artísticas',
        weaknesses: 'Insegurança, dependência emocional',
        careerTalents: 'Artes plásticas, música, terapia, design',
        loveCompatibility: ['Coelho', 'Porco'],
        careerCompatibility: ['Cavalo', 'Porco'],
        challenges: 'Construir autoconfiança e independência emocional'
      }
    }
    
    const zodiac = chineseZodiacData[zodiacIndex]
    return {
      ...zodiac,
      element,
      yinYang,
      fullSign: `${zodiac.animal} de ${element} ${yinYang}`
    }
  }

  const calculateAstrocartography = (fullName: string, date: string, time: string, place: string, currentCity?: string) => {
    const generatePersonalHash = (data: string): number => {
      let hash = 0
      for (let i = 0; i < data.length; i++) {
        const char = data.charCodeAt(i)
        hash = ((hash << 5) - hash) + char
        hash = hash & hash
      }
      return Math.abs(hash)
    }

    const personalData = `${fullName}${date}${time}${place}`.toLowerCase().replace(/\s/g, '')
    const personalHash = generatePersonalHash(personalData)
    
    const birthDate = new Date(date)
    const birthDay = birthDate.getDate()
    const birthMonth = birthDate.getMonth() + 1
    const nameLength = fullName.replace(/\s/g, '').length
    
    const sunIndex = (personalHash + birthDay) % 100
    const moonIndex = (personalHash + birthMonth) % 100
    const venusIndex = (personalHash + nameLength) % 100

    const worldLocations = {
      solar: ['Los Angeles, EUA', 'Sydney, Austrália', 'Tóquio, Japão', 'Dubai, EAU', 'São Paulo, Brasil'],
      lunar: ['Londres, Reino Unido', 'Dublin, Irlanda', 'Amsterdam, Holanda', 'Vancouver, Canadá'],
      venus: ['Paris, França', 'Veneza, Itália', 'Rio de Janeiro, Brasil', 'Bali, Indonésia']
    }

    const selectPersonalizedLocations = (locationArray: string[], index: number, count: number = 3): string[] => {
      const selected: string[] = []
      for (let i = 0; i < count; i++) {
        const locationIndex = (index + i * 7) % locationArray.length
        selected.push(locationArray[locationIndex])
      }
      return selected
    }

    const sunLines = selectPersonalizedLocations(worldLocations.solar, sunIndex, 4)
    const moonLines = selectPersonalizedLocations(worldLocations.lunar, moonIndex, 4)
    const venusLines = selectPersonalizedLocations(worldLocations.venus, venusIndex, 4)

    let currentCityAnalysis: { city: string; benefits: string[]; pointsOfAttention: string[] } | undefined
    if (currentCity && currentCity.trim()) {
      const cityHash = generatePersonalHash(`${fullName}${date}${currentCity.trim()}`.toLowerCase().replace(/\s/g, ''))
      const benefitsPool = [
        'Favorece sua expressão pessoal e visibilidade; aproveite para projetos que queiram destacar.',
        'A energia do local apoia relacionamentos e parcerias; bom momento para cultivar vínculos.',
        'Propício para estudo, introspecção e crescimento espiritual; reserve tempo para reflexão.',
        'Estimula criatividade e comunicação; ideal para trabalhos em equipe e networking.',
        'Favorece estabilidade financeira e construção de bases sólidas; bom para planejamento de longo prazo.',
        'A região ressoa com suas energias de liderança; oportunidades de assumir mais protagonismo.',
        'Benéfico para saúde e rotinas; aproveite para consolidar hábitos saudáveis.',
        'Energia favorável para decisões importantes e fechamento de ciclos.'
      ]
      const attentionPool = [
        'Evite tomar decisões impulsivas em períodos de stress; espere a poeira baixar.',
        'Cuide de limites em relacionamentos para não sobrecarregar-se emocionalmente.',
        'Atenção a gastos e compromissos financeiros; mantenha uma reserva de segurança.',
        'Possível tendência ao isolamento; equilibre solitude com encontros que fazem bem.',
        'Períodos de maior sensibilidade; proteja-se de ambientes ou pessoas tóxicas.',
        'Evite assumir responsabilidades demais; priorize o que é essencial.',
        'Atenção à saúde em mudanças de rotina ou viagens; descanse o suficiente.',
        'Comunicação pode gerar mal-entendidos; confirme combinados por escrito quando for importante.'
      ]
      const pickFrom = (arr: string[], n: number) => {
        const out: string[] = []
        for (let i = 0; i < n; i++) {
          const idx = (cityHash + i * 11 + birthDay) % arr.length
          out.push(arr[idx])
        }
        return out
      }
      currentCityAnalysis = {
        city: currentCity.trim(),
        benefits: pickFrom(benefitsPool, 3),
        pointsOfAttention: pickFrom(attentionPool, 3)
      }
    }

    return {
      sunLines,
      moonLines,
      venusLines,
      marsLines: ['Berlim, Alemanha', 'Seul, Coreia do Sul', 'Hong Kong', 'Nova York, EUA'],
      jupiterLines: ['Nova Delhi, Índia', 'Bangkok, Tailândia', 'Cairo, Egito', 'Jerusalém, Israel'],
      saturnLines: ['Moscou, Rússia', 'Oslo, Noruega', 'Helsinki, Finlândia', 'Montreal, Canadá'],
      favorableLocations: {
        'Amor e Relacionamentos': selectPersonalizedLocations(worldLocations.venus, venusIndex, 5),
        'Carreira e Sucesso': selectPersonalizedLocations([...worldLocations.solar], sunIndex, 5),
        'Espiritualidade e Crescimento': selectPersonalizedLocations([...worldLocations.lunar], moonIndex, 5)
      },
      challengingLocations: {
        'Tensões Emocionais': ['Moscou, Rússia', 'Helsinki, Finlândia'],
        'Desafios Financeiros': ['Berlim, Alemanha', 'Seul, Coreia do Sul']
      },
      recommendations: [
        `Para ${fullName}: Suas linhas solares em ${sunLines[0]} são especialmente poderosas durante o verão`,
        `Baseado em sua data de nascimento, ${venusLines[0]} oferece as melhores oportunidades românticas`,
        `Seu local de nascimento (${place}) cria uma conexão especial com ${moonLines[0]} para equilíbrio emocional`
      ],
      personalizedAnalysis: `Baseado em sua configuração astrológica única - nascido(a) em ${new Date(date).toLocaleDateString('pt-BR')} ${time ? `às ${time}` : ''} em ${place} - seu mapa astrocartográfico revela padrões energéticos específicos. Suas linhas planetárias mais poderosas se concentram em ${sunLines[0]} (linha solar) para liderança e reconhecimento, ${venusLines[0]} (linha de Vênus) para amor e relacionamentos, e ${moonLines[0]} (linha lunar) para equilíbrio emocional.`,
      currentCityAnalysis
    }
  }

  const fetchAndGenerateReport = useCallback(async (paymentId?: string) => {
    setIsGeneratingReport(true)
    try {
      let result = null

      if (paymentId) {
        const response = await fetch(`/api/get-report?payment_id=${paymentId}`)
        result = await response.json()
      }

      // Fallback: buscar por email (da URL ou do localStorage)
      if (!result?.success) {
        const urlEmail = searchParams.get('email')
        const email = urlEmail || (typeof window !== 'undefined' ? localStorage.getItem('last_customer_email') : null)
        if (email) {
          const response = await fetch(`/api/get-latest-payment?email=${encodeURIComponent(email)}`)
          result = await response.json()
        }
      }

      if (result?.success && result.data) {
        const { personalData, planType } = result.data
        const isLovePlan = planType === 'love_compatibility'

        // Fallback: plano compatibilidade amorosa mas dados do parceiro não vieram do pedido (ex.: pedido antigo ou bug)
        let partnerFullName = personalData.partnerFullName?.trim()
        let partnerBirthDate = personalData.partnerBirthDate?.trim()
        if (isLovePlan && (!partnerFullName || !partnerBirthDate) && typeof window !== 'undefined') {
          const storedName = window.localStorage.getItem('last_partner_full_name')
          const storedDate = window.localStorage.getItem('last_partner_birth_date')
          if (storedName?.trim() && storedDate?.trim()) {
            partnerFullName = partnerFullName || storedName.trim()
            partnerBirthDate = partnerBirthDate || storedDate.trim()
          }
        }

        const numerology = calculateCompleteNumerology(personalData.fullName, personalData.birthDate)
        const astrology = calculateAstrology(personalData.birthDate, personalData.birthTime, personalData.birthPlace)
        const chineseZodiac = getChineseZodiac(personalData.birthDate)
        const astrocartography = calculateAstrocartography(personalData.fullName, personalData.birthDate, personalData.birthTime, personalData.birthPlace, personalData.currentCity)

        let loveCompatibility = undefined
        if (partnerFullName && partnerBirthDate) {
          loveCompatibility = calculateLoveCompatibility(
            personalData.birthDate,
            personalData.fullName,
            partnerBirthDate,
            partnerFullName
          )
        }

        setReportData({
          personalData,
          numerology,
          astrology,
          chineseZodiac,
          astrocartography,
          ...(loveCompatibility && { loveCompatibility })
        })
      }
    } catch (error) {
      console.log('Erro ao gerar relatório automaticamente:', error)
    } finally {
      setIsGeneratingReport(false)
    }
  }, [searchParams])

  const handleDownloadPDF = () => {
    if (!reportData) {
      console.error('Dados não disponíveis')
      return
    }

    if (isLikelyRestrictedInAppBrowser()) {
      setPdfWebViewHelpOpen(true)
      return
    }

    setIsDownloadingPDF(true)
    requestNativeDocumentPrint({
      documentTitle: `Relatório Místico - ${reportData.personalData.fullName}`,
      printMode: 'full',
      onDialogClose: () => setIsDownloadingPDF(false),
    })
  }

  useEffect(() => {
    console.log('🔄 useEffect disparado com:', { canceled, status, paymentId, sessionId, autoGenerate })
    console.log('📱 Verificando localStorage:', {
      payment_id: typeof window !== 'undefined' ? localStorage.getItem('last_payment_id') : null,
      customer_name: typeof window !== 'undefined' ? localStorage.getItem('last_customer_name') : null,
      customer_email: typeof window !== 'undefined' ? localStorage.getItem('last_customer_email') : null
    })
    
    if (canceled) {
      setPaymentStatus('error')
      return
    }

    // Para Kiwify, verificamos o status e payment_id
    if (status === 'success' || paymentId || sessionId) {
      setPaymentStatus('success')
      
      console.log('✅ Status de pagamento: success')
      
      // Sempre tentar gerar o relatório automaticamente
      if (paymentId) {
        console.log('📡 Gerando relatório com payment_id:', paymentId)
        fetchAndGenerateReport(paymentId)
      } else {
        console.log('📦 Gerando relatório sem payment_id, buscando do localStorage')
        fetchAndGenerateReport()
      }
    } else if (status === 'error' || status === 'canceled') {
      setPaymentStatus('error')
    } else {
      // Se não temos parâmetros claros, assumimos sucesso se estamos nesta página
      console.log('⚠️ Sem parâmetros claros, assumindo sucesso')
      setPaymentStatus('success')
      // Tentar gerar o relatório mesmo assim
      fetchAndGenerateReport()
    }
  }, [sessionId, canceled, paymentId, status, autoGenerate, fetchAndGenerateReport])

  if (paymentStatus === 'loading') {
    return (
      <div className="min-h-screen bg-gradient-to-br from-purple-50 via-pink-50 to-indigo-50 dark:from-gray-900 dark:via-purple-900 dark:to-indigo-900 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-purple-600 mx-auto mb-4"></div>
          <p className="text-gray-600 dark:text-gray-400">Verificando status do pagamento...</p>
        </div>
      </div>
    )
  }

  if (paymentStatus === 'success') {
    // Se está gerando o relatório, mostrar loading
    if (isGeneratingReport) {
      return (
        <div className="min-h-screen bg-gradient-to-br from-purple-50 via-pink-50 to-indigo-50 dark:from-gray-900 dark:via-purple-900 dark:to-indigo-900 flex items-center justify-center px-4">
          <div className="max-w-md w-full bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-2xl text-center">
            <div className="w-16 h-16 bg-green-100 dark:bg-green-900 rounded-full flex items-center justify-center mx-auto mb-6">
              <CheckCircle className="w-8 h-8 text-green-600 dark:text-green-400" />
            </div>
            
            <h1 className="text-2xl font-bold text-gray-800 dark:text-gray-200 mb-4">
              Pagamento Realizado com Sucesso! 🎉
            </h1>
            
            <div className="flex items-center justify-center gap-3 mb-6">
              <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-purple-600"></div>
              <p className="text-gray-600 dark:text-gray-400">
                Gerando seu Relatório Místico Completo...
              </p>
            </div>
            
            <div className="bg-purple-50 dark:bg-purple-900 rounded-xl p-4 mb-6">
              <p className="text-sm text-purple-700 dark:text-purple-300">
                <strong>ID da Transação:</strong> {paymentId || sessionId || 'Processando...'}
              </p>
              <p className="text-xs text-purple-600 dark:text-purple-400 mt-1">
                Pagamento processado com segurança via Kiwify
              </p>
            </div>
          </div>
        </div>
      )
    }

    // Se tem relatório, mostrar o relatório completo
    if (reportData) {
      return (
        <div className="min-h-screen bg-gradient-to-br from-purple-50 via-pink-50 to-indigo-50 dark:from-gray-900 dark:via-purple-900 dark:to-indigo-900">
          <PdfWebViewHelpDialog
            open={pdfWebViewHelpOpen}
            onOpenChange={setPdfWebViewHelpOpen}
          />
          {/* Menu de Navegação Fixo no Topo */}
          <div className="fixed top-0 left-0 right-0 bg-white dark:bg-gray-800 shadow-lg z-50 no-print border-b-2 border-purple-200 dark:border-purple-800">
            <div className="container mx-auto px-4 py-3">
              <div className={`grid gap-2 sm:gap-3 ${reportData.loveCompatibility ? 'grid-cols-3 sm:grid-cols-6' : 'grid-cols-5'}`}>
                <a
                  href="#numerologia"
                  className="flex flex-col items-center gap-1 sm:gap-2 bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-900/50 dark:to-pink-900/50 hover:from-purple-100 hover:to-pink-100 dark:hover:from-purple-800/50 dark:hover:to-pink-800/50 rounded-lg sm:rounded-xl p-2 sm:p-3 transition-all duration-300 border-2 border-transparent hover:border-purple-300 dark:hover:border-purple-600"
                >
                  <span className="text-xl sm:text-2xl">🔢</span>
                  <span className="text-[10px] sm:text-xs font-semibold text-gray-800 dark:text-gray-200 text-center">Numerologia</span>
                </a>

                <a
                  href="#astrologia"
                  className="flex flex-col items-center gap-1 sm:gap-2 bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-900/50 dark:to-indigo-900/50 hover:from-blue-100 hover:to-indigo-100 dark:hover:from-blue-800/50 dark:hover:to-indigo-800/50 rounded-lg sm:rounded-xl p-2 sm:p-3 transition-all duration-300 border-2 border-transparent hover:border-blue-300 dark:hover:border-blue-600"
                >
                  <span className="text-xl sm:text-2xl">⭐</span>
                  <span className="text-[10px] sm:text-xs font-semibold text-gray-800 dark:text-gray-200 text-center">Astrologia</span>
                </a>

                <a
                  href="#zodiaco-chines"
                  className="flex flex-col items-center gap-1 sm:gap-2 bg-gradient-to-br from-red-50 to-orange-50 dark:from-red-900/50 dark:to-orange-900/50 hover:from-red-100 hover:to-orange-100 dark:hover:from-red-800/50 dark:hover:to-orange-800/50 rounded-lg sm:rounded-xl p-2 sm:p-3 transition-all duration-300 border-2 border-transparent hover:border-red-300 dark:hover:border-red-600"
                >
                  <span className="text-xl sm:text-2xl">🐉</span>
                  <span className="text-[10px] sm:text-xs font-semibold text-gray-800 dark:text-gray-200 text-center">Zodíaco</span>
                </a>

                <a
                  href="#astrocartografia"
                  className="flex flex-col items-center gap-1 sm:gap-2 bg-gradient-to-br from-green-50 to-teal-50 dark:from-green-900/50 dark:to-teal-900/50 hover:from-green-100 hover:to-teal-100 dark:hover:from-green-800/50 dark:to-teal-800/50 rounded-lg sm:rounded-xl p-2 sm:p-3 transition-all duration-300 border-2 border-transparent hover:border-green-300 dark:hover:border-green-600"
                >
                  <span className="text-xl sm:text-2xl">🌍</span>
                  <span className="text-[10px] sm:text-xs font-semibold text-gray-800 dark:text-gray-200 text-center">Astrocartografia</span>
                </a>

                <a
                  href="#horoscope-section"
                  className="flex flex-col items-center gap-1 sm:gap-2 bg-gradient-to-br from-yellow-50 to-amber-50 dark:from-yellow-900/50 dark:to-amber-900/50 hover:from-yellow-100 hover:to-amber-100 dark:hover:from-yellow-800/50 dark:hover:to-amber-800/50 rounded-lg sm:rounded-xl p-2 sm:p-3 transition-all duration-300 border-2 border-transparent hover:border-yellow-300 dark:hover:border-yellow-600"
                >
                  <span className="text-xl sm:text-2xl">✨</span>
                  <span className="text-[10px] sm:text-xs font-semibold text-gray-800 dark:text-gray-200 text-center">Horóscopo</span>
                </a>

                {reportData.loveCompatibility && (
                  <a
                    href="#compatibilidade"
                    className="flex flex-col items-center gap-1 sm:gap-2 bg-gradient-to-br from-pink-50 to-rose-50 dark:from-pink-900/50 dark:to-rose-900/50 hover:from-pink-100 hover:to-rose-100 dark:hover:from-pink-800/50 dark:hover:to-rose-800/50 rounded-lg sm:rounded-xl p-2 sm:p-3 transition-all duration-300 border-2 border-transparent hover:border-pink-300 dark:hover:border-pink-600"
                  >
                    <span className="text-xl sm:text-2xl">❤️</span>
                    <span className="text-[10px] sm:text-xs font-semibold text-gray-800 dark:text-gray-200 text-center">Compatibilidade</span>
                  </a>
                )}
              </div>
            </div>
          </div>

          <div className="container mx-auto px-4 py-6 sm:py-8 pt-24 sm:pt-28" ref={reportRef}>
            {/* Header do Relatório */}
            <div className="text-center bg-gradient-to-r from-purple-50 to-pink-50 dark:from-purple-900 dark:to-pink-900 rounded-2xl p-6 sm:p-8 mb-8">
              <div className="w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-6">
                <BookOpen className="w-8 h-8 sm:w-10 sm:h-10 text-white" />
              </div>
              <h1 className="text-2xl sm:text-4xl font-bold text-gray-800 dark:text-gray-200 mb-4">
                Relatório Místico Completo
              </h1>
              <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-400 mb-2">
                {reportData.personalData.fullName}
              </p>
              <p className="text-sm sm:text-base text-gray-500 dark:text-gray-500">
                Nascido em {new Date(reportData.personalData.birthDate).toLocaleDateString('pt-BR')}
              </p>
              <div className="mt-4 sm:mt-6 text-xs sm:text-sm text-gray-600 dark:text-gray-400 italic">
                "Conhece-te a ti mesmo e conhecerás o universo e os deuses" - Oráculo de Delfos
              </div>
            </div>

            {/* Relatório Detalhado Completo */}
            <DetailedReport reportData={reportData} />

            {/* Mensagem Final Inspiradora */}
            <div className="text-center bg-gradient-to-r from-purple-50 to-pink-50 dark:from-purple-900 dark:to-pink-900 rounded-2xl p-6 sm:p-8">
              <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <Star className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-gray-800 dark:text-gray-200 mb-4">
                Sua Jornada de Autoconhecimento e Transformação
              </h3>
              <div className="max-w-4xl mx-auto space-y-4 text-sm sm:text-base text-gray-600 dark:text-gray-400">
                <p>
                  Este relatório é muito mais que uma simples análise - é um mapa sagrado para sua jornada de autoconhecimento e crescimento espiritual. 
                  Cada número, cada posição planetária, cada símbolo chinês carrega uma mensagem especial do universo para você.
                </p>
                <p>
                  Use essas informações como uma bússola em sua caminhada pela vida. Lembre-se: você tem o poder de criar sua própria realidade, 
                  e agora possui as ferramentas ancestrais para fazê-lo de forma mais sábia, consciente e alinhada com seu propósito divino.
                </p>
              </div>
              <div className="mt-6 sm:mt-8 p-4 sm:p-6 bg-white dark:bg-gray-800 rounded-xl max-w-2xl mx-auto">
                <p className="text-base sm:text-lg font-semibold text-gray-800 dark:text-gray-200 mb-2">
                  "O conhecimento de si mesmo é o começo de toda sabedoria."
                </p>
                <p className="text-xs sm:text-sm text-gray-500 dark:text-gray-400 italic">
                  - Aristóteles
                </p>
              </div>
              <div className="mt-4 sm:mt-6 text-xs sm:text-sm text-gray-500 dark:text-gray-400">
                <p>✨ Que este relatório ilumine seu caminho e desperte a magia que já existe dentro de você ✨</p>
              </div>
            </div>

            {/* Botões de ação */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mt-8">
              <button
                onClick={handleDownloadPDF}
                disabled={isDownloadingPDF}
                className="inline-flex items-center gap-2 bg-gradient-to-r from-green-600 to-emerald-600 text-white px-6 py-3 rounded-xl font-semibold hover:from-green-700 hover:to-emerald-700 transition-all duration-300 shadow-lg disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isDownloadingPDF ? (
                  <>
                    <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white"></div>
                    Gerando PDF...
                  </>
                ) : (
                  <>
                    <Download className="w-5 h-5" />
                    Baixar Relatório em PDF
                  </>
                )}
              </button>
              
              {/* <Link 
                href="/"
                className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-600 to-pink-600 text-white px-6 py-3 rounded-xl font-semibold hover:from-purple-700 hover:to-pink-700 transition-all duration-300 shadow-lg"
              >
                <ArrowLeft className="w-4 h-4" />
                Gerar Novo Relatório
              </Link> */}
            </div>
          </div>
        </div>
      )
    }

    // Se pagamento foi bem-sucedido mas ainda não tem relatório
    return (
      <div className="min-h-screen bg-gradient-to-br from-purple-50 via-pink-50 to-indigo-50 dark:from-gray-900 dark:via-purple-900 dark:to-indigo-900 flex items-center justify-center px-4">
        <div className="max-w-md w-full bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-2xl text-center">
          <div className="w-16 h-16 bg-green-100 dark:bg-green-900 rounded-full flex items-center justify-center mx-auto mb-6 animate-pulse">
            <CheckCircle className="w-8 h-8 text-green-600 dark:text-green-400" />
          </div>
          
          <h1 className="text-2xl font-bold text-gray-800 dark:text-gray-200 mb-4">
            Pagamento Realizado com Sucesso! 🎉
          </h1>
          
          <p className="text-gray-600 dark:text-gray-400 mb-6">
            Seu Relatório Místico Completo está pronto para ser visualizado.
          </p>
          
          <div className="bg-purple-50 dark:bg-purple-900 rounded-xl p-4 mb-6">
            <p className="text-sm text-purple-700 dark:text-purple-300">
              <strong>ID da Transação:</strong> {paymentId || sessionId || 'Processando...'}
            </p>
            <p className="text-xs text-purple-600 dark:text-purple-400 mt-1">
              Pagamento processado com segurança via Kiwify
            </p>
          </div>

          <div className="bg-gradient-to-r from-purple-100 to-pink-100 dark:from-purple-900/50 dark:to-pink-900/50 rounded-xl p-4 mb-6 border-2 border-purple-300 dark:border-purple-700">
            <p className="text-sm text-gray-700 dark:text-gray-300 mb-3">
              ✨ <strong>Clique no botão abaixo para acessar seu relatório completo</strong>
            </p>
            <p className="text-xs text-gray-600 dark:text-gray-400">
              Seu relatório inclui Numerologia, Astrologia, Zodíaco Chinês e Astrocartografia
            </p>
          </div>

          <button
            onClick={() => fetchAndGenerateReport(paymentId || undefined)}
            className="w-full mb-4 inline-flex items-center justify-center gap-2 bg-gradient-to-r from-purple-600 to-pink-600 text-white px-6 py-4 rounded-xl font-semibold hover:from-purple-700 hover:to-pink-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 animate-pulse"
          >
            <BookOpen className="w-5 h-5" />
            Visualizar Meu Relatório Completo
          </button>
          
          <Link 
            href="/"
            className="inline-flex items-center gap-2 text-gray-600 dark:text-gray-400 hover:text-gray-800 dark:hover:text-gray-200 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Voltar ao Início
          </Link>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-pink-50 to-indigo-50 dark:from-gray-900 dark:via-purple-900 dark:to-indigo-900 flex items-center justify-center px-4">
      <div className="max-w-md w-full bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-2xl text-center">
        <div className="w-16 h-16 bg-red-100 dark:bg-red-900 rounded-full flex items-center justify-center mx-auto mb-6">
          <XCircle className="w-8 h-8 text-red-600 dark:text-red-400" />
        </div>
        
        <h1 className="text-2xl font-bold text-gray-800 dark:text-gray-200 mb-4">
          Pagamento Cancelado
        </h1>
        
        <p className="text-gray-600 dark:text-gray-400 mb-6">
          {canceled ? 'Você cancelou o pagamento.' : 'Houve um problema com o pagamento.'} Não se preocupe, você pode tentar novamente.
        </p>
        
        <Link 
          href="/"
          className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-600 to-pink-600 text-white px-6 py-3 rounded-xl font-semibold hover:from-purple-700 hover:to-pink-700 transition-all duration-300"
        >
          <ArrowLeft className="w-4 h-4" />
          Tentar Novamente
        </Link>
      </div>
    </div>
  )
}

export default function SuccessPage() {
  return (
    <Suspense fallback={
      <div className="min-h-screen bg-gradient-to-br from-purple-50 via-pink-50 to-indigo-50 dark:from-gray-900 dark:via-purple-900 dark:to-indigo-900 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-purple-600 mx-auto mb-4"></div>
          <p className="text-gray-600 dark:text-gray-400">Carregando...</p>
        </div>
      </div>
    }>
      <SuccessPageContent />
    </Suspense>
  )
}