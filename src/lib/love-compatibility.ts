/**
 * Cálculo de compatibilidade amorosa entre duas pessoas com base em
 * zodíaco chinês e, opcionalmente, signo solar ocidental.
 */

// Índice = ano % 12. loveCompatibility alinhado ao usado em page.tsx (chineseZodiacData)
const CHINESE_LOVE_BY_INDEX: { animal: string; loveCompatibility: string[] }[] = [
  { animal: 'Macaco', loveCompatibility: ['Rato', 'Dragão'] },
  { animal: 'Galo', loveCompatibility: ['Boi', 'Serpente'] },
  { animal: 'Cão', loveCompatibility: ['Tigre', 'Cavalo'] },
  { animal: 'Porco', loveCompatibility: ['Cabra', 'Coelho'] },
  { animal: 'Rato', loveCompatibility: ['Dragão', 'Macaco'] },
  { animal: 'Boi', loveCompatibility: ['Rato', 'Serpente'] },
  { animal: 'Tigre', loveCompatibility: ['Cavalo', 'Cão'] },
  { animal: 'Coelho', loveCompatibility: ['Cabra', 'Porco'] },
  { animal: 'Dragão', loveCompatibility: ['Rato', 'Macaco'] },
  { animal: 'Serpente', loveCompatibility: ['Boi', 'Galo'] },
  { animal: 'Cavalo', loveCompatibility: ['Tigre', 'Cão'] },
  { animal: 'Cabra', loveCompatibility: ['Coelho', 'Porco'] }
]

function getChineseAnimal(birthDate: string): string {
  const year = new Date(birthDate).getFullYear()
  const index = year % 12
  return CHINESE_LOVE_BY_INDEX[index].animal
}

function getChineseLoveCompatibility(birthDate: string): string[] {
  const year = new Date(birthDate).getFullYear()
  const index = year % 12
  return [...CHINESE_LOVE_BY_INDEX[index].loveCompatibility]
}

function getSunSign(birthDate: string): string {
  const date = new Date(birthDate)
  const month = date.getMonth() + 1
  const day = date.getDate()
  if ((month === 3 && day >= 21) || (month === 4 && day <= 19)) return 'Áries'
  if ((month === 4 && day >= 20) || (month === 5 && day <= 20)) return 'Touro'
  if ((month === 5 && day >= 21) || (month === 6 && day <= 20)) return 'Gêmeos'
  if ((month === 6 && day >= 21) || (month === 7 && day <= 22)) return 'Câncer'
  if ((month === 7 && day >= 23) || (month === 8 && day <= 22)) return 'Leão'
  if ((month === 8 && day >= 23) || (month === 9 && day <= 22)) return 'Virgem'
  if ((month === 9 && day >= 23) || (month === 10 && day <= 22)) return 'Libra'
  if ((month === 10 && day >= 23) || (month === 11 && day <= 21)) return 'Escorpião'
  if ((month === 11 && day >= 22) || (month === 12 && day <= 21)) return 'Sagitário'
  if ((month === 12 && day >= 22) || (month === 1 && day <= 19)) return 'Capricórnio'
  if ((month === 1 && day >= 20) || (month === 2 && day <= 18)) return 'Aquário'
  return 'Peixes'
}

export type LoveCompatibilityLevel = 'high' | 'medium' | 'low'

export interface LoveCompatibilityResult {
  partnerFullName: string
  partnerSignWestern: string
  partnerSignChinese: string
  userSignChinese: string
  userSignWestern: string
  level: LoveCompatibilityLevel
  summary: string
  details: string
  chineseMutual: boolean
  /** Compatibilidade na vida familiar */
  familySummary: string
  /** Compatibilidade no trabalho / parceria profissional */
  workSummary: string
  /** Compatibilidade sexual */
  sexSummary: string
  /** Ideias de coisas para fazerem juntos */
  activitiesTogether: string[]
  /** Tipos de surpresa que o(a) parceiro(a) costuma gostar */
  partnerSurprises: string
}

/**
 * Calcula a compatibilidade amorosa entre a pessoa e o parceiro(a).
 * Usa zodíaco chinês (lista loveCompatibility) e signos solares para texto.
 */
