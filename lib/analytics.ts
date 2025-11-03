// Event tracking functions for analytics
// Based on docs/development/analytics.md

export function trackEvent(eventName: string, parameters?: Record<string, any>) {
  // GA4 tracking
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', eventName, parameters)
  }
  
  // Meta Pixel tracking
  if (typeof window !== 'undefined' && window.fbq) {
    window.fbq('track', eventName, parameters)
  }
  
  // Console log for development
  if (process.env.NODE_ENV === 'development') {
    console.log('Analytics Event:', eventName, parameters)
  }
}

// Specific tracking functions
export function trackContactFormSubmit(service?: string) {
  trackEvent('contact_form_submit', {
    event_category: 'engagement',
    service_interest: service || 'general'
  })
}

export function trackCalendlyClick() {
  trackEvent('calendly_click', {
    event_category: 'conversion',
    cta_location: 'button'
  })
}

export function trackWhatsAppClick() {
  trackEvent('whatsapp_click', {
    event_category: 'conversion',
    contact_method: 'whatsapp'
  })
}

export function trackServicePageView(serviceName: string) {
  trackEvent('service_page_view', {
    event_category: 'engagement',
    service_name: serviceName
  })
}

export function trackBrochureDownload() {
  trackEvent('brochure_download', {
    event_category: 'conversion',
    content_type: 'pdf'
  })
}

// Declare global types for analytics
declare global {
  interface Window {
    gtag?: (...args: any[]) => void
    fbq?: (...args: any[]) => void
  }
}