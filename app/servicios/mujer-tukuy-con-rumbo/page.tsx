import type { Metadata } from 'next'
import { Button } from '@/components/ui/Button'

export const metadata: Metadata = {
  title: 'Mujer Tukuy con Rumbo',
  description: 'Metodología integral de 3 meses para emprendedoras que buscan claridad y dirección estratégica. Incluye diagnóstico, plan estratégico y acompañamiento personalizado.',
  openGraph: {
    title: 'Mujer Tukuy con Rumbo | Mujeres Tukuy',
    description: 'Metodología integral para encontrar claridad y dirección en tu emprendimiento.',
    url: '/servicios/mujer-tukuy-con-rumbo',
  }
}

export default function MujerTukuyConRumboPage() {
  return (
    <div className="py-16 lg:py-24">
      <div className="container mx-auto px-4">
        {/* Hero Section */}
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h1 className="font-playfair text-4xl lg:text-5xl font-bold text-primary mb-6">
            Mujer Tukuy con Rumbo
          </h1>
          
          <p className="text-xl text-gray-700 mb-8">
            Metodología integral diseñada para emprendedoras que buscan claridad, 
            dirección estratégica y resultados medibles en su negocio
          </p>
          
          <div className="inline-flex items-center bg-accent/10 text-accent px-4 py-2 rounded-full">
            <span className="font-semibold">Duración: 3 meses • Modalidad: 1:1 y Virtual</span>
          </div>
        </div>

        {/* Overview */}
        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          <div>
            <h2 className="font-playfair text-3xl font-bold text-primary mb-6">
              ¿Para quién es este programa?
            </h2>
            
            <ul className="space-y-4 text-gray-700">
              <li className="flex items-start">
                <span className="text-accent mr-3 text-xl">•</span>
                <span>Emprendedoras con ideas claras pero sin dirección estratégica</span>
              </li>
              <li className="flex items-start">
                <span className="text-accent mr-3 text-xl">•</span>
                <span>Mujeres que sienten que su negocio no avanza como esperan</span>
              </li>
              <li className="flex items-start">
                <span className="text-accent mr-3 text-xl">•</span>
                <span>Emprendedoras que buscan estructura y metodología probada</span>
              </li>
              <li className="flex items-start">
                <span className="text-accent mr-3 text-xl">•</span>
                <span>Mujeres comprometidas con su crecimiento personal y profesional</span>
              </li>
            </ul>
          </div>
          
          <div>
            <h2 className="font-playfair text-3xl font-bold text-primary mb-6">
              Lo que lograrás
            </h2>
            
            <ul className="space-y-4 text-gray-700">
              <li className="flex items-start">
                <span className="text-secondary mr-3 text-xl">✓</span>
                <span>Claridad total sobre tu propuesta de valor y mercado objetivo</span>
              </li>
              <li className="flex items-start">
                <span className="text-secondary mr-3 text-xl">✓</span>
                <span>Plan estratégico a 12 meses con objetivos medibles</span>
              </li>
              <li className="flex items-start">
                <span className="text-secondary mr-3 text-xl">✓</span>
                <span>Sistema de operaciones optimizado para tu negocio</span>
              </li>
              <li className="flex items-start">
                <span className="text-secondary mr-3 text-xl">✓</span>
                <span>Confianza y herramientas para tomar decisiones estratégicas</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Methodology */}
        <div className="bg-gray-50 py-16 px-8 rounded-lg mb-16">
          <h2 className="font-playfair text-3xl font-bold text-primary text-center mb-12">
            Metodología de 3 Fases
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-20 h-20 bg-primary rounded-full flex items-center justify-center text-white font-bold text-2xl mx-auto mb-4">
                1
              </div>
              <h3 className="font-playfair text-xl font-bold text-primary mb-3">
                Diagnóstico Integral
              </h3>
              <p className="text-gray-700 mb-4">
                Evaluación completa de tu situación actual, fortalezas, oportunidades y desafíos.
              </p>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Análisis de modelo de negocio</li>
                <li>• Evaluación de mercado</li>
                <li>• Assessment personal</li>
              </ul>
            </div>
            
            <div className="text-center">
              <div className="w-20 h-20 bg-secondary rounded-full flex items-center justify-center text-white font-bold text-2xl mx-auto mb-4">
                2
              </div>
              <h3 className="font-playfair text-xl font-bold text-primary mb-3">
                Estrategia Personalizada
              </h3>
              <p className="text-gray-700 mb-4">
                Desarrollo de plan estratégico adaptado a tu visión, recursos y objetivos específicos.
              </p>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Plan de acción detallado</li>
                <li>• Definición de KPIs</li>
                <li>• Roadmap de implementación</li>
              </ul>
            </div>
            
            <div className="text-center">
              <div className="w-20 h-20 bg-accent rounded-full flex items-center justify-center text-white font-bold text-2xl mx-auto mb-4">
                3
              </div>
              <h3 className="font-playfair text-xl font-bold text-primary mb-3">
                Implementación Guiada
              </h3>
              <p className="text-gray-700 mb-4">
                Acompañamiento semanal para asegurar la ejecución efectiva de tu estrategia.
              </p>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Sesiones semanales 1:1</li>
                <li>• Seguimiento de avances</li>
                <li>• Ajustes y optimización</li>
              </ul>
            </div>
          </div>
        </div>

        {/* What's Included */}
        <div className="mb-16">
          <h2 className="font-playfair text-3xl font-bold text-primary text-center mb-12">
            Qué Incluye el Programa
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-4">
              <div className="flex items-start">
                <span className="text-secondary mr-3 text-xl">✓</span>
                <span className="text-gray-700"><strong>12 sesiones de mentoría 1:1</strong> (1 por semana)</span>
              </div>
              <div className="flex items-start">
                <span className="text-secondary mr-3 text-xl">✓</span>
                <span className="text-gray-700"><strong>Plan estratégico personalizado</strong> a 12 meses</span>
              </div>
              <div className="flex items-start">
                <span className="text-secondary mr-3 text-xl">✓</span>
                <span className="text-gray-700"><strong>Herramientas de seguimiento</strong> y medición de KPIs</span>
              </div>
              <div className="flex items-start">
                <span className="text-secondary mr-3 text-xl">✓</span>
                <span className="text-gray-700"><strong>Templates y plantillas</strong> personalizables</span>
              </div>
            </div>
            
            <div className="space-y-4">
              <div className="flex items-start">
                <span className="text-secondary mr-3 text-xl">✓</span>
                <span className="text-gray-700"><strong>Acceso a comunidad privada</strong> de emprendedoras</span>
              </div>
              <div className="flex items-start">
                <span className="text-secondary mr-3 text-xl">✓</span>
                <span className="text-gray-700"><strong>Soporte por WhatsApp</strong> entre sesiones</span>
              </div>
              <div className="flex items-start">
                <span className="text-secondary mr-3 text-xl">✓</span>
                <span className="text-gray-700"><strong>Grabaciones de sesiones</strong> para tu repaso</span>
              </div>
              <div className="flex items-start">
                <span className="text-secondary mr-3 text-xl">✓</span>
                <span className="text-gray-700"><strong>Seguimiento post-programa</strong> (1 mes adicional)</span>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-primary text-white py-16 px-8 rounded-lg text-center">
          <h2 className="font-playfair text-3xl font-bold mb-6">
            ¿Lista para encontrar tu rumbo?
          </h2>
          
          <p className="text-xl mb-8 text-white/90 max-w-2xl mx-auto">
            Agenda tu sesión diagnóstica gratuita y descubre si este programa 
            es la clave para el despegue de tu emprendimiento
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              href="https://calendly.com/mujerestukuy/diagnostico"
              variant="accent"
              size="lg"
              className="text-primary font-semibold"
            >
              Agenda tu Sesión Diagnóstica
            </Button>
            
            <Button 
              href="/contacto"
              variant="outline"
              size="lg"
              className="border-white text-white hover:bg-white hover:text-primary"
            >
              Solicitar Más Información
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}