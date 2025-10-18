# Contact API - Enhanced Form

Enhanced contact form endpoint with service selection, modality options, and WhatsApp integration for lead qualification.

---

## 📧 API Route

```typescript
// app/api/contact/route.ts
import { NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

interface ContactFormData {
  name: string;
  email: string;
  whatsapp?: string;
  service: 'mujer-tukuy-con-rumbo' | 'tukuy-renace' | 'tukuy-experiencias' | 'consulta-general';
  modality?: 'grupal' | 'individual';
  message: string;
}

export async function POST(request: Request) {
  const { name, email, whatsapp, service, modality, message }: ContactFormData = await request.json();

  // Enhanced validation
  if (!name || !email || !service || !message) {
    return NextResponse.json(
      { error: 'Faltan campos requeridos: nombre, email, servicio y mensaje son obligatorios' }, 
      { status: 400 }
    );
  }

  // Email validation
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    return NextResponse.json(
      { error: 'Email inválido' }, 
      { status: 400 }
    );
  }

  // Service name mapping for email
  const serviceNames = {
    'mujer-tukuy-con-rumbo': 'Mujer Tukuy con Rumbo',
    'tukuy-renace': 'Tukuy Renace', 
    'tukuy-experiencias': 'Tukuy Experiencias',
    'consulta-general': 'Consulta General'
  };

  // Send email with enhanced information
  try {
    await resend.emails.send({
      from: 'Tukuy <no-reply@mujerestukuy.com>',
      to: 'contacto@mujerestukuy.com',
      subject: `${serviceNames[service]} - Consulta de ${name}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #4A3E8E;">Nueva consulta desde el sitio web</h2>
          
          <div style="background: #f8f9fa; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h3 style="margin-top: 0; color: #333;">Información de contacto</h3>
            <p><strong>Nombre:</strong> ${name}</p>
            <p><strong>Email:</strong> ${email}</p>
            ${whatsapp ? `<p><strong>WhatsApp:</strong> ${whatsapp}</p>` : ''}
          </div>

          <div style="background: #f8f9fa; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h3 style="margin-top: 0; color: #333;">Servicio de interés</h3>
            <p><strong>Servicio:</strong> ${serviceNames[service]}</p>
            ${modality ? `<p><strong>Modalidad preferida:</strong> ${modality === 'grupal' ? 'Grupal' : 'Individual'}</p>` : ''}
          </div>

          <div style="background: #f8f9fa; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h3 style="margin-top: 0; color: #333;">Mensaje</h3>
            <p>${message.replace(/\n/g, '<br>')}</p>
          </div>

          <div style="margin-top: 30px; padding: 15px; background: #e8f5e8; border-radius: 8px;">
            <p style="margin: 0; font-size: 14px; color: #555;">
              <strong>Próximos pasos:</strong> Responder en las próximas 24 horas para agendar sesión de diagnóstico.
            </p>
          </div>
        </div>
      `
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Error enviando email:', error);
    return NextResponse.json(
      { error: 'Error enviando mensaje. Por favor intenta nuevamente.' }, 
      { status: 500 }
    );
  }
}
```

---

## 📝 Enhanced Frontend Form

