import { Button } from './Button'

interface ServiceCardProps {
  title: string
  description: string
  features: string[]
  href: string
  duration?: string
  highlight?: boolean
}

export function ServiceCard({ 
  title, 
  description, 
  features, 
  href, 
  duration,
  highlight = false 
}: ServiceCardProps) {
  return (
    <div className={`relative bg-white rounded-lg p-8 shadow-lg border-2 transition-all duration-200 hover:shadow-xl ${
      highlight ? 'border-accent' : 'border-gray-100 hover:border-primary/20'
    }`}>
      {highlight && (
        <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
          <span className="bg-accent text-white px-4 py-1 rounded-full text-sm font-semibold">
            Más Popular
          </span>
        </div>
      )}
      
      <div className="text-center mb-6">
        <h3 className="font-playfair text-2xl font-bold text-primary mb-3">
          {title}
        </h3>
        
        {duration && (
          <div className="inline-flex items-center bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm mb-4">
            {duration}
          </div>
        )}
        
        <p className="text-gray-700">
          {description}
        </p>
      </div>
      
      <ul className="space-y-3 mb-8">
        {features.map((feature, index) => (
          <li key={index} className="flex items-start">
            <span className="text-secondary mr-3 text-lg flex-shrink-0">✓</span>
            <span className="text-gray-700">{feature}</span>
          </li>
        ))}
      </ul>
      
      <div className="text-center">
        <Button 
          href={href}
          variant={highlight ? 'accent' : 'primary'}
          className="w-full"
        >
          Conocer Más
        </Button>
      </div>
    </div>
  )
}