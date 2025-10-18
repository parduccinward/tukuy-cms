# Error Handling Strategy

Comprehensive error handling and recovery procedures for Mujeres Tukuy website.

---

## 🎯 Error Classification

### Client Errors (4xx)

#### 400 Bad Request
**Cause:** Invalid or missing form data  
**User Message:** "Por favor completa todos los campos requeridos"  
**Action:** Show specific field errors, allow retry

#### 422 Unprocessable Entity
**Cause:** Business logic validation failure  
**User Message:** "Verifica la información ingresada"  
**Action:** Highlight problematic fields, provide guidance

#### 429 Too Many Requests
**Cause:** Rate limit exceeded (>3 submissions/hour)  
**User Message:** "Has enviado demasiados mensajes. Por favor intenta nuevamente en 1 hora o contáctanos por WhatsApp."  
**Action:** Show WhatsApp alternative CTA

---

### Server Errors (5xx)

#### 500 Internal Server Error
**Cause:** Email service failure, code error  
**User Message:** "Hubo un problema al enviar tu mensaje. Por favor intenta nuevamente."  
**Action:** Offer WhatsApp alternative, log error for developer

#### 503 Service Unavailable
**Cause:** External service (Resend) temporarily down  
**User Message:** "Nuestro servicio está temporalmente no disponible. Por favor intenta nuevamente en unos minutos o escríbenos por WhatsApp."  
**Action:** Retry after delay, show alternative contact methods

#### 504 Gateway Timeout
**Cause:** Email sending exceeded timeout (>10s)  
**User Message:** "La solicitud está tardando más de lo esperado. Por favor verifica si recibiste un email de confirmación o contáctanos por WhatsApp."  
**Action:** Possible success despite timeout, verify email sent

---

## 📧 Contact Form Error Handling

### Validation Errors

```typescript
// lib/validation.ts
export interface FormErrors {
  name?: string;
  email?: string;
  whatsapp?: string;
  service?: string;
  message?: string;
}

export function validateContactForm(data: ContactFormData): FormErrors {
  const errors: FormErrors = {};

  // Name validation
  if (!data.name || data.name.trim().length < 2) {
    errors.name = 'El nombre debe tener al menos 2 caracteres';
  }
  if (data.name && data.name.length > 100) {
    errors.name = 'El nombre es demasiado largo (máximo 100 caracteres)';
  }

  // Email validation
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!data.email) {
    errors.email = 'El email es requerido';
  } else if (!emailRegex.test(data.email)) {
    errors.email = 'Ingresa un email válido';
  }

  // WhatsApp validation (optional but validate if provided)
  if (data.whatsapp) {
    const phoneRegex = /^[\+]?[1-9][\d]{7,14}$/;
    if (!phoneRegex.test(data.whatsapp.replace(/\s/g, ''))) {
      errors.whatsapp = 'Ingresa un número de WhatsApp válido (ej: +59170123456)';
    }
  }

  // Service validation
  const validServices = ['mujer-tukuy-con-rumbo', 'tukuy-renace', 'tukuy-experiencias', 'consulta-general'];
  if (!data.service || !validServices.includes(data.service)) {
    errors.service = 'Selecciona un servicio';
  }

  // Message validation
  if (!data.message || data.message.trim().length < 10) {
    errors.message = 'El mensaje debe tener al menos 10 caracteres';
  }
  if (data.message && data.message.length > 1000) {
    errors.message = 'El mensaje es demasiado largo (máximo 1000 caracteres)';
  }

  return errors;
}
```

---

### API Error Response Format

```typescript
// Standardized error response
interface ErrorResponse {
  error: {
    code: string;
    message: string;
    fields?: Record<string, string>;
    timestamp: string;
  };
}

// Example responses
// Validation error
{
  "error": {
    "code": "VALIDATION_ERROR",
    "message": "Por favor completa todos los campos requeridos",
    "fields": {
      "name": "El nombre es requerido",
      "email": "Ingresa un email válido"
    },
    "timestamp": "2025-10-18T10:30:00Z"
  }
}

// Rate limit error
{
  "error": {
    "code": "RATE_LIMIT_EXCEEDED",
    "message": "Has enviado demasiados mensajes. Por favor intenta nuevamente en 1 hora.",
    "timestamp": "2025-10-18T10:30:00Z"
  }
}

// Server error
{
  "error": {
    "code": "EMAIL_SEND_FAILED",
    "message": "Hubo un problema al enviar tu mensaje. Por favor intenta nuevamente.",
    "timestamp": "2025-10-18T10:30:00Z"
  }
}
```

