import { NextRequest, NextResponse } from 'next/server'
import { z } from 'zod'
import { getMentoriaLeadModel } from '@/models/MentoriaLead'

const bodySchema = z.object({
  fullName: z.string().trim().min(2, 'Informe seu nome completo.'),
  phone: z.string().trim().min(8, 'Informe um telefone válido.'),
  email: z.string().trim().email('Informe um e-mail válido.')
})

export async function POST(request: NextRequest) {
  try {
    const json = await request.json()
    const parsed = bodySchema.safeParse(json)
    if (!parsed.success) {
      const msg = parsed.error.flatten().fieldErrors.fullName?.[0]
        ?? parsed.error.flatten().fieldErrors.phone?.[0]
        ?? parsed.error.flatten().fieldErrors.email?.[0]
        ?? 'Dados inválidos.'
      return NextResponse.json({ success: false, error: msg }, { status: 400 })
    }

    const { fullName, phone, email } = parsed.data
    const MentoriaLead = await getMentoriaLeadModel()
    await MentoriaLead.create({
      fullName,
      phone,
      email,
      source: 'site_home_mentoria_waitlist'
    })

    return NextResponse.json({ success: true })
  } catch (e) {
    console.error('[mentoria-waitlist]', e)
    return NextResponse.json(
      { success: false, error: 'Não foi possível salvar. Tente de novo em instantes.' },
      { status: 500 }
    )
  }
}