```jsx
// components/ContactForm.jsx
import { useState, useEffect } from 'react';
import { useSearchParams } from 'next/navigation';

export function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [message, setMessage] = useState('');
  const [showModality, setShowModality] = useState(false);
  const searchParams = useSearchParams();

  // Pre-select service from URL params
  const preSelectedService = searchParams.get('servicio') || '';

  const handleServiceChange = (e) => {
    const service = e.target.value;
    // Show modality field for mentorship services
    setShowModality(['mujer-tukuy-con-rumbo', 'tukuy-renace'].includes(service));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    const formData = new FormData(e.target);
    const data = {
      name: formData.get('name'),
      email: formData.get('email'),
      whatsapp: formData.get('whatsapp'),
      service: formData.get('service'),
      modality: formData.get('modality'),
      message: formData.get('message')
    };

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
      });

      if (response.ok) {
        // Track conversion event
        if (typeof gtag !== 'undefined') {
          gtag('event', 'form_submit', {
            event_category: 'engagement',
            event_label: data.service
          });
        }
        window.location.href = '/gracias';
      } else {
        const errorData = await response.json();
        setMessage(errorData.error || 'Error enviando mensaje. Intenta de nuevo.');
      }
    } catch (error) {
      setMessage('Error de conexión. Por favor verifica tu internet e intenta nuevamente.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="contact-form-container">
      <div className="form-intro">
        <p>Cuéntame en qué etapa estás y cómo te gustaría avanzar.</p>
      </div>

      <form onSubmit={handleSubmit} className="contact-form">
        {/* Name Field */}
        <div className="form-group">
          <label htmlFor="name">Nombre *</label>
          <input 
            id="name"
            name="name"
            type="text"
            required
            placeholder="Tu nombre completo"
          />
        </div>

        {/* Email Field */}
        <div className="form-group">
          <label htmlFor="email">Email *</label>
          <input 
            id="email"
            name="email"
            type="email"
            required
            placeholder="tu@email.com"
          />
        </div>

        {/* WhatsApp Field */}
        <div className="form-group">
          <label htmlFor="whatsapp">WhatsApp</label>
          <input 
            id="whatsapp"
            name="whatsapp"
            type="tel"
            placeholder="+591 XXXXXXXX (opcional)"
          />
        </div>

        {/* Service Selection */}
        <div className="form-group">
          <label htmlFor="service">Servicio de interés *</label>
          <select 
            id="service"
            name="service"
            required
            defaultValue={preSelectedService}
            onChange={handleServiceChange}
          >
            <option value="">Selecciona un servicio</option>
            <option value="mujer-tukuy-con-rumbo">Mujer Tukuy con Rumbo</option>
            <option value="tukuy-renace">Tukuy Renace</option>
            <option value="tukuy-experiencias">Tukuy Experiencias</option>
            <option value="consulta-general">Consulta General</option>
          </select>
        </div>

        {/* Modality Field (conditional) */}
        {showModality && (
          <div className="form-group">
            <label htmlFor="modality">Modalidad preferida</label>
            <select id="modality" name="modality">
              <option value="">Selecciona modalidad</option>
              <option value="grupal">Grupal</option>
              <option value="individual">Individual</option>
            </select>
          </div>
        )}

        {/* Message Field */}
        <div className="form-group">
          <label htmlFor="message">Mensaje *</label>
          <textarea 
            id="message"
            name="message"
            rows="5"
            required
            placeholder="Cuéntame más sobre tu situación actual y cómo te gustaría que te acompañe..."
          ></textarea>
        </div>

        {/* Error/Success Message */}
        {message && (
          <div className={`form-message ${message.includes('Error') ? 'error' : 'success'}`}>
            {message}
          </div>
        )}

        {/* Submit Button */}
        <button 
          type="submit" 
          disabled={isSubmitting}
          className="submit-button"
        >
          {isSubmitting ? 'Enviando...' : 'Enviar consulta'}
        </button>

        {/* WhatsApp Alternative */}
        <div className="whatsapp-alternative">
          <p>¿Prefieres escribir directamente?</p>
          <a 
            href={`https://wa.me/+591XXXXXXXX?text=Hola, me interesa conocer más sobre los servicios de Mujeres Tukuy`}
            target="_blank"
            rel="noopener noreferrer"
            className="whatsapp-button"
            onClick={() => {
              if (typeof gtag !== 'undefined') {
                gtag('event', 'whatsapp_click', {
                  event_category: 'engagement',
                  event_label: 'contact_form_alternative'
                });
              }
            }}
          >
            Escribir por WhatsApp
          </a>
        </div>
      </form>
    </div>
  );
}
```

---

## 🎯 URL Parameters & Pre-selection

The contact form supports URL parameters for service pre-selection:

```javascript
// Examples:
// /contacto?servicio=mujer-tukuy-con-rumbo
// /contacto?servicio=tukuy-renace  
// /contacto?servicio=tukuy-experiencias

const serviceMapping = {
  'rumbo': 'mujer-tukuy-con-rumbo',
  'renace': 'tukuy-renace', 
  'experiencias': 'tukuy-experiencias'
};
```

### Service Page Integration
Each service page should link with pre-selected service:

```jsx
// In service pages
<a href="/contacto?servicio=mujer-tukuy-con-rumbo" className="cta-button">
  Reserva diagnóstico
