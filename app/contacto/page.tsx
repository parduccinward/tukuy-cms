import type { Metadata } from 'next'
import { ContactForm } from '@/components/forms/ContactForm'

export const metadata: Metadata = {
  title: 'Contacto',
  description: 'Ponte en contacto con Mujeres Tukuy. Agenda tu sesión diagnóstica gratuita o solicita información sobre nuestros servicios de mentoría.',
  openGraph: {
    title: 'Contacto | Mujeres Tukuy',
    description: 'Agenda tu sesión diagnóstica gratuita y comienza tu transformación empresarial.',
    url: '/contacto',
  }
}

export default function ContactoPage() {
  return (
    <div className="py-16 lg:py-24">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="font-playfair text-4xl lg:text-5xl font-bold text-primary mb-6">
              Hablemos de tu emprendimiento
            </h1>
            
            <p className="text-xl text-gray-700">
              Estoy aquí para acompañarte. Agenda tu sesión diagnóstica gratuita 
              o cuéntame sobre tu proyecto
            </p>
          </div>
          
          <ContactForm />
        </div>
      </div>
    </div>
  )
}