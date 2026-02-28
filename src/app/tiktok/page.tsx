'use client'

import { useState, useRef } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Sparkles, Star, ArrowRight, RotateCcw, Hash, Lock } from 'lucide-react'

const numerologyMeanings: Record<number, {
  title: string
  description: string
  color: string
  teaser: string
  hook: string
  strengths: string[]
  challenges: string[]
}> = {
  1: {
    title: 'O Líder',
    description: 'Independente, pioneiro, ambicioso',
    color: 'from-red-500 to-pink-500',
    teaser: 'Você não nasceu pra seguir, nasceu pra começar. Existe uma força dentro de você que poucos entendem. Mas tem um padrão oculto no seu mapa que pode estar travando todo esse potencial...',
    hook: 'Seu número revela um talento raro de liderança, mas também aponta um bloqueio que a maioria dos "1" ignora a vida inteira.',
    strengths: ['Liderança natural', 'Independência', 'Iniciativa', 'Originalidade', 'Determinação'],
    challenges: ['Impaciência', 'Teimosia', 'Tendência ao isolamento']
  },
  2: {
    title: 'O Cooperador',
    description: 'Diplomático, sensível, pacificador',
    color: 'from-blue-500 to-cyan-500',
    teaser: 'Você sente o que os outros nem percebem. Esse dom é real, mas ele vem com um preço que você já conhece bem. A resposta pra equilibrar isso está escondida no seu mapa completo...',
    hook: 'Sua sensibilidade é seu superpoder, mas existe um ciclo emocional no seu mapa que explica muita coisa.',
    strengths: ['Diplomacia', 'Cooperação', 'Sensibilidade', 'Paciência', 'Intuição'],
    challenges: ['Indecisão', 'Dependência emocional', 'Dificuldade em dizer não']
  },
  3: {
    title: 'O Comunicador',
    description: 'Criativo, expressivo, otimista',
    color: 'from-yellow-500 to-orange-500',
    teaser: 'Sua energia criativa é magnética. Quando você fala, as pessoas escutam. Mas existe algo no seu mapa que explica por que, às vezes, essa mesma energia se volta contra você...',
    hook: 'O 3 carrega um dom de expressão poderoso, mas o mapa completo revela onde você está desperdiçando ele.',
    strengths: ['Criatividade', 'Comunicação', 'Otimismo', 'Carisma', 'Inspiração'],
    challenges: ['Dispersão', 'Superficialidade', 'Autocrítica excessiva']
  },
  4: {
    title: 'O Construtor',
    description: 'Prático, organizado, trabalhador',
    color: 'from-green-500 to-emerald-500',
    teaser: 'Enquanto outros sonham, você constrói. Essa disciplina é rara, mas tem um padrão repetitivo na sua vida que talvez você já tenha notado. O mapa completo mostra exatamente o que é...',
    hook: 'Você foi feito pra construir coisas grandes, mas há um ciclo no seu mapa que pode estar sabotando isso.',
    strengths: ['Organização', 'Disciplina', 'Confiabilidade', 'Persistência', 'Praticidade'],
    challenges: ['Rigidez', 'Resistência a mudanças', 'Tendência ao excesso de trabalho']
  },
  5: {
    title: 'O Aventureiro',
    description: 'Livre, versátil, curioso',
    color: 'from-purple-500 to-violet-500',
    teaser: 'Liberdade é o que move você, e tudo que tenta te prender, sufoca. Mas existe uma razão mais profunda pra essa inquietação, e ela está gravada no seu mapa numerológico...',
    hook: 'Sua busca por liberdade esconde algo maior. O mapa completo revela o que você realmente está procurando.',
    strengths: ['Adaptabilidade', 'Versatilidade', 'Coragem', 'Curiosidade', 'Magnetismo'],
    challenges: ['Inquietação', 'Falta de foco', 'Dificuldade com compromissos longos']
  },
  6: {
    title: 'O Cuidador',
    description: 'Responsável, amoroso, protetor',
    color: 'from-pink-500 to-rose-500',
    teaser: 'Você cuida de todo mundo, mas quem cuida de você? Existe um padrão no seu mapa que explica por que você atrai essa responsabilidade. E a resposta pode te surpreender...',
    hook: 'Seu coração enorme é seu dom, mas o mapa completo mostra um ponto cego que afeta seus relacionamentos.',
    strengths: ['Responsabilidade', 'Amor incondicional', 'Proteção', 'Harmonia', 'Visão artística'],
    challenges: ['Autossacrifício', 'Controle', 'Preocupação excessiva']
  },
  7: {
    title: 'O Místico',
    description: 'Analítico, espiritual, introspectivo',
    color: 'from-indigo-500 to-purple-500',
    teaser: 'Você sempre soube que existe algo além. Essa busca não é à toa. Seu número revela uma conexão espiritual rara. Mas tem uma lição cármica no seu mapa que muda tudo...',
    hook: 'Poucos números carregam tanta profundidade. O mapa completo revela o que sua intuição já sabe.',
    strengths: ['Profundidade', 'Intuição', 'Análise', 'Espiritualidade', 'Sabedoria'],
    challenges: ['Isolamento', 'Desconfiança', 'Dificuldade em expressar emoções']
  },
  8: {
    title: 'O Realizador',
    description: 'Ambicioso, poderoso, estratégico',
    color: 'from-amber-600 to-yellow-700',
    teaser: 'Poder e abundância caminham com você, isso é fato. Mas existe um ciclo no seu mapa que determina quando tudo isso se materializa. E o timing pode estar mais perto do que você imagina...',
    hook: 'O 8 tem acesso a uma energia de abundância rara, mas o mapa completo revela o momento exato de agir.',
    strengths: ['Ambição', 'Visão estratégica', 'Autoridade', 'Eficiência', 'Resiliência'],
    challenges: ['Materialismo', 'Tendência ao controle', 'Dificuldade em delegar']
  },
  9: {
    title: 'O Humanitário',
    description: 'Generoso, compassivo, universal',
    color: 'from-teal-500 to-cyan-500',
    teaser: 'Você sente o peso do mundo, e não é exagero. O 9 carrega a missão mais intensa da numerologia. Mas tem algo no seu mapa que explica ciclos que se repetem na sua vida...',
    hook: 'Você veio pra fechar ciclos grandes. O mapa completo mostra quais e o que acontece depois.',
    strengths: ['Compaixão', 'Generosidade', 'Sabedoria', 'Visão universal', 'Capacidade de cura'],
    challenges: ['Idealismo excessivo', 'Dificuldade em desapegar', 'Sobrecarga emocional']
  },
  11: {
    title: 'O Visionário',
    description: 'Intuitivo, inspirador, espiritual',
    color: 'from-purple-600 to-indigo-600',
    teaser: 'Número Mestre. Você enxerga o que outros não veem e sente o que outros nem percebem. Isso não é coincidência, é um chamado. O mapa completo revela exatamente pra quê...',
    hook: 'Apenas 5% das pessoas carregam um número mestre. O que isso significa pra você vai muito além do que cabe aqui.',
    strengths: ['Intuição poderosa', 'Inspiração', 'Visão espiritual', 'Carisma magnético', 'Sensibilidade'],
    challenges: ['Ansiedade', 'Hipersensibilidade', 'Pressão interna intensa']
  },
  22: {
    title: 'O Mestre Construtor',
    description: 'Visionário prático, realizador de sonhos',
    color: 'from-emerald-600 to-teal-600',
    teaser: 'Número Mestre. Você sonha grande e tem a capacidade de construir maior ainda. Pouquíssimas pessoas carregam essa vibração. O mapa completo mostra como ativar esse potencial...',
    hook: 'O 22 é considerado o número mais poderoso da numerologia. O que isso desbloqueia no seu mapa é impressionante.',
    strengths: ['Visão grandiosa', 'Capacidade de execução', 'Liderança natural', 'Disciplina', 'Inspiração'],
    challenges: ['Sobrecarga', 'Perfeccionismo extremo', 'Pressão por resultados']
  },
  33: {
    title: 'O Mestre Professor',
    description: 'Curador, guia, amor universal',
    color: 'from-rose-600 to-pink-600',
    teaser: 'Número Mestre. Raríssimo. Você carrega uma missão de cura e ensino que vai além do comum. Existe algo no seu mapa que conecta tudo e muda a forma como você enxerga sua vida...',
    hook: 'O 33 é o mais raro de todos os caminhos. O mapa completo revela a dimensão real dessa missão.',
    strengths: ['Compaixão infinita', 'Dom de cura', 'Sabedoria espiritual', 'Capacidade de ensinar', 'Amor universal'],
    challenges: ['Autossacrifício', 'Sobrecarga emocional', 'Expectativas irreais']
  }
}

