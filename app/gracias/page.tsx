import type { Metadata } from 'next'
import { Button } from '@/components/ui/Button'

export const metadata: Metadata = {
  title: 'Gracias por tu mensaje',
  description: 'Tu mensaje ha sido enviado exitosamente. Te contactaremos pronto para comenzar tu proceso de transformación.',
  openGraph: {
    title: 'Mensaje enviado | Mujeres Tukuy',
    description: 'Gracias por contactarnos. Te responderemos pronto.',
    url: '/gracias',
  }
}

export default function GraciasPage() {
  return (
    <div className="min-h-screen flex items-center justify-center py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto text-center">
          {/* Success Icon */}
          <div className="mb-8">
            <div className="w-24 h-24 mx-auto bg-green-100 rounded-full flex items-center justify-center">
              <svg 
                className="w-12 h-12 text-green-600" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth={2} 
                  d="M5 13l4 4L19 7" 
                />
              </svg>
            </div>
          </div>

          {/* Main Message */}
          <h1 className="font-playfair text-4xl lg:text-5xl font-bold text-primary mb-6">
            ¡Gracias por contactarnos!
          </h1>
          
          <p className="text-xl text-gray-700 mb-8">
            Tu mensaje ha sido enviado exitosamente. Me pondré en contacto contigo 
            en las próximas 24 horas para comenzar tu proceso de transformación.
          </p>

          {/* What's Next */}
          <div className="bg-gradient-to-br from-primary/5 to-secondary/5 p-8 rounded-xl mb-8">
            <h2 className="font-playfair text-2xl font-bold text-primary mb-4">
              ¿Qué sigue ahora?
            </h2>
            
            <div className="space-y-4 text-gray-700">
              <div className="flex items-start">
                <span className="text-accent mr-3 text-xl">1.</span>
                <span>Revisaré tu consulta y el servicio de tu interés</span>
              </div>
              <div className="flex items-start">
                <span className="text-accent mr-3 text-xl">2.</span>
                <span>Te contactaré para agendar una llamada de diagnóstico gratuita</span>
              </div>
              <div className="flex items-start">
                <span className="text-accent mr-3 text-xl">3.</span>
                <span>Conversaremos sobre tus objetivos y cómo puedo acompañarte</span>
              </div>
            </div>
          </div>

          {/* Additional Actions */}
          <div className="space-y-4">
            <p className="text-gray-600">
              Mientras tanto, puedes:
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                href="/servicios" 
                variant="primary"
                size="lg"
              >
                Conocer más servicios
              </Button>
              
              <Button 
                href="/sobre-mi" 
                variant="outline"
                size="lg"
              >
                Leer mi historia
              </Button>
            </div>
          </div>

          {/* Contact Info */}
          <div className="mt-12 pt-8 border-t border-gray-200">
            <p className="text-gray-600 mb-4">
              ¿Tienes alguna pregunta urgente?
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a 
                href="mailto:hola@mujerestukuy.com"
                className="text-primary hover:text-primary/80 transition-colors"
              >
                📧 hola@mujerestukuy.com
              </a>
              
              <span className="hidden sm:block text-gray-400">|</span>
              
              <a 
                href="https://wa.me/5491234567890" 
                className="text-primary hover:text-primary/80 transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                📱 WhatsApp
              </a>
            </div>
          </div>

          {/* Inspirational Quote */}
          <div className="mt-12">
            <blockquote className="font-playfair text-lg italic text-gray-600">
              "Cuando una mujer se abraza a sí misma, el mundo florece con ella"
            </blockquote>
            <cite className="text-sm text-gray-500 mt-2 block">— Janette Blacutt</cite>
          </div>
        </div>
      </div>
    </div>
  )
}