# Setup

## Purpose

How to initialize and configure the development environment for the Mujeres Tukuy website.

---

## Structure

```
tukuy-cms/
├── .env.local          # Local environment variables (gitignored)
├── .env.example        # Template for required variables
├── package.json        # Dependencies and scripts
├── tsconfig.json       # TypeScript configuration
├── tailwind.config.ts  # TailwindCSS configuration
└── next.config.js      # Next.js configuration
```

---

## Conventions

### Installation
```bash
npm install
```

### Environment Variables
- Copy `.env.example` to `.env.local`
- Never commit `.env.local` to repository
- Use `NEXT_PUBLIC_` prefix for client-side variables
- Required: `RESEND_API_KEY`, `NEXT_PUBLIC_WA_NUMBER`, `NEXT_PUBLIC_CALENDLY_URL`
- Optional: `NEXT_PUBLIC_GA4_ID`, `NEXT_PUBLIC_FB_PIXEL_ID`

### Development Commands
```bash
npm run dev          # Start dev server (http://localhost:3000)
npm run build        # Production build
npm run start        # Run production build locally
npm run lint         # ESLint check
npm run type-check   # TypeScript validation
```

### Node Version
- Node.js 18+ required
- Use `.nvmrc` if present

---

## AI Notes

- When generating package.json, use latest stable versions
- Next.js 15 with App Router (not Pages Router)
- TypeScript strict mode enabled
- Include `@types/*` packages for all libraries
- TailwindCSS v4 if available, otherwise v3
- ESLint + Prettier configuration required
- Git hooks with Husky optional (not required for MVP)
