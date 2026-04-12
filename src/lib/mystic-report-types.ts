export interface PersonalData {
  fullName: string
  email: string
  birthDate: string
  birthTime: string
  birthPlace: string
  currentCity: string
  partnerFullName?: string
  partnerBirthDate?: string
}

export interface NumerologyResult {
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

export interface AstrologyResult {
  sunSign: string
  moonSign: string
  ascendant: string
  planets: { [key: string]: { sign: string; house: number } }
  aspects: string[]
  currentTransits: string[]
  houses: { [key: number]: string }
}

export interface ChineseZodiac {
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

export interface AstrocartographyResult {
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
