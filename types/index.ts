// Shared TypeScript types for the Mujeres Tukuy application

// Contact Form Types
export interface ContactFormData {
  name: string
  email: string
  message: string
  whatsapp?: string
  service?: 'mujer-tukuy-con-rumbo' | 'tukuy-renace' | 'tukuy-experiencias' | 'consulta-general'
  modality?: 'presencial' | 'virtual' | 'hibrida'
}

// Service Types
export interface Service {
  id: string
  title: string
  description: string
  features: string[]
  duration: string
  modalities: ('presencial' | 'virtual' | 'hibrida')[]
  price?: number
  highlight?: boolean
}

// Testimonial Types
export interface Testimonial {
  id: string
  name: string
  business: string
  image?: string
  testimonial: string
  rating: number
  service?: string
  featured?: boolean
}

// Navigation Types
export interface NavigationItem {
  name: string
  href: string
  children?: NavigationItem[]
}

// Analytics Event Types
export interface AnalyticsEvent {
  name: string
  parameters?: Record<string, any>
  category?: 'conversion' | 'engagement' | 'navigation'
}

// API Response Types
export interface APIResponse<T = any> {
  ok: boolean
  data?: T
  error?: string
  message?: string
}

// Email Types
export interface EmailData {
  to: string | string[]
  from: string
  subject: string
  html: string
  replyTo?: string
}

// SEO/Metadata Types
export interface PageMetadata {
  title: string
  description: string
  keywords?: string[]
  image?: string
  url?: string
  type?: 'website' | 'article'
}

// Button/UI Component Types
export interface ButtonProps {
  children: React.ReactNode
  href?: string
  onClick?: () => void
  variant?: 'primary' | 'secondary' | 'accent' | 'outline'
  size?: 'sm' | 'md' | 'lg'
  className?: string
  disabled?: boolean
  type?: 'button' | 'submit' | 'reset'
}

// Environment Types (extends the existing env.d.ts)
export interface EnvironmentConfig {
  resend: {
    apiKey: string
  }
  whatsapp: {
    number: string
    url: string
  }
  calendly: {
    url: string
  }
  analytics: {
    ga4Id?: string
    fbPixelId?: string
  }
  isDevelopment: boolean
  isProduction: boolean
}

// Rate Limiting Types
export interface RateLimitResult {
  success: boolean
  limit: number
  remaining: number
  reset: Date
}

// Form Validation Types
export interface ValidationError {
  field: string
  message: string
}

export interface FormState {
  isSubmitting: boolean
  isSubmitted: boolean
  errors: ValidationError[]
  values: Record<string, any>
}

// Content Types (for future CMS integration)
export interface Page {
  slug: string
  title: string
  content: string
  metadata: PageMetadata
  publishedAt: Date
  updatedAt: Date
}

export interface BlogPost extends Page {
  excerpt: string
  author: string
  tags: string[]
  featured?: boolean
}

// Utility Types
export type Nullable<T> = T | null
export type Optional<T, K extends keyof T> = Omit<T, K> & Partial<Pick<T, K>>
export type RequiredFields<T, K extends keyof T> = T & Required<Pick<T, K>>

// Export commonly used React types
export type ComponentProps<T extends React.ElementType> = React.ComponentPropsWithoutRef<T>
export type ComponentPropsWithRef<T extends React.ElementType> = React.ComponentPropsWithRef<T>