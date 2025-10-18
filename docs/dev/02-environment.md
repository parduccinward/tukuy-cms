# Environment Configuration

## Purpose

Defines all environment variables and configuration for different deployment environments.

---

## Structure

### Environment Files
```
.env.local           # Local development (gitignored)
.env.example         # Template (committed to repo)
```

### Deployment Environments
- **Development:** Local machine (`npm run dev`)
- **Staging:** Vercel preview deployments (PRs)
- **Production:** Vercel production (main branch)

---

## Conventions

### Required Variables

```bash
# Email Service (Required)
RESEND_API_KEY=re_xxxxxxxxxxxxx

# WhatsApp (Required)
NEXT_PUBLIC_WA_NUMBER=5917XXXXXXXX

# Calendly (Required)
NEXT_PUBLIC_CALENDLY_URL=https://calendly.com/mujerestukuy/diagnostico
```

### Optional Variables

```bash
# Analytics (Optional)
NEXT_PUBLIC_GA4_ID=G-XXXXXXXXXX
NEXT_PUBLIC_FB_PIXEL_ID=XXXXXXXXXXXXXX
```

### Variable Naming Rules
- Server-only: `VARIABLE_NAME` (accessible in API routes only)
- Client-side: `NEXT_PUBLIC_VARIABLE_NAME` (exposed to browser)
- Secrets (API keys): Always server-only unless explicitly needed in browser

### Accessing Variables

**Server-side (API routes, Server Components):**
```typescript
const apiKey = process.env.RESEND_API_KEY;
```

**Client-side (Client Components):**
```typescript
const waNumber = process.env.NEXT_PUBLIC_WA_NUMBER;
```

### Validation

Check required variables at startup:
```typescript
// lib/env.ts
export function validateEnv() {
  const required = ['RESEND_API_KEY', 'NEXT_PUBLIC_WA_NUMBER'];
  
  for (const key of required) {
    if (!process.env[key]) {
      throw new Error(`Missing required environment variable: ${key}`);
    }
  }
}
```

---

## AI Notes

- Never hardcode sensitive values (API keys, tokens)
- Use `NEXT_PUBLIC_` only when browser needs the value
- Default to server-side variables for security
- Always provide `.env.example` with placeholder values
- When generating code that uses env vars, check they exist in `.env.example`
- For Vercel deployment, remind user to configure variables in dashboard
- Use TypeScript for env validation if possible (e.g., zod)
