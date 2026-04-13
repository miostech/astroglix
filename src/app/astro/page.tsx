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
import type { PlanType } from '@/lib/stripe'
import type { PersonalData, NumerologyResult, AstrologyResult, ChineseZodiac, AstrocartographyResult } from '@/lib/mystic-report-types'
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
  const [selectedPlan, setSelectedPlan] = useState<PlanType>('one_time')
  const [mysticReport, setMysticReport] = useState<{
    numerology: NumerologyResult
    astrology: AstrologyResult
    chineseZodiac: ChineseZodiac
    astrocartography: AstrocartographyResult
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

  useEffect(() => {
    if (currentStep === 2) {
      window.scrollTo({ top: 0, behavior: 'auto' })
    }
  }, [currentStep])

  const generateReport = async () => {
    if (!personalData.fullName.trim()) {
      setFormError('Preencha seu nome completo.')
      return
    }
    if (!personalData.email.trim()) {
      setFormError('Preencha seu e-mail.')
      return
    }
    if (!personalData.birthDate) {
      setFormError('Preencha a data de nascimento.')
      return
    }
    if (!personalData.birthPlace.trim()) {
      setFormError('Selecione o local de nascimento (país, estado e cidade).')
      return
    }
    if (!personalData.currentCity.trim()) {
      setFormError('Preencha a cidade de residência atual.')
      return
    }
    if (selectedPlan === 'love_compatibility') {
      if (!personalData.partnerFullName?.trim()) {
        setFormError('Para compatibilidade no relatório, preencha o nome completo do(a) parceiro(a).')
        return
      }
      if (!personalData.partnerBirthDate?.trim()) {
        setFormError('Para compatibilidade no relatório, preencha a data de nascimento do(a) parceiro(a).')
        return
      }
    }

    setFormError(null)
    const birthPlace = personalData.birthPlace.trim() || 'São Paulo, São Paulo, Brasil'
    const currentCity = personalData.currentCity.trim() || 'São Paulo'

    const numerology = calculateCompleteNumerology(personalData.fullName, personalData.birthDate)
    const astrology = calculateAstrology(personalData.birthDate, personalData.birthTime, birthPlace)
    const chineseZodiac = getChineseZodiac(personalData.birthDate)
    const astrocartography = calculateAstrocartography(
      personalData.fullName,
      personalData.birthDate,
      personalData.birthTime ?? '',
      birthPlace,
      currentCity
    )

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

  const reportData =
    mysticReport &&
    ({
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
      astrocartography: mysticReport.astrocartography,
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
                <button
                  type="button"
                  onClick={() => document.getElementById('numerologia')?.scrollIntoView({ behavior: 'smooth', block: 'start' })}
                  className="flex flex-col items-center gap-1.5 sm:gap-2 rounded-xl p-3 sm:p-6 transition-all duration-300 shadow-lg min-w-[88px] sm:min-w-[140px] min-h-[72px] sm:min-h-0 bg-white dark:bg-gray-800 hover:shadow-xl cursor-pointer touch-manipulation"
                >
                  <Calculator className="w-5 h-5 sm:w-8 sm:h-8 text-purple-600 dark:text-purple-400 shrink-0" />
                  <span className="text-[11px] sm:text-base font-semibold text-gray-800 dark:text-gray-200 text-center leading-tight">Numerologia</span>
                </button>
                <button
                  type="button"
                  onClick={() => document.getElementById('astrologia')?.scrollIntoView({ behavior: 'smooth', block: 'start' })}
                  className="flex flex-col items-center gap-1.5 sm:gap-2 rounded-xl p-3 sm:p-6 transition-all duration-300 shadow-lg min-w-[88px] sm:min-w-[140px] min-h-[72px] sm:min-h-0 bg-white dark:bg-gray-800 hover:shadow-xl cursor-pointer touch-manipulation"
                >
                  <Image src={iconAstrologia} alt="Astrologia" className="w-5 h-5 sm:w-8 sm:h-8 shrink-0 object-contain" />
                  <span className="text-[11px] sm:text-base font-semibold text-gray-800 dark:text-gray-200 text-center leading-tight">Astrologia</span>
                </button>
                <button
                  type="button"
                  onClick={() => document.getElementById('zodiaco-chines')?.scrollIntoView({ behavior: 'smooth', block: 'start' })}
                  className="flex flex-col items-center gap-1.5 sm:gap-2 rounded-xl p-3 sm:p-6 transition-all duration-300 shadow-lg min-w-[88px] sm:min-w-[140px] min-h-[72px] sm:min-h-0 bg-white dark:bg-gray-800 hover:shadow-xl cursor-pointer touch-manipulation"
                >
                  <Image src={iconChinese} alt="Zodíaco Chinês" className="w-5 h-5 sm:w-8 sm:h-8 shrink-0 object-contain" />
                  <span className="text-[11px] sm:text-base font-semibold text-gray-800 dark:text-gray-200 text-center leading-tight">Zodíaco</span>
                </button>
                <button
                  type="button"
                  onClick={() => document.getElementById('astrocartografia')?.scrollIntoView({ behavior: 'smooth', block: 'start' })}
                  className="flex flex-col items-center gap-1.5 sm:gap-2 rounded-xl p-3 sm:p-6 transition-all duration-300 shadow-lg min-w-[88px] sm:min-w-[140px] min-h-[72px] sm:min-h-0 bg-white dark:bg-gray-800 hover:shadow-xl cursor-pointer touch-manipulation"
                >
                  <Image src={iconCartografia} alt="Astrocartografia" className="w-5 h-5 sm:w-8 sm:h-8 shrink-0 object-contain" />
                  <span className="text-[11px] sm:text-base font-semibold text-gray-800 dark:text-gray-200 text-center leading-tight">Astrocartografia</span>
                </button>
                <button
                  type="button"
                  onClick={() => document.getElementById('horoscope-section')?.scrollIntoView({ behavior: 'smooth', block: 'start' })}
                  className="flex flex-col items-center gap-1.5 sm:gap-2 rounded-xl p-3 sm:p-6 transition-all duration-300 shadow-lg min-w-[88px] sm:min-w-[140px] min-h-[72px] sm:min-h-0 bg-white dark:bg-gray-800 hover:shadow-xl cursor-pointer touch-manipulation"
                >
                  <Sparkles className="w-5 h-5 sm:w-8 sm:h-8 text-yellow-600 dark:text-yellow-400 shrink-0" />
                  <span className="text-[11px] sm:text-base font-semibold text-gray-800 dark:text-gray-200 text-center leading-tight">Horóscopo</span>
                </button>
                {mysticReport?.loveCompatibility && (
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
                  <p className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-3">Relatório integrado</p>
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
                      <p className="text-sm font-medium text-purple-600 dark:text-purple-400 mb-2">
                        Numerologia, astrologia, zodíaco chinês e astrocartografia
                      </p>
                      <p className="text-xs text-gray-600 dark:text-gray-400">Relatório completo sem compatibilidade a dois.</p>
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
                        <span className="font-semibold text-gray-800 dark:text-gray-200">+ Compatibilidade no relatório</span>
                        {selectedPlan === 'love_compatibility' && <CheckCircle className="w-5 h-5 text-pink-500 flex-shrink-0" />}
                      </div>
                      <p className="text-sm font-medium text-pink-600 dark:text-pink-400 mb-2">Tudo da opção anterior</p>
                      <p className="text-xs text-gray-600 dark:text-gray-400">
                        Inclui dados do(a) parceiro(a) e bloco de compatibilidade.
                      </p>
                    </button>
                  </div>
                </div>
              </div>

              <div className="space-y-4 sm:space-y-6">
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
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Data de nascimento *</label>
                  <input
                    type="date"
                    value={personalData.birthDate}
                    onChange={(e) => setPersonalData((prev) => ({ ...prev, birthDate: e.target.value }))}
                    className="w-full px-4 sm:px-5 py-3 sm:py-3.5 border border-gray-200 dark:border-gray-600 rounded-2xl focus:ring-2 focus:ring-purple-400/50 focus:border-purple-400 bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 text-sm sm:text-base"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Hora de nascimento</label>
                  <input
                    type="time"
                    value={personalData.birthTime}
                    onChange={(e) => setPersonalData((prev) => ({ ...prev, birthTime: e.target.value }))}
                    className="w-full px-4 sm:px-5 py-3 sm:py-3.5 border border-gray-200 dark:border-gray-600 rounded-2xl focus:ring-2 focus:ring-purple-400/50 focus:border-purple-400 bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 text-sm sm:text-base"
                  />
                </div>
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

                {selectedPlan === 'love_compatibility' && (
                  <>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Nome completo do(a) parceiro(a) *</label>
                      <input
                        type="text"
                        value={personalData.partnerFullName ?? ''}
                        onChange={(e) => setPersonalData((prev) => ({ ...prev, partnerFullName: e.target.value }))}
                        className="w-full px-4 sm:px-5 py-3 sm:py-3.5 border border-gray-200 dark:border-gray-600 rounded-2xl bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 text-sm sm:text-base"
                        placeholder="Nome completo do(a) parceiro(a)"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Data de nascimento do(a) parceiro(a) *</label>
                      <input
                        type="date"
                        value={personalData.partnerBirthDate ?? ''}
                        onChange={(e) => setPersonalData((prev) => ({ ...prev, partnerBirthDate: e.target.value }))}
                        className="w-full px-4 sm:px-5 py-3 sm:py-3.5 border border-gray-200 dark:border-gray-600 rounded-2xl bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 text-sm sm:text-base"
                      />
                    </div>
                  </>
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
                  disabled={
                    !personalData.fullName.trim() ||
                    !personalData.email.trim() ||
                    !personalData.birthDate ||
                    !personalData.birthPlace.trim() ||
                    !personalData.currentCity.trim() ||
                    (selectedPlan === 'love_compatibility' &&
                      (!personalData.partnerFullName?.trim() || !personalData.partnerBirthDate?.trim()))
                  }
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

        {currentStep === 2 && reportData && <DetailedReport reportData={reportData} />}
      </div>
    </div>
  )
}
