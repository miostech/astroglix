'use client'

import { useState, useEffect, useMemo } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Country, State, City } from 'country-state-city'
import { Calendar, Star, Calculator, Sparkles, Heart, Zap, Eye, Crown, CreditCard, Lock, CheckCircle, Moon, Sun, MapPin, Compass, BookOpen, Target, TrendingUp, Users, Brain, Shield, Award, Gem, Clock, Lightbulb, AlertCircle, ChevronDown, ChevronUp } from 'lucide-react'
import { KIWIFY_CONFIG } from '@/lib/stripe'
import DetailedReport from '@/components/DetailedReport'
import iconNumerologia from '@/app/icon_numerologia.png'
import iconAstrologia from '@/app/icon_astrologia.png'
import iconChinese from '@/app/icon_chinese.png'
import iconCartografia from '@/app/icon_cartografia.png'

interface PersonalData {
  fullName: string
  email: string
  birthDate: string
  birthTime: string
  birthPlace: string
  currentCity: string
}

interface NumerologyResult {
  lifePathNumber: number
  personalityNumber: number
  soulNumber: number
  destinyNumber: number
  expressionNumber: number
  impressionNumber: number
  psychicNumber: number
  hiddenTalents: number[]
  karmicLessons: number[]
  karmicDebts: number[]
  lifeCycles: number[]
  personalYear: number
  personalMonth: number
  personalDay: number
  challenges: number[]
  pinnacles: number[]
  decisiveMoments: number[]
}

interface AstrologyResult {
  sunSign: string
  moonSign: string
  ascendant: string
  planets: { [key: string]: { sign: string, house: number } }
  aspects: string[]
  currentTransits: string[]
  houses: { [key: number]: string }
}

interface ChineseZodiac {
  animal: string
  element: string
  yinYang: string
  traits: string[]
  compatibility: string[]
  loveCompatibility: string[]
  careerCompatibility: string[]
  luckyNumbers: number[]
  luckyColors: string[]
  careerAdvice: string[]
  relationshipTips: string[]
  challenges: string[]
  strengths: string[] | string
  fullSign?: string
  careerTalents?: string
  weaknesses?: string
}

interface AstrocartographyResult {
  sunLines: string[]
  moonLines: string[]
  venusLines: string[]
  marsLines: string[]
  jupiterLines: string[]
  saturnLines: string[]
  favorableLocations: { [key: string]: string[] }
  challengingLocations: { [key: string]: string[] }
  recommendations: string[]
  personalizedAnalysis: string
  currentCityAnalysis?: {
    city: string
    benefits: string[]
    pointsOfAttention: string[]
  }
}

