# Environment Configuration

## Purpose

Defines all environment variables and configuration for different deployment environments.

---

## Structure

### Environment Files
```
.env.local           # Local development (gitignored)
.env.example         # Template (committed to repo)
lib/env.ts           # Type-safe env validation utility
lib/env.test.ts      # Unit tests for env validation
types/env.d.ts       # TypeScript type definitions
docs/ENV_SETUP.md    # Detailed setup guide
jest.config.js       # Jest configuration
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

**Method 1: Using env utility (Recommended):**
```typescript
import { env } from '@/lib/env';

// Server-side
const apiKey = env.resend.apiKey;

// Client-side
const whatsappUrl = env.whatsapp.url;
const calendlyUrl = env.calendly.url;
```

**Method 2: Direct access:**
```typescript
// Server-side (API routes, Server Components)
const apiKey = process.env.RESEND_API_KEY;

// Client-side (Client Components)
const waNumber = process.env.NEXT_PUBLIC_WA_NUMBER;
```

### Validation

**Automatic validation on import:**
```typescript
import { validateEnv, env } from '@/lib/env';

// Validates all required variables
validateEnv();
```

**Unit tests:**
```bash
npm test              # Run all tests
npm run test:watch    # Watch mode
npm run test:coverage # Coverage report
```

Full implementation in `lib/env.ts` with comprehensive test suite in `lib/env.test.ts`.

---

## AI Notes

- Never hardcode sensitive values (API keys, tokens)
- Use `NEXT_PUBLIC_` only when browser needs the value
- Default to server-side variables for security
- Always provide `.env.example` with placeholder values
- When generating code that uses env vars, check they exist in `.env.example`
- For Vercel deployment, remind user to configure variables in dashboard
- Use TypeScript for env validation if possible (e.g., zod)
