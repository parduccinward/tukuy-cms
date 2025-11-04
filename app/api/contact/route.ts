import { NextRequest, NextResponse } from 'next/server'
import { sendContactEmail } from '@/lib/email'
import { rateLimiter } from '@/lib/rate-limit'
import { contactSchema } from '@/lib/validation'

export async function POST(request: NextRequest) {
  try {
    // Rate limiting
    const identifier = request.headers.get('x-forwarded-for') ?? 'anonymous'
    const { success } = await rateLimiter.limit(identifier)
    
    if (!success) {
      return NextResponse.json(
        { ok: false, error: 'Has enviado muchos mensajes. Intenta nuevamente en unos minutos' },
        { status: 429 }
      )
    }

    // Validate request body
    const body = await request.json()
    const validatedData = contactSchema.parse(body)

    // Check honeypot field (anti-spam)
    if (validatedData.honeypot && validatedData.honeypot.length > 0) {
      return NextResponse.json(
        { ok: false, error: 'Spam detectado' },
        { status: 400 }
      )
    }

    // Send email
    await sendContactEmail(validatedData)

    return NextResponse.json({ ok: true }, { status: 200 })
  } catch (error) {
    console.error('Contact form error:', error)
    
    if (error instanceof Error && error.name === 'ZodError') {
      return NextResponse.json(
        { ok: false, error: 'Datos inválidos en el formulario' },
        { status: 400 }
      )
    }

    return NextResponse.json(
      { ok: false, error: 'Error del servidor' },
      { status: 500 }
    )
  }
}