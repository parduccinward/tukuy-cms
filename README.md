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

```bash
# Email
RESEND_API_KEY=your_resend_api_key

# Analytics
NEXT_PUBLIC_GA4_ID=G-XXXXXXXXXX
NEXT_PUBLIC_FB_PIXEL_ID=XXXXXXXXXXXXXX

# WhatsApp
NEXT_PUBLIC_WA_NUMBER=5917XXXXXXXX
```

> Production variables configured in Vercel dashboard.  
> See [`docs/privacy-security.md`](./docs/privacy-security.md) for data-handling details.

---

## 🧪 Development Workflow

```bash
npm run dev          # Start dev server
npm run build        # Production build
npm run start        # Run production
npm run lint         # ESLint check
npm run type-check   # TypeScript validation
```

➡️ Extended scripts: see `package.json`.

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

### 🚧 In Progress
- [ ] Next.js implementation
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
