# Design System

## Purpose

Color palette, typography, spacing, and component styling conventions for consistent UI.

---

## Structure

### Color System

**Primary Palette:**
```css
--deep-purple: #4A3E8E    /* Primary brand color */
--olive-green: #4A6B50    /* Secondary accent */
--mustard: #E0A424        /* Warmth, energy */
--terracotta: #C46C4A     /* Grounding */
--ivory: #F8E8D0          /* Soft backgrounds */
```

**Utility Colors:**
```css
--white: #FFFFFF
--black: #1A1A1A
--gray-light: #F5F5F5
--gray-medium: #9CA3AF
--gray-dark: #374151
```

**Functional Colors:**
```css
--success: #10B981
--error: #EF4444
--warning: #F59E0B
--info: #3B82F6
```

### Typography

**Fonts:**
- **Headings:** Playfair Display (serif)
- **Body:** Montserrat (sans-serif)

**Configuration (Tailwind):**
```javascript
// tailwind.config.ts
fontFamily: {
  serif: ['Playfair Display', 'serif'],
  sans: ['Montserrat', 'sans-serif'],
}
```

**Scale:**
```css
--text-xs: 0.75rem    /* 12px */
--text-sm: 0.875rem   /* 14px */
--text-base: 1rem     /* 16px */
--text-lg: 1.125rem   /* 18px */
--text-xl: 1.25rem    /* 20px */
--text-2xl: 1.5rem    /* 24px */
--text-3xl: 1.875rem  /* 30px */
--text-4xl: 2.25rem   /* 36px */
--text-5xl: 3rem      /* 48px */
```

### Spacing

Follow Tailwind's default spacing scale (4px base):
```
0, 1, 2, 3, 4, 5, 6, 8, 10, 12, 16, 20, 24, 32, 40, 48, 56, 64
```

### Breakpoints

```css
sm: 640px    /* Mobile landscape */
md: 768px    /* Tablet */
lg: 1024px   /* Desktop */
xl: 1280px   /* Large desktop */
2xl: 1536px  /* Extra large */
```

---

## Conventions

### TailwindCSS Configuration

```typescript
// tailwind.config.ts
import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#4A3E8E',
        secondary: '#4A6B50',
        accent: {
          mustard: '#E0A424',
          terracotta: '#C46C4A',
          ivory: '#F8E8D0',
        },
      },
      fontFamily: {
        serif: ['Playfair Display', 'serif'],
        sans: ['Montserrat', 'sans-serif'],
      },
    },
  },
  plugins: [],
};

export default config;
```

### Component Patterns

**Button (Primary CTA):**
```tsx
<button className="bg-primary hover:bg-primary/90 text-white font-semibold py-3 px-6 rounded-lg transition-colors">
  Agendar Sesión
</button>
```

**Button (Secondary):**
```tsx
<button className="bg-transparent border-2 border-primary text-primary hover:bg-primary hover:text-white font-semibold py-3 px-6 rounded-lg transition-colors">
  Conocer Más
</button>
```

**Card:**
```tsx
<div className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition-shadow">
  {/* Content */}
</div>
```

**Section Container:**
```tsx
<section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
  {/* Content */}
</section>
```

### Typography Classes

**Headings:**
```tsx
<h1 className="font-serif text-4xl md:text-5xl font-bold text-primary mb-4">
<h2 className="font-serif text-3xl md:text-4xl font-bold text-gray-dark mb-3">
<h3 className="font-serif text-2xl md:text-3xl font-semibold text-gray-dark mb-2">
```

**Body Text:**
```tsx
<p className="font-sans text-base md:text-lg text-gray-dark leading-relaxed">
```

### Mobile-First Approach

Always write mobile styles first, then add responsive modifiers:
```tsx
// ✅ Correct
<div className="text-base md:text-lg lg:text-xl">

// ❌ Wrong
<div className="lg:text-xl md:text-lg text-base">
```

### Accessibility

**Color Contrast:**
- Text on primary background: Use white (#FFFFFF)
- Text on ivory background: Use gray-dark (#374151)
- Ensure WCAG AA compliance (4.5:1 for normal text)

**Focus States:**
```tsx
<button className="focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2">
```

**Interactive Elements:**
- Minimum touch target: 44x44px
- Visible hover states
- Keyboard navigation support

---

## AI Notes

- Use Tailwind utility classes (no custom CSS unless absolutely necessary)
- Extend Tailwind config for brand colors (don't use arbitrary values like `bg-[#4A3E8E]`)
- Mobile-first: Start with base styles, add `md:`, `lg:` modifiers
- Use semantic HTML (`<header>`, `<nav>`, `<main>`, `<footer>`)
- Add proper ARIA labels for accessibility
- Test color contrast with WebAIM Contrast Checker
- Use Next.js `<Image>` component for all images (automatic optimization)
- Fonts loaded via Google Fonts or next/font
- Keep component files separate from styling logic
- Use `clsx` or `cn()` utility for conditional classes
- Avoid inline styles unless dynamic (e.g., background image URLs)