</a>
```

---

## 📧 Email Templates

### Admin Notification Template
The enhanced email template includes:
- **Service-specific subject line** for easy filtering
- **Structured contact information**
- **Service and modality preferences**
- **Formatted message content**
- **Next steps reminder**

### Auto-responder (Optional)
```typescript
// Optional: Send confirmation email to user
await resend.emails.send({
  from: 'Janette Blacutt <contacto@mujerestukuy.com>',
  to: email,
  subject: 'Gracias por contactar Mujeres Tukuy',
  html: `
    <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
      <h2 style="color: #4A3E8E;">¡Gracias ${name}!</h2>
      <p>Recibimos tu consulta sobre <strong>${serviceNames[service]}</strong>.</p>
      <p>Te contactaremos en las próximas 24 horas para coordinar tu sesión de diagnóstico.</p>
      
      <div style="background: #f8f9fa; padding: 20px; border-radius: 8px; margin: 20px 0;">
        <h3>Mientras tanto:</h3>
        <ul>
          <li><a href="https://mujerestukuy.com/recursos">Explora nuestros recursos</a></li>
          <li><a href="https://instagram.com/jane_blacutt">Síguenos en Instagram</a></li>
        </ul>
      </div>

      <p style="font-style: italic;">"Dentro de cada mujer habita todo lo necesario para transformarse."</p>
      <p>Con cariño,<br>Janette Blacutt</p>
    </div>
  `
});
```

---

## 🔍 Form Validation

### Frontend Validation
```typescript
// Enhanced validation rules
const validationRules = {
  name: {
    required: true,
    minLength: 2,
    pattern: /^[a-zA-ZÀ-ÿ\s]+$/
  },
  email: {
    required: true,
    pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  },
  whatsapp: {
    required: false,
    pattern: /^[\+]?[1-9][\d]{0,15}$/
  },
  service: {
    required: true,
    options: ['mujer-tukuy-con-rumbo', 'tukuy-renace', 'tukuy-experiencias', 'consulta-general']
  },
  message: {
    required: true,
    minLength: 10,
    maxLength: 1000
  }
};
```

### Backend Validation
- Input sanitization
- SQL injection prevention
- XSS protection
- Rate limiting (max 3 submissions per hour per IP)

---

## 📊 Analytics Integration

### Form Events to Track
```javascript
// Form interaction events
gtag('event', 'form_start', {
  event_category: 'engagement',
  event_label: 'contact_form'
});

gtag('event', 'service_select', {
  event_category: 'engagement', 
  event_label: selectedService
});

gtag('event', 'form_submit', {
  event_category: 'conversion',
  event_label: 'contact_form_success',
  value: 1
});

// WhatsApp alternative clicks
gtag('event', 'whatsapp_click', {
  event_category: 'engagement',
  event_label: 'contact_alternative'
});
```

---

## 🎨 CSS Styling Guidelines

### Form Styling Classes
```css
.contact-form-container {
  max-width: 600px;
  margin: 0 auto;
  padding: 2rem;
}

.form-group {
  margin-bottom: 1.5rem;
}

.form-group label {
  display: block;
  font-weight: 600;
  margin-bottom: 0.5rem;
  color: #4A3E8E;
}

.form-group input,
.form-group select,
.form-group textarea {
  width: 100%;
  padding: 0.75rem;
  border: 2px solid #e1e5e9;
  border-radius: 8px;
  font-size: 1rem;
  transition: border-color 0.2s ease;
}

.form-group input:focus,
.form-group select:focus,
.form-group textarea:focus {
  outline: none;
  border-color: #4A3E8E;
}

.submit-button {
  background: #4A3E8E;
  color: white;
  padding: 1rem 2rem;
  border: none;
  border-radius: 8px;
  font-size: 1.1rem;
  font-weight: 600;
  cursor: pointer;
  transition: background-color 0.2s ease;
}

.submit-button:hover {
  background: #3d3378;
}

.submit-button:disabled {
  background: #9ca3af;
  cursor: not-allowed;
}

.whatsapp-button {
  display: inline-block;
  background: #25D366;
  color: white;
  padding: 0.75rem 1.5rem;
  text-decoration: none;
  border-radius: 8px;
  font-weight: 600;
  transition: background-color 0.2s ease;
}

.form-message.error {
  background: #fee2e2;
  border: 1px solid #fecaca;
  color: #dc2626;
  padding: 1rem;
  border-radius: 8px;
  margin: 1rem 0;
}

.form-message.success {
  background: #d1fae5;
  border: 1px solid #a7f3d0;
  color: #065f46;
  padding: 1rem;
  border-radius: 8px;
  margin: 1rem 0;
}
```

--- 
          type="text" 
          required 
          className="form-input"
        />
      </div>

      <div>
        <label>Email *</label>
        <input 
          name="email" 
          type="email" 
          required 
          className="form-input"
        />
      </div>

      <div>
        <label>Mensaje *</label>
        <textarea 
          name="message" 
          required 
          rows="5"
          className="form-input"
        ></textarea>
      </div>

      <button 
        type="submit" 
        disabled={isSubmitting}
        className="btn-primary"
      >
        {isSubmitting ? 'Enviando...' : 'Enviar Mensaje'}
      </button>

      {message && <p className="form-message">{message}</p>}
    </form>
  );
}
```

---

## 🔧 Testing

### Manual Test
```bash
curl -X POST http://localhost:3000/api/contact \
  -H "Content-Type: application/json" \
  -d '{
    "name": "Test User",
    "email": "test@example.com", 
    "message": "Test message"
  }'
```

### Expected Response
```json
// Success
{ "success": true }

// Error
{ "error": "Faltan campos requeridos" }
```

---

## ⚙️ Environment Setup

```bash
# .env.local
RESEND_API_KEY=your_resend_api_key_here
```

**That's it.** Simple form, sends email, redirects to thank you page.
