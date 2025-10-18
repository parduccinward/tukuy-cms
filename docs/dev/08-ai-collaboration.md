# AI Collaboration

## Purpose

Guidelines for AI assistants when generating, modifying, or maintaining code for this project.

---

## Structure

### Development Philosophy

- **Pragmatic over perfect** - MVP first, optimize later
- **Documentation-driven** - Update docs when code changes
- **TypeScript strict** - Type everything
- **Mobile-first** - Responsive by default
- **Accessibility-aware** - WCAG AA minimum

### Documentation Methodology

Each development doc follows this structure:
1. **Purpose** - Why it exists
2. **Structure/Components** - How it's organized
3. **Conventions/Rules** - Standards to follow
4. **AI Notes** - What AI should consider

---

## Conventions

### When Generating Code

**Always:**
- Use TypeScript with explicit types
- Follow Next.js 15 App Router patterns
- Use Server Components by default
- Add `'use client'` only when needed (state, events, browser APIs)
- Follow Spanish language for all user-facing text
- Include error handling
- Validate all inputs
- Add accessibility attributes (ARIA labels, alt text)

**Never:**
- Use Pages Router syntax (use App Router)
- Hardcode sensitive values (use env vars)
- Skip TypeScript types
- Ignore mobile responsiveness
- Add external libraries without justification

### When Modifying Code

**Check first:**
- Read current file contents completely
- Understand context from related files
- Check if change impacts other components
- Verify imports and exports

**After changes:**
- Update relevant documentation in `docs/dev/`
- Update README.md if needed
- Test that build succeeds (`npm run build`)
- Verify TypeScript compiles

### Code Quality Standards

**TypeScript:**
```typescript
// ✅ Explicit types
interface ContactFormData {
  name: string;
  email: string;
  message: string;
}

// ❌ Implicit any
function handleSubmit(data) {
  // ...
}
```

**Error Handling:**
```typescript
// ✅ Proper error handling
try {
  const result = await sendEmail(data);
  if (!result.ok) {
    setError(result.error);
  }
} catch (err) {
  setError('Error inesperado');
  console.error(err);
}

// ❌ No error handling
const result = await sendEmail(data);
```

**Accessibility:**
```tsx
// ✅ Accessible
<button
  type="submit"
  aria-label="Enviar formulario de contacto"
  className="..."
>
  Enviar
</button>

// ❌ Not accessible
<div onClick={handleSubmit} className="...">
  Enviar
</div>
```

### Spanish Language

All user-facing text must be in Spanish:
- Button labels
- Error messages
- Form labels
- Page titles
- Meta descriptions
- Alt text

**Examples:**
```typescript
// ✅ Spanish
'Por favor completa todos los campos'
'Enviar mensaje'
'Agendar sesión'

// ❌ English
'Please fill all fields'
'Send message'
'Book session'
```

### File Organization

**When creating new files:**
- Place components in `/components/[category]/`
- Place utilities in `/lib/`
- Place types in `/types/`
- Place API routes in `/app/api/[endpoint]/`

**When creating new pages:**
- Use folder structure: `/app/[route]/page.tsx`
- Include metadata export for SEO
- Use Server Component unless interactivity needed

---

## AI Notes

### Code Generation Priorities

1. **Correctness** - Code must work and be type-safe
2. **Accessibility** - WCAG AA compliance
3. **Performance** - Use Next.js optimizations
4. **Maintainability** - Clear, readable code
5. **Documentation** - Update docs after changes

### Common Patterns

**Page Structure:**
```typescript
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Page Title | Mujeres Tukuy',
  description: '...',
};

export default function PageName() {
  return (
    <main>
      {/* Content */}
    </main>
  );
}
```

**Client Component:**
```typescript
'use client';

import { useState } from 'react';

export default function ComponentName() {
  const [state, setState] = useState('');
  
  return <div>{/* Interactive content */}</div>;
}
```

**API Route:**
```typescript
import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    const data = await request.json();
    // Process
    return NextResponse.json({ ok: true });
  } catch (error) {
    return NextResponse.json(
      { ok: false, error: 'Error message' },
      { status: 500 }
    );
  }
}
```

### Testing Before Suggesting

When generating code, mentally verify:
- [ ] TypeScript types are correct
- [ ] Imports are valid
- [ ] Server/Client component usage is correct
- [ ] Spanish language is used
- [ ] Accessibility attributes present
- [ ] Error handling included
- [ ] Mobile-responsive (Tailwind classes)

### Documentation Updates

After generating/modifying code that affects:
- File structure → Update `docs/dev/structure.md`
- API endpoints → Update `docs/dev/api.md`
- Environment variables → Update `docs/dev/environment.md` and `.env.example`
- Design components → Update `docs/dev/design-system.md`
- Deployment process → Update `docs/dev/deployment.md`

### Asking for Clarification

If user request is ambiguous, ask about:
- Which page/component to modify
- Server or Client Component preference
- Styling preferences (if not in design system)
- Validation rules for forms
- Error message text (in Spanish)

### Project Context Memory

Remember:
- This is an MVP - avoid over-engineering
- Target audience: Bolivian women (Cochabamba/La Paz)
- Business goal: Generate qualified leads
- Owner: Janette Blacutt (mentorship services)
- No authentication required (MVP)
- No database required (MVP)
- No CMS required (MVP - Phase 2)

---

**Last Updated:** October 18, 2025  
**Methodology Version:** 1.0
