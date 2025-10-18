# Project Structure

## Purpose

Defines the file and folder organization for the Next.js application.

---

## Structure

```
tukuy-cms/
├── app/                           # Next.js App Router
│   ├── layout.tsx                 # Root layout (navigation, footer)
│   ├── page.tsx                   # Homepage (/)
│   ├── sobre-mi/
│   │   └── page.tsx              # About page
│   ├── servicios/
│   │   ├── page.tsx              # Services landing
│   │   ├── mujer-tukuy-con-rumbo/
│   │   │   └── page.tsx          # Service detail
│   │   ├── tukuy-renace/
│   │   │   └── page.tsx          # Service detail
│   │   └── tukuy-experiencias/
│   │       └── page.tsx          # Service detail
│   ├── contacto/
│   │   └── page.tsx              # Contact form
│   ├── testimonios/
│   │   └── page.tsx              # Testimonials
│   ├── gracias/
│   │   └── page.tsx              # Thank you page
│   └── api/
│       └── contact/
│           └── route.ts          # Contact form API
│
├── components/                    # Reusable React components
│   ├── layout/
│   │   ├── Navigation.tsx        # Header navigation
│   │   ├── Footer.tsx            # Footer
│   │   └── WhatsAppButton.tsx   # Floating WhatsApp
│   ├── forms/
│   │   ├── ContactForm.tsx       # Contact form component
│   │   └── FormInput.tsx         # Reusable input
│   ├── ui/
│   │   ├── Button.tsx            # CTA button
│   │   ├── ServiceCard.tsx       # Service preview card
│   │   └── TestimonialCard.tsx  # Testimonial display
│   └── analytics/
│       └── Analytics.tsx         # GA4 + Meta Pixel wrapper
│
├── lib/                          # Utility functions
│   ├── email.ts                  # Resend integration
│   ├── analytics.ts              # Event tracking helpers
│   ├── rate-limit.ts             # Rate limiting logic
│   └── validation.ts             # Form validation
│
├── styles/
│   └── globals.css               # Global styles + Tailwind imports
│
├── public/                       # Static assets
│   ├── images/                   # Photos, illustrations
│   ├── favicon.ico
│   └── robots.txt
│
└── types/                        # TypeScript type definitions
    └── index.ts                  # Shared types
```

---

## Conventions

### File Naming
- Components: PascalCase (`ContactForm.tsx`)
- Utilities: camelCase (`email.ts`)
- Pages: lowercase with hyphens in folders (`sobre-mi/page.tsx`)

### Component Organization
- One component per file
- Export component as default
- Place types/interfaces at top of file
- Group related components in subfolders

### Import Order
```typescript
// 1. External libraries
import { useState } from 'react';
import Link from 'next/link';

// 2. Internal components
import { Button } from '@/components/ui/Button';

// 3. Utilities
import { validateEmail } from '@/lib/validation';

// 4. Types
import type { ContactFormData } from '@/types';

// 5. Styles (if any)
import styles from './Component.module.css';
```

### Path Aliases
- Use `@/` for absolute imports from root
- Configure in `tsconfig.json`:
  ```json
  {
    "compilerOptions": {
      "paths": {
        "@/*": ["./*"]
      }
    }
  }
  ```

---

## AI Notes

- Use App Router exclusively (no Pages Router)
- Server components by default, add `'use client'` only when needed
- Keep components small and focused (single responsibility)
- Separate business logic from UI (use hooks or utilities)
- Co-locate tests with components (e.g., `Button.test.tsx` next to `Button.tsx`)
- Assets go in `public/` for optimization by Next.js Image component
- Group API routes by domain (`/api/contact`, `/api/newsletter`, etc.)
