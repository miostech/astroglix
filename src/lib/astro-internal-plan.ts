/** Planos da área interna /astro (independente dos planos Kiwify em `PlanType`). */
export type AstroInternalPlan =
  | 'one_time'
  | 'love_compatibility'
  | 'numerology_only'
  | 'astrology_only'
  | 'chinese_only'
  | 'astrocartography_only'

export type ReportVisibleSections = {
  numerology: boolean
  astrology: boolean
  chinese: boolean
  astrocartography: boolean
  horoscope: boolean
  love: boolean
}

export function getReportVisibleSections(plan: AstroInternalPlan): ReportVisibleSections {
  switch (plan) {
    case 'one_time':
      return {
        numerology: true,
        astrology: true,
        chinese: true,
        astrocartography: true,
        horoscope: true,
        love: false
      }
    case 'love_compatibility':
      return {
        numerology: true,
        astrology: true,
        chinese: true,
        astrocartography: true,
        horoscope: true,
        love: true
      }
    case 'numerology_only':
      return {
        numerology: true,
        astrology: false,
        chinese: false,
        astrocartography: false,
        horoscope: false,
        love: false
      }
    case 'astrology_only':
      return {
        numerology: false,
        astrology: true,
        chinese: false,
        astrocartography: false,
        horoscope: false,
        love: false
      }
    case 'chinese_only':
      return {
        numerology: false,
        astrology: false,
        chinese: true,
        astrocartography: false,
        horoscope: false,
        love: false
      }
    case 'astrocartography_only':
      return {
        numerology: false,
        astrology: false,
        chinese: false,
        astrocartography: true,
        horoscope: false,
        love: false
      }
    default:
      return getReportVisibleSections('one_time')
  }
}

/** Quais blocos do formulário da área /astro exibir conforme o plano. */
export function getAstroFormFieldVisibility(plan: AstroInternalPlan): {
  showBirthPlace: boolean
  showCurrentCity: boolean
  showBirthTime: boolean
  showPartner: boolean
} {
  switch (plan) {
    case 'numerology_only':
    case 'chinese_only':
      return {
        showBirthPlace: false,
        showCurrentCity: false,
        showBirthTime: false,
        showPartner: false
      }
    case 'astrology_only':
      return {
        showBirthPlace: true,
        showCurrentCity: false,
        showBirthTime: true,
        showPartner: false
      }
    case 'astrocartography_only':
      return {
        showBirthPlace: true,
        showCurrentCity: true,
        showBirthTime: true,
        showPartner: false
      }
    case 'love_compatibility':
      return {
        showBirthPlace: true,
        showCurrentCity: true,
        showBirthTime: true,
        showPartner: true
      }
    case 'one_time':
    default:
      return {
        showBirthPlace: true,
        showCurrentCity: true,
        showBirthTime: true,
        showPartner: false
      }
  }
}
