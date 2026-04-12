import type { NumerologyResult, AstrologyResult, ChineseZodiac, AstrocartographyResult } from './mystic-report-types'
import { astrologySigns, chineseZodiacData } from './mystic-report-data'

export function calculateCompleteNumerology(fullName: string, date: string): NumerologyResult {
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

export function calculateAstrology(date: string, time: string, place: string): AstrologyResult {
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

export function getChineseZodiac(date: string): ChineseZodiac {
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

export function calculateAstrocartography(
  fullName: string,
  date: string,
  time: string,
  place: string,
  currentCity?: string
): AstrocartographyResult {
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