function reduceToSingleDigit(num: number): number {
  while (num > 9 && num !== 11 && num !== 22 && num !== 33) {
    num = num.toString().split('').reduce((sum, digit) => sum + parseInt(digit), 0)
  }
  return num
}

function calculateLifePath(day: number, month: number, year: number): number {
  const dateStr = `${year.toString().padStart(4, '0')}${month.toString().padStart(2, '0')}${day.toString().padStart(2, '0')}`
  const sum = dateStr.split('').reduce((acc, d) => acc + parseInt(d), 0)
  return reduceToSingleDigit(sum)
}

export default function TiktokPage() {
  const [day, setDay] = useState('')
  const [month, setMonth] = useState('')
  const [year, setYear] = useState('')
  const [result, setResult] = useState<number | null>(null)
  const [isCalculating, setIsCalculating] = useState(false)
  const [error, setError] = useState('')
  const resultRef = useRef<HTMLDivElement>(null)

  const handleCalculate = () => {
    setError('')
    const d = parseInt(day)
    const m = parseInt(month)
    const y = parseInt(year)

    if (!d || !m || !y) {
      setError('Preencha todos os campos')
      return
    }
    if (d < 1 || d > 31) {
      setError('Dia inválido')
      return
    }
    if (m < 1 || m > 12) {
      setError('Mês inválido')
      return
    }
    if (y < 1900 || y > new Date().getFullYear()) {
      setError('Ano inválido')
      return
    }

    const testDate = new Date(y, m - 1, d)
    if (testDate.getDate() !== d || testDate.getMonth() !== m - 1) {
      setError('Data inválida')
      return
    }

    setIsCalculating(true)
    setTimeout(() => {
      const lifePathNumber = calculateLifePath(d, m, y)
      setResult(lifePathNumber)
      setIsCalculating(false)
      setTimeout(() => {
        resultRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' })
      }, 100)
    }, 1500)
  }

  const handleReset = () => {
    setDay('')
    setMonth('')
    setYear('')
    setResult(null)
    setError('')
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const meaning = result !== null ? numerologyMeanings[result] : null

  return (
    <main className="min-h-screen bg-gradient-to-br from-indigo-950 via-purple-950 to-slate-950 text-white relative overflow-hidden">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-purple-500/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-40 right-10 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-pink-500/5 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-lg mx-auto px-4 py-8 sm:py-12">
        <header className="text-center mb-8 sm:mb-10">
          <Link href="/" className="inline-block mb-6">
            <Image
              src="/logo_astroglix2.png"
              alt="Astroglix"
              width={180}
              height={72}
              className="h-14 sm:h-16 w-auto object-contain mx-auto brightness-0 invert"
            />
          </Link>
          <div className="flex items-center justify-center gap-2 mb-3">
            <Sparkles className="w-5 h-5 text-purple-400" />
            <span className="text-xs sm:text-sm uppercase tracking-[0.2em] text-purple-300 font-medium">
              Numerologia
            </span>
            <Sparkles className="w-5 h-5 text-purple-400" />
          </div>
          <h1 className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-purple-200 via-pink-200 to-indigo-200 bg-clip-text text-transparent leading-tight">
            Descubra seu Caminho de Vida
          </h1>
          <p className="mt-3 text-sm sm:text-base text-gray-400 max-w-sm mx-auto leading-relaxed">
            O número do Caminho de Vida revela sua missão, seus talentos naturais e o propósito da sua jornada.
          </p>
        </header>

        {!result && !isCalculating && (
          <section className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-6 sm:p-8 shadow-2xl">
            <div className="flex items-center gap-2 mb-6">
              <Hash className="w-5 h-5 text-purple-400" />
              <h2 className="text-lg font-semibold text-white">
                Qual a sua data de nascimento?
              </h2>
            </div>

            <div className="grid grid-cols-3 gap-3 sm:gap-4 mb-6">
              <div>
                <label htmlFor="day" className="block text-xs text-gray-400 mb-1.5 uppercase tracking-wider">
                  Dia
                </label>
                <input
                  id="day"
                  type="number"
                  inputMode="numeric"
                  placeholder="DD"
                  maxLength={2}
                  value={day}
                  onChange={(e) => setDay(e.target.value.slice(0, 2))}
                  className="w-full bg-white/5 border border-white/15 rounded-xl px-4 py-3.5 text-center text-xl font-semibold text-white placeholder:text-gray-600 focus:outline-none focus:border-purple-400 focus:ring-1 focus:ring-purple-400/50 transition-all"
                />
              </div>
              <div>
                <label htmlFor="month" className="block text-xs text-gray-400 mb-1.5 uppercase tracking-wider">
                  Mês
                </label>
                <input
                  id="month"
                  type="number"
                  inputMode="numeric"
                  placeholder="MM"
                  maxLength={2}
                  value={month}
                  onChange={(e) => setMonth(e.target.value.slice(0, 2))}
                  className="w-full bg-white/5 border border-white/15 rounded-xl px-4 py-3.5 text-center text-xl font-semibold text-white placeholder:text-gray-600 focus:outline-none focus:border-purple-400 focus:ring-1 focus:ring-purple-400/50 transition-all"
                />
              </div>
              <div>
                <label htmlFor="year" className="block text-xs text-gray-400 mb-1.5 uppercase tracking-wider">
                  Ano
                </label>
                <input
                  id="year"
                  type="number"
                  inputMode="numeric"
                  placeholder="AAAA"
                  maxLength={4}
                  value={year}
                  onChange={(e) => setYear(e.target.value.slice(0, 4))}
                  className="w-full bg-white/5 border border-white/15 rounded-xl px-4 py-3.5 text-center text-xl font-semibold text-white placeholder:text-gray-600 focus:outline-none focus:border-purple-400 focus:ring-1 focus:ring-purple-400/50 transition-all"
                />
              </div>
            </div>

            {error && (
              <p className="text-red-400 text-sm text-center mb-4">{error}</p>
            )}

            <button
              onClick={handleCalculate}
              className="w-full bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 text-white font-semibold py-4 rounded-xl flex items-center justify-center gap-2 transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/25 active:scale-[0.98]"
            >
              <span>Revelar meu Caminho</span>
              <ArrowRight className="w-5 h-5" />
            </button>
          </section>
        )}

        {isCalculating && (
          <section className="flex flex-col items-center justify-center py-20">
            <div className="relative w-20 h-20 mb-6">
              <div className="absolute inset-0 rounded-full border-2 border-purple-500/20" />
              <div className="absolute inset-0 rounded-full border-2 border-transparent border-t-purple-400 animate-spin" />
              <Star className="absolute inset-0 m-auto w-8 h-8 text-purple-300 animate-pulse" />
            </div>
            <p className="text-purple-300 font-medium animate-pulse">
              Calculando seu destino...
            </p>
          </section>
        )}

        {result !== null && meaning && (
          <section ref={resultRef} className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-700">
            <div className="text-center">
              <div className="relative inline-flex items-center justify-center w-28 h-28 sm:w-32 sm:h-32 mb-4">
                <div className={`absolute inset-0 bg-gradient-to-br ${meaning.color} rounded-full opacity-20 blur-xl animate-pulse`} />
                <div className={`absolute inset-2 bg-gradient-to-br ${meaning.color} rounded-full opacity-10`} />
                <span className="relative text-5xl sm:text-6xl font-bold bg-gradient-to-br from-white to-gray-300 bg-clip-text text-transparent">
                  {result}
                </span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold text-white mb-1">
                {meaning.title}
              </h2>
              <p className={`text-sm font-medium bg-gradient-to-r ${meaning.color} bg-clip-text text-transparent`}>
                {meaning.description}
              </p>
            </div>

            <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-6 sm:p-8">
              <p className="text-gray-200 leading-relaxed text-[15px] sm:text-base">
                {meaning.teaser}
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-5 relative overflow-hidden">
                <h3 className="text-sm font-semibold text-emerald-400 uppercase tracking-wider mb-3 flex items-center gap-2">
                  <Star className="w-4 h-4" />
                  Seus pontos fortes
                </h3>
                <ul className="space-y-2">
                  <li className="text-sm text-gray-300 flex items-start gap-2">
                    <span className="text-emerald-400 mt-0.5">+</span>
                    {meaning.strengths[0]}
                  </li>
                </ul>
                <div className="relative mt-2">
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/95 via-slate-950/70 to-transparent z-10" />
                  <ul className="space-y-2 blur-[3px] select-none opacity-50" aria-hidden>
                    {meaning.strengths.slice(1).map((s, i) => (
                      <li key={i} className="text-sm text-gray-300 flex items-start gap-2">
                        <span className="text-emerald-400 mt-0.5">+</span>
                        {s}
                      </li>
                    ))}
                  </ul>
                  <div className="absolute inset-0 z-20 flex items-end justify-center pb-1">
                    <div className="flex items-center gap-1.5 text-purple-300">
                      <Lock className="w-3.5 h-3.5" />
                      <span className="text-xs font-medium">+{meaning.strengths.length - 1} na análise completa</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-5 relative overflow-hidden">
                <h3 className="text-sm font-semibold text-amber-400 uppercase tracking-wider mb-3 flex items-center gap-2">
                  <Sparkles className="w-4 h-4" />
                  Seus desafios
                </h3>
                <ul className="space-y-2">
                  <li className="text-sm text-gray-300 flex items-start gap-2">
                    <span className="text-amber-400 mt-0.5">~</span>
                    {meaning.challenges[0]}
                  </li>
                </ul>
                <div className="relative mt-2">
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/95 via-slate-950/70 to-transparent z-10" />
                  <ul className="space-y-2 blur-[3px] select-none opacity-50" aria-hidden>
                    {meaning.challenges.slice(1).map((c, i) => (
                      <li key={i} className="text-sm text-gray-300 flex items-start gap-2">
                        <span className="text-amber-400 mt-0.5">~</span>
                        {c}
                      </li>
                    ))}
                  </ul>
                  <div className="absolute inset-0 z-20 flex items-end justify-center pb-1">
                    <div className="flex items-center gap-1.5 text-purple-300">
                      <Lock className="w-3.5 h-3.5" />
                      <span className="text-xs font-medium">+{meaning.challenges.length - 1} na análise completa</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className={`bg-gradient-to-r ${meaning.color} p-[1px] rounded-2xl`}>
              <div className="bg-slate-950/90 backdrop-blur-xl rounded-2xl p-5 sm:p-6 text-center">
                <p className="text-gray-300 text-sm leading-relaxed mb-1">
                  {meaning.hook}
                </p>
              </div>
            </div>

            <div className="bg-gradient-to-br from-purple-900/60 to-indigo-900/60 border border-purple-400/20 rounded-3xl p-6 sm:p-8 text-center space-y-4">
              <Sparkles className="w-6 h-6 text-purple-300 mx-auto" />
              <h3 className="text-lg sm:text-xl font-bold text-white">
                Isso é só a superfície.
              </h3>
              <p className="text-sm text-gray-300 leading-relaxed max-w-sm mx-auto">
                Na Análise Completa você descobre seus números ocultos, lições cármicas, ciclos de vida, compatibilidade amorosa, mapa astral, zodíaco chinês e muito mais.
              </p>
              <Link
                href="/#payment-form"
                className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-500 to-indigo-500 hover:from-purple-400 hover:to-indigo-400 text-white font-bold px-8 py-4 rounded-xl transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/30 active:scale-[0.98] text-base"
              >
                <span>Quero minha Análise Completa</span>
                <ArrowRight className="w-5 h-5" />
              </Link>
              <p className="text-[11px] text-gray-500">
                Relatório completo gerado na hora
              </p>
            </div>

            <button
              onClick={handleReset}
              className="w-full flex items-center justify-center gap-2 text-gray-500 hover:text-gray-300 py-3 transition-colors text-xs"
            >
              <RotateCcw className="w-3.5 h-3.5" />
              <span>Calcular outra data</span>
            </button>
          </section>
        )}

        <footer className="mt-12 pt-6 border-t border-white/5 text-center">
          <Link href="/" className="text-xs text-gray-500 hover:text-gray-400 transition-colors">
            astroglix.com
          </Link>
        </footer>
      </div>
    </main>
  )
}