export function calculateLoveCompatibility(
  userBirthDate: string,
  userFullName: string,
  partnerBirthDate: string,
  partnerFullName: string
): LoveCompatibilityResult {
  const userAnimal = getChineseAnimal(userBirthDate)
  const partnerAnimal = getChineseAnimal(partnerBirthDate)
  const userLoveList = getChineseLoveCompatibility(userBirthDate)
  const partnerLoveList = getChineseLoveCompatibility(partnerBirthDate)

  const partnerInUserList = userLoveList.includes(partnerAnimal)
  const userInPartnerList = partnerLoveList.includes(userAnimal)
  const chineseMutual = partnerInUserList && userInPartnerList

  let level: LoveCompatibilityLevel = 'low'
  if (chineseMutual) level = 'high'
  else if (partnerInUserList || userInPartnerList) level = 'medium'

  const userSignWestern = getSunSign(userBirthDate)
  const partnerSignWestern = getSunSign(partnerBirthDate)

  const levelLabels: Record<LoveCompatibilityLevel, string> = {
    high: 'Alta compatibilidade',
    medium: 'Compatibilidade moderada',
    low: 'Compatibilidade com desafios'
  }

  const summaryByLevel: Record<LoveCompatibilityLevel, string> = {
    high: 'No zodíaco chinês, os signos de vocês dois são considerados muito compatíveis no amor. A energia entre vocês tende a fluir de forma harmoniosa.',
    medium: 'Há afinidade no zodíaco chinês em pelo menos uma direção. Com diálogo e respeito, o relacionamento pode ser muito positivo.',
    low: 'Os signos chineses indicam que vocês podem ter dinâmicas mais desafiadoras. A consciência e o esforço de ambos fortalecem o vínculo.'
  }

  const familyByLevel: Record<LoveCompatibilityLevel, string> = {
    high: 'Na vida familiar, a combinação de seus signos favorece harmonia, compreensão mútua e apoio. Vocês tendem a construir um ambiente acolhedor e estável, com boa comunicação e respeito às diferenças.',
    medium: 'No âmbito familiar, há potencial para entendimento e parceria. Com paciência e disposição para ceder quando necessário, vocês podem criar um lar equilibrado e afetuoso.',
    low: 'Na vida familiar, podem surgir mais atritos ou estilos diferentes de lidar com a casa e os afetos. O diálogo, os combinados claros e o respeito ao espaço de cada um ajudam a equilibrar a convivência.'
  }

  const workByLevel: Record<LoveCompatibilityLevel, string> = {
    high: 'No trabalho e em parcerias profissionais, a energia entre vocês é favorável à colaboração. Vocês tendem a se complementar, respeitar prazos e objetivos em comum e manter um clima produtivo.',
    medium: 'Em projetos e trabalho em conjunto, há boa base para cooperação. Definir funções e expectativas com clareza potencializa os resultados e reduz mal-entendidos.',
    low: 'No ambiente de trabalho, podem existir diferenças de ritmo ou prioridades. Estabelecer regras claras, dividir tarefas e valorizar o que cada um traz fortalece a parceria profissional.'
  }

  const sexByLevel: Record<LoveCompatibilityLevel, string> = {
    high: 'Na intimidade e no sexo, a afinidade dos signos sugere conexão e química naturais. A tendência é haver cumplicidade, desejo recíproco e abertura para explorar e dialogar sobre a vida sexual.',
    medium: 'Na vida sexual, há espaço para boa sintonia com comunicação e vontade de agradar um ao outro. Abertura e respeito aos desejos de cada um tendem a aprofundar a intimidade.',
    low: 'Na intimidade, podem existir ritmos ou necessidades diferentes. A conversa honesta, o respeito e a disposição para experimentar juntos ajudam a construir uma vida sexual mais satisfatória.'
  }

  // Ideias de atividades para fazerem juntos (por signo solar do parceiro)
  const activitiesBySign: Record<string, string[]> = {
    Áries: ['Aventuras ao ar livre: trilhas, esportes radicais ou um dia na natureza', 'Jantar em um lugar novo e animado', 'Assistir a um jogo ou competição juntos', 'Planejar uma viagem surpresa de fim de semana', 'Atividades que envolvam desafio e adrenalina'],
    Touro: ['Jantar a dois em um restaurante aconchegante com boa comida', 'Dia em casa cozinhando juntos ou fazendo um piquenique', 'Passeio em parques, jardins ou feiras', 'Massagem ou spa em casa', 'Assistir a um filme ou série no sofá com petiscos'],
    Gêmeos: ['Conversas longas em um café ou bar diferente', 'Visitar uma exposição, feira ou evento cultural', 'Jogo de tabuleiro, escape room ou quiz', 'Fazer um curso ou workshop juntos', 'Passeio pela cidade descobrindo cantos novos'],
    Câncer: ['Noite em casa com jantar especial e filme', 'Passeio em um lugar com vista ou perto da água', 'Preparar uma surpresa caseira (jantar, bolo, decoração)', 'Relembrar fotos, músicas ou lugares com significado', 'Dia tranquilo em família ou com amigos próximos'],
    Leão: ['Programa que envolva diversão e visibilidade: show, teatro, festa', 'Jantar em um lugar especial onde possam se arrumar', 'Fazer algo criativo juntos: foto, vídeo, arte', 'Surpreender com um presente ou gesto que valorize a pessoa', 'Noite de karaokê, dança ou algo que brilhe'],
    Virgem: ['Atividade organizada: museu, roteiro planejado, curso prático', 'Fazer uma refeição saudável juntos e organizar algo em casa', 'Caminhada ou exercício em conjunto', 'Ajudar em um projeto ou meta do outro', 'Assistir a um documentário ou ler e debater'],
    Libra: ['Jantar romântico em ambiente bonito e harmonioso', 'Passeio em parques, galerias ou lugares esteticamente agradáveis', 'Fazer uma atividade de beleza juntos (spa, compras, foto)', 'Noite de música ao vivo ou concerto', 'Conversar sobre arte, relacionamento e planos a dois'],
    Escorpião: ['Programa íntimo e profundo: jantar a sós, conversa sincera', 'Atividade que crie cumplicidade: escape room, mistério, thriller', 'Massagem ou cuidado corporal em casa', 'Explorar um lugar novo ou um segredo que só os dois conhecem', 'Noite em casa com foco total um no outro'],
    Sagitário: ['Viagem curta ou longa, ou explorar uma cidade/trilha nova', 'Aula de algo novo: idioma, culinária, esporte', 'Passeio ao ar livre, acampamento ou aventura', 'Jantar em um restaurante de outra cultura', 'Assistir a um stand-up, show ou evento que inspire'],
    Capricórnio: ['Jantar em um lugar clássico e de qualidade', 'Planejar um objetivo em comum: viagem, projeto, poupança', 'Atividade que traga resultado: curso, treino, organização', 'Programa cultural: concerto, exposição, filme bom', 'Dia útil bem aproveitado e uma noite especial para fechar'],
    Aquário: ['Evento diferente: feira alternativa, palestra, meetup', 'Assistir a um documentário ou debate e conversar depois', 'Fazer algo em grupo com amigos ou comunidade', 'Inovar em um programa: lugar novo, atividade incomum', 'Apoiar uma causa ou projeto que o parceiro(a) valorize'],
    Peixes: ['Programa sensível: música ao vivo, cinema, arte', 'Passeio perto da natureza ou da água', 'Noite em casa com boa comida e ambiente acolhedor', 'Fazer algo criativo ou artístico juntos', 'Momento de relaxamento: meditação, banho, massagem']
  }

  // Tipos de surpresa que o(a) parceiro(a) costuma gostar (por signo solar)
  const surprisesBySign: Record<string, string> = {
    Áries: 'Geralmente curte surpresas que envolvam ação, novidade e demonstração de que você pensou em algo especial. Um programa inesperado, um presente que incentive um hobby ou esporte, ou uma declaração de amor em um momento de adrenalina tendem a ser bem recebidos.',
    Touro: 'Costuma valorizar surpresas concretas e sensoriais: um jantar preparado com carinho, um presente de qualidade (não necessariamente caro), um ambiente aconchegante montado em casa ou um mimo que envolva comida, música ou conforto.',
    Gêmeos: 'Tende a gostar de surpresas que estimulem a mente e a comunicação: um livro, um ingresso para um evento, uma atividade nova para fazerem juntos ou uma mensagem criativa. Surpresas que gerem assunto e novidade funcionam bem.',
    Câncer: 'Geralmente aprecia gestos emocionais e que remetam ao vínculo: uma carta, uma foto ou objeto com significado, um jantar caseiro, um momento só dos dois ou uma surpresa que mostre que você lembra de detalhes importantes da vida dele(a).',
    Leão: 'Costuma adorar surpresas que o(a) coloquem em destaque: um presente que chame atenção, um jantar ou evento especial, um elogio público (quando apropriado) ou qualquer gesto que diga “você é especial”. Sinceridade e grandiosidade moderada combinam.',
    Virgem: 'Tende a valorizar surpresas úteis, bem pensadas e organizadas. Algo que resolva um problema, um presente que atenda a um gosto específico ou um programa bem planejado costumam ser mais apreciados que gestos aleatórios ou exagerados.',
    Libra: 'Geralmente gosta de surpresas bonitas e harmoniosas: um jantar em um lugar elegante, flores, algo relacionado à estética ou à relação, ou um programa que priorize o “nós dois” em um ambiente agradável.',
    Escorpião: 'Costuma apreciar surpresas intensas e íntimas: algo que mostre que você conhece profundamente a pessoa, um gesto de lealdade, uma noite reservada só para os dois ou um presente com significado emocional forte.',
    Sagitário: 'Tende a gostar de surpresas que envolvam liberdade e novidade: uma viagem, um ingresso para uma experiência nova, um livro ou curso sobre um tema que ama, ou um plano espontâneo de aventura.',
    Capricórnio: 'Geralmente valoriza surpresas que demonstrem seriedade e consideração: um presente de qualidade e duradouro, um jantar em um lugar respeitado, um gesto que mostre que você leva a relação a sério ou um plano que combine carinho com praticidade.',
    Aquário: 'Costuma curtir surpresas originais e que fujam do óbvio: algo ligado a uma causa, um evento diferente, um presente criativo ou uma atividade que pouca gente faria. Autenticidade e inovação contam mais que convenção.',
    Peixes: 'Tende a apreciar surpresas emocionais e sensíveis: uma carta, uma música, um momento romântico, algo artístico ou um gesto que mostre empatia e cuidado. Ambiente acolhedor e demonstração de afeto costumam ser muito bem recebidos.'
  }

  const activitiesTogether = activitiesBySign[partnerSignWestern] ?? [
    'Jantar a dois em um lugar especial',
    'Passeio ao ar livre ou em um lugar que vocês ainda não conhecem',
    'Noite em casa com filme, música ou jogo',
    'Fazer uma atividade nova juntos (curso, esporte, hobby)',
    'Planejar uma viagem ou um fim de semana surpresa'
  ]

  const partnerSurprises = surprisesBySign[partnerSignWestern] ?? 'Cada pessoa tem suas preferências; observe os gestos que geram mais gratidão e alegria no dia a dia e use isso como guia para surpresas futuras.'

  const details = [
    `Você: ${userAnimal} (ocidental: ${userSignWestern}).`,
    `${partnerFullName}: ${partnerAnimal} (ocidental: ${partnerSignWestern}).`,
    chineseMutual
      ? 'Ambos estão na lista de compatibilidade amorosa um do outro.'
      : partnerInUserList
        ? `${partnerFullName} (${partnerAnimal}) está entre os signos compatíveis com você no amor.`
        : userInPartnerList
          ? `Você (${userAnimal}) está entre os signos compatíveis com ${partnerFullName} no amor.`
          : 'No zodíaco chinês, a combinação exige mais compreensão e paciência para florescer.'
  ].join(' ')

  return {
    partnerFullName: partnerFullName.trim(),
    partnerSignWestern,
    partnerSignChinese: partnerAnimal,
    userSignChinese: userAnimal,
    userSignWestern,
    level,
    summary: summaryByLevel[level],
    details,
    chineseMutual,
    familySummary: familyByLevel[level],
    workSummary: workByLevel[level],
    sexSummary: sexByLevel[level],
    activitiesTogether,
    partnerSurprises
  }
}
