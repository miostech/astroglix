'use client'

import { useState, useEffect, useMemo } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Country, State, City } from 'country-state-city'
import {
  Calculator,
  Sparkles,
  Heart,
  CheckCircle,
  CreditCard,
  Lock,
  AlertCircle,
  FileText
} from 'lucide-react'
import type { PersonalData, NumerologyResult, AstrologyResult, ChineseZodiac, AstrocartographyResult } from '@/lib/mystic-report-types'
import {
  type AstroInternalPlan,
  getAstroFormFieldVisibility,
  getReportVisibleSections
} from '@/lib/astro-internal-plan'
import {
  calculateCompleteNumerology,
  calculateAstrology,
  getChineseZodiac,
  calculateAstrocartography
} from '@/lib/mystic-report-calculations'
import { calculateLoveCompatibility, type LoveCompatibilityResult } from '@/lib/love-compatibility'
import DetailedReport from '@/components/DetailedReport'
import { AstroSiteVisitStats } from '@/components/AstroSiteVisitStats'
import iconAstrologia from '@/app/icon_astrologia.png'
import iconChinese from '@/app/icon_chinese.png'
import iconCartografia from '@/app/icon_cartografia.png'

export default function AstroInternalPage() {
  const [personalData, setPersonalData] = useState<PersonalData>({
    fullName: '',
    email: '',
    birthDate: '',
    birthTime: '',
    birthPlace: '',
    currentCity: ''
  })
  const [currentStep, setCurrentStep] = useState(1)
  const [selectedPlan, setSelectedPlan] = useState<AstroInternalPlan>('one_time')
  const [mysticReport, setMysticReport] = useState<{
    numerology?: NumerologyResult
    astrology?: AstrologyResult
    chineseZodiac?: ChineseZodiac
    astrocartography?: AstrocartographyResult
    loveCompatibility?: LoveCompatibilityResult
  } | null>(null)
  const [formError, setFormError] = useState<string | null>(null)
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
  const states = useMemo(
    () => (birthCountryCode ? State.getStatesOfCountry(birthCountryCode).sort((a, b) => a.name.localeCompare(b.name)) : []),
    [birthCountryCode]
  )
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
    setPersonalData((prev) => ({ ...prev, birthPlace: parts.join(', ') }))
  }

  const formVis = useMemo(() => getAstroFormFieldVisibility(selectedPlan), [selectedPlan])

  useEffect(() => {
    if (currentStep === 2) {
      window.scrollTo({ top: 0, behavior: 'auto' })
    }
  }, [currentStep])

  useEffect(() => {
    if (!formVis.showPartner) {
      setPersonalData((prev) => ({
        ...prev,
        partnerFullName: '',
        partnerBirthDate: ''
      }))
    }
  }, [formVis.showPartner])

  const generateReport = async () => {
    if (!personalData.fullName.trim()) {
      setFormError('Preencha seu nome completo.')
      return
    }
    if (!personalData.birthDate) {
      setFormError('Preencha a data de nascimento.')
      return
    }
    if (formVis.showBirthPlace && !personalData.birthPlace.trim()) {
      setFormError('Selecione o local de nascimento (país, estado e cidade).')
      return
    }
    if (formVis.showCurrentCity && !personalData.currentCity.trim()) {
      setFormError('Preencha a cidade de residência atual.')
      return
    }
    if (formVis.showPartner) {
      if (!personalData.partnerFullName?.trim()) {
        setFormError('Para compatibilidade amorosa no relatório, preencha o nome completo do(a) parceiro(a).')
        return
      }
      if (!personalData.partnerBirthDate?.trim()) {
        setFormError('Para compatibilidade amorosa no relatório, preencha a data de nascimento do(a) parceiro(a).')
        return
      }
    }

    setFormError(null)
    const birthPlace = formVis.showBirthPlace
      ? personalData.birthPlace.trim() || 'São Paulo, São Paulo, Brasil'
      : 'São Paulo, São Paulo, Brasil'
    const currentCity = formVis.showCurrentCity
      ? personalData.currentCity.trim() || 'São Paulo'
      : 'São Paulo'
    const vis = getReportVisibleSections(selectedPlan)

    const next: NonNullable<typeof mysticReport> = {}
    if (vis.numerology) {
      next.numerology = calculateCompleteNumerology(personalData.fullName, personalData.birthDate)
    }
    if (vis.astrology) {
      next.astrology = calculateAstrology(personalData.birthDate, personalData.birthTime, birthPlace)
    }
    if (vis.chinese) {
      next.chineseZodiac = getChineseZodiac(personalData.birthDate)
    }
    if (vis.astrocartography) {
      next.astrocartography = calculateAstrocartography(
        personalData.fullName,
        personalData.birthDate,
        personalData.birthTime ?? '',
        birthPlace,
        currentCity
      )
    }
    if (
      vis.love &&
      personalData.partnerFullName?.trim() &&
      personalData.partnerBirthDate?.trim()
    ) {
      next.loveCompatibility = calculateLoveCompatibility(
        personalData.birthDate,
        personalData.fullName,
        personalData.partnerBirthDate,
        personalData.partnerFullName
      )
    }

    setMysticReport(next)
    setCurrentStep(2)

    if (personalData.email) {
      try {
        const response = await fetch('/api/check-horoscope-subscription', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ email: personalData.email })
        })
        await response.json()
      } catch {
        /* opcional */
      }
    }
  }

  const resetFlow = () => {
    setCurrentStep(1)
    setMysticReport(null)
    setFormError(null)
  }

  const reportSections = getReportVisibleSections(selectedPlan)

  const canSubmitForm = useMemo(() => {
    if (!personalData.fullName.trim() || !personalData.birthDate) return false
    if (formVis.showBirthPlace && !personalData.birthPlace.trim()) return false
    if (formVis.showCurrentCity && !personalData.currentCity.trim()) return false
    if (formVis.showPartner && (!personalData.partnerFullName?.trim() || !personalData.partnerBirthDate?.trim())) {
      return false
    }
    return true
  }, [personalData, formVis])

  const reportData =
    mysticReport &&
    ({
      personalData: {
        fullName: personalData.fullName,
        ...(personalData.email.trim() ? { email: personalData.email.trim() } : {}),
        birthDate: personalData.birthDate,
        birthTime: personalData.birthTime,
        birthPlace: personalData.birthPlace,
        currentCity: personalData.currentCity
      },
      ...(mysticReport.numerology && { numerology: mysticReport.numerology }),
      ...(mysticReport.astrology && { astrology: mysticReport.astrology }),
      ...(mysticReport.chineseZodiac && { chineseZodiac: mysticReport.chineseZodiac }),
      ...(mysticReport.astrocartography && { astrocartography: mysticReport.astrocartography }),
      ...(mysticReport.loveCompatibility && { loveCompatibility: mysticReport.loveCompatibility })
    } as const)

  return (
    <div className="min-h-screen min-h-[100dvh] bg-gradient-to-br from-purple-50 via-pink-50 to-indigo-50 dark:from-gray-900 dark:via-purple-900 dark:to-indigo-900 overflow-x-hidden">
      <AstroSiteVisitStats />
      <div className="container mx-auto px-3 sm:px-4 py-4 sm:py-8 max-w-full">
        <header className="mb-6 flex flex-wrap items-center justify-between gap-3">
          <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-400 max-w-xl">
            Área protegida por senha. Relatório sem checkout (Kiwify desativado aqui).
          </p>
          <div className="flex flex-wrap items-center gap-3 shrink-0">
            <Link
              href="/astro/logout"
              className="text-sm font-medium text-gray-600 dark:text-gray-400 hover:underline"
            >
              Sair
            </Link>
            <Link href="/" className="text-sm font-medium text-purple-700 dark:text-purple-300 hover:underline">
              ← Site público
            </Link>
          </div>
        </header>

        {currentStep === 2 && reportData && (
          <div className="sticky top-0 z-50 bg-white dark:bg-gray-900 py-3 sm:py-4 border-b border-gray-200 dark:border-gray-700 shadow-md -mx-3 sm:mx-0 px-0 mb-4">
            <div className="container mx-auto overflow-x-auto overflow-y-hidden">
              <div className="flex justify-between items-center gap-3 px-3 sm:px-4 mb-3">
                <button
                  type="button"
                  onClick={resetFlow}
                  className="text-sm font-medium text-purple-700 dark:text-purple-300 hover:underline"
                >
                  ← Gerar outro relatório
                </button>
              </div>
              <div className="flex justify-start sm:justify-center gap-2 sm:gap-4 px-3 sm:px-4 pb-1 min-w-0">
                {reportSections.numerology && mysticReport?.numerology && (
                  <button
                    type="button"
                    onClick={() => document.getElementById('numerologia')?.scrollIntoView({ behavior: 'smooth', block: 'start' })}
                    className="flex flex-col items-center gap-1.5 sm:gap-2 rounded-xl p-3 sm:p-6 transition-all duration-300 shadow-lg min-w-[88px] sm:min-w-[140px] min-h-[72px] sm:min-h-0 bg-white dark:bg-gray-800 hover:shadow-xl cursor-pointer touch-manipulation"
                  >
                    <Calculator className="w-5 h-5 sm:w-8 sm:h-8 text-purple-600 dark:text-purple-400 shrink-0" />
                    <span className="text-[11px] sm:text-base font-semibold text-gray-800 dark:text-gray-200 text-center leading-tight">Numerologia</span>
                  </button>
                )}
                {reportSections.astrology && mysticReport?.astrology && (
                  <button
                    type="button"
                    onClick={() => document.getElementById('astrologia')?.scrollIntoView({ behavior: 'smooth', block: 'start' })}
                    className="flex flex-col items-center gap-1.5 sm:gap-2 rounded-xl p-3 sm:p-6 transition-all duration-300 shadow-lg min-w-[88px] sm:min-w-[140px] min-h-[72px] sm:min-h-0 bg-white dark:bg-gray-800 hover:shadow-xl cursor-pointer touch-manipulation"
                  >
                    <Image src={iconAstrologia} alt="Astrologia" className="w-5 h-5 sm:w-8 sm:h-8 shrink-0 object-contain" />
                    <span className="text-[11px] sm:text-base font-semibold text-gray-800 dark:text-gray-200 text-center leading-tight">Astrologia</span>
                  </button>
                )}
                {reportSections.chinese && mysticReport?.chineseZodiac && (
                  <button
                    type="button"
                    onClick={() => document.getElementById('zodiaco-chines')?.scrollIntoView({ behavior: 'smooth', block: 'start' })}
                    className="flex flex-col items-center gap-1.5 sm:gap-2 rounded-xl p-3 sm:p-6 transition-all duration-300 shadow-lg min-w-[88px] sm:min-w-[140px] min-h-[72px] sm:min-h-0 bg-white dark:bg-gray-800 hover:shadow-xl cursor-pointer touch-manipulation"
                  >
                    <Image src={iconChinese} alt="Zodíaco Chinês" className="w-5 h-5 sm:w-8 sm:h-8 shrink-0 object-contain" />
                    <span className="text-[11px] sm:text-base font-semibold text-gray-800 dark:text-gray-200 text-center leading-tight">Zodíaco</span>
                  </button>
                )}
                {reportSections.astrocartography && mysticReport?.astrocartography && (
                  <button
                    type="button"
                    onClick={() => document.getElementById('astrocartografia')?.scrollIntoView({ behavior: 'smooth', block: 'start' })}
                    className="flex flex-col items-center gap-1.5 sm:gap-2 rounded-xl p-3 sm:p-6 transition-all duration-300 shadow-lg min-w-[88px] sm:min-w-[140px] min-h-[72px] sm:min-h-0 bg-white dark:bg-gray-800 hover:shadow-xl cursor-pointer touch-manipulation"
                  >
                    <Image src={iconCartografia} alt="Astrocartografia" className="w-5 h-5 sm:w-8 sm:h-8 shrink-0 object-contain" />
                    <span className="text-[11px] sm:text-base font-semibold text-gray-800 dark:text-gray-200 text-center leading-tight">Astrocartografia</span>
                  </button>
                )}
                {reportSections.horoscope && (
                  <button
                    type="button"
                    onClick={() => document.getElementById('horoscope-section')?.scrollIntoView({ behavior: 'smooth', block: 'start' })}
                    className="flex flex-col items-center gap-1.5 sm:gap-2 rounded-xl p-3 sm:p-6 transition-all duration-300 shadow-lg min-w-[88px] sm:min-w-[140px] min-h-[72px] sm:min-h-0 bg-white dark:bg-gray-800 hover:shadow-xl cursor-pointer touch-manipulation"
                  >
                    <Sparkles className="w-5 h-5 sm:w-8 sm:h-8 text-yellow-600 dark:text-yellow-400 shrink-0" />
                    <span className="text-[11px] sm:text-base font-semibold text-gray-800 dark:text-gray-200 text-center leading-tight">Horóscopo</span>
                  </button>
                )}
                {reportSections.love && mysticReport?.loveCompatibility && (
                  <button
                    type="button"
                    onClick={() => document.getElementById('compatibilidade')?.scrollIntoView({ behavior: 'smooth', block: 'start' })}
                    className="flex flex-col items-center gap-1.5 sm:gap-2 rounded-xl p-3 sm:p-6 transition-all duration-300 shadow-lg min-w-[88px] sm:min-w-[140px] min-h-[72px] sm:min-h-0 bg-white dark:bg-gray-800 hover:shadow-xl cursor-pointer touch-manipulation"
                  >
                    <Heart className="w-5 h-5 sm:w-8 sm:h-8 text-pink-600 dark:text-pink-400 shrink-0" />
                    <span className="text-[11px] sm:text-base font-semibold text-gray-800 dark:text-gray-200 text-center leading-tight">Compatibilidade</span>
                  </button>
                )}
              </div>
            </div>
          </div>
        )}

        {currentStep === 1 && (
          <div className="max-w-2xl mx-auto px-3 sm:px-4 scroll-mt-24">
            <div className="bg-white dark:bg-gray-800 rounded-3xl p-4 sm:p-8 shadow-xl border border-gray-100/80 dark:border-gray-700/80 relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-purple-500 via-pink-500 to-purple-500 rounded-t-3xl" />
              <div className="text-center mb-6 sm:mb-8">
                <div className="flex justify-center mb-4">
                  <Image src="/logo_astroglix2.png" alt="Astroglix" width={240} height={96} className="h-20 sm:h-24 w-auto object-contain" />
                </div>
                <h1 className="text-xl sm:text-2xl font-bold text-gray-800 dark:text-gray-200 mb-2">Informações para o relatório</h1>
                <p className="text-sm sm:text-base text-gray-600 dark:text-gray-400 mb-4">
                  A precisão dos dados influencia a qualidade da análise. Sem pagamento nesta página.
                </p>
                <div className="mb-6 text-left">
                  <p className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-3">Tipo de relatório</p>
                  <p className="text-xs text-gray-500 dark:text-gray-400 mb-3">
                    Escolha o pacote completo, só compatibilidade extra, ou uma análise isolada para um foco específico.
                  </p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4">
                    {(
                      [
                        {
                          id: 'one_time' as const,
                          title: 'Análise 4 em 1',
                          accent: 'purple',
                          lines: ['Numerologia, astrologia, zodíaco chinês e astrocartografia', 'Inclui horóscopo do dia.', 'Sem bloco de compatibilidade a dois.']
                        },
                        {
                          id: 'love_compatibility' as const,
                          title: '+ Compatibilidade amorosa no relatório',
                          accent: 'pink',
                          lines: [
                            'Tudo da análise 4 em 1.',
                            'Aparecem logo abaixo os dados do(a) parceiro(a) (obrigatórios).',
                            'Bloco de compatibilidade no PDF.'
                          ]
                        },
                        {
                          id: 'numerology_only' as const,
                          title: 'Análise numerologia',
                          accent: 'purple',
                          lines: ['Apenas numerologia pessoal completa.', 'Ideal para leitura focada nessa área.']
                        },
                        {
                          id: 'astrology_only' as const,
                          title: 'Análise astrologia',
                          accent: 'blue',
                          lines: ['Apenas astrologia ocidental (mapa e signos).']
                        },
                        {
                          id: 'chinese_only' as const,
                          title: 'Análise zodíaco chinês',
                          accent: 'orange',
                          lines: ['Apenas tradição chinesa (animal, elemento, ano).']
                        },
                        {
                          id: 'astrocartography_only' as const,
                          title: 'Análise astrocartografia',
                          accent: 'teal',
                          lines: ['Apenas mapa e leitura por locais.', 'Usa cidade de residência atual.']
                        }
                      ] as const
                    ).map((opt) => {
                      const active = selectedPlan === opt.id
                      const borderActive =
                        opt.accent === 'pink'
                          ? 'border-pink-500 bg-pink-50 dark:bg-pink-900/30 dark:border-pink-400'
                          : opt.accent === 'blue'
                            ? 'border-blue-500 bg-blue-50 dark:bg-blue-900/30 dark:border-blue-400'
                            : opt.accent === 'orange'
                              ? 'border-orange-500 bg-orange-50 dark:bg-orange-900/30 dark:border-orange-400'
                              : opt.accent === 'teal'
                                ? 'border-teal-500 bg-teal-50 dark:bg-teal-900/30 dark:border-teal-400'
                                : 'border-purple-500 bg-purple-50 dark:bg-purple-900/30 dark:border-purple-400'
                      return (
                        <button
                          key={opt.id}
                          type="button"
                          onClick={() => setSelectedPlan(opt.id)}
                          className={`rounded-2xl p-4 sm:p-5 border-2 text-left transition-all ${
                            active
                              ? borderActive
                              : 'border-gray-200 dark:border-gray-600 bg-white dark:bg-gray-700/50 hover:border-purple-300 dark:hover:border-purple-600'
                          }`}
                        >
                          <div className="flex items-center justify-between gap-2 mb-2">
                            <span className="font-semibold text-gray-800 dark:text-gray-200 text-sm sm:text-base leading-tight">
                              {opt.title}
                            </span>
                            {active && (
                              <CheckCircle
                                className={`w-5 h-5 shrink-0 ${
                                  opt.accent === 'pink'
                                    ? 'text-pink-500'
                                    : opt.accent === 'blue'
                                      ? 'text-blue-500'
                                      : opt.accent === 'orange'
                                        ? 'text-orange-500'
                                        : opt.accent === 'teal'
                                          ? 'text-teal-500'
                                          : 'text-purple-500'
                                }`}
                              />
                            )}
                          </div>
                          <ul className="text-xs text-gray-600 dark:text-gray-400 space-y-1 list-disc list-inside">
                            {opt.lines.map((line) => (
                              <li key={line}>{line}</li>
                            ))}
                          </ul>
                        </button>
                      )
                    })}
                  </div>

                  {formVis.showPartner && (
                    <div className="mt-4 rounded-2xl border-2 border-pink-300 dark:border-pink-600 bg-pink-50/80 dark:bg-pink-950/40 p-4 sm:p-5 shadow-sm">
                      <p className="text-sm font-semibold text-pink-900 dark:text-pink-100 mb-1">
                        Compatibilidade amorosa
                      </p>
                      <p className="text-xs text-pink-800/90 dark:text-pink-200/90 mb-4">
                        Preencha os dados do(a) parceiro(a) para gerar o bloco de compatibilidade no relatório.
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
                            className="w-full px-4 sm:px-5 py-3 sm:py-3.5 border border-pink-200 dark:border-pink-700 rounded-2xl bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 text-sm sm:text-base focus:ring-2 focus:ring-pink-400/50 focus:border-pink-400"
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
                            className="w-full px-4 sm:px-5 py-3 sm:py-3.5 border border-pink-200 dark:border-pink-700 rounded-2xl bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 text-sm sm:text-base focus:ring-2 focus:ring-pink-400/50 focus:border-pink-400"
                          />
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </div>

              <div className="space-y-4 sm:space-y-6">
                <p className="text-sm font-medium text-gray-700 dark:text-gray-300">Seus dados</p>
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Nome completo *</label>
                  <input
                    type="text"
                    value={personalData.fullName}
                    onChange={(e) => setPersonalData((prev) => ({ ...prev, fullName: e.target.value }))}
                    className="w-full px-4 sm:px-5 py-3 sm:py-3.5 border border-gray-200 dark:border-gray-600 rounded-2xl focus:ring-2 focus:ring-purple-400/50 focus:border-purple-400 bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 text-sm sm:text-base"
                    placeholder="Seu nome completo como no documento"
                  />
                </div>
                {/* E-mail desativado por enquanto — reativar quando for usar.
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">E-mail *</label>
                  <input
                    type="email"
                    value={personalData.email}
                    onChange={(e) => setPersonalData((prev) => ({ ...prev, email: e.target.value }))}
                    className="w-full px-4 sm:px-5 py-3 sm:py-3.5 border border-gray-200 dark:border-gray-600 rounded-2xl focus:ring-2 focus:ring-purple-400/50 focus:border-purple-400 bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 text-sm sm:text-base"
                    placeholder="seu@email.com"
                  />
                  <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">Usado no relatório e no horóscopo inline, se aplicável.</p>
                </div>
                */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Data de nascimento *</label>
                  <input
                    type="date"
                    value={personalData.birthDate}
                    onChange={(e) => setPersonalData((prev) => ({ ...prev, birthDate: e.target.value }))}
                    className="w-full px-4 sm:px-5 py-3 sm:py-3.5 border border-gray-200 dark:border-gray-600 rounded-2xl focus:ring-2 focus:ring-purple-400/50 focus:border-purple-400 bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 text-sm sm:text-base"
                  />
                </div>
                {formVis.showBirthTime && (
                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Hora de nascimento</label>
                    <input
                      type="time"
                      value={personalData.birthTime}
                      onChange={(e) => setPersonalData((prev) => ({ ...prev, birthTime: e.target.value }))}
                      className="w-full px-4 sm:px-5 py-3 sm:py-3.5 border border-gray-200 dark:border-gray-600 rounded-2xl focus:ring-2 focus:ring-purple-400/50 focus:border-purple-400 bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 text-sm sm:text-base"
                    />
                  </div>
                )}
                {formVis.showBirthPlace && (
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Local de nascimento *</label>
                  <p className="text-xs text-gray-500 dark:text-gray-400 mb-3">País, estado e cidade</p>
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
                        className="w-full px-4 py-3 border border-gray-200 dark:border-gray-600 rounded-2xl bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 text-sm sm:text-base"
                      >
                        <option value="">Selecione o país</option>
                        {countries.map((c) => (
                          <option key={c.isoCode} value={c.isoCode}>
                            {c.name}
                          </option>
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
                        className="w-full px-4 py-3 border border-gray-200 dark:border-gray-600 rounded-2xl bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 text-sm sm:text-base disabled:opacity-50"
                      >
                        <option value="">{states.length ? 'Estado' : '—'}</option>
                        {states.map((s) => (
                          <option key={s.isoCode} value={s.isoCode}>
                            {s.name}
                          </option>
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
                        className="w-full px-4 py-3 border border-gray-200 dark:border-gray-600 rounded-2xl bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 text-sm sm:text-base disabled:opacity-50"
                      >
                        <option value="">Cidade</option>
                        {cities.map((city) => (
                          <option key={`${city.stateCode}-${city.name}`} value={city.name}>
                            {city.name}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>
                </div>
                )}
                {formVis.showCurrentCity && (
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Cidade de residência atual *</label>
                  <input
                    type="text"
                    value={personalData.currentCity}
                    onChange={(e) => setPersonalData((prev) => ({ ...prev, currentCity: e.target.value }))}
                    className="w-full px-4 sm:px-5 py-3 sm:py-3.5 border border-gray-200 dark:border-gray-600 rounded-2xl focus:ring-2 focus:ring-purple-400/50 focus:border-purple-400 bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 text-sm sm:text-base"
                    placeholder="Ex: São Paulo, Lisboa, Madrid"
                  />
                </div>
                )}

                {formError && (
                  <div className="bg-red-50 dark:bg-red-900/30 border border-red-200 dark:border-red-800 rounded-2xl p-4 flex gap-3">
                    <AlertCircle className="w-5 h-5 text-red-500 shrink-0 mt-0.5" />
                    <p className="text-sm text-red-700 dark:text-red-300">{formError}</p>
                  </div>
                )}

                {/* <button
                  type="button"
                  disabled
                  className="w-full flex items-center justify-center gap-2 py-3.5 px-6 rounded-full font-semibold text-base border-2 border-gray-300 dark:border-gray-600 text-gray-500 dark:text-gray-400 bg-gray-100 dark:bg-gray-800/80 cursor-not-allowed opacity-80"
                  aria-disabled
                >
                  <CreditCard className="w-5 h-5" />
                  Pagar com Kiwify (desativado nesta página)
                </button> */}

                <button
                  type="button"
                  onClick={() => void generateReport()}
                  disabled={!canSubmitForm}
                  className="w-full bg-gradient-to-r from-purple-600 to-pink-600 text-white py-3.5 sm:py-4 px-6 sm:px-8 rounded-full font-semibold text-base sm:text-lg hover:from-purple-700 hover:to-pink-700 transition-all disabled:opacity-50 disabled:cursor-not-allowed shadow-lg flex items-center justify-center gap-2"
                >
                  <FileText className="w-5 h-5" />
                  Gerar relatório agora
                </button>

                <div className="flex items-center justify-center gap-2 text-xs text-gray-500 dark:text-gray-400">
                  <Lock className="w-4 h-4" />
                  <span>Checkout desligado — uso interno / link direto</span>
                </div>
              </div>
            </div>
          </div>
        )}

        {currentStep === 2 && reportData && (
          <DetailedReport reportData={reportData} visibleSections={reportSections} />
        )}
      </div>
    </div>
  )
}
