'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/Button'

interface ContactFormData {
  name: string
  email: string
  message: string
  whatsapp?: string
  service?: string
  modality?: 'individual' | 'grupal'
  honeypot?: string
}

export function ContactForm() {
  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    email: '',
    message: '',
    whatsapp: '',
    service: '',
    modality: undefined,
    honeypot: ''
  })
  
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [error, setError] = useState('')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setError('')

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })

      const result = await response.json()

      if (!response.ok) {
        // Handle HTTP errors
        setError(result.error || `Error ${response.status}: No se pudo enviar el mensaje`)
        return
      }

      if (result.ok) {
        // Redirect to thank you page instead of showing inline success
        window.location.href = '/gracias'
      } else {
        setError(result.error || 'Error al enviar el mensaje')
      }
    } catch (err) {
      console.error('Contact form submission error:', err)
      setError('Error de conexión. Por favor, verifica tu internet e intenta de nuevo.')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid md:grid-cols-2 gap-6">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
            Nombre completo *
          </label>
          <input
            type="text"
            id="name"
            required
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary/50 focus:border-primary"
          />
        </div>
        
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
            Email *
          </label>
          <input
            type="email"
            id="email"
            required
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary/50 focus:border-primary"
          />
        </div>
      </div>
      
      <div className="grid md:grid-cols-2 gap-6">
        <div>
          <label htmlFor="whatsapp" className="block text-sm font-medium text-gray-700 mb-2">
            WhatsApp (opcional)
          </label>
          <input
            type="tel"
            id="whatsapp"
            value={formData.whatsapp}
            onChange={(e) => setFormData({ ...formData, whatsapp: e.target.value })}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary/50 focus:border-primary"
            placeholder="+591 XXXXXXXX"
          />
        </div>
        
        <div>
          <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-2">
            Servicio de interés
          </label>
          <select
            id="service"
            value={formData.service}
            onChange={(e) => setFormData({ ...formData, service: e.target.value })}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary/50 focus:border-primary"
          >
            <option value="">Selecciona un servicio</option>
            <option value="mujer-tukuy-con-rumbo">Mujer Tukuy con Rumbo</option>
            <option value="tukuy-renace">Tukuy Renace</option>
            <option value="tukuy-experiencias">Tukuy Experiencias</option>
          </select>
        </div>
      </div>
      
      <div>
        <label htmlFor="modality" className="block text-sm font-medium text-gray-700 mb-2">
          Modalidad preferida
        </label>
        <div className="flex space-x-4">
          {['individual', 'grupal'].map((modality) => (
            <label key={modality} className="flex items-center">
              <input
                type="radio"
                name="modality"
                value={modality}
                checked={formData.modality === modality}
                onChange={(e) => setFormData({ ...formData, modality: e.target.value as 'individual' | 'grupal' })}
                className="mr-2 text-primary focus:ring-primary/50"
              />
              <span className="capitalize">{modality}</span>
            </label>
          ))}
        </div>
      </div>
      
      {/* Honeypot field - hidden from users */}
      <div style={{ display: 'none' }}>
        <label htmlFor="honeypot">Leave this empty</label>
        <input
          type="text"
          id="honeypot"
          name="honeypot"
          value={formData.honeypot}
          onChange={(e) => setFormData({ ...formData, honeypot: e.target.value })}
          tabIndex={-1}
          autoComplete="off"
        />
      </div>
      
      <div>
        <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
          Mensaje *
        </label>
        <textarea
          id="message"
          required
          rows={5}
          value={formData.message}
          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary/50 focus:border-primary"
          placeholder="Cuéntame sobre tu emprendimiento y cómo puedo ayudarte..."
        />
      </div>
      
      {error && (
        <div className="bg-red-50 border border-red-200 rounded-lg p-4 text-red-700">
          {error}
        </div>
      )}
      
      <div className="text-center">
        <Button
          type="submit"
          disabled={isSubmitting}
          variant="primary"
          size="lg"
          className="w-full md:w-auto"
        >
          {isSubmitting ? 'Enviando...' : 'Enviar Mensaje'}
        </Button>
      </div>
      
      <p className="text-sm text-gray-600 text-center">
        Al enviar este formulario, aceptas que podamos contactarte para agendar tu sesión diagnóstica gratuita.
      </p>
    </form>
  )
}