import type { Metadata } from 'next'
import { Button } from '@/components/ui/Button'

export const metadata: Metadata = {
  title: 'Tukuy Renace',
  description: 'Círculos y mentorías para sanar, reinventarte y reconectar con tu poder interior. Espacios sagrados de transformación para mujeres en momentos de transición.',
  openGraph: {
    title: 'Tukuy Renace | Mujeres Tukuy',
    description: 'Acompañamiento consciente para mujeres en procesos de transformación y transición.',
    url: '/servicios/tukuy-renace',
  }
}

export default function TukuyRenacePage() {
  return (
    <div className="py-16 lg:py-24">
      <div className="container mx-auto px-4">
        {/* Hero Section */}
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h1 className="font-playfair text-4xl lg:text-5xl font-bold text-primary mb-6">
            Tukuy Renace
          </h1>
          
          <p className="text-xl text-gray-700 mb-8">
            Círculos y mentorías para sanar, reinventarte y reconectar con tu poder interior 
            en momentos de transición profunda
          </p>
          
          <div className="inline-flex items-center bg-accent/10 text-accent px-4 py-2 rounded-full">
            <span className="font-semibold">Modalidad: Grupal e Individual • Formato: Presencial y Virtual</span>
          </div>
        </div>

        {/* Overview */}
        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          <div>
            <h2 className="font-playfair text-3xl font-bold text-primary mb-6">
              ¿Para quién es este espacio?
            </h2>
            
            <ul className="space-y-4 text-gray-700">
              <li className="flex items-start">
                <span className="text-accent mr-3 text-xl">•</span>
                <span>Mujeres en proceso de menopausia buscando acompañamiento consciente</span>
              </li>
              <li className="flex items-start">
                <span className="text-accent mr-3 text-xl">•</span>
                <span>Madres viviendo el síndrome del nido vacío</span>
              </li>
              <li className="flex items-start">
                <span className="text-accent mr-3 text-xl">•</span>
                <span>Mujeres procesando duelos o pérdidas significativas</span>
              </li>
              <li className="flex items-start">
                <span className="text-accent mr-3 text-xl">•</span>
                <span>Mujeres en procesos de reinvención personal profunda</span>
              </li>
            </ul>
          </div>
          
          <div>
            <h2 className="font-playfair text-3xl font-bold text-primary mb-6">
              ¿Qué incluye?
            </h2>
            
            <ul className="space-y-4 text-gray-700">
              <li className="flex items-start">
                <span className="text-accent mr-3 text-xl">•</span>
                <span>Círculos de mujeres con metodología ancestral</span>
              </li>
              <li className="flex items-start">
                <span className="text-accent mr-3 text-xl">•</span>
                <span>Rituales de paso y ceremonias conscientes</span>
              </li>
              <li className="flex items-start">
                <span className="text-accent mr-3 text-xl">•</span>
                <span>Herramientas integradoras de sanación emocional</span>
              </li>
              <li className="flex items-start">
                <span className="text-accent mr-3 text-xl">•</span>
                <span>Acompañamiento amoroso y contención profesional</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Transition Moments */}
        <div className="mb-16">
          <h2 className="font-playfair text-3xl font-bold text-primary text-center mb-12">
            Momentos de Transición que Acompañamos
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100">
              <h3 className="font-playfair text-2xl font-bold text-primary mb-4">
                Menopausia Consciente
              </h3>
              <p className="text-gray-700">
                Un proceso de transformación física, emocional y espiritual. 
                Te acompañamos a vivirlo desde la sabiduría y el auto-amor, 
                honrando esta nueva etapa de tu feminidad.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100">
              <h3 className="font-playfair text-2xl font-bold text-primary mb-4">
                Nido Vacío
              </h3>
              <p className="text-gray-700">
                Cuando los hijos crecen y se independizan. Momento sagrado para 
                reconectar contigo misma y redescubrir tu identidad más allá de la maternidad.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100">
              <h3 className="font-playfair text-2xl font-bold text-primary mb-4">
                Duelo y Pérdidas
              </h3>
              <p className="text-gray-700">
                Acompañamiento en procesos de duelo por pérdidas significativas. 
                Sanación emocional con contención profesional y herramientas de liberación.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100">
              <h3 className="font-playfair text-2xl font-bold text-primary mb-4">
                Reinvención Personal
              </h3>
              <p className="text-gray-700">
                Momentos de cuestionamiento y búsqueda de nuevo sentido. 
                Apoyo para soltar lo que ya no sirve y abrazar con confianza lo nuevo.
              </p>
            </div>
          </div>
        </div>

        {/* Circle Methodology */}
        <div className="mb-16">
          <h2 className="font-playfair text-3xl font-bold text-primary text-center mb-12">
            La Medicina del Círculo Femenino
          </h2>
          
          <div className="max-w-3xl mx-auto text-center mb-12">
            <p className="text-lg text-gray-700">
              Trabajamos desde la ancestral sabiduría de los círculos de mujeres, 
              espacios donde se honra la feminidad cíclica y se sostienen los procesos de transformación.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl mb-4">🗣️</div>
              <h3 className="font-playfair text-xl font-bold text-primary mb-3">
                Palabra Sagrada
              </h3>
              <p className="text-gray-700">
                Cada mujer tiene espacio para ser escuchada sin juicio. 
                La palabra tiene poder sanador cuando es sostenida en comunidad.
              </p>
            </div>
            
            <div className="text-center">
              <div className="text-4xl mb-4">🌙</div>
              <h3 className="font-playfair text-xl font-bold text-primary mb-3">
                Rituales de Paso
              </h3>
              <p className="text-gray-700">
                Ceremonias conscientes que honran las transiciones y 
                facilitan la integración de los cambios profundos.
              </p>
            </div>
            
            <div className="text-center">
              <div className="text-4xl mb-4">🌿</div>
              <h3 className="font-playfair text-xl font-bold text-primary mb-3">
                Sabiduría Ancestral
              </h3>
              <p className="text-gray-700">
                Conectamos con la sabiduría femenina ancestral y los ciclos naturales 
                para encontrar guía interior auténtica.
              </p>
            </div>
            
            <div className="text-center">
              <div className="text-4xl mb-4">🕯️</div>
              <h3 className="font-playfair text-xl font-bold text-primary mb-3">
                Herramientas Integradoras
              </h3>
              <p className="text-gray-700">
                Meditación, escritura consciente, trabajo corporal y 
                técnicas de liberación emocional para la sanación integral.
              </p>
            </div>
          </div>
        </div>

        {/* Upcoming Program */}
        <div className="mb-16">
          <div className="bg-gradient-to-br from-primary/10 to-secondary/10 p-12 rounded-2xl">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="font-playfair text-3xl font-bold text-primary mb-6">
                Próximo Lanzamiento: Menopausia Consciente
              </h2>
              <p className="text-lg text-gray-700 mb-8">
                Un programa especial de 8 semanas para acompañar a mujeres en su proceso de 
                menopausia desde una perspectiva integral y consciente.
              </p>
              
              <div className="grid md:grid-cols-2 gap-6 mb-8 text-left">
                <div>
                  <h4 className="font-semibold text-primary mb-3">Módulo 1-2: Comprensión y Aceptación</h4>
                  <ul className="space-y-2 text-gray-700">
                    <li>• Comprensión de los cambios físicos y emocionales</li>
                    <li>• Aceptación amorosa del proceso natural</li>
                  </ul>
                </div>
                
                <div>
                  <h4 className="font-semibold text-primary mb-3">Módulo 3-4: Herramientas Naturales</h4>
                  <ul className="space-y-2 text-gray-700">
                    <li>• Herramientas naturales para síntomas</li>
                    <li>• Nutrición y cuidado corporal consciente</li>
                  </ul>
                </div>
                
                <div>
                  <h4 className="font-semibold text-primary mb-3">Módulo 5-6: Sexualidad Renovada</h4>
                  <ul className="space-y-2 text-gray-700">
                    <li>• Exploración de la sexualidad en esta nueva etapa</li>
                    <li>• Reconexión con el placer y la sensualidad</li>
                  </ul>
                </div>
                
                <div>
                  <h4 className="font-semibold text-primary mb-3">Módulo 7-8: Sabiduría Madura</h4>
                  <ul className="space-y-2 text-gray-700">
                    <li>• Desarrollo de la sabiduría de la mujer madura</li>
                    <li>• Integración y celebración del nuevo ser</li>
                  </ul>
                </div>
              </div>
              
              <Button 
                href="/contacto?servicio=menopausia-consciente" 
                variant="primary"
                size="lg"
              >
                Anótate a la lista de espera
              </Button>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-to-r from-primary to-secondary text-white py-16 px-8 rounded-2xl text-center">
          <h2 className="font-playfair text-3xl font-bold mb-6">
            ¿Lista para tu proceso de transformación?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Únete a un espacio sagrado donde tu proceso de transición 
            será honrado y acompañado con amor y sabiduría.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              href="/contacto?servicio=tukuy-renace" 
              variant="accent"
              size="lg"
            >
              Solicitar información
            </Button>
            <Button 
              href="https://calendly.com/mujeres-tukuy" 
              variant="outline"
              size="lg"
            >
              Agendar sesión exploratoria
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}