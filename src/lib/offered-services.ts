type ServiceBase = {
  id: string
  title: string
  subtitle: string
  features: string[]
}

export type OfferedServiceWhatsApp = ServiceBase & {
  cta?: 'whatsapp'
  whatsappPrefill: string
}

export type OfferedServiceWaitlist = ServiceBase & {
  cta: 'waitlist'
}

export type OfferedService = OfferedServiceWhatsApp | OfferedServiceWaitlist

export function isWaitlistService(service: OfferedService): service is OfferedServiceWaitlist {
  return service.cta === 'waitlist'
}

export const OFFERED_SERVICES: OfferedService[] = [
  {
    id: 'mapa-astral',
    title: 'Mapa Astral + bônus inclusos',
    subtitle: 'Leitura completa com materiais de apoio.',
    features: [
      'Temperamento e Mentalidade',
      'Mapa Vocacional',
      'Revolução Solar e Lunar'
    ],
    whatsappPrefill:
      'Olá! Quero saber mais sobre o serviço *Mapa Astral + bônus inclusos* (Temperamento e Mentalidade, Mapa Vocacional, Revolução Solar e Lunar).'
  },
  {
    id: 'mapa-numerologico',
    title: 'Mapa Numerológico + bônus inclusos',
    subtitle: 'Números e símbolos alinhados à sua história.',
    features: [
      'Nome de Poder',
      'Assinatura de Poder',
      'Mapa Angelical',
      'Nome Artístico (se necessário)'
    ],
    whatsappPrefill:
      'Olá! Quero saber mais sobre o serviço *Mapa Numerológico + bônus inclusos* (Nome de Poder, Assinatura de Poder, Mapa Angelical, Nome Artístico se necessário).'
  },
  {
    id: 'compatibilidade',
    title: 'Mapa de Compatibilidade Amorosa',
    subtitle: 'Casal ou pretendente: dinâmica e ciclos a dois.',
    features: [
      'Dinâmica do casal: atração, conflitos e pontos de ajuste',
      'Padrões emocionais e gatilhos de briga',
      'Como harmonizar e aumentar a compatibilidade',
      'Períodos favoráveis e alertas (ciclos)'
    ],
    whatsappPrefill:
      'Olá! Quero saber mais sobre o serviço *Mapa de Compatibilidade Amorosa* (casal / pretendente).'
  },
  {
    id: 'mapa-empresarial',
    title: 'Mapa Empresarial',
    subtitle: 'Negócio, dinheiro, timing e pessoas.',
    features: [
      'Nome do Negócio (vibração + correção, se necessário)',
      'Prosperidade & Bloqueios (onde o dinheiro trava e como destravar)',
      'Datas-Chave (abertura, lançamentos, contratos)',
      'Sócios/Equipe (compatibilidade e riscos)'
    ],
    whatsappPrefill:
      'Olá! Quero saber mais sobre o serviço *Mapa Empresarial*.'
  },
  {
    id: 'mentoria',
    title: 'Mentoria',
    subtitle: 'Temas práticos de abundância, ambiente e padrões de vida.',
    features: [
      'Choque de Abundância + Set Point',
      'Feng Shui aplicado',
      'Doenças Graves, Lutos e padrões repetitivos',
      'Conquistar Pessoas (presença, influência e leitura)',
      'Dormir pouco com saúde, e mais.'
    ],
    cta: 'waitlist'
  }
]
