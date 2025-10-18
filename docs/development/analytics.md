# Analytics - MVP Setup

Basic event tracking for lead generation metrics.

---

## 📊 Essential Events

Only track what matters for business:

```typescript
// lib/analytics.ts
export function trackCalendlyClick() {
  if (window.gtag) {
    window.gtag('event', 'calendly_click', {
      event_category: 'CTA'
    });
  }
}

export function trackWhatsAppClick() {
  if (window.gtag) {
    window.gtag('event', 'whatsapp_click', {
      event_category: 'Contact'
    });
  }
}

export function trackFormSubmission() {
  if (window.gtag) {
    window.gtag('event', 'form_submit', {
      event_category: 'Lead'
    });
  }
}
```

---

## 🎯 Component Usage

### Calendly Button
```jsx
// components/CalendlyButton.jsx
import { trackCalendlyClick } from '@/lib/analytics';

export function CalendlyButton() {
  return (
    <a
      href={process.env.NEXT_PUBLIC_CALENDLY_URL}
      target="_blank"
      rel="noopener noreferrer"
      className="btn-primary"
      onClick={trackCalendlyClick}
    >
      Agenda tu Sesión
    </a>
  );
}
```

### WhatsApp Button
```jsx
// components/WhatsAppButton.jsx
import { trackWhatsAppClick } from '@/lib/analytics';

export function WhatsAppButton() {
  const handleClick = () => {
    trackWhatsAppClick();
  };

  return (
    <a
      href={`https://wa.me/${process.env.NEXT_PUBLIC_WA_NUMBER}`}
      target="_blank" 
      rel="noopener noreferrer"
      className="whatsapp-float"
      onClick={handleClick}
    >
      💬
    </a>
  );
}
```

### Contact Form
```jsx
// components/ContactForm.jsx
import { trackFormSubmission } from '@/lib/analytics';

export function ContactForm() {
  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Submit form
    const response = await fetch('/api/contact', {
      method: 'POST',
      body: new FormData(e.target)
    });

    if (response.ok) {
      trackFormSubmission();
      window.location.href = '/gracias';
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input name="name" required />
      <input name="email" type="email" required />
      <textarea name="message" required></textarea>
      <button type="submit">Enviar</button>
    </form>
  );
}
```

---

## � Google Analytics Setup

### Basic Configuration
```html
<!-- app/layout.tsx -->
<Script
  src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA4_ID}`}
  strategy="afterInteractive"
/>
<Script id="ga4" strategy="afterInteractive">
  {`
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
    gtag('config', '${process.env.NEXT_PUBLIC_GA4_ID}');
  `}
</Script>
```

---

**MVP Focus:** Only track Calendly clicks, WhatsApp clicks, and form submissions  
**Setup Time:** 30 minutes maximum
