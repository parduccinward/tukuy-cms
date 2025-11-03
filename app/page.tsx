import type { Metadata } from 'next'
import { Button } from '@/components/ui/Button'
import { ServiceCard } from '@/components/ui/ServiceCard'

export const metadata: Metadata = {
  title: 'Inicio',
  description: 'Transforma tu visión en un negocio próspero. Mentoría especializada para mujeres emprendedoras con metodologías personalizadas y resultados medibles.',
  openGraph: {
    title: 'Mujeres Tukuy — Mentoría para Mujeres Emprendedoras',
    description: 'Transforma tu visión en un negocio próspero. Mentoría especializada para mujeres emprendedoras.',
    url: '/',
  }
}

export default function HomePage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary/90 to-secondary/90 text-white py-20 lg:py-32">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="font-playfair text-4xl lg:text-6xl font-bold mb-6">
              Cuando una mujer se abraza a sí misma,{' '}
              <span className="text-accent">el mundo florece con ella</span>
            </h1>
            
            <p className="text-xl lg:text-2xl mb-8 text-white/90">
              Transforma tu visión en un negocio próspero con mentoría especializada 
              para mujeres emprendedoras
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
                href="/servicios" 
                variant="outline"
                size="lg"
                className="border-white text-white hover:bg-white hover:text-primary"
              >
                Conoce Nuestros Servicios
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Value Proposition */}
      <section className="py-16 lg:py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="font-playfair text-3xl lg:text-4xl font-bold text-primary mb-6">
              Tu éxito no es casualidad, es el resultado de decisiones estratégicas
            </h2>
            
            <p className="text-lg text-gray-700">
              Con más de 10 años acompañando a mujeres emprendedoras, he desarrollado 
              metodologías que transforman ideas en negocios prósperos y sostenibles.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <ServiceCard
              title="Mujer Tukuy con Rumbo"
              description="Metodología integral para emprendedoras que buscan claridad y dirección estratégica."
              features={["Diagnóstico empresarial", "Plan estratégico", "Acompañamiento personalizado"]}
              href="/servicios/mujer-tukuy-con-rumbo"
            />
            
            <ServiceCard
              title="Tukuy Renace"
              description="Revitaliza tu negocio existente con nuevas estrategias y herramientas de crecimiento."
              features={["Análisis de negocio", "Reestructuración", "Plan de crecimiento"]}
              href="/servicios/tukuy-renace"
            />
            
            <ServiceCard
              title="Tukuy Experiencias"
              description="Talleres y eventos diseñados para potenciar habilidades emprendedoras específicas."
              features={["Talleres especializados", "Networking", "Herramientas prácticas"]}
              href="/servicios/tukuy-experiencias"
            />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 lg:py-24 bg-primary text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-playfair text-3xl lg:text-4xl font-bold mb-6">
            ¿Lista para transformar tu visión en realidad?
          </h2>
          
          <p className="text-xl mb-8 text-white/90 max-w-2xl mx-auto">
            Agenda una sesión diagnóstica gratuita y descubre el potencial real de tu emprendimiento
          </p>
          
          <Button 
            href="https://calendly.com/mujerestukuy/diagnostico" 
            variant="accent"
            size="lg"
            className="text-primary font-semibold"
          >
            Agenda tu Sesión Gratuita
          </Button>
        </div>
      </section>
    </>
  )
}