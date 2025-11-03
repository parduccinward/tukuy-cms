import type { Metadata } from 'next'
import Image from 'next/image'
import { Button } from '@/components/ui/Button'

export const metadata: Metadata = {
  title: 'Sobre Mí',
  description: 'Conoce a Janette Blacutt, mentora con más de 10 años de experiencia acompañando a mujeres emprendedoras en Bolivia.',
  openGraph: {
    title: 'Sobre Mí | Mujeres Tukuy',
    description: 'Conoce a Janette Blacutt, mentora especializada en emprendimiento femenino.',
    url: '/sobre-mi',
  }
}

export default function SobreMiPage() {
  return (
    <div className="py-16 lg:py-24">
      <div className="container mx-auto px-4">
        {/* Hero Section */}
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h1 className="font-playfair text-4xl lg:text-5xl font-bold text-primary mb-6">
            Soy Janette Blacutt
          </h1>
          
          <p className="text-xl text-gray-700 mb-8">
            Mentora especializada en emprendimiento femenino, 
            acompañando a mujeres visionarias a convertir sus ideas en negocios prósperos
          </p>
          
          <div className="relative w-64 h-64 mx-auto mb-8 rounded-full overflow-hidden">
            <Image
              src="/images/janette-blacutt.jpg"
              alt="Janette Blacutt - Mentora de Mujeres Emprendedoras"
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>

        {/* Story Section */}
        <div className="max-w-3xl mx-auto mb-16">
          <h2 className="font-playfair text-3xl font-bold text-primary mb-6 text-center">
            Mi Historia
          </h2>
          
          <div className="prose prose-lg mx-auto text-gray-700">
            <p>
              Durante más de una década, he tenido el privilegio de acompañar a cientos de mujeres 
              emprendedoras en su journey hacia el éxito empresarial. Mi pasión nació de mi propia 
              experiencia como mujer emprendedora y de entender las barreras únicas que enfrentamos.
            </p>
            
            <p>
              He desarrollado metodologías especializadas que no solo consideran la viabilidad 
              empresarial, sino también el bienestar integral de la mujer emprendedora. 
              Creo firmemente que cuando una mujer se abraza a sí misma y confía en su visión, 
              puede transformar no solo su vida, sino el mundo que la rodea.
            </p>
            
            <p>
              Mi enfoque combina estrategia empresarial sólida con un profundo entendimiento 
              de los desafíos que enfrentamos las mujeres en el mundo empresarial. 
              Cada mentoría es un espacio seguro donde florecen la confianza, la claridad y la acción estratégica.
            </p>
          </div>
        </div>

        {/* Credentials Section */}
        <div className="grid md:grid-cols-2 gap-12 max-w-4xl mx-auto mb-16">
          <div>
            <h3 className="font-playfair text-2xl font-bold text-primary mb-4">
              Experiencia
            </h3>
            
            <ul className="space-y-3 text-gray-700">
              <li className="flex items-start">
                <span className="text-accent mr-2">•</span>
                +10 años mentoreando emprendedoras
              </li>
              <li className="flex items-start">
                <span className="text-accent mr-2">•</span>
                +200 mujeres acompañadas al éxito
              </li>
              <li className="flex items-start">
                <span className="text-accent mr-2">•</span>
                Especialización en emprendimiento femenino
              </li>
              <li className="flex items-start">
                <span className="text-accent mr-2">•</span>
                Metodologías propias desarrolladas y validadas
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-playfair text-2xl font-bold text-primary mb-4">
              Mi Misión
            </h3>
            
            <p className="text-gray-700 mb-4">
              Empoderar a mujeres emprendedoras para que construyan negocios prósperos 
              y sostenibles, mientras mantienen el equilibrio entre su crecimiento 
              profesional y personal.
            </p>
            
            <p className="text-gray-700">
              Creo que cada mujer tiene el poder de transformar su realidad y contribuir 
              positivamente al mundo a través de su emprendimiento.
            </p>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center bg-gray-50 py-12 px-8 rounded-lg">
          <h3 className="font-playfair text-2xl font-bold text-primary mb-4">
            ¿Lista para comenzar tu transformación?
          </h3>
          
          <p className="text-gray-700 mb-6 max-w-2xl mx-auto">
            Agenda una sesión diagnóstica conmigo y descubre cómo puedo acompañarte 
            en tu journey emprendedor
          </p>
          
          <Button 
            href="https://calendly.com/mujerestukuy/diagnostico"
            variant="primary"
            size="lg"
          >
            Agenda tu Sesión Conmigo
          </Button>
        </div>
      </div>
    </div>
  )
}