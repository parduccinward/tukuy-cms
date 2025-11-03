'use client'

import { useEffect } from 'react'
import { Button } from '@/components/ui/Button'

export default function ServicesError({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    console.error('Services page error:', error)
  }, [error])

  return (
    <div className="py-16 lg:py-24">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto text-center">
          {/* Error Icon */}
          <div className="mb-8">
            <div className="w-20 h-20 mx-auto bg-red-100 rounded-full flex items-center justify-center">
              <svg 
                className="w-10 h-10 text-red-600" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth={2} 
                  d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" 
                />
              </svg>
            </div>
          </div>

          {/* Error Message */}
          <h1 className="font-playfair text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
            Error al cargar el servicio
          </h1>
          
          <p className="text-lg text-gray-700 mb-8">
            No pudimos cargar la información de este servicio. 
            Por favor, intenta recargar la página o explora nuestros otros servicios.
          </p>

          {/* Actions */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <Button 
              onClick={reset}
              variant="primary"
              size="lg"
            >
              Recargar página
            </Button>
            
            <Button 
              href="/servicios"
              variant="outline"
              size="lg"
            >
              Ver todos los servicios
            </Button>
          </div>

          {/* Alternative Actions */}
          <div className="bg-gray-50 p-6 rounded-xl">
            <h3 className="font-playfair text-xl font-bold text-gray-900 mb-4">
              ¿Necesitas ayuda inmediata?
            </h3>
            <p className="text-gray-700 mb-4">
              Puedes contactarme directamente para conocer más sobre mis servicios
            </p>
            <Button 
              href="/contacto"
              variant="accent"
              size="lg"
            >
              Contactar ahora
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}