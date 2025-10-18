# Mujeres Tukuy — CMS Website

A modern, conversion-focused website for **Mujeres Tukuy** mentorship services, built with **Next.js** and **TypeScript**.

> “Cuando una mujer se abraza a sí misma, el mundo florece con ella.”

---

## ⚡️ TL;DR

- **Goal:** Generate qualified leads for mentorship services and promote workshops/events.  
- **Stack:** Next.js 15 (App Router) • TypeScript • TailwindCSS • Deployed on Vercel.  
- **Phase:** MVP (core pages, contact form, Calendly, WhatsApp, basic analytics).  
- **Status:** Pre-launch - Complete documentation, ready for development.

---

## 🚀 Quick Start

```bash
# Clone and setup
git clone <repo-url>
cd tukuy-cms
npm install

# Environment
cp .env.example .env.local
# Edit with your values

# Development
npm run dev
# Visit http://localhost:3000
```

---

## 🎯 Project Overview

### Stakeholders
- **Business Owner:** Janette Blacutt — contacto@mujerestukuy.com  
- **Developer:** Diego Pardo — [GitHub Profile]  
- **Content Strategy:** Developer-managed initially → CMS (Phase 2)

### Key Conversions
1. **Primary CTA:** Book diagnostic session (Calendly)  
2. **Secondary CTA:** Download service brochure (PDF)  
3. **Persistent:** WhatsApp floating button  

---

## 🗺️ Site Architecture (High Level)

| Route | Description |
|--------|--------------|
| `/` | Hero + CTAs + Services overview |
| `/sobre-mi` | About / trust-building |
| `/servicios` | Services overview + detail pages |
| `/contacto` | Contact form + info |
| `/testimonios` | Social proof |
| `/cafe`, `/recursos` | Future content areas |

➡️ Full route details in [`docs/content/architecture.md`](./docs/content/architecture.md)

---

## 🛠 Tech Stack

### Core
- **Framework:** Next.js 15 (App Router)  
- **Language:** TypeScript  
- **Styling:** TailwindCSS  
- **Content:** MDX + Contentlayer → Sanity.io (Phase 2)  
- **Deployment:** Vercel  

### Integrations
- **Email:** Resend API  
- **Booking:** Calendly  
- **Analytics:** Google Analytics 4 + Meta Pixel  
- **Messaging:** WhatsApp deep links  
- **Future:** Stripe (workshop payments)

➡️ Integration details: [`docs/integrations.md`](./docs/integrations.md)

---

## 🎨 Design System

- **Primary:** `#4A3E8E` (Deep Purple)  
- **Accents:** Olive Green `#4A6B50`, Mustard `#E0A424`, Terracotta `#C46C4A`, Ivory `#F8E8D0`  
- **Fonts:** Playfair Display (headings) + Montserrat (body)  
- **Tone:** Elegant, empowering, warm

➡️ Extended guide: [`docs/design-system.md`](./docs/design-system.md)

---

## ⚙️ Environment Variables

### Quick Setup

```bash
# Copy template to local environment file
cp .env.example .env.local

# Edit .env.local with your actual values
# See docs/ENV_SETUP.md for detailed instructions
```

### Required Variables

```bash
# Email Service (Required)
RESEND_API_KEY=re_xxxxxxxxxxxxx

# WhatsApp Contact (Required)
NEXT_PUBLIC_WA_NUMBER=5917XXXXXXXX

# Calendly Booking (Required)
NEXT_PUBLIC_CALENDLY_URL=https://calendly.com/mujerestukuy/diagnostico
```

### Optional Variables

```bash
# Analytics (Optional)
NEXT_PUBLIC_GA4_ID=G-XXXXXXXXXX
NEXT_PUBLIC_FB_PIXEL_ID=XXXXXXXXXXXXXX
```

### Validation

Test your environment setup:

```bash
npm test             # Run all tests (includes env validation)
npm run test:watch   # Watch mode for development
```

> **Type-safe access:** Use `lib/env.ts` for validated environment variables.  
> **Production:** Configure in Vercel dashboard.  
> **Details:** See [`docs/ENV_SETUP.md`](./docs/ENV_SETUP.md) for complete setup guide.

---

## 🧪 Development Workflow

```bash
npm run dev          # Start dev server
npm run build        # Production build
npm run start        # Run production
npm run lint         # ESLint check
npm run type-check   # TypeScript validation
npm test             # Run unit tests
npm run test:watch   # Run tests in watch mode
npm run test:coverage # Run tests with coverage report
```

> See `package.json` for all available scripts.

---

## 📬 Contact Form Integration

Server-side contact form using **Resend** with validation and fallback behavior.

- Endpoint: `/api/contact`
- Fields: `name`, `email`, `message`, optional `whatsapp`, `service`, `modality`
- Response: `{ ok: boolean; error?: string }`

➡️ Implementation: [`docs/development/api-contact.md`](./docs/development/api-contact.md)

---

## 📈 Analytics

