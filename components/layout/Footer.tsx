import Link from 'next/link'

const footerSections = [
  {
    title: 'Servicios',
    links: [
      { name: 'Mujer Tukuy con Rumbo', href: '/servicios/mujer-tukuy-con-rumbo' },
      { name: 'Tukuy Renace', href: '/servicios/tukuy-renace' },
      { name: 'Tukuy Experiencias', href: '/servicios/tukuy-experiencias' }
    ]
  },
  {
    title: 'Empresa',
    links: [
      { name: 'Sobre Mí', href: '/sobre-mi' },
      { name: 'Testimonios', href: '/testimonios' },
      { name: 'Contacto', href: '/contacto' }
    ]
  }
]

export function Footer() {
  return (
    <footer className="bg-primary text-white">
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="md:col-span-2">
            <h3 className="font-playfair text-2xl font-bold mb-4">
              Mujeres Tukuy
            </h3>
            
            <p className="text-white/90 mb-6 max-w-md">
              Acompañando a mujeres emprendedoras a transformar sus visiones 
              en negocios prósperos y sostenibles.
            </p>
            
            <p className="text-white/90 italic">
              &ldquo;Cuando una mujer se abraza a sí misma, el mundo florece con ella.&rdquo;
            </p>
          </div>

          {/* Navigation Sections */}
          {footerSections.map((section) => (
            <div key={section.title}>
              <h4 className="font-semibold mb-4">{section.title}</h4>
              <ul className="space-y-2">
                {section.links.map((link) => (
                  <li key={link.name}>
                    <Link 
                      href={link.href}
                      className="text-white/80 hover:text-white transition-colors duration-200"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        
        <div className="border-t border-white/20 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-white/80 text-sm">
              © {new Date().getFullYear()} Mujeres Tukuy. Todos los derechos reservados.
            </p>
            
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a 
                href="mailto:contacto@mujerestukuy.com"
                className="text-white/80 hover:text-white transition-colors duration-200"
              >
                contacto@mujerestukuy.com
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}