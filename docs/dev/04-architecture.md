# Architecture

## Purpose

Technical architecture decisions and patterns for the Next.js application.

---

## Structure

### Rendering Strategy

**Server Components (Default)**
- All pages use Server Components by default
- Fetch data directly in components
- No client-side JavaScript unless needed

**Client Components (Selective)**
- Contact form (needs `useState`, `onSubmit`)
- Mobile navigation toggle
- Analytics tracking
- WhatsApp floating button (if interactive)

### Data Flow

```
User Request
    ↓
Next.js Middleware (optional)
    ↓
Server Component (page.tsx)
    ↓
Client Component (if interactive)
    ↓
API Route (/api/*)
    ↓
External Service (Resend, etc.)
```

### API Design

- RESTful endpoints under `/app/api/`
- POST for form submissions
- JSON request/response
- Error handling with proper status codes

---

## Conventions

### Server vs Client Components

**Use Server Components for:**
- Static content pages (about, services)
- SEO-critical pages
- Data fetching from external sources
- Pages without user interaction

**Use Client Components for:**
- Forms with state management
- Interactive UI (modals, dropdowns)
- Event handlers (`onClick`, `onChange`)
- Browser APIs (localStorage, window)

Mark client components:
```typescript
'use client';

import { useState } from 'react';
```

### Metadata (SEO)

Each page exports metadata:
```typescript
// app/sobre-mi/page.tsx
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Sobre Mí | Mujeres Tukuy',
  description: 'Janette Blacutt...',
  openGraph: {
    title: 'Sobre Mí | Mujeres Tukuy',
    description: '...',
    images: ['/og-image.jpg'],
  },
};
```

### Error Handling

**API Routes:**
```typescript
// Success
return NextResponse.json({ ok: true }, { status: 200 });

// Client error (validation)
return NextResponse.json(
  { ok: false, error: 'Email inválido' },
  { status: 400 }
);

// Server error
return NextResponse.json(
  { ok: false, error: 'Error del servidor' },
  { status: 500 }
);
```

**Frontend:**
```typescript
try {
  const res = await fetch('/api/contact', { method: 'POST', body });
  const data = await res.json();
  
  if (!data.ok) {
    setError(data.error);
  }
} catch (err) {
  setError('No se pudo enviar el formulario');
}
```

### State Management

**No external state library for MVP**
- Use React `useState` for local component state
- Use URL search params for shareable state
- Server Components for data fetching (no client-side cache)

**Future (Phase 2+):**
- Consider Zustand or Context for global state if needed

---

## AI Notes

- Default to Server Components unless interactivity required
- Use TypeScript interfaces for all data structures
- Keep business logic in `/lib`, not in components
- API routes are server-only (can use private env vars)
- Prefer native Next.js features over external libraries
- Co-locate related files (component + styles + tests)
- Use `async/await` for all asynchronous operations
- Handle loading states explicitly (Suspense or loading.tsx)
- Handle error states explicitly (error.tsx boundaries)