---

### Enhanced API Implementation

```typescript
// app/api/contact/route.ts
import { NextResponse } from 'next/server';
import { Resend } from 'resend';
import { validateContactForm } from '@/lib/validation';
import { checkRateLimit } from '@/lib/rate-limit';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    const data = await request.json();
    const ip = request.headers.get('x-forwarded-for') || 'unknown';

    // 1. Check rate limiting
    const rateLimitResult = checkRateLimit(ip);
    if (!rateLimitResult.allowed) {
      return NextResponse.json(
        {
          error: {
            code: 'RATE_LIMIT_EXCEEDED',
            message: 'Has enviado demasiados mensajes. Por favor intenta nuevamente en 1 hora o contáctanos por WhatsApp.',
            timestamp: new Date().toISOString()
          }
        },
        { status: 429 }
      );
    }

    // 2. Validate form data
    const errors = validateContactForm(data);
    if (Object.keys(errors).length > 0) {
      return NextResponse.json(
        {
          error: {
            code: 'VALIDATION_ERROR',
            message: 'Por favor completa todos los campos correctamente',
            fields: errors,
            timestamp: new Date().toISOString()
          }
        },
        { status: 400 }
      );
    }

    // 3. Send email with retry logic
    try {
      await sendEmailWithRetry(data);
    } catch (emailError) {
      console.error('Email send failed:', emailError);
      
      // Log to monitoring service (future)
      // logError('contact_form_email_failed', emailError, { data });

      return NextResponse.json(
        {
          error: {
            code: 'EMAIL_SEND_FAILED',
            message: 'Hubo un problema al enviar tu mensaje. Por favor intenta nuevamente o escríbenos por WhatsApp.',
            timestamp: new Date().toISOString()
          }
        },
        { status: 500 }
      );
    }

    // 4. Success response
    return NextResponse.json({
      success: true,
      message: 'Mensaje enviado exitosamente'
    });

  } catch (error) {
    console.error('Unexpected error:', error);
    return NextResponse.json(
      {
        error: {
          code: 'INTERNAL_ERROR',
          message: 'Ocurrió un error inesperado. Por favor intenta nuevamente.',
          timestamp: new Date().toISOString()
        }
      },
      { status: 500 }
    );
  }
}

// Retry logic for email sending
async function sendEmailWithRetry(data: any, maxRetries = 2) {
  for (let attempt = 0; attempt <= maxRetries; attempt++) {
    try {
      await resend.emails.send({
        from: 'Tukuy <no-reply@mujerestukuy.com>',
        to: 'contacto@mujerestukuy.com',
        subject: `Nueva consulta - ${data.service}`,
        html: generateEmailHTML(data)
      });
      return; // Success
    } catch (error) {
      if (attempt === maxRetries) {
        throw error; // Final attempt failed
      }
      // Wait before retry (exponential backoff)
      await new Promise(resolve => setTimeout(resolve, 1000 * Math.pow(2, attempt)));
    }
  }
}
```

---

## 🛡️ Rate Limiting Implementation

```typescript
// lib/rate-limit.ts
interface RateLimitEntry {
  count: number;
  resetAt: number;
}

// In-memory store (use Redis in production with high traffic)
const rateLimitStore = new Map<string, RateLimitEntry>();

export function checkRateLimit(ip: string): { allowed: boolean; remaining: number } {
  const now = Date.now();
  const entry = rateLimitStore.get(ip);

  // Clean up expired entries periodically
  if (Math.random() < 0.01) {
    cleanupExpiredEntries();
  }

  if (!entry || now >= entry.resetAt) {
    // New window - allow request
    rateLimitStore.set(ip, {
      count: 1,
      resetAt: now + 3600000 // 1 hour
    });
    return { allowed: true, remaining: 2 };
  }

  if (entry.count >= 3) {
    // Limit exceeded
    return { allowed: false, remaining: 0 };
  }

  // Increment counter
  entry.count++;
  rateLimitStore.set(ip, entry);
  return { allowed: true, remaining: 3 - entry.count };
}

function cleanupExpiredEntries() {
  const now = Date.now();
  for (const [ip, entry] of rateLimitStore.entries()) {
    if (now >= entry.resetAt) {
      rateLimitStore.delete(ip);
    }
  }
}
```

---

## 🎨 Frontend Error Display

```typescript
// components/ContactForm.tsx
export function ContactForm() {
  const [errors, setErrors] = useState<FormErrors>({});
  const [serverError, setServerError] = useState<string>('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrors({});
    setServerError('');
    setIsSubmitting(true);

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });

      const data = await response.json();

      if (!response.ok) {
        // Handle different error types
        if (data.error.code === 'VALIDATION_ERROR') {
          setErrors(data.error.fields || {});
          setServerError(data.error.message);
        } else if (data.error.code === 'RATE_LIMIT_EXCEEDED') {
          setServerError(data.error.message);
          // Show WhatsApp alternative
          setShowWhatsAppFallback(true);
        } else {
          setServerError(data.error.message);
          setShowWhatsAppFallback(true);
        }
        return;
      }

      // Success - redirect to thank you page
      window.location.href = '/gracias';
    } catch (error) {
      // Network error
      setServerError('Error de conexión. Por favor verifica tu internet e intenta nuevamente.');
      setShowWhatsAppFallback(true);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      {/* Server error message */}
      {serverError && (
        <div className="error-banner">
          <p>{serverError}</p>
          {showWhatsAppFallback && (
            <a href={`https://wa.me/${process.env.NEXT_PUBLIC_WA_NUMBER}`} className="whatsapp-cta">
              Escribir por WhatsApp
            </a>
          )}
        </div>
      )}

      {/* Form fields with individual error messages */}
      <div className="form-group">
        <label htmlFor="name">Nombre *</label>
        <input
          id="name"
          type="text"
          className={errors.name ? 'input-error' : ''}
          aria-invalid={!!errors.name}
          aria-describedby={errors.name ? 'name-error' : undefined}
        />
        {errors.name && (
          <span id="name-error" className="field-error" role="alert">
            {errors.name}
          </span>
        )}
      </div>

      {/* More fields... */}
    </form>
  );
}
```

---

## 📊 Error Monitoring

### Logging Strategy

```typescript
// lib/logger.ts
export function logError(
  context: string,
  error: Error,
  metadata?: Record<string, any>
) {
  const errorLog = {
    timestamp: new Date().toISOString(),
    context,
    message: error.message,
    stack: error.stack,
    metadata,
    environment: process.env.NODE_ENV
  };

  // Console log in development
  if (process.env.NODE_ENV === 'development') {
    console.error('Error:', errorLog);
  }

  // In production, send to monitoring service
  // Example: Sentry, LogRocket, or Vercel logs
  // sentry.captureException(error, { contexts: { metadata } });
}
```

### Error Metrics to Track

**Daily monitoring:**
- [ ] Form submission error rate (target: <5%)
- [ ] Email delivery failure rate (target: <1%)
- [ ] 5xx error count (target: 0 per day)
- [ ] Rate limit triggers (identify potential abuse)

**Weekly review:**
- [ ] Most common validation errors (improve UX)
- [ ] Browser-specific errors (compatibility issues)
- [ ] External service failures (Resend uptime)

---

## 🚨 Critical Error Response

### If Contact Form Completely Broken

**Immediate Actions:**
1. Add prominent message on contact page:
   ```html
   <div class="alert-warning">
     <p>Nuestro formulario de contacto está temporalmente no disponible.</p>
     <p>Por favor contáctanos directamente:</p>
     <ul>
       <li>WhatsApp: <a href="https://wa.me/591XXXXXXXX">+591 XXX XXX XXX</a></li>
       <li>Email: <a href="mailto:contacto@mujerestukuy.com">contacto@mujerestukuy.com</a></li>
     </ul>
   </div>
   ```

2. Investigate error logs in Vercel dashboard
3. Test form submission manually
4. Check Resend API status
5. Deploy hotfix or rollback

---

## 🔄 Fallback Strategies

### Email Service Failure

**Primary:** Resend API  
**Fallback 1:** Retry after 2 seconds (auto)  
**Fallback 2:** Display WhatsApp CTA to user  
**Fallback 3:** Show direct email link

### Form Unavailable

**Always provide alternative contact methods:**
- WhatsApp button (persistent on all pages)
- Email link in footer
- Phone number (if available)
- Social media links (Instagram)

---

## 📝 User-Friendly Error Messages

### Principles
✅ **DO:**
- Use Spanish (user's language)
- Be specific about the problem
- Offer next steps or alternatives
- Keep tone friendly and supportive

❌ **DON'T:**
- Show technical error codes to users
- Blame the user ("You did X wrong")
- Use jargon ("HTTP 500", "API timeout")
- Leave users with no alternative action

### Examples

**Good:**
> "No pudimos enviar tu mensaje. Por favor intenta nuevamente o escríbenos por WhatsApp."

**Bad:**
> "Error 500: Internal Server Error. Contact admin."

---

**Document Version:** 1.0  
**Last Updated:** October 18, 2025
