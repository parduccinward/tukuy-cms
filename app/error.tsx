'use client'

import { useEffect } from 'react'
import { Button } from '@/components/ui/Button'

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error('Application error:', error)
  }, [error])

  return (
    <div className="min-h-screen flex items-center justify-center py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto text-center">
          {/* Error Icon */}
          <div className="mb-8">
            <div className="w-24 h-24 mx-auto bg-red-100 rounded-full flex items-center justify-center">
              <svg 
                className="w-12 h-12 text-red-600" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth={2} 
                  d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z" 
                />
              </svg>
            </div>
          </div>

          {/* Error Message */}
          <h1 className="font-playfair text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Algo salió mal
          </h1>
          
          <p className="text-xl text-gray-700 mb-8">
            Estamos experimentando un problema técnico. Por favor, intenta de nuevo en unos momentos.
          </p>

          {/* Actions */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              onClick={reset}
              variant="primary"
              size="lg"
            >
              Intentar de nuevo
            </Button>
            
            <Button 
              href="/"
              variant="outline"
              size="lg"
            >
              Volver al inicio
            </Button>
          </div>

          {/* Contact Info */}
          <div className="mt-12 pt-8 border-t border-gray-200">
            <p className="text-gray-600 mb-4">
              Si el problema persiste, puedes contactarnos directamente:
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
        </div>
      </div>
    </div>
  )
}