const chineseZodiacData: { [key: number]: ChineseZodiac } = {
  0: {
    animal: 'Macaco',
    element: 'Metal',
    yinYang: 'Yang',
    traits: ['Inteligente', 'Criativo', 'Versátil', 'Esperto', 'Sociável'],
    compatibility: ['Rato', 'Dragão'],
    loveCompatibility: ['Rato', 'Dragão'],
    careerCompatibility: ['Rato', 'Serpente'],
    luckyNumbers: [4, 9],
    luckyColors: ['Dourado', 'Branco'],
    careerAdvice: ['Tecnologia', 'Comunicação', 'Vendas', 'Entretenimento'],
    relationshipTips: ['Busque parceiros intelectuais', 'Valorize a liberdade', 'Comunique-se abertamente'],
    challenges: ['Impaciência', 'Superficialidade', 'Inquietação'],
    strengths: ['Adaptabilidade', 'Inteligência', 'Carisma']
  },
  1: {
    animal: 'Galo',
    element: 'Metal',
    yinYang: 'Yin',
    traits: ['Corajoso', 'Honesto', 'Trabalhador', 'Pontual', 'Organizado'],
    compatibility: ['Boi', 'Serpente'],
    loveCompatibility: ['Boi', 'Serpente'],
    careerCompatibility: ['Dragão', 'Serpente'],
    luckyNumbers: [5, 7, 8],
    luckyColors: ['Dourado', 'Marrom'],
    careerAdvice: ['Administração', 'Militar', 'Agricultura', 'Contabilidade'],
    relationshipTips: ['Seja direto e honesto', 'Valorize a lealdade', 'Mantenha rotinas'],
    challenges: ['Crítica excessiva', 'Perfeccionismo', 'Teimosia'],
    strengths: ['Honestidade', 'Determinação', 'Organização']
  },
  2: {
    animal: 'Cão',
    element: 'Terra',
    yinYang: 'Yang',
    traits: ['Leal', 'Responsável', 'Confiável', 'Justo', 'Protetor'],
    compatibility: ['Tigre', 'Coelho'],
    loveCompatibility: ['Tigre', 'Cavalo'],
    careerCompatibility: ['Coelho', 'Tigre'],
    luckyNumbers: [3, 4, 9],
    luckyColors: ['Verde', 'Vermelho'],
    careerAdvice: ['Direito', 'Segurança', 'Serviço Social', 'Veterinária'],
    relationshipTips: ['Construa confiança gradualmente', 'Seja fiel', 'Proteja quem ama'],
    challenges: ['Pessimismo', 'Ansiedade', 'Desconfiança'],
    strengths: ['Lealdade', 'Justiça', 'Proteção']
  },
  3: {
    animal: 'Porco',
    element: 'Terra',
    yinYang: 'Yin',
    traits: ['Generoso', 'Compassivo', 'Diligente', 'Honesto', 'Otimista'],
    compatibility: ['Coelho', 'Cabra'],
    loveCompatibility: ['Cabra', 'Coelho'],
    careerCompatibility: ['Tigre', 'Cabra'],
    luckyNumbers: [2, 5, 8],
    luckyColors: ['Amarelo', 'Cinza'],
    careerAdvice: ['Gastronomia', 'Hospitalidade', 'Finanças', 'Arte'],
    relationshipTips: ['Seja generoso com afeto', 'Valorize a harmonia', 'Cultive a paciência'],
    challenges: ['Ingenuidade', 'Materialismo', 'Indulgência'],
    strengths: ['Generosidade', 'Honestidade', 'Compaixão']
  },
  4: {
    animal: 'Rato',
    element: 'Metal',
    yinYang: 'Yang',
    traits: ['Inteligente', 'Adaptável', 'Charmoso', 'Ambicioso', 'Sociável'],
    compatibility: ['Dragão', 'Macaco'],
    loveCompatibility: ['Dragão', 'Macaco'],
    careerCompatibility: ['Boi', 'Macaco'],
    luckyNumbers: [2, 3],
    luckyColors: ['Azul', 'Dourado'],
    careerAdvice: ['Negócios', 'Política', 'Escritor', 'Pesquisador'],
    relationshipTips: ['Use seu charme natural', 'Seja adaptável', 'Mantenha-se interessante'],
    challenges: ['Oportunismo', 'Ganância', 'Inquietação'],
    strengths: ['Inteligência', 'Adaptabilidade', 'Charme']
  },
  5: {
    animal: 'Boi',
    element: 'Metal',
    yinYang: 'Yin',
    traits: ['Determinado', 'Confiável', 'Forte', 'Paciente', 'Metódico'],
    compatibility: ['Serpente', 'Galo'],
    loveCompatibility: ['Rato', 'Serpente'],
    careerCompatibility: ['Galo', 'Serpente'],
    luckyNumbers: [1, 9],
    luckyColors: ['Azul', 'Amarelo'],
    careerAdvice: ['Agricultura', 'Construção', 'Medicina', 'Engenharia'],
    relationshipTips: ['Seja consistente', 'Demonstre estabilidade', 'Valorize tradições'],
    challenges: ['Teimosia', 'Lentidão', 'Conservadorismo'],
    strengths: ['Determinação', 'Confiabilidade', 'Paciência']
  },
  6: {
    animal: 'Tigre',
    element: 'Madeira',
    yinYang: 'Yang',
    traits: ['Corajoso', 'Competitivo', 'Imprevisível', 'Carismático', 'Independente'],
    compatibility: ['Cavalo', 'Cão'],
    loveCompatibility: ['Cavalo', 'Cão'],
    careerCompatibility: ['Dragão', 'Cavalo'],
    luckyNumbers: [1, 3, 4],
    luckyColors: ['Azul', 'Cinza'],
    careerAdvice: ['Liderança', 'Esportes', 'Aventura', 'Empreendedorismo'],
    relationshipTips: ['Mantenha a paixão viva', 'Respeite a independência', 'Seja aventureiro'],
    challenges: ['Impulsividade', 'Rebeldia', 'Impaciência'],
    strengths: ['Coragem', 'Liderança', 'Carisma']
  },
  7: {
    animal: 'Coelho',
    element: 'Madeira',
    yinYang: 'Yin',
    traits: ['Gentil', 'Elegante', 'Responsável', 'Diplomático', 'Artístico'],
    compatibility: ['Cabra', 'Porco'],
    loveCompatibility: ['Cabra', 'Porco'],
    careerCompatibility: ['Cão', 'Porco'],
    luckyNumbers: [3, 4, 6],
    luckyColors: ['Rosa', 'Vermelho'],
    careerAdvice: ['Arte', 'Diplomacia', 'Moda', 'Decoração'],
    relationshipTips: ['Cultive a elegância', 'Seja diplomático', 'Crie ambientes harmoniosos'],
    challenges: ['Superficialidade', 'Indecisão', 'Pessimismo'],
    strengths: ['Diplomacia', 'Elegância', 'Sensibilidade']
  },
  8: {
    animal: 'Dragão',
    element: 'Terra',
    yinYang: 'Yang',
    traits: ['Confiante', 'Inteligente', 'Entusiasmado', 'Carismático', 'Ambicioso'],
    compatibility: ['Rato', 'Macaco'],
    loveCompatibility: ['Rato', 'Macaco'],
    careerCompatibility: ['Galo', 'Rato'],
    luckyNumbers: [1, 6, 7],
    luckyColors: ['Dourado', 'Prata'],
    careerAdvice: ['Liderança', 'Política', 'Entretenimento', 'Inovação'],
    relationshipTips: ['Seja magnético', 'Inspire outros', 'Mantenha o mistério'],
    challenges: ['Arrogância', 'Impaciência', 'Dominação'],
    strengths: ['Carisma', 'Liderança', 'Visão']
  },
  9: {
    animal: 'Serpente',
    element: 'Fogo',
    yinYang: 'Yin',
    traits: ['Sábio', 'Intuitivo', 'Misterioso', 'Elegante', 'Filosófico'],
    compatibility: ['Boi', 'Galo'],
    loveCompatibility: ['Boi', 'Galo'],
    careerCompatibility: ['Macaco', 'Galo'],
    luckyNumbers: [2, 8, 9],
    luckyColors: ['Vermelho', 'Amarelo'],
    careerAdvice: ['Filosofia', 'Psicologia', 'Medicina', 'Pesquisa'],
    relationshipTips: ['Cultive o mistério', 'Seja profundo', 'Use sua intuição'],
    challenges: ['Desconfiança', 'Possessividade', 'Frieza'],
    strengths: ['Sabedoria', 'Intuição', 'Profundidade']
  },
  10: {
    animal: 'Cavalo',
    element: 'Fogo',
    yinYang: 'Yang',
    traits: ['Energético', 'Independente', 'Alegre', 'Aventureiro', 'Sociável'],
    compatibility: ['Tigre', 'Cão'],
    loveCompatibility: ['Tigre', 'Cão'],
    careerCompatibility: ['Cabra', 'Tigre'],
    luckyNumbers: [2, 3, 7],
    luckyColors: ['Amarelo', 'Verde'],
    careerAdvice: ['Viagens', 'Esportes', 'Comunicação', 'Vendas'],
    relationshipTips: ['Mantenha a liberdade', 'Seja espontâneo', 'Compartilhe aventuras'],
    challenges: ['Inconstância', 'Impaciência', 'Egoísmo'],
    strengths: ['Energia', 'Liberdade', 'Otimismo']
  },
  11: {
    animal: 'Cabra',
    element: 'Terra',
    yinYang: 'Yin',
    traits: ['Gentil', 'Compassivo', 'Artístico', 'Pacífico', 'Intuitivo'],
    compatibility: ['Coelho', 'Porco'],
    loveCompatibility: ['Coelho', 'Porco'],
    careerCompatibility: ['Cavalo', 'Porco'],
    luckyNumbers: [3, 9, 4],
    luckyColors: ['Verde', 'Vermelho'],
    careerAdvice: ['Arte', 'Terapia', 'Jardinagem', 'Música'],
    relationshipTips: ['Seja carinhoso', 'Cultive a paz', 'Expresse criatividade'],
    challenges: ['Pessimismo', 'Dependência', 'Indecisão'],
    strengths: ['Criatividade', 'Compaixão', 'Intuição']
  }
}

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
  { pergunta: 'Isso é adivinhação?', resposta: 'Não. O Astroglix não é adivinhação. Ele é um mapa personalizado baseado nos seus dados de nascimento, que analisa ciclos, tendências e potenciais da sua vida. O objetivo não é prever o futuro, mas oferecer direcionamento e autoconhecimento para ajudar você a tomar decisões mais conscientes.' },
  { pergunta: 'Mapa natal e mapa astral são diferentes?', resposta: 'Na prática, são sinônimos. Ambos se referem ao mapa do céu no seu nascimento. Aqui a diferença é a qualidade da interpretação e a estrutura do relatório.' },
  { pergunta: 'Preciso saber a hora de nascimento?', resposta: 'Para a Análise Completa: a hora melhora muito (Ascendente e casas dependem da hora). Se não souber, entregamos uma versão essencial.' },
  { pergunta: 'Em quanto tempo eu recebo?', resposta: 'Análise Completa: acesso imediato após o pagamento. O relatório fica disponível na tela para visualizar e baixar quando quiser.' },
  { pergunta: 'Como vou receber?', resposta: 'Você visualiza o relatório na própria página após preencher os dados e concluir o pagamento. Pode baixar em PDF quando quiser.' },
  { pergunta: 'Meus dados estão seguros?', resposta: 'Sim. Coletamos apenas o necessário para gerar o relatório. Você pode solicitar exclusão a qualquer momento (LGPD).' },
  { pergunta: 'Posso pedir reembolso?', resposta: 'Por ser produto digital e personalizado, o reembolso só é possível antes da geração do relatório. Após a entrega, não há reembolso. Consulte os Termos de uso para detalhes.' }
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

