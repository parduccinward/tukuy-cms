import { z } from 'zod'

// Contact form validation schema
export const contactSchema = z.object({
  name: z.string()
    .min(2, 'El nombre debe tener al menos 2 caracteres')
    .max(100, 'El nombre no puede exceder 100 caracteres'),
  
  email: z.string()
    .email('El email no es válido')
    .max(255, 'El email no puede exceder 255 caracteres'),
  
  message: z.string()
    .min(10, 'El mensaje debe tener al menos 10 caracteres')
    .max(2000, 'El mensaje no puede exceder 2000 caracteres'),
  
  whatsapp: z.string()
    .optional()
    .refine((val) => !val || /^\+?[1-9]\d{1,14}$/.test(val.replace(/\s/g, '')), {
      message: 'Número de WhatsApp inválido'
    }),
  
  service: z.enum([
    'mujer-tukuy-con-rumbo',
    'tukuy-renace', 
    'tukuy-experiencias',
    'consulta-general'
  ]).optional(),
  
  modality: z.enum(['presencial', 'virtual', 'hibrida']).optional(),
})

// Utility function to validate email format
export function validateEmail(email: string): boolean {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  return emailRegex.test(email)
}

// Utility function to validate phone number
export function validatePhone(phone: string): boolean {
  const phoneRegex = /^\+?[1-9]\d{1,14}$/
  return phoneRegex.test(phone.replace(/\s/g, ''))
}

// Utility function to sanitize strings
export function sanitizeString(str: string): string {
  return str.trim().replace(/\s+/g, ' ')
}

// Export types
export type ContactFormData = z.infer<typeof contactSchema>