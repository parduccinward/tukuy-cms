import type { Metadata } from 'next'
import { Button } from '@/components/ui/Button'

export const metadata: Metadata = {
  title: 'Tukuy Experiencias',
  description: 'Diseño y coordinación de eventos con propósito para organizaciones. Talleres, charlas y retiros transformadores que integran propósito, bienestar y conexión humana.',
  openGraph: {
    title: 'Tukuy Experiencias | Mujeres Tukuy',
    description: 'Experiencias transformadoras diseñadas para organizaciones que valoran el desarrollo integral.',
    url: '/servicios/tukuy-experiencias',
  }
}

export default function TukuyExperienciasPage() {
  return (
    <div className="py-16 lg:py-24">
      <div className="container mx-auto px-4">
        {/* Hero Section */}
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h1 className="font-playfair text-4xl lg:text-5xl font-bold text-primary mb-6">
            Tukuy Experiencias
          </h1>
          
          <p className="text-xl text-gray-700 mb-8">
            Talleres, charlas y retiros transformadores que integran propósito, 
            bienestar y conexión humana para organizaciones conscientes
          </p>
          
          <div className="inline-flex items-center bg-accent/10 text-accent px-4 py-2 rounded-full">
            <span className="font-semibold">Modalidad: Presencial • Formato: Personalizado</span>
          </div>
        </div>

        {/* Overview */}
        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          <div>
            <h2 className="font-playfair text-3xl font-bold text-primary mb-6">
              ¿Para quién son estas experiencias?
            </h2>
            
            <ul className="space-y-4 text-gray-700">
              <li className="flex items-start">
                <span className="text-accent mr-3 text-xl">•</span>
                <span>Departamentos de RRHH y coordinadores de bienestar corporativo</span>
              </li>
              <li className="flex items-start">
                <span className="text-accent mr-3 text-xl">•</span>
                <span>Organizaciones de mujeres y grupos de desarrollo personal</span>
              </li>
              <li className="flex items-start">
                <span className="text-accent mr-3 text-xl">•</span>
                <span>Centros de retiro y organizadores de eventos</span>
              </li>
              <li className="flex items-start">
                <span className="text-accent mr-3 text-xl">•</span>
                <span>Empresas que valoran la cultura consciente y el desarrollo integral</span>
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
                <span>Diseño personalizado según objetivos y audiencia</span>
              </li>
              <li className="flex items-start">
                <span className="text-accent mr-3 text-xl">•</span>
                <span>Facilitación profesional con herramientas transformadoras</span>
              </li>
              <li className="flex items-start">
                <span className="text-accent mr-3 text-xl">•</span>
                <span>Logística completa y coordinación de detalles</span>
              </li>
              <li className="flex items-start">
                <span className="text-accent mr-3 text-xl">•</span>
                <span>Espacios seguros para exploración y crecimiento</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Experience Types */}
        <div className="mb-16">
          <h2 className="font-playfair text-3xl font-bold text-primary text-center mb-12">
            Tipos de Experiencias
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100">
              <h3 className="font-playfair text-2xl font-bold text-primary mb-4">
                Talleres Corporativos
              </h3>
              <p className="text-gray-700 mb-6">
                Programas para equipos de trabajo enfocados en liderazgo consciente, 
                comunicación asertiva y bienestar laboral.
              </p>
              <ul className="space-y-2 text-gray-600">
                <li>• Liderazgo femenino consciente</li>
                <li>• Inteligencia emocional en el trabajo</li>
                <li>• Equilibrio vida-trabajo</li>
                <li>• Comunicación no violenta</li>
              </ul>
            </div>
            
            <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100">
              <h3 className="font-playfair text-2xl font-bold text-primary mb-4">
                Charlas Inspiracionales
              </h3>
              <p className="text-gray-700 mb-6">
                Conferencias motivacionales sobre emprendimiento femenino, 
                transformación personal y liderazgo con propósito.
              </p>
              <ul className="space-y-2 text-gray-600">
                <li>• Emprendimiento con propósito</li>
                <li>• Reinvención en la vida adulta</li>
                <li>• Sabiduría femenina en el liderazgo</li>
                <li>• Construcción de negocios conscientes</li>
              </ul>
            </div>
            
            <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100">
              <h3 className="font-playfair text-2xl font-bold text-primary mb-4">
                Retiros de Transformación
              </h3>
              <p className="text-gray-700 mb-6">
                Experiencias inmersivas de 1-3 días para profundización personal 
                y conexión grupal en entornos naturales.
              </p>
              <ul className="space-y-2 text-gray-600">
                <li>• Retiros de liderazgo femenino</li>
                <li>• Círculos de sanación y propósito</li>
                <li>• Team building consciente</li>
                <li>• Ceremonias de transición</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Methodology */}
        <div className="mb-16">
          <h2 className="font-playfair text-3xl font-bold text-primary text-center mb-12">
            Nuestro Enfoque Integral
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl mb-4">🎯</div>
              <h3 className="font-playfair text-xl font-bold text-primary mb-3">
                Propósito Claro
              </h3>
              <p className="text-gray-700">
                Cada experiencia está diseñada con intención específica y 
                objetivos claros de transformación personal y grupal.
              </p>
            </div>
            
            <div className="text-center">
              <div className="text-4xl mb-4">💝</div>
              <h3 className="font-playfair text-xl font-bold text-primary mb-3">
                Logística Completa
              </h3>
              <p className="text-gray-700">
                Nos encargamos de todos los detalles: coordinación, materiales, 
                ambientación y seguimiento post-evento.
              </p>
            </div>
            
            <div className="text-center">
              <div className="text-4xl mb-4">🤲</div>
              <h3 className="font-playfair text-xl font-bold text-primary mb-3">
                Facilitación Experta
              </h3>
              <p className="text-gray-700">
                Conducción profesional que combina técnicas de coaching, 
                dinámicas grupales y herramientas de transformación.
              </p>
            </div>
            
            <div className="text-center">
              <div className="text-4xl mb-4">❤️</div>
              <h3 className="font-playfair text-xl font-bold text-primary mb-3">
                Contención Emocional
              </h3>
              <p className="text-gray-700">
                Espacios seguros donde las participantes pueden explorar, 
                expresarse y crecer con acompañamiento consciente.
              </p>
            </div>
          </div>
        </div>

        {/* Format Options */}
        <div className="mb-16">
          <h2 className="font-playfair text-3xl font-bold text-primary text-center mb-12">
            Modalidades de Servicio
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-primary/5 to-secondary/5 p-8 rounded-xl">
              <h3 className="font-playfair text-2xl font-bold text-primary mb-4">
                Medio Día
              </h3>
              <p className="text-gray-700 mb-4">
                <strong>Duración:</strong> 4 horas
              </p>
              <p className="text-gray-700 mb-4">
                <strong>Ideal para:</strong> Talleres temáticos específicos, 
                charlas con actividades prácticas
              </p>
              <p className="text-gray-700">
                <strong>Formato:</strong> 1 facilitadora + materiales básicos
              </p>
            </div>
            
            <div className="bg-gradient-to-br from-accent/5 to-primary/5 p-8 rounded-xl">
              <h3 className="font-playfair text-2xl font-bold text-primary mb-4">
                Jornada Completa
              </h3>
              <p className="text-gray-700 mb-4">
                <strong>Duración:</strong> 8 horas
              </p>
              <p className="text-gray-700 mb-4">
                <strong>Ideal para:</strong> Experiencias transformacionales, 
                team building profundo
              </p>
              <p className="text-gray-700">
                <strong>Formato:</strong> Facilitación + logística completa + catering consciente
              </p>
            </div>
            
            <div className="bg-gradient-to-br from-secondary/5 to-accent/5 p-8 rounded-xl">
              <h3 className="font-playfair text-2xl font-bold text-primary mb-4">
                Diseño Personalizado
              </h3>
              <p className="text-gray-700 mb-4">
                <strong>Duración:</strong> Flexible
              </p>
              <p className="text-gray-700 mb-4">
                <strong>Ideal para:</strong> Programas específicos según necesidades organizacionales
              </p>
              <p className="text-gray-700">
                <strong>Formato:</strong> Co-diseño + implementación completa
              </p>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-to-r from-primary to-secondary text-white py-16 px-8 rounded-2xl text-center">
          <h2 className="font-playfair text-3xl font-bold mb-6">
            ¿Lista para crear una experiencia transformadora?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Conversemos sobre cómo diseñar la experiencia perfecta para tu 
            organización y las mujeres que quieres impactar.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              href="/contacto?servicio=tukuy-experiencias" 
              variant="accent"
              size="lg"
            >
              Solicitar propuesta personalizada
            </Button>
            <Button 
              href="https://calendly.com/mujeres-tukuy" 
              variant="outline"
              size="lg"
            >
              Agendar reunión estratégica
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}