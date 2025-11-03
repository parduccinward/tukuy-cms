import { Resend } from 'resend'
import { env } from './env'

// Lazy initialization to avoid build-time errors
let resend: Resend | null = null

function getResendClient() {
  if (!resend) {
    resend = new Resend(env.resend.apiKey)
  }
  return resend
}

interface ContactEmailData {
  name: string
  email: string
  message: string
  whatsapp?: string
  service?: string
  modality?: 'presencial' | 'virtual' | 'hibrida'
}

export async function sendContactEmail(data: ContactEmailData) {
  const { name, email, message, whatsapp, service, modality } = data

  // Email to business owner
  const emailContent = `
    <h2>Nuevo mensaje de contacto - Mujeres Tukuy</h2>
    
    <div style="background-color: #f9fafb; padding: 20px; border-radius: 8px; margin: 20px 0;">
      <h3 style="color: #4A3E8E; margin-top: 0;">Información del contacto:</h3>
      <p><strong>Nombre:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      ${whatsapp ? `<p><strong>WhatsApp:</strong> ${whatsapp}</p>` : ''}
      ${service ? `<p><strong>Servicio de interés:</strong> ${service}</p>` : ''}
      ${modality ? `<p><strong>Modalidad preferida:</strong> ${modality}</p>` : ''}
    </div>
    
    <div style="background-color: #ffffff; padding: 20px; border-left: 4px solid #4A3E8E; margin: 20px 0;">
      <h3 style="color: #4A3E8E; margin-top: 0;">Mensaje:</h3>
      <p style="white-space: pre-wrap;">${message}</p>
    </div>
    
    <hr style="margin: 30px 0;">
    
    <p style="color: #6b7280; font-size: 14px;">
      Este mensaje fue enviado desde el formulario de contacto de mujerestukuy.com
    </p>
  `

  try {
    const resendClient = getResendClient()
    const result = await resendClient.emails.send({
      from: 'Mujeres Tukuy <contacto@mujerestukuy.com>',
      to: ['contacto@mujerestukuy.com'],
      replyTo: email,
      subject: `Nuevo contacto: ${name} - ${service || 'Consulta general'}`,
      html: emailContent,
    })

    // Auto-reply to customer
    const autoReplyContent = `
      <div style="font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; max-width: 600px; margin: 0 auto;">
        <div style="background-color: #4A3E8E; color: white; padding: 30px; text-align: center;">
          <h1 style="margin: 0; font-size: 28px;">Mujeres Tukuy</h1>
          <p style="margin: 10px 0 0 0; font-style: italic;">
            "Cuando una mujer se abraza a sí misma, el mundo florece con ella"
          </p>
        </div>
        
        <div style="padding: 30px; background-color: #ffffff;">
          <h2 style="color: #4A3E8E;">¡Hola ${name}!</h2>
          
          <p>Gracias por contactarme. He recibido tu mensaje y me pondré en contacto contigo muy pronto.</p>
          
          <p>Mientras tanto, te invito a:</p>
          
          <ul style="color: #4A6B50;">
            <li><strong>Agendar tu sesión diagnóstica gratuita:</strong> 
              <a href="${env.calendly.url}" style="color: #4A3E8E;">Aquí</a>
            </li>
            <li><strong>Conectar por WhatsApp:</strong> 
              <a href="${env.whatsapp.url}" style="color: #4A3E8E;">Escríbeme directamente</a>
            </li>
          </ul>
          
          <p>Estoy emocionada de conocer más sobre tu emprendimiento y acompañarte en este journey de transformación.</p>
          
          <p style="margin-top: 30px;">
            Con cariño,<br>
            <strong style="color: #4A3E8E;">Janette Blacutt</strong><br>
            <em>Mentora de Mujeres Emprendedoras</em>
          </p>
        </div>
        
        <div style="background-color: #f9fafb; padding: 20px; text-align: center; color: #6b7280; font-size: 14px;">
          <p>contacto@mujerestukuy.com | mujerestukuy.com</p>
        </div>
      </div>
    `

    await resendClient.emails.send({
      from: 'Janette Blacutt <contacto@mujerestukuy.com>',
      to: [email],
      subject: '¡Gracias por contactarme! - Mujeres Tukuy',
      html: autoReplyContent,
    })

    return result
  } catch (error) {
    console.error('Error sending email:', error)
    throw new Error('No se pudo enviar el email')
  }
}