# API Routes

## Purpose

Defines all API endpoints, request/response formats, and integration patterns.

---

## Structure

### Current Endpoints

```
POST /api/contact
```

**Future (Phase 2+):**
```
POST /api/newsletter
POST /api/checkout/create-session
POST /api/checkout/webhook
```

---

## Conventions

### Contact Form API

**Endpoint:** `POST /api/contact`

**Request:**
```typescript
{
  name: string;          // Required, 2-100 chars
  email: string;         // Required, valid email
  message: string;       // Required, 10-1000 chars
  whatsapp?: string;     // Optional, 8-15 digits
  service?: string;      // Optional, from predefined list
  modality?: string;     // Optional, 'individual' | 'grupal'
  honeypot?: string;     // Anti-spam, must be empty
}
```

**Response (Success):**
```typescript
{
  ok: true
}
// Status: 200
```

**Response (Error):**
```typescript
{
  ok: false,
  error: string  // User-friendly Spanish message
}
// Status: 400 (validation) | 429 (rate limit) | 500 (server)
```

### Error Messages (Spanish)

```typescript
// Validation errors
'Por favor completa todos los campos requeridos'
'El email no es válido'
'El mensaje debe tener al menos 10 caracteres'
'El número de WhatsApp no es válido'

// Rate limiting
'Has enviado muchos mensajes. Intenta nuevamente en unos minutos'

// Server errors
'Hubo un problema al enviar tu mensaje. Por favor intenta nuevamente'
```

### Rate Limiting

- **3 submissions per hour per IP address**
- Tracked in memory (Map) - resets on server restart
- Returns 429 status when exceeded
- Cleanup: Remove old entries every 5 minutes

**Implementation:**
```typescript
// lib/rate-limit.ts
const attempts = new Map<string, number[]>();

export function checkRateLimit(ip: string): boolean {
  const now = Date.now();
  const userAttempts = attempts.get(ip) || [];
  const recentAttempts = userAttempts.filter(t => now - t < 3600000);
  
  if (recentAttempts.length >= 3) {
    return false; // Rate limited
  }
  
  attempts.set(ip, [...recentAttempts, now]);
  return true;
}
```

### Email Integration (Resend)

**Configuration:**
```typescript
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);
```

**Send Email:**
```typescript
await resend.emails.send({
  from: 'contacto@mujerestukuy.com',
  to: 'contacto@mujerestukuy.com',
  subject: `Nuevo contacto: ${data.name}`,
  html: formatEmailTemplate(data),
  replyTo: data.email,
});
```

**Template:**
```html
<h2>Nuevo mensaje de contacto</h2>
<p><strong>Nombre:</strong> ${name}</p>
<p><strong>Email:</strong> ${email}</p>
<p><strong>WhatsApp:</strong> ${whatsapp || 'No proporcionado'}</p>
<p><strong>Servicio:</strong> ${service || 'No especificado'}</p>
<p><strong>Modalidad:</strong> ${modality || 'No especificada'}</p>
<p><strong>Mensaje:</strong></p>
<p>${message}</p>
```

### Validation

**Use Zod for type-safe validation:**
```typescript
import { z } from 'zod';

const contactSchema = z.object({
  name: z.string().min(2).max(100),
  email: z.string().email(),
  message: z.string().min(10).max(1000),
  whatsapp: z.string().regex(/^\d{8,15}$/).optional(),
  service: z.enum(['mujer-tukuy-con-rumbo', 'tukuy-renace', 'tukuy-experiencias']).optional(),
  modality: z.enum(['individual', 'grupal']).optional(),
  honeypot: z.string().max(0), // Must be empty
});
```

### Security

- Validate all inputs before processing
- Use honeypot field to catch bots
- Rate limiting to prevent spam
- CORS headers (Next.js handles by default)
- No sensitive data in responses
- HTTPS enforced by Vercel

---

## AI Notes

- All API routes are server-side (can access private env vars)
- Use TypeScript for request/response types
- Always validate input with Zod or similar
- Return consistent error format across all endpoints
- Log errors server-side, show user-friendly messages client-side
- Test API routes with curl or Postman before frontend integration
- Use Next.js `headers()` to get client IP for rate limiting
- Email template should be in separate file for maintainability
- Consider retry logic with exponential backoff for Resend calls
- Never expose API keys in error messages or logs
