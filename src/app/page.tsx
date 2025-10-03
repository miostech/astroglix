'use client'

import { useState, useEffect } from 'react'
import { Calendar, Star, Calculator, Sparkles, Heart, Zap, Eye, Crown, CreditCard, Lock, CheckCircle, Globe, Moon, Sun, MapPin, Compass, BookOpen, Target, TrendingUp, Users, Brain, Shield, Award, Gem, Clock, Lightbulb, AlertCircle } from 'lucide-react'
import { KIRVANO_CONFIG } from '@/lib/stripe'
import DetailedReport from '@/components/DetailedReport'

interface PersonalData {
  fullName: string
  email: string
  birthDate: string
  birthTime: string
  birthPlace: string
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
  luckyNumbers: number[]
  luckyColors: string[]
  careerAdvice: string[]
  relationshipTips: string[]
  challenges: string[]
  strengths: string[]
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
}

const chineseZodiacData: { [key: number]: ChineseZodiac } = {
  0: { 
    animal: 'Macaco', 
    element: 'Metal', 
    yinYang: 'Yang',
    traits: ['Inteligente', 'Criativo', 'Versátil', 'Esperto', 'Sociável'], 
    compatibility: ['Rato', 'Dragão'], 
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
    birthPlace: ''
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

  // Carregar dados salvos do localStorage ao iniciar
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const savedData = localStorage.getItem('astroglix_personal_data')
      if (savedData) {
        try {
          const parsedData = JSON.parse(savedData)
          setPersonalData(parsedData)
        } catch (error) {
          console.error('Erro ao carregar dados salvos:', error)
        }
      }
    }
  }, [])

  // Salvar dados no localStorage quando mudarem
  useEffect(() => {
    if (typeof window !== 'undefined' && personalData.fullName && personalData.birthDate) {
      localStorage.setItem('astroglix_personal_data', JSON.stringify(personalData))
    }
  }, [personalData])

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

    // Talentos Ocultos e Lições Cármicas
    const nameNumbers = allLetters.split('').map(char => reduceToSingleDigit(getLetterValue(char)))
    const presentNumbers = [...new Set(nameNumbers)].filter(n => n > 0)
    const hiddenTalents = [1, 2, 3, 4, 5, 6, 7, 8, 9].filter(n => !presentNumbers.includes(n))
    const karmicLessons = hiddenTalents

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
    return chineseZodiacData[zodiacIndex]
  }

  const calculateAstrocartography = (fullName: string, date: string, time: string, place: string): AstrocartographyResult => {
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
      personalizedAnalysis
    }
  }

  const handlePayment = async () => {
    console.log('BOTÃO CLICADO! Função handlePayment executada para plano único R$80,00 - KIRVANO')
    
    setIsProcessingPayment(true)
    setPaymentError(null)
    
    try {
      // Validação básica antes de enviar
      if (!personalData.fullName.trim()) {
        throw new Error('Por favor, preencha seu nome completo antes de continuar com o pagamento.')
      }

      if (!personalData.email.trim()) {
        throw new Error('Por favor, preencha seu e-mail antes de continuar com o pagamento.')
      }

      if (!personalData.birthDate) {
        throw new Error('Por favor, preencha sua data de nascimento antes de continuar com o pagamento.')
      }

      console.log('Validação passou, iniciando pagamento Kirvano para plano único R$80,00')

      // Timeout para requisições longas
      const controller = new AbortController()
      const timeoutId = setTimeout(() => controller.abort(), 30000) // 30 segundos

      try {
        // Integração com Kirvano
        const response = await fetch('/api/create-kirvano-payment', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            planType: 'relatorio-mistico-completo',
            amount: KIRVANO_CONFIG.price,
            currency: KIRVANO_CONFIG.currency,
            customerData: {
              name: personalData.fullName,
              email: personalData.email
            },
            personalData: personalData // Incluir todos os dados pessoais para gerar o relatório
          }),
          signal: controller.signal
        })

        clearTimeout(timeoutId)
        console.log('Status da resposta Kirvano:', response.status)

        let paymentData
        try {
          paymentData = await response.json()
          console.log('Dados de pagamento Kirvano recebidos:', paymentData)
        } catch (parseError) {
          console.error('Erro ao processar resposta Kirvano:', parseError)
          throw new Error('Resposta inválida do servidor de pagamento')
        }

        if (!response.ok) {
          console.error('Erro na resposta Kirvano:', paymentData)
          throw new Error(paymentData?.error || `Erro HTTP ${response.status}`)
        }
        
        if (paymentData.success) {
          if (paymentData.paymentUrl) {
            console.log('Redirecionando para Kirvano Checkout:', paymentData.paymentUrl)
            
            // Salvar payment_id no localStorage para recuperar após o pagamento
            if (paymentData.paymentId) {
              localStorage.setItem('last_payment_id', paymentData.paymentId)
              localStorage.setItem('last_customer_name', personalData.fullName)
              localStorage.setItem('last_customer_email', personalData.email)
            }
            
            // Redirecionar para página de pagamento da Kirvano
            window.location.href = paymentData.paymentUrl
          } else {
            throw new Error('URL de pagamento não recebida da Kirvano')
          }
        } else {
          throw new Error(paymentData.error || 'Falha ao criar sessão de pagamento na Kirvano')
        }
      } catch (fetchError) {
        clearTimeout(timeoutId)
        
        if (fetchError instanceof Error && fetchError.name === 'AbortError') {
          throw new Error('Tempo limite excedido. Verifique sua conexão e tente novamente.')
        }
        
        throw fetchError
      }
    } catch (error) {
      console.error('Erro no pagamento Kirvano:', error)
      
      // Mensagens de erro mais específicas para o usuário
      let userMessage = 'Erro ao processar pagamento. Tente novamente.'
      
      if (error instanceof Error) {
        if (error.message.includes('Failed to fetch') || error.message.includes('NetworkError')) {
          userMessage = 'Erro de conexão. Verifique sua internet e tente novamente.'
        } else if (error.message.includes('Kirvano') || error.message.includes('KIRVANO')) {
          userMessage = 'Erro de configuração da Kirvano. Entre em contato com o suporte.'
        } else if (error.message.includes('inválidos') || error.message.includes('invalid')) {
          userMessage = 'Dados de pagamento inválidos. Verifique as informações.'
        } else if (error.message.includes('não encontrado') || error.message.includes('404')) {
          userMessage = 'Serviço de pagamento temporariamente indisponível. Tente novamente em alguns minutos.'
        } else if (error.message.includes('Tempo limite')) {
          userMessage = 'Conexão muito lenta. Verifique sua internet e tente novamente.'
        } else if (error.message !== 'Erro ao processar pagamento. Tente novamente.') {
          userMessage = error.message
        }
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
    const astrocartography = calculateAstrocartography(personalData.fullName, personalData.birthDate, personalData.birthTime, personalData.birthPlace)

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
    <div id="payment-form" className="max-w-2xl mx-auto px-4">
      <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 sm:p-8 shadow-2xl border border-gray-100 dark:border-gray-700">
        <div className="text-center mb-6 sm:mb-8">
          <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full flex items-center justify-center mx-auto mb-4">
            <Star className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
          </div>
            <h2 className="text-xl sm:text-2xl font-bold text-gray-800 dark:text-gray-200 mb-2">
            Informações Necessárias para Análise
          </h2>
          <p className="text-sm sm:text-base text-gray-600 dark:text-gray-400 mb-4">
            A precisão dos dados influencia diretamente na qualidade e profundidade da análise
          </p>
          
          {/* Preço em destaque */}
          <div className="bg-gradient-to-r from-purple-50 to-pink-50 dark:from-purple-900 dark:to-pink-900 rounded-xl p-4 sm:p-6 mb-6">
            <div className="text-center">
              <div className="text-2xl sm:text-3xl font-bold text-purple-600 dark:text-purple-400 mb-2">
                R$ 80,00
              </div>
              <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-400">
                Análise Astrológica Completa - Pagamento único
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
              className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-gray-300 dark:border-gray-600 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 text-sm sm:text-base"
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
              className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-gray-300 dark:border-gray-600 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 text-sm sm:text-base"
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
              className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-gray-300 dark:border-gray-600 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 text-sm sm:text-base"
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
              className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-gray-300 dark:border-gray-600 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 text-sm sm:text-base"
            />
            <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">
              Importante para cálculos de ascendente e casas astrológicas
            </p>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              Local de Nascimento
            </label>
            <input
              type="text"
              value={personalData.birthPlace}
              onChange={(e) => setPersonalData(prev => ({ ...prev, birthPlace: e.target.value }))}
              className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-gray-300 dark:border-gray-600 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 text-sm sm:text-base"
              placeholder="Cidade, Estado, País"
            />
            <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">
              Fundamental para análise astrocartográfica precisa
            </p>
          </div>

          {/* Erro de pagamento */}
          {paymentError && (
            <div className="bg-red-50 dark:bg-red-900 border border-red-200 dark:border-red-700 rounded-xl p-4">
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
            disabled={!personalData.fullName.trim() || !personalData.email.trim() || !personalData.birthDate || isProcessingPayment}
            className="w-full bg-gradient-to-r from-purple-600 to-pink-600 text-white py-3 sm:py-4 px-4 sm:px-6 rounded-xl font-semibold text-base sm:text-lg hover:from-purple-700 hover:to-pink-700 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed shadow-lg hover:shadow-xl transform hover:scale-105 active:scale-95"
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
              <span>Processamento 100% seguro via Kirvano</span>
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
        birthPlace: personalData.birthPlace
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
            <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-4">
              <Calculator className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
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
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-pink-50 to-indigo-50 dark:from-gray-900 dark:via-purple-900 dark:to-indigo-900">
      <div className="container mx-auto px-4 py-6 sm:py-8">
        {/* Header */}
        {currentStep === 1 && (
          <>
            <div className="text-center mb-8 sm:mb-12">
              <div className="flex items-center justify-center gap-3 mb-4">
                <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full flex items-center justify-center">
                  <Sparkles className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
                </div>
              </div>
              <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent mb-4">
                Astroglix
              </h1>
              <p className="text-base sm:text-xl text-gray-600 dark:text-gray-300 max-w-4xl mx-auto px-4">
              Análise Astrológica Completa e Relatórios Personalizados: Numerologia Pitagórica, Astrologia Ocidental, Astrologia Chinesa, Astrocartografia e Prognósticos Personalizados
              </p>
              <div className="mt-4 sm:mt-6 text-xs sm:text-sm text-gray-500 dark:text-gray-400">
                <p>Descubra os segredos do universo através da sabedoria milenar</p>
              </div>
            </div>

            {/* Seção de Proposta de Valor */}
            <div className="max-w-4xl mx-auto mb-12 sm:mb-16 px-4">
              <div className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-3xl p-8 sm:p-12 text-white text-center shadow-2xl">
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4">
                  Desvende Seu Propósito de Vida e Transforme Suas Decisões
                </h2>
                <p className="text-lg sm:text-xl mb-6 opacity-90">
                  Uma análise completa que integra quatro disciplinas milenares para revelar sua essência e traçar seu caminho
                </p>
                <div className="flex flex-wrap justify-center gap-4 text-sm sm:text-base">
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5" />
                    <span>Entrega Imediata</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5" />
                    <span>100% Personalizado</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5" />
                    <span>Baseado em Ciências Antigas</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Seção de Benefícios/Transformações */}
            <div className="max-w-6xl mx-auto mb-12 sm:mb-16 px-4">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center text-gray-800 dark:text-gray-200 mb-4">
                O Que Nossa Análise Revelará Sobre Você
              </h2>
              <p className="text-center text-gray-600 dark:text-gray-400 mb-10 max-w-3xl mx-auto">
                Insights profundos que transformarão sua compreensão de si mesmo e suas escolhas de vida
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {/* Benefício 1 */}
                <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all">
                  <div className="w-14 h-14 bg-purple-100 dark:bg-purple-900 rounded-full flex items-center justify-center mb-4">
                    <Target className="w-7 h-7 text-purple-600 dark:text-purple-400" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-800 dark:text-gray-200 mb-3">
                    Seu Propósito de Vida
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400">
                    Identifique sua verdadeira missão nesta encarnação e compreenda o significado profundo de sua existência.
                  </p>
                </div>

                {/* Benefício 2 */}
                <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all">
                  <div className="w-14 h-14 bg-pink-100 dark:bg-pink-900 rounded-full flex items-center justify-center mb-4">
                    <Heart className="w-7 h-7 text-pink-600 dark:text-pink-400" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-800 dark:text-gray-200 mb-3">
                    Relacionamentos Harmoniosos
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400">
                    Compreenda seus padrões de relacionamento e desenvolva conexões mais profundas e compatíveis.
                  </p>
                </div>

                {/* Benefício 3 */}
                <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all">
                  <div className="w-14 h-14 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center mb-4">
                    <TrendingUp className="w-7 h-7 text-blue-600 dark:text-blue-400" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-800 dark:text-gray-200 mb-3">
                    Carreira e Prosperidade
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400">
                    Identifique a vocação que ressoa com seus talentos naturais e aprenda a canalizar a abundância.
                  </p>
                </div>

                {/* Benefício 4 */}
                <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all">
                  <div className="w-14 h-14 bg-green-100 dark:bg-green-900 rounded-full flex items-center justify-center mb-4">
                    <Brain className="w-7 h-7 text-green-600 dark:text-green-400" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-800 dark:text-gray-200 mb-3">
                    Autoconhecimento Integral
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400">
                    Explore seus potenciais, reconheça seus desafios e desenvolva uma compreensão profunda de sua natureza.
                  </p>
                </div>

                {/* Benefício 5 */}
                <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all">
                  <div className="w-14 h-14 bg-orange-100 dark:bg-orange-900 rounded-full flex items-center justify-center mb-4">
                    <Compass className="w-7 h-7 text-orange-600 dark:text-orange-400" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-800 dark:text-gray-200 mb-3">
                    Decisões Conscientes
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400">
                    Faça escolhas alinhadas com sua essência, seguindo caminhos que ressoam com sua verdade interior.
                  </p>
                </div>

                {/* Benefício 6 */}
                <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all">
                  <div className="w-14 h-14 bg-indigo-100 dark:bg-indigo-900 rounded-full flex items-center justify-center mb-4">
                    <MapPin className="w-7 h-7 text-indigo-600 dark:text-indigo-400" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-800 dark:text-gray-200 mb-3">
                    Locais de Potencial
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400">
                    Identifique regiões e cidades que amplificam sua energia e favorecem seu desenvolvimento pessoal.
                  </p>
                </div>
              </div>
            </div>

            {/* Seção "O que está incluído" */}
            <div className="max-w-4xl mx-auto mb-12 sm:mb-16 px-4">
              <div className="bg-white dark:bg-gray-800 rounded-3xl p-8 sm:p-12 shadow-2xl">
                <h2 className="text-2xl sm:text-3xl font-bold text-center text-gray-800 dark:text-gray-200 mb-8">
                  Análise Integral em Um Único Relatório
                </h2>
                
                <div className="space-y-6">
                  <div className="flex gap-4 items-start">
                    <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900 rounded-xl flex items-center justify-center flex-shrink-0">
                      <Calculator className="w-6 h-6 text-purple-600 dark:text-purple-400" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-gray-800 dark:text-gray-200 mb-2">
                        Numerologia Pitagórica Completa
                      </h3>
                      <p className="text-gray-600 dark:text-gray-400 text-sm">
                        Análise de seus números fundamentais: Caminho da Vida, Alma, Destino, Personalidade, Talentos Ocultos, Lições Cármicas e ciclos de vida. Compreenda as forças numerológicas que influenciam sua existência.
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-4 items-start">
                    <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900 rounded-xl flex items-center justify-center flex-shrink-0">
                      <Star className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-gray-800 dark:text-gray-200 mb-2">
                        Astrologia Ocidental Detalhada
                      </h3>
                      <p className="text-gray-600 dark:text-gray-400 text-sm">
                        Mapa astral completo incluindo Sol, Lua, Ascendente, posições planetárias, casas astrológicas e aspectos. Descubra como as energias cósmicas moldam sua personalidade e trajetória.
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-4 items-start">
                    <div className="w-12 h-12 bg-red-100 dark:bg-red-900 rounded-xl flex items-center justify-center flex-shrink-0">
                      <span className="text-lg font-bold text-red-600 dark:text-red-400">龍</span>
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-gray-800 dark:text-gray-200 mb-2">
                        Astrologia Chinesa Tradicional
                      </h3>
                      <p className="text-gray-600 dark:text-gray-400 text-sm">
                        Análise do seu signo animal, elemento, características pessoais, compatibilidades, desafios e potenciais. Orientações específicas para carreira e relacionamentos baseadas na sabedoria oriental.
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-4 items-start">
                    <div className="w-12 h-12 bg-green-100 dark:bg-green-900 rounded-xl flex items-center justify-center flex-shrink-0">
                      <Globe className="w-6 h-6 text-green-600 dark:text-green-400" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-gray-800 dark:text-gray-200 mb-2">
                        Astrocartografia Personalizada
                      </h3>
                      <p className="text-gray-600 dark:text-gray-400 text-sm">
                        Identifique locais no mundo que amplificam suas energias astrológicas. Descubra onde você terá maior potencial para sucesso profissional, relacionamentos, criatividade e realização pessoal.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="mt-8 pt-8 border-t border-gray-200 dark:border-gray-700 text-center">
                  <button 
                    onClick={() => {
                      document.getElementById('payment-form')?.scrollIntoView({ behavior: 'smooth', block: 'start' })
                    }}
                    className="inline-flex items-center gap-2 bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 px-6 py-3 rounded-full font-semibold hover:bg-green-200 dark:hover:bg-green-800 transition-colors duration-200 cursor-pointer"
                  >
                    <Gem className="w-5 h-5" />
                    <span>GERAR MEU RELATÓRIO ASTROLÓGICO COMPLETO</span>
                  </button>
                  <p className="text-sm text-gray-500 dark:text-gray-400 mt-3">
                    Pagamento único • Acesso imediato • Relatório disponível para download
                  </p>
                </div>
              </div>
            </div>

            {/* Seção de Prova Social / Garantia */}
            <div className="max-w-4xl mx-auto mb-12 px-4">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
                <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg">
                  <div className="text-3xl sm:text-4xl font-bold text-purple-600 dark:text-purple-400 mb-2">
                    4 em 1
                  </div>
                  <p className="text-gray-600 dark:text-gray-400 text-sm">
                    Disciplinas tradicionais integradas em uma análise única
                  </p>
                </div>
                
                <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg">
                  <div className="text-3xl sm:text-4xl font-bold text-pink-600 dark:text-pink-400 mb-2">
                    100%
                  </div>
                  <p className="text-gray-600 dark:text-gray-400 text-sm">
                    Análise personalizada baseada em seus dados pessoais
                  </p>
                </div>
                
                <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg">
                  <div className="text-3xl sm:text-4xl font-bold text-blue-600 dark:text-blue-400 mb-2">
                    <Lock className="w-10 h-10 mx-auto" />
                  </div>
                  <p className="text-gray-600 dark:text-gray-400 text-sm">
                    Pagamento 100% seguro e criptografado
                  </p>
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
          <div className="sticky top-0 z-50 bg-white dark:bg-gray-900 py-4 border-b border-gray-200 dark:border-gray-700 shadow-md">
            <div className="container mx-auto">
              <div className="flex justify-center overflow-x-auto">
                <div className="flex gap-4 px-4">
                  <button
                    onClick={() => {
                      document.getElementById('numerologia')?.scrollIntoView({ behavior: 'smooth', block: 'start' })
                    }}
                    className="flex flex-col items-center gap-2 rounded-xl p-4 sm:p-6 transition-all duration-300 shadow-lg min-w-[120px] sm:min-w-[140px] bg-white dark:bg-gray-800 hover:shadow-xl hover:bg-gradient-to-br hover:from-purple-50 hover:to-pink-50 dark:hover:from-purple-900/50 dark:hover:to-pink-900/50 cursor-pointer"
                  >
                    <Calculator className="w-6 h-6 sm:w-8 sm:h-8 text-purple-600 dark:text-purple-400" />
                    <span className="text-sm sm:text-base font-semibold text-gray-800 dark:text-gray-200 text-center">Numerologia</span>
                  </button>

                  <button
                    onClick={() => {
                      document.getElementById('astrologia')?.scrollIntoView({ behavior: 'smooth', block: 'start' })
                    }}
                    className="flex flex-col items-center gap-2 rounded-xl p-4 sm:p-6 transition-all duration-300 shadow-lg min-w-[120px] sm:min-w-[140px] bg-white dark:bg-gray-800 hover:shadow-xl hover:bg-gradient-to-br hover:from-blue-50 hover:to-indigo-50 dark:hover:from-blue-900/50 dark:hover:to-indigo-900/50 cursor-pointer"
                  >
                    <Star className="w-6 h-6 sm:w-8 sm:h-8 text-blue-600 dark:text-blue-400" />
                    <span className="text-sm sm:text-base font-semibold text-gray-800 dark:text-gray-200 text-center">Astrologia</span>
                  </button>

                  <button
                    onClick={() => {
                      document.getElementById('zodiaco-chines')?.scrollIntoView({ behavior: 'smooth', block: 'start' })
                    }}
                    className="flex flex-col items-center gap-2 rounded-xl p-4 sm:p-6 transition-all duration-300 shadow-lg min-w-[120px] sm:min-w-[140px] bg-white dark:bg-gray-800 hover:shadow-xl hover:bg-gradient-to-br hover:from-red-50 hover:to-orange-50 dark:hover:from-red-900/50 dark:hover:to-orange-900/50 cursor-pointer"
                  >
                    <span className="text-2xl sm:text-3xl font-bold text-red-600 dark:text-red-400">龍</span>
                    <span className="text-sm sm:text-base font-semibold text-gray-800 dark:text-gray-200 text-center">Zodíaco</span>
                  </button>

                  <button
                    onClick={() => {
                      document.getElementById('astrocartografia')?.scrollIntoView({ behavior: 'smooth', block: 'start' })
                    }}
                    className="flex flex-col items-center gap-2 rounded-xl p-4 sm:p-6 transition-all duration-300 shadow-lg min-w-[120px] sm:min-w-[140px] bg-white dark:bg-gray-800 hover:shadow-xl hover:bg-gradient-to-br hover:from-green-50 hover:to-teal-50 dark:hover:from-green-900/50 dark:hover:to-teal-900/50 cursor-pointer"
                  >
                    <Globe className="w-6 h-6 sm:w-8 sm:h-8 text-green-600 dark:text-green-400" />
                    <span className="text-sm sm:text-base font-semibold text-gray-800 dark:text-gray-200 text-center">Astrocartografia</span>
                  </button>

                  <button
                    onClick={() => {
                      document.getElementById('horoscope-section')?.scrollIntoView({ behavior: 'smooth', block: 'start' })
                    }}
                    className="flex flex-col items-center gap-2 rounded-xl p-4 sm:p-6 transition-all duration-300 shadow-lg min-w-[120px] sm:min-w-[140px] bg-white dark:bg-gray-800 hover:shadow-xl hover:bg-gradient-to-br hover:from-yellow-50 hover:to-amber-50 dark:hover:from-yellow-900/50 dark:hover:to-amber-900/50 cursor-pointer"
                  >
                    <Sparkles className="w-6 h-6 sm:w-8 sm:h-8 text-yellow-600 dark:text-yellow-400" />
                    <span className="text-sm sm:text-base font-semibold text-gray-800 dark:text-gray-200 text-center">Horóscopo</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Content based on current step */}
        {currentStep === 1 && renderDataCollection()}
        {currentStep === 2 && renderMysticReport()}

        {/* Footer */}
        <div className="text-center mt-12 sm:mt-16 py-6 sm:py-8 border-t border-gray-200 dark:border-gray-700">
          <p className="text-sm sm:text-base text-gray-500 dark:text-gray-400 mb-4">
            Desvende os segredos do universo através da sabedoria milenar
          </p>
          <div className="flex flex-wrap justify-center gap-2 sm:gap-6 text-xs sm:text-sm text-gray-400 dark:text-gray-500">
            <span>Numerologia Pitagórica</span>
            <span className="hidden sm:inline">•</span>
            <span>Astrologia Ocidental</span>
            <span className="hidden sm:inline">•</span>
            <span>Astrologia Chinesa</span>
            <span className="hidden sm:inline">•</span>
            <span>Astrocartografia</span>
            <span className="hidden sm:inline">•</span>
            <span>Horóscopo Diário</span>
          </div>
        </div>
      </div>
    </div>
  )
}