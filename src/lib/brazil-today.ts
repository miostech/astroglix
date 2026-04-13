/** Início do dia civil em America/Sao_Paulo como instante UTC (Brasil sem horário de verão desde 2019). */
export function startOfTodayBrazil(now = new Date()): Date {
  const d = new Intl.DateTimeFormat('en-CA', {
    timeZone: 'America/Sao_Paulo',
    year: 'numeric',
    month: '2-digit',
    day: '2-digit'
  }).format(now)
  const [y, m, day] = d.split('-').map(Number)
  return new Date(Date.UTC(y, m - 1, day, 3, 0, 0))
}