Basic tracking implemented for:
- Diagnostic CTA click  
- WhatsApp button click  
- Form submission success  
- Brochure download  

➡️ Tracking helpers: [`docs/development/analytics.md`](./docs/development/analytics.md)

---

## 🚀 Deployment

### Complete Deployment Guide
See detailed deployment workflow in [`docs/deployment.md`](./docs/deployment.md) including:
- Staging and production environments
- Pre-deployment checklist
- Post-deployment verification
- Rollback procedures

### Quick Deploy (After Setup)
```bash
# Push to main branch
git push origin main
# → Auto-deploys to Vercel production

# Preview deployments
# → Every PR creates preview URL automatically
```

### Environment Setup
All environment variables must be configured in Vercel dashboard:
- See `.env.example` for required variables
- Separate values for staging and production
- Never commit `.env` files to repository

---

## 🔐 Privacy & Security

- Input validation + spam honeypot  
- HTTPS enforced (Vercel)  
- Minimal PII collection  
- Consent mode for GA4 + Meta Pixel  
- No data stored beyond email delivery  

➡️ See [`docs/privacy-security.md`](./docs/privacy-security.md)

---

## 🤝 Contributing

1. Fork the repository  
2. Create a feature branch (`git checkout -b feature/nueva-funcionalidad`)
3. Make changes and test locally (`npm run dev`)
4. Run quality checks (`npm run lint && npm run build`)
5. Commit using conventional commits (`feat:`, `fix:`, `docs:`)
6. Submit Pull Request to `staging` branch

### Code Style
- TypeScript strict mode  
- Semantic HTML + accessibility (WCAG AA)  
- ESLint + Prettier enforced  
- Conventional Commits

### Before Committing
```bash
npm run lint        # Check for linting errors
npm run build       # Ensure production build works
```

---

## 📚 Complete Documentation

**📖 [Documentation Index](./docs/INDEX.md)** - Navigation guide for all documentation

### Essential Reading
- 📋 [Acceptance Criteria](./docs/acceptance-criteria.md) - Release requirements
- 🚀 [Deployment Guide](./docs/deployment.md) - Staging and production workflow
- 🧪 [Testing Strategy](./docs/testing-strategy.md) - Manual testing procedures

### Content & Design
- 📝 [Content Specifications](./docs/content/content-specifications.md) - Spanish copy
- 🎨 [Design System](./docs/design-system.md) - Colors, fonts, components
- 🌐 [SEO Specifications](./docs/content/seo-specifications.md) - Meta tags, schema
- 📄 [Service Pages Structure](./docs/content/service-pages-structure.md) - Detailed content

### Technical Implementation
- 🏗️ [Site Architecture](./docs/content/architecture.md) - Routes and navigation
- 🔌 [Integrations](./docs/integrations.md) - Resend, Calendly, WhatsApp
- 📧 [Contact API](./docs/development/api-contact.md) - Enhanced form implementation
- 📊 [Analytics](./docs/development/analytics.md) - Event tracking
- 🔐 [Privacy & Security](./docs/privacy-security.md) - Data handling

### Development Guides
- 🔧 [01-Setup](./docs/dev/01-setup.md) - Project initialization
- 🌍 [02-Environment](./docs/dev/02-environment.md) - Environment variables
- 📁 [03-Structure](./docs/dev/03-structure.md) - File organization
- 🏛️ [04-Architecture](./docs/dev/04-architecture.md) - Technical patterns
- 🎨 [05-Design System](./docs/dev/05-design-system.md) - Styling conventions
- 🔌 [06-API](./docs/dev/06-api.md) - API routes
- 🚀 [07-Deployment](./docs/dev/07-deployment.md) - Deployment workflow
- 🤖 [08-AI Collaboration](./docs/dev/08-ai-collaboration.md) - AI development guidelines

### Setup & Implementation
- 🔑 [Environment Setup](./docs/ENV_SETUP.md) - Detailed environment variable guide
- 📝 [Implementation: Environment](./docs/implementation/02-environment.md) - Setup implementation notes

---

## 🎯 Project Status

### ✅ Completed
- [x] Complete documentation suite
- [x] Content specifications (Spanish)
- [x] SEO metadata definitions
- [x] Design system guidelines
- [x] API specifications
- [x] Deployment workflow
- [x] Testing strategy
- [x] Acceptance criteria
- [x] Project setup (Next.js 15 + TypeScript + Tailwind)
- [x] Environment configuration utilities
- [x] Type-safe environment validation

### 🚧 In Progress
- [ ] Project structure (folders and components)
- [ ] Page implementation
- [ ] Component development
- [ ] Contact form integration
- [ ] Analytics setup

### 📅 Upcoming (Phase 2)
- [ ] CMS integration (Sanity.io)
- [ ] Blog/Recursos section
- [ ] Payment processing (Stripe)
- [ ] CRM integration

---

**Mujeres Tukuy CMS**  
© 2025 — Built with 💜 by [Diego Pardo](https://github.com/parduccinward)

**Documentation complete. Ready for development.** ✨