const astrologySigns = {
  'Áries': {
    element: 'Fogo',
    quality: 'Cardeal',
    ruler: 'Marte',
    traits: ['Corajoso', 'Impulsivo', 'Líder'],
    description: 'Pioneiro natural, iniciador de projetos, energia dinâmica',
    challenges: ['Impaciência', 'Impulsividade', 'Egocentrismo'],
    advice: 'Canalize sua energia em projetos construtivos e pratique paciência'
  },
  'Touro': {
    element: 'Terra',
    quality: 'Fixo',
    ruler: 'Vênus',
    traits: ['Estável', 'Sensual', 'Determinado'],
    description: 'Busca segurança e estabilidade, aprecia prazeres da vida',
    challenges: ['Teimosia', 'Materialismo', 'Resistência à mudança'],
    advice: 'Cultive flexibilidade e abra-se para novas experiências'
  },
  'Gêmeos': {
    element: 'Ar',
    quality: 'Mutável',
    ruler: 'Mercúrio',
    traits: ['Comunicativo', 'Versátil', 'Curioso'],
    description: 'Mente ágil, comunicador nato, busca variedade e conhecimento',
    challenges: ['Dispersão', 'Superficialidade', 'Inconstância'],
    advice: 'Foque em aprofundar conhecimentos e desenvolva consistência'
  },
  'Câncer': {
    element: 'Água',
    quality: 'Cardeal',
    ruler: 'Lua',
    traits: ['Emotivo', 'Protetor', 'Intuitivo'],
    description: 'Altamente intuitivo, protetor da família, emocionalmente profundo',
    challenges: ['Mau humor', 'Possessividade', 'Insegurança'],
    advice: 'Desenvolva autoconfiança e pratique desapego emocional'
  },
  'Leão': {
    element: 'Fogo',
    quality: 'Fixo',
    ruler: 'Sol',
    traits: ['Criativo', 'Generoso', 'Dramático'],
    description: 'Criativo e expressivo, busca reconhecimento e admiração',
    challenges: ['Arrogância', 'Egocentrismo', 'Drama excessivo'],
    advice: 'Pratique humildade e use sua criatividade para inspirar outros'
  },
  'Virgem': {
    element: 'Terra',
    quality: 'Mutável',
    ruler: 'Mercúrio',
    traits: ['Analítico', 'Prático', 'Perfeccionista'],
    description: 'Detalhista e organizado, busca perfeição e eficiência',
    challenges: ['Crítica excessiva', 'Preocupação', 'Perfeccionismo'],
    advice: 'Aceite imperfeições e pratique autocompaixão'
  },
  'Libra': {
    element: 'Ar',
    quality: 'Cardeal',
    ruler: 'Vênus',
    traits: ['Diplomático', 'Harmonioso', 'Justo'],
    description: 'Busca equilíbrio e harmonia, diplomata natural',
    challenges: ['Indecisão', 'Dependência', 'Superficialidade'],
    advice: 'Desenvolva autoconfiança e tome decisões independentes'
  },
  'Escorpião': {
    element: 'Água',
    quality: 'Fixo',
    ruler: 'Plutão',
    traits: ['Intenso', 'Transformador', 'Misterioso'],
    description: 'Profundo e transformador, busca verdades ocultas',
    challenges: ['Possessividade', 'Ciúme', 'Vingança'],
    advice: 'Pratique perdão e use sua intensidade para transformação positiva'
  },
  'Sagitário': {
    element: 'Fogo',
    quality: 'Mutável',
    ruler: 'Júpiter',
    traits: ['Aventureiro', 'Filosófico', 'Otimista'],
    description: 'Busca conhecimento e aventura, filosofo natural',
    challenges: ['Exagero', 'Impaciência', 'Falta de tato'],
    advice: 'Pratique moderação e desenvolva sensibilidade social'
  },
  'Capricórnio': {
    element: 'Terra',
    quality: 'Cardeal',
    ruler: 'Saturno',
    traits: ['Ambicioso', 'Disciplinado', 'Responsável'],
    description: 'Ambicioso e disciplinado, busca status e reconhecimento',
    challenges: ['Pessimismo', 'Rigidez', 'Materialismo'],
    advice: 'Cultive otimismo e valorize aspectos emocionais da vida'
  },
  'Aquário': {
    element: 'Ar',
    quality: 'Fixo',
    ruler: 'Urano',
    traits: ['Inovador', 'Independente', 'Humanitário'],
    description: 'Visionário e humanitário, busca inovação e liberdade',
    challenges: ['Frieza', 'Rebeldia', 'Distanciamento'],
    advice: 'Desenvolva intimidade emocional e pratique compaixão pessoal'
  },
  'Peixes': {
    element: 'Água',
    quality: 'Mutável',
    ruler: 'Netuno',
    traits: ['Intuitivo', 'Compassivo', 'Artístico'],
    description: 'Altamente intuitivo e compassivo, conectado ao espiritual',
    challenges: ['Escapismo', 'Confusão', 'Vitimização'],
    advice: 'Desenvolva praticidade e estabeleça limites claros'
  }
}

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
  const [mysticReport, setMysticReport] = useState<{
    numerology: NumerologyResult
    astrology: AstrologyResult
    chineseZodiac: ChineseZodiac
    astrocartography: AstrocartographyResult
  } | null>(null)
  const [isProcessingPayment, setIsProcessingPayment] = useState(false)
  const [paymentError, setPaymentError] = useState<string | null>(null)
  const [isHoroscopeSubscribed, setIsHoroscopeSubscribed] = useState(false)
  const [birthCountryCode, setBirthCountryCode] = useState('')
  const [birthStateCode, setBirthStateCode] = useState('')
  const [birthCityName, setBirthCityName] = useState('')

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

  const calculateCompleteNumerology = (fullName: string, date: string): NumerologyResult => {
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

    // Número do Caminho da Vida (Missão)
    const dateNumbers = date.replace(/\D/g, '').split('').map(Number)
    const lifePathSum = dateNumbers.reduce((sum, num) => sum + num, 0)
    const lifePathNumber = reduceToSingleDigit(lifePathSum)

    // Número da Personalidade (consoantes)
    const consonants = fullName.toLowerCase().replace(/[aeiouàáâãäèéêëìíîïòóôõöùúûü\s]/g, '')
    const personalitySum = consonants.split('').reduce((sum, char) => sum + getLetterValue(char), 0)
    const personalityNumber = reduceToSingleDigit(personalitySum)

    // Número da Alma/Motivação (vogais)
    const vowels = fullName.toLowerCase().replace(/[^aeiouàáâãäèéêëìíîïòóôõöùúûü]/g, '')
    const soulSum = vowels.split('').reduce((sum, char) => sum + getLetterValue(char), 0)
    const soulNumber = reduceToSingleDigit(soulSum)

    // Número do Destino/Expressão (nome completo)
    const allLetters = fullName.toLowerCase().replace(/[^a-záàáâãäèéêëìíîïòóôõöùúûü]/g, '')
    const destinySum = allLetters.split('').reduce((sum, char) => sum + getLetterValue(char), 0)
    const destinyNumber = reduceToSingleDigit(destinySum)

    // Número da Expressão (mesmo que destino)
    const expressionNumber = destinyNumber

    // Número da Impressão (primeiro nome + sobrenome)
    const names = fullName.split(' ').filter(name => name.length > 0)
    const firstName = names[0] || ''
    const lastName = names[names.length - 1] || ''
    const impressionSum = (firstName + lastName).toLowerCase().replace(/[^a-záàáâãäèéêëìíîïòóôõöùúûü]/g, '').split('').reduce((sum, char) => sum + getLetterValue(char), 0)
    const impressionNumber = reduceToSingleDigit(impressionSum)

    // Número Psíquico (dia de nascimento)
    const birthDay = new Date(date).getDate()
    const psychicNumber = reduceToSingleDigit(birthDay)

    // Talentos Ocultos e Lições Cármicas (ausentes = talentos; se todos presentes, usar os mais raros)
    const nameNumbers = allLetters.split('').map(char => reduceToSingleDigit(getLetterValue(char)))
    const numberFrequency: { [key: number]: number } = {}
    for (let n = 1; n <= 9; n++) numberFrequency[n] = 0
    nameNumbers.forEach(n => { if (n > 0) numberFrequency[n] = (numberFrequency[n] || 0) + 1 })
    const missingNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9].filter(n => !numberFrequency[n])
    const hiddenTalents = missingNumbers.length > 0
      ? missingNumbers
      : (() => {
          const minCount = Math.min(...Object.values(numberFrequency).filter(c => c > 0))
          return [1, 2, 3, 4, 5, 6, 7, 8, 9].filter(n => numberFrequency[n] === minCount)
        })()
    const karmicLessons = missingNumbers.length > 0 ? missingNumbers : hiddenTalents

    // Dívidas Cármicas (números 13, 14, 16, 19)
    const karmicDebts: number[] = []
    const checkKarmicDebt = (sum: number) => {
      if (sum === 13 || sum === 14 || sum === 16 || sum === 19) {
        karmicDebts.push(sum)
      }
    }
    checkKarmicDebt(destinySum)
    checkKarmicDebt(personalitySum)
    checkKarmicDebt(soulSum)

    // Ciclos de Vida
    const birthDateObj = new Date(date)
    const cycle1 = reduceToSingleDigit(birthDateObj.getMonth() + 1)
    const cycle2 = reduceToSingleDigit(birthDateObj.getDate())
    const cycle3 = reduceToSingleDigit(birthDateObj.getFullYear())
    const lifeCycles = [cycle1, cycle2, cycle3]

    // Números Pessoais Atuais
    const currentDate = new Date()
    const personalYear = reduceToSingleDigit(
      birthDateObj.getDate() + (birthDateObj.getMonth() + 1) + currentDate.getFullYear()
    )
    const personalMonth = reduceToSingleDigit(personalYear + (currentDate.getMonth() + 1))
    const personalDay = reduceToSingleDigit(personalMonth + currentDate.getDate())

    // Desafios
    const challenge1 = Math.abs(birthDateObj.getDate() - (birthDateObj.getMonth() + 1))
    const challenge2 = Math.abs(birthDateObj.getDate() - (birthDateObj.getFullYear() % 10))
    const challenge3 = Math.abs(challenge1 - challenge2)
    const challenge4 = Math.abs(lifePathNumber - destinyNumber)
    const challenges = [
      reduceToSingleDigit(challenge1 || 1),
      reduceToSingleDigit(challenge2 || 1),
      reduceToSingleDigit(challenge3 || 1),
      reduceToSingleDigit(challenge4 || 1)
    ]

    // Píncaros
    const pinnacle1 = reduceToSingleDigit(birthDateObj.getDate() + (birthDateObj.getMonth() + 1))
    const pinnacle2 = reduceToSingleDigit(birthDateObj.getDate() + (birthDateObj.getFullYear() % 10))
    const pinnacle3 = reduceToSingleDigit(pinnacle1 + pinnacle2)
    const pinnacle4 = reduceToSingleDigit((birthDateObj.getMonth() + 1) + (birthDateObj.getFullYear() % 10))
    const pinnacles = [pinnacle1, pinnacle2, pinnacle3, pinnacle4]

    // Momentos Decisivos
    const decisiveMoments = [
      Math.max(36 - lifePathNumber, 25),
      Math.max(45 - lifePathNumber, 35),
      Math.max(54 - lifePathNumber, 45)
    ]

    return {
      lifePathNumber,
      personalityNumber,
      soulNumber,
      destinyNumber,
      expressionNumber,
      impressionNumber,
      psychicNumber,
      hiddenTalents,
      karmicLessons,
      karmicDebts,
      lifeCycles,
      personalYear,
      personalMonth,
      personalDay,
      challenges,
      pinnacles,
      decisiveMoments
    }
  }

  const calculateAstrology = (date: string, time: string, place: string): AstrologyResult => {
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

    // Simulação de outros elementos astrológicos
    const signs = Object.keys(astrologySigns)
    const moonSign = signs[(day + month) % signs.length]
    const ascendant = signs[(day * month) % signs.length]

    const planets = {
      'Mercúrio': { sign: signs[(day + 1) % signs.length], house: (day % 12) + 1 },
      'Vênus': { sign: signs[(day + 2) % signs.length], house: ((day + 1) % 12) + 1 },
      'Marte': { sign: signs[(day + 3) % signs.length], house: ((day + 2) % 12) + 1 },
      'Júpiter': { sign: signs[(day + 4) % signs.length], house: ((day + 3) % 12) + 1 },
      'Saturno': { sign: signs[(day + 5) % signs.length], house: ((day + 4) % 12) + 1 },
      'Urano': { sign: signs[(day + 6) % signs.length], house: ((day + 5) % 12) + 1 },
      'Netuno': { sign: signs[(day + 7) % signs.length], house: ((day + 6) % 12) + 1 },
      'Plutão': { sign: signs[(day + 8) % signs.length], house: ((day + 7) % 12) + 1 }
    }

    const aspects = [
      `Sol em ${sunSign} em conjunção com Mercúrio - comunicação poderosa`,
      `Lua em ${moonSign} em trígono com Vênus - harmonia emocional`,
      `Marte em quadratura com Saturno - desafios que fortalecem`,
      `Júpiter em sextil com Netuno - intuição expandida`,
      `Vênus em oposição com Plutão - transformação através do amor`
    ]

    const currentTransits = [
      'Júpiter transitando pela casa 7 - período favorável para relacionamentos e parcerias',
      'Saturno transitando pela casa 10 - foco na carreira e responsabilidades profissionais',
      'Urano transitando pela casa 2 - mudanças financeiras inesperadas e inovação',
      'Netuno transitando pela casa 12 - despertar espiritual e intuição aumentada',
      'Plutão transitando pela casa 8 - transformações profundas e renovação'
    ]

    const houses = {
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

    return {
      sunSign,
      moonSign,
      ascendant,
      planets,
      aspects,
      currentTransits,
      houses
    }
  }

  const getChineseZodiac = (date: string): ChineseZodiac => {
    const year = new Date(date).getFullYear()
    const zodiacIndex = year % 12
    const raw = chineseZodiacData[zodiacIndex]
    return {
      ...raw,
      fullSign: `${raw.animal} de ${raw.element} ${raw.yinYang}`,
      careerTalents: raw.careerAdvice.join(', '),
      weaknesses: raw.challenges.join(', '),
      strengths: Array.isArray(raw.strengths) ? (raw.strengths as string[]).join(', ') : raw.strengths
    }
  }

  const calculateAstrocartography = (fullName: string, date: string, time: string, place: string, currentCity?: string): AstrocartographyResult => {
    // Função para gerar hash baseado nos dados pessoais
    const generatePersonalHash = (data: string): number => {
      let hash = 0
      for (let i = 0; i < data.length; i++) {
        const char = data.charCodeAt(i)
        hash = ((hash << 5) - hash) + char
        hash = hash & hash // Converte para 32bit integer
      }
      return Math.abs(hash)
    }

    // Combina todos os dados pessoais para criar um hash único
    const personalData = `${fullName}${date}${time}${place}`.toLowerCase().replace(/\s/g, '')
    const personalHash = generatePersonalHash(personalData)

    // Extrai informações específicas dos dados
    const birthDate = new Date(date)
    const birthDay = birthDate.getDate()
    const birthMonth = birthDate.getMonth() + 1
    const birthYear = birthDate.getFullYear()
    const nameLength = fullName.replace(/\s/g, '').length

    // Calcula índices personalizados baseados nos dados reais
    const sunIndex = (personalHash + birthDay) % 100
    const moonIndex = (personalHash + birthMonth) % 100
    const venusIndex = (personalHash + nameLength) % 100
    const marsIndex = (personalHash + birthYear) % 100
    const jupiterIndex = (personalHash + birthDay + birthMonth) % 100
    const saturnIndex = (personalHash + birthYear + nameLength) % 100

    // Bancos de dados de locais organizados por continentes e características
    const worldLocations = {
      // Locais solares - liderança e vitalidade
      solar: [
        'Los Angeles, EUA', 'Sydney, Austrália', 'Tóquio, Japão', 'Dubai, EAU', 'Miami, EUA',
        'Barcelona, Espanha', 'Tel Aviv, Israel', 'Cidade do Cabo, África do Sul', 'Singapura',
        'São Paulo, Brasil', 'Mumbai, Índia', 'Cairo, Egito', 'Phoenix, EUA', 'Gold Coast, Austrália',
        'Marrakech, Marrocos', 'Las Vegas, EUA', 'Nice, França', 'Ibiza, Espanha', 'Honolulu, EUA',
        'Rio de Janeiro, Brasil'
      ],
      // Locais lunares - emoções e intuição
      lunar: [
        'Londres, Reino Unido', 'Dublin, Irlanda', 'Edimburgo, Escócia', 'Amsterdam, Holanda',
        'Copenhague, Dinamarca', 'Estocolmo, Suécia', 'Helsinki, Finlândia', 'Reykjavik, Islândia',
        'Vancouver, Canadá', 'Seattle, EUA', 'Portland, EUA', 'Bergen, Noruega', 'Bruges, Bélgica',
        'Praga, República Tcheca', 'Cracóvia, Polônia', 'São Petersburgo, Rússia', 'Tallinn, Estônia',
        'Riga, Letônia', 'Vilnius, Lituânia', 'Cork, Irlanda'
      ],
      // Locais venusianos - amor e beleza
      venus: [
        'Paris, França', 'Veneza, Itália', 'Florença, Itália', 'Roma, Itália', 'Viena, Áustria',
        'Buenos Aires, Argentina', 'Rio de Janeiro, Brasil', 'Bali, Indonésia', 'Santorini, Grécia',
        'Mykonos, Grécia', 'Provence, França', 'Toscana, Itália', 'Kyoto, Japão', 'Charleston, EUA',
        'Savannah, EUA', 'Quebec, Canadá', 'Bruges, Bélgica', 'Salzburgo, Áustria', 'Sintra, Portugal',
        'Cartagena, Colômbia'
      ],
      // Locais marcianos - ação e energia
      mars: [
        'Berlim, Alemanha', 'Seul, Coreia do Sul', 'Hong Kong', 'Nova York, EUA', 'Chicago, EUA',
        'Frankfurt, Alemanha', 'Zurich, Suíça', 'Milão, Itália', 'Santiago, Chile', 'Bogotá, Colômbia',
        'Cidade do México, México', 'Atlanta, EUA', 'Dallas, EUA', 'Houston, EUA', 'Denver, EUA',
        'Calgary, Canadá', 'Toronto, Canadá', 'Manchester, Reino Unido', 'Birmingham, Reino Unido',
        'Glasgow, Escócia'
      ],
      // Locais jupiterianos - expansão e sabedoria
      jupiter: [
        'Nova Delhi, Índia', 'Varanasi, Índia', 'Rishikesh, Índia', 'Bangkok, Tailândia', 'Chiang Mai, Tailândia',
        'Kathmandu, Nepal', 'Lhasa, Tibet', 'Cusco, Peru', 'Machu Picchu, Peru', 'Cairo, Egito',
        'Luxor, Egito', 'Jerusalém, Israel', 'Istambul, Turquia', 'Fez, Marrocos', 'Casablanca, Marrocos',
        'Jodhpur, Índia', 'Jaipur, Índia', 'Agra, Índia', 'Dharamshala, Índia', 'Goa, Índia'
      ],
      // Locais saturnianos - disciplina e estrutura
      saturn: [
        'Moscou, Rússia', 'São Petersburgo, Rússia', 'Oslo, Noruega', 'Helsinki, Finlândia',
        'Reykjavik, Islândia', 'Montreal, Canadá', 'Quebec, Canadá', 'Anchorage, EUA',
        'Fairbanks, EUA', 'Nuuk, Groenlândia', 'Tromsø, Noruega', 'Murmansk, Rússia',
        'Arkhangelsk, Rússia', 'Yakutsk, Rússia', 'Irkutsk, Rússia', 'Ulaanbaatar, Mongólia',
        'Almaty, Cazaquistão', 'Bishkek, Quirguistão', 'Tashkent, Uzbequistão', 'Astana, Cazaquistão'
      ]
    }

    // Seleciona locais baseados nos índices personalizados
    const selectPersonalizedLocations = (locationArray: string[], index: number, count: number = 3): string[] => {
      const selected: string[] = []
      for (let i = 0; i < count; i++) {
        const locationIndex = (index + i * 7) % locationArray.length
        selected.push(locationArray[locationIndex])
      }
      return selected
    }

    // Gera linhas planetárias personalizadas
    const sunLines = selectPersonalizedLocations(worldLocations.solar, sunIndex, 4)
    const moonLines = selectPersonalizedLocations(worldLocations.lunar, moonIndex, 4)
    const venusLines = selectPersonalizedLocations(worldLocations.venus, venusIndex, 4)
    const marsLines = selectPersonalizedLocations(worldLocations.mars, marsIndex, 4)
    const jupiterLines = selectPersonalizedLocations(worldLocations.jupiter, jupiterIndex, 4)
    const saturnLines = selectPersonalizedLocations(worldLocations.saturn, saturnIndex, 4)

    // Locais favoráveis personalizados por categoria
    const favorableLocations = {
      'Amor e Relacionamentos': selectPersonalizedLocations(worldLocations.venus, venusIndex, 5),
      'Carreira e Sucesso': selectPersonalizedLocations([...worldLocations.solar, ...worldLocations.mars], sunIndex + marsIndex, 5),
      'Espiritualidade e Crescimento': selectPersonalizedLocations(worldLocations.jupiter, jupiterIndex, 5),
      'Criatividade e Arte': selectPersonalizedLocations([...worldLocations.venus, ...worldLocations.lunar], venusIndex + moonIndex, 5),
      'Saúde e Bem-estar': selectPersonalizedLocations([...worldLocations.jupiter, ...worldLocations.lunar], jupiterIndex + moonIndex, 5)
    }

    // Locais desafiadores personalizados
    const challengingLocations = {
      'Tensões Emocionais': selectPersonalizedLocations(worldLocations.saturn, saturnIndex, 3),
      'Desafios Financeiros': selectPersonalizedLocations([...worldLocations.mars, ...worldLocations.saturn], marsIndex + saturnIndex, 3),
      'Conflitos Familiares': selectPersonalizedLocations(worldLocations.mars, marsIndex + 13, 3),
      'Estresse Profissional': selectPersonalizedLocations(worldLocations.saturn, saturnIndex + 7, 3)
    }

    // Recomendações personalizadas baseadas no perfil astrológico
    const personalizedRecommendations = [
      `Para ${fullName}: Suas linhas solares em ${sunLines[0]} são especialmente poderosas durante o verão`,
      `Baseado em sua data de nascimento (${new Date(date).toLocaleDateString('pt-BR')}), ${venusLines[0]} oferece as melhores oportunidades românticas`,
      `Seu local de nascimento (${place}) cria uma conexão especial com ${jupiterLines[0]} para crescimento espiritual`,
      `Durante seu ano pessoal atual, considere visitar ${moonLines[0]} para equilíbrio emocional`,
      `Para decisões importantes, evite ${challengingLocations['Tensões Emocionais'][0]} durante eclipses lunares`
    ]

    // Análise personalizada detalhada
    const personalizedAnalysis = `
      Baseado em sua configuração astrológica única - nascido(a) em ${new Date(date).toLocaleDateString('pt-BR')} 
      ${time ? `às ${time}` : ''} em ${place} - seu mapa astrocartográfico revela padrões energéticos específicos. 
      
      Suas linhas planetárias mais poderosas se concentram em ${sunLines[0]} (linha solar) para liderança e reconhecimento, 
      ${venusLines[0]} (linha de Vênus) para amor e relacionamentos, e ${jupiterLines[0]} (linha de Júpiter) para 
      expansão e oportunidades.
      
      A combinação de seu nome "${fullName}" com sua data de nascimento cria uma assinatura energética única que 
      ressoa especialmente bem com as regiões mencionadas. Considere estes locais para mudanças importantes, 
      viagens transformadoras ou até mesmo para estabelecer residência.
    `

    // Análise da cidade de residência atual (benefícios e pontos de atenção)
    let currentCityAnalysis: AstrocartographyResult['currentCityAnalysis'] | undefined
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
      marsLines,
      jupiterLines,
      saturnLines,
      favorableLocations,
      challengingLocations,
      recommendations: personalizedRecommendations,
      personalizedAnalysis,
      currentCityAnalysis
    }
  }

  const handlePayment = async () => {
    setIsProcessingPayment(true)
    setPaymentError(null)

    try {
      // Validação básica
      if (!personalData.fullName.trim()) {
        throw new Error('Por favor, preencha seu nome completo antes de continuar.')
      }

      if (!personalData.email.trim()) {
        throw new Error('Por favor, preencha seu e-mail antes de continuar.')
      }

      if (!personalData.birthDate) {
        throw new Error('Por favor, preencha sua data de nascimento antes de continuar.')
      }

      if (!personalData.birthPlace.trim()) {
        throw new Error('Por favor, selecione o local de nascimento (país, estado e cidade) antes de continuar.')
      }

      if (!personalData.currentCity.trim()) {
        throw new Error('Por favor, preencha a cidade de residência atual antes de continuar.')
      }

      const controller = new AbortController()
      const timeoutId = setTimeout(() => controller.abort(), 30000)
      const response = await fetch('/api/create-payment', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          planType: 'one_time',
          amount: 35.9,
          currency: 'BRL',
          customerData: {
            name: personalData.fullName.trim(),
            email: personalData.email.trim()
          },
          personalData: {
            fullName: personalData.fullName.trim(),
            email: personalData.email.trim(),
            birthDate: personalData.birthDate,
            birthTime: personalData.birthTime ?? '',
            birthPlace: personalData.birthPlace.trim(),
            currentCity: personalData.currentCity.trim()
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
        window.localStorage.setItem('last_customer_email', personalData.email.trim())
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

    setMysticReport({
      numerology,
      astrology,
      chineseZodiac,
      astrocartography
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

  const renderDataCollection = () => (
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

          {/* Preço em destaque */}
          <div className="bg-gradient-to-r from-purple-50 to-pink-50 dark:from-purple-900/50 dark:to-pink-900/50 rounded-2xl p-4 sm:p-6 mb-6 border border-purple-100/50 dark:border-purple-800/30">
            <div className="text-center">
              <div className="flex flex-wrap items-center justify-center gap-2 mb-2">
                <span className="text-base sm:text-lg text-gray-500 dark:text-gray-400 line-through">R$ 99,90</span>
                <span className="text-2xl sm:text-3xl font-bold text-purple-600 dark:text-purple-400">R$ 35,90</span>
              </div>
              <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-400">
                Análise Astrológica Completa - Pagamento único (valor promocional)
              </p>
              <div className="flex flex-wrap items-center justify-center gap-1 sm:gap-2 mt-3 text-xs text-gray-500 dark:text-gray-400">
                <div className="flex items-center gap-1">
                  <CheckCircle className="w-3 h-3 sm:w-4 sm:h-4 text-green-500" />
                  <span>Numerologia</span>
                </div>
                <span className="hidden sm:inline">•</span>
                <div className="flex items-center gap-1">
                  <CheckCircle className="w-3 h-3 sm:w-4 sm:h-4 text-green-500" />
                  <span>Astrologia</span>
                </div>
                <span className="hidden sm:inline">•</span>
                <div className="flex items-center gap-1">
                  <CheckCircle className="w-3 h-3 sm:w-4 sm:h-4 text-green-500" />
                  <span>Zodíaco Chinês</span>
                </div>
                <span className="hidden sm:inline">•</span>
                <div className="flex items-center gap-1">
                  <CheckCircle className="w-3 h-3 sm:w-4 sm:h-4 text-green-500" />
                  <span>Astrocartografia</span>
                </div>
              </div>
            </div>
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
            disabled={!personalData.fullName.trim() || !personalData.email.trim() || !personalData.birthDate || !personalData.birthPlace.trim() || !personalData.currentCity.trim() || isProcessingPayment}
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

  const renderMysticReport = () => {
    if (!mysticReport) return null

    const reportData = {
      personalData: {
        fullName: personalData.fullName,
        email: personalData.email,
        birthDate: personalData.birthDate,
        birthTime: personalData.birthTime,
        birthPlace: personalData.birthPlace,
        currentCity: personalData.currentCity
      },
      numerology: mysticReport.numerology,
      astrology: mysticReport.astrology,
      chineseZodiac: mysticReport.chineseZodiac,
      astrocartography: mysticReport.astrocartography
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
                    href="#planos"
                    className="min-h-[44px] min-w-[44px] inline-flex items-center justify-center px-3 sm:px-4 py-2.5 rounded-full text-[13px] sm:text-[15px] font-medium text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-gray-800/80 transition-colors"
                  >
                    Plano
                  </a>
                  <a
                    href="#payment-form"
                    className="min-h-[44px] inline-flex items-center justify-center px-3 sm:px-4 py-2.5 rounded-full text-[13px] sm:text-[15px] font-medium bg-gray-900 dark:bg-white text-white dark:text-gray-900 hover:opacity-90 transition-opacity"
                  >
                    Gerar mapa
                  </a>
                </nav>
              </div>
            </header>

            {/* Hero como na referência */}
            <section className="max-w-4xl mx-auto px-4 sm:px-4 pt-14 sm:pt-16 pb-10 sm:pb-16 text-center">
              <h1 className="text-2xl sm:text-3xl md:text-[36px] leading-tight sm:leading-[40px] font-bold mb-4 sm:mb-6 bg-gradient-to-r from-purple-600 to-pink-600 dark:from-purple-400 dark:to-pink-400 bg-clip-text text-transparent text-balance">
                Seu mapa não determina o seu destino.<br />
                Ele revela o manual de instruções da sua vida.
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
                  href="#payment-form"
                  className="min-h-[48px] sm:min-h-0 inline-flex items-center justify-center px-6 sm:px-8 py-3.5 rounded-full font-normal text-[14px] leading-[20px] bg-gray-900 dark:bg-white text-white dark:text-gray-900 hover:opacity-90 transition-all hover:shadow-lg active:scale-[0.98] touch-manipulation"
                >
                  Gerar meu mapa
                </a>
                <a
                  href="#planos"
                  className="min-h-[48px] sm:min-h-0 inline-flex items-center justify-center px-6 sm:px-8 py-3.5 rounded-full font-normal text-[14px] leading-[20px] border-2 border-gray-900 dark:border-white text-gray-900 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-800 transition-all hover:shadow-md active:scale-[0.98] touch-manipulation"
                >
                  Ver planos
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

            {/* Plano (resumido — um produto principal) */}
            <section id="planos" className="max-w-4xl mx-auto px-3 sm:px-4 py-8 sm:py-16 border-t border-gray-200 dark:border-gray-700 scroll-mt-20">
              <h2 className="text-xl sm:text-[30px] leading-tight sm:leading-[36px] font-semibold text-gray-900 dark:text-white mb-2">
                Plano
              </h2>
              <p className="text-base sm:text-[18px] leading-relaxed sm:leading-[28px] text-gray-600 dark:text-gray-400 mb-6 sm:mb-8">
                Escolha o nível de profundidade que faz sentido para você.
              </p>
              <div className="bg-white dark:bg-gray-800 rounded-3xl p-4 sm:p-8 shadow-lg border border-gray-100/80 dark:border-gray-700/80">
                <div className="flex flex-col sm:flex-row sm:flex-wrap sm:items-start sm:justify-between gap-3 sm:gap-4 mb-4">
                  <div className="min-w-0">
                    <h3 className="text-[15px] sm:text-[16px] leading-[22px] sm:leading-[24px] font-medium text-gray-900 dark:text-white">Análise Astrológica Completa</h3>
                    <p className="text-[14px] sm:text-[18px] leading-[22px] sm:leading-[28px] text-gray-600 dark:text-gray-400 mt-1">Numerologia + Astrologia + Zodíaco Chinês + Astrocartografia</p>
                  </div>
                  <div className="shrink-0 flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-2">
                    <span className="text-base text-gray-500 dark:text-gray-400 line-through">De R$ 99,90</span>
                    <span className="text-2xl sm:text-[30px] leading-tight sm:leading-[36px] font-semibold text-gray-900 dark:text-white">R$ 35,90</span>
                  </div>
                </div>
                <p className="text-[15px] sm:text-[18px] leading-[24px] sm:leading-[28px] text-gray-600 dark:text-gray-400 mb-4">
                  Um relatório personalizado que integra quatro sistemas para clareza, padrões e decisões melhores. Entrega imediata após o pagamento.
                </p>
                <ul className="space-y-2 text-[15px] sm:text-[18px] leading-[24px] sm:leading-[28px] text-gray-600 dark:text-gray-400 mb-6">
                  <li>• Seus números essenciais (Caminho da Vida, Alma, Destino)</li>
                  <li>• Mapa astral (Sol, Lua, Ascendente, planetas e casas)</li>
                  <li>• Zodíaco Chinês e orientação oriental</li>
                  <li>• Astrocartografia e locais de potência</li>
                </ul>
                <a
                  href="#payment-form"
                  className="min-h-[48px] inline-flex items-center justify-center w-full sm:w-auto px-8 py-3.5 rounded-full font-normal text-[14px] leading-[20px] bg-gray-900 dark:bg-white text-white dark:text-gray-900 hover:opacity-90 transition-all hover:shadow-lg"
                >
                  Gerar meu mapa
                </a>
                <p className="text-[13px] sm:text-[14px] leading-[20px] text-gray-500 dark:text-gray-500 mt-3">Pagamento seguro via Kiwify</p>
              </div>
            </section>

            {/* Como funciona */}
            <section className="max-w-4xl mx-auto px-3 sm:px-4 py-8 sm:py-16 border-t border-gray-200 dark:border-gray-700">
              <h2 className="text-xl sm:text-[30px] leading-tight sm:leading-[36px] font-semibold text-gray-900 dark:text-white mb-6 sm:mb-8">
                Como funciona
              </h2>
              <ol className="list-none space-y-4 sm:space-y-6">
                {[
                  { n: '1', text: 'Escolha o serviço e preencha os dados no checkout (nascimento, nome e e-mail).' },
                  { n: '2', text: 'Pague com segurança e receba a confirmação por e-mail.' },
                  { n: '3', text: 'Acesse a área do cliente e acompanhe o status do pedido.' },
                  { n: '4', text: 'Quando o material estiver pronto visualize e baixe seu relatório.' }
                ].map(({ n, text }) => (
                  <li key={n} className="flex gap-3 sm:gap-4">
                    <span className="flex-shrink-0 w-10 h-10 rounded-full bg-gray-900 dark:bg-white text-white dark:text-gray-900 flex items-center justify-center font-bold text-[14px] leading-[20px] shadow-sm">
                      {n}
                    </span>
                    <p className="text-[15px] sm:text-[18px] leading-[24px] sm:leading-[28px] text-gray-600 dark:text-gray-400 pt-0.5">{text}</p>
                  </li>
                ))}
              </ol>
              <p className="text-[13px] sm:text-[14px] leading-[20px] text-gray-500 dark:text-gray-500 mt-4">* Visualize seu relatório imediatamente</p>
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
                  <div className="flex justify-center mb-2"><Lock className="w-8 h-8 sm:w-10 sm:h-10 text-gray-700 dark:text-gray-300" /></div>
                  <p className="text-[15px] sm:text-[18px] leading-[24px] sm:leading-[28px] text-gray-600 dark:text-gray-400">Pagamento seguro e criptografado</p>
                </div>
              </div>
            </div>
          </>
        )}

        {/* Progress Steps */}
        {currentStep <= 1 && (
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
              </div>
            </div>
          </div>
        )}

        {/* Content based on current step */}
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
                  Sem promessas absolutas. Com método. • Dados protegidos • LGPD • Pagamento seguro via Kiwify
                </p>
              </div>
              <div>
                <p className="text-[15px] sm:text-[16px] leading-[22px] sm:leading-[24px] font-semibold text-gray-900 dark:text-white mb-3">Produto</p>
                <ul className="space-y-2 text-[14px] sm:text-[16px] leading-[22px] sm:leading-[24px]">
                  <li><a href="#planos" className="text-gray-600 dark:text-gray-400 hover:underline min-h-[44px] inline-flex items-center">Plano</a></li>
                  <li><a href="#payment-form" className="text-gray-600 dark:text-gray-400 hover:underline min-h-[44px] inline-flex items-center">Gerar mapa</a></li>
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
                <a href="mailto:contato@astroglix.com.br" className="text-[14px] sm:text-[16px] leading-[22px] sm:leading-[24px] text-gray-600 dark:text-gray-400 hover:underline break-all">
                  contato@astroglix.com.br
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
      </div>
    </div>
  )
}