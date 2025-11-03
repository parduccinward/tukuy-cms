import type { Metadata } from 'next'
import { ServiceCard } from '@/components/ui/ServiceCard'
import { Button } from '@/components/ui/Button'

export const metadata: Metadata = {
  title: 'Servicios de Mentoría | Mujeres Tukuy',
  description: 'Descubre nuestros servicios de mentoría especializados: Mujer Tukuy con Rumbo, Tukuy Renace y Tukuy Experiencias. Metodologías personalizadas para cada etapa de tu emprendimiento y transformación personal.',
  keywords: ['servicios mentoría', 'coaching emprendedoras', 'transformación personal', 'desarrollo empresarial', 'círculos mujeres'],
  openGraph: {
    type: 'website',
    locale: 'es_AR',
    url: '/servicios',
    siteName: 'Mujeres Tukuy',
    title: 'Servicios de Mentoría | Mujeres Tukuy',
    description: 'Metodologías especializadas para emprendedoras en todas las etapas: desde organizar tu negocio hasta procesos de transformación profunda.',
    images: [
      {
        url: '/images/og-servicios.jpg',
        width: 1200,
        height: 630,
        alt: 'Servicios de Mentoría para Mujeres Emprendedoras',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Servicios de Mentoría | Mujeres Tukuy',
    description: 'Metodologías especializadas para emprendedoras: mentoría empresarial, círculos de transformación y experiencias corporativas.',
    images: ['/images/og-servicios.jpg'],
    creator: '@mujerestukuy',
  },
}

export default function ServiciosPage() {
  return (
    <div className="py-16 lg:py-24">
      <div className="container mx-auto px-4">
        {/* Hero Section */}
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h1 className="font-playfair text-4xl lg:text-5xl font-bold text-primary mb-6">
            Servicios de Mentoría
          </h1>
          
          <p className="text-xl text-gray-700 mb-8">
            Metodologías especializadas diseñadas para acompañarte en cada etapa 
            de tu journey emprendedor, desde la idea hasta la expansión
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          <ServiceCard
            title="Mujer Tukuy con Rumbo"
            description="Para emprendedoras que buscan claridad y dirección estratégica en su negocio."
            features={[
              "Diagnóstico empresarial completo",
              "Plan estratégico personalizado",
              "Acompañamiento 1:1 durante 3 meses",
              "Herramientas de seguimiento y medición"
            ]}
            duration="3 meses"
            href="/servicios/mujer-tukuy-con-rumbo"
            highlight
          />
          
          <ServiceCard
            title="Tukuy Renace"
            description="Revitaliza tu negocio existente con nuevas estrategias y herramientas de crecimiento."
            features={[
              "Análisis profundo del negocio actual",
              "Identificación de oportunidades",
              "Plan de reestructuración",
              "Implementación guiada"
            ]}
            duration="2-4 meses"
            href="/servicios/tukuy-renace"
          />
          
          <ServiceCard
            title="Tukuy Experiencias"
            description="Talleres y eventos para potenciar habilidades emprendedoras específicas."
            features={[
              "Talleres especializados",
              "Networking con otras emprendedoras",
              "Herramientas prácticas",
              "Certificación de participación"
            ]}
            duration="1-2 días"
            href="/servicios/tukuy-experiencias"
          />
        </div>

        {/* Methodology Section */}
        <div className="bg-gray-50 py-16 px-8 rounded-lg mb-16">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="font-playfair text-3xl font-bold text-primary mb-6">
              Mi Metodología
            </h2>
            
            <p className="text-lg text-gray-700 mb-8">
              Cada servicio se basa en una metodología probada que combina estrategia empresarial 
              con bienestar integral, diseñada específicamente para mujeres emprendedoras
            </p>
            
            <div className="grid md:grid-cols-4 gap-6 text-center">
              <div>
                <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center text-white font-bold text-xl mx-auto mb-3">
                  1
                </div>
                <h3 className="font-semibold text-primary mb-2">Diagnóstico</h3>
                <p className="text-sm text-gray-600">Evaluación integral de tu situación actual</p>
              </div>
              
              <div>
                <div className="w-16 h-16 bg-secondary rounded-full flex items-center justify-center text-white font-bold text-xl mx-auto mb-3">
                  2
                </div>
                <h3 className="font-semibold text-primary mb-2">Estrategia</h3>
                <p className="text-sm text-gray-600">Plan personalizado según tus objetivos</p>
              </div>
              
              <div>
                <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center text-white font-bold text-xl mx-auto mb-3">
                  3
                </div>
                <h3 className="font-semibold text-primary mb-2">Implementación</h3>
                <p className="text-sm text-gray-600">Acompañamiento en la ejecución</p>
              </div>
              
              <div>
                <div className="w-16 h-16 bg-terracotta rounded-full flex items-center justify-center text-white font-bold text-xl mx-auto mb-3">
                  4
                </div>
                <h3 className="font-semibold text-primary mb-2">Seguimiento</h3>
                <p className="text-sm text-gray-600">Monitoreo y ajustes continuos</p>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <h2 className="font-playfair text-3xl font-bold text-primary mb-6">
            ¿No estás segura cuál servicio es para ti?
          </h2>
          
          <p className="text-lg text-gray-700 mb-8 max-w-2xl mx-auto">
            Agenda una sesión diagnóstica gratuita y juntas determinaremos 
            la mejor ruta para tu emprendimiento
          </p>
          
          <Button 
            href="https://calendly.com/mujerestukuy/diagnostico"
            variant="primary"
            size="lg"
          >
            Agenda tu Sesión Diagnóstica
          </Button>
        </div>
      </div>
    </div>
  )
}