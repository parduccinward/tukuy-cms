# Documentation Organization

This document describes the organization of all documentation in the Mujeres Tukuy CMS project.

---

## 📁 Directory Structure

```
docs/
├── ENV_SETUP.md                    # Environment variables setup guide
├── acceptance-criteria.md          # Release checklist
├── deployment.md                   # Deployment guide
├── design-system.md                # Design system specifications
├── error-handling.md               # Error handling strategy
├── integrations.md                 # Third-party integrations
├── privacy-security.md             # Security and privacy guidelines
├── roadmap.md                      # Project roadmap and phases
├── testing-strategy.md             # Testing procedures
│
├── content/                        # Content specifications
│   ├── architecture.md             # Site architecture
│   ├── content-specifications.md   # Spanish content
│   ├── seo-specifications.md       # SEO metadata
│   └── service-pages-structure.md  # Service page details
│
├── dev/                            # Development guides (numbered)
│   ├── 01-setup.md                 # Project initialization
│   ├── 02-environment.md           # Environment variables
│   ├── 03-structure.md             # File organization
│   ├── 04-architecture.md          # Technical patterns
│   ├── 05-design-system.md         # Styling conventions
│   ├── 06-api.md                   # API routes
│   ├── 07-deployment.md            # Deployment workflow
│   └── 08-ai-collaboration.md      # AI development guidelines
│
├── development/                    # Legacy development docs
│   ├── analytics.md                # Analytics implementation
│   └── api-contact.md              # Contact API details
│
└── implementation/                 # Implementation notes (progress logs)
    └── 02-environment.md           # Environment setup implementation
```

---

## 📖 Reading Order

### For New Developers

1. **Start Here:**
   - `README.md` (project root)
   - `docs/dev/01-setup.md`
   - `docs/ENV_SETUP.md`

2. **Development Workflow:**
   - `docs/dev/02-environment.md` → `docs/dev/03-structure.md` → `docs/dev/04-architecture.md`

3. **Implementation:**
   - `docs/dev/05-design-system.md` → `docs/dev/06-api.md`

4. **Deployment:**
   - `docs/dev/07-deployment.md`
   - `docs/deployment.md`
   - `docs/acceptance-criteria.md`

### For Content/Business

1. **Content Specifications:**
   - `docs/content/content-specifications.md`
   - `docs/content/service-pages-structure.md`

2. **SEO & Marketing:**
   - `docs/content/seo-specifications.md`
   - `docs/design-system.md`

3. **Future Planning:**
   - `docs/roadmap.md`

### For QA/Testing

1. **Testing Procedures:**
   - `docs/testing-strategy.md`
   - `docs/acceptance-criteria.md`

2. **Error Handling:**
   - `docs/error-handling.md`

---

## 🔗 Quick Links by Category

### Setup & Configuration
- [Environment Setup Guide](./ENV_SETUP.md) - How to configure `.env.local`
- [Setup Documentation](./dev/01-setup.md) - Initial project setup
- [Environment Configuration](./dev/02-environment.md) - Technical env docs

### Architecture & Design
- [Site Architecture](./content/architecture.md) - Routes and navigation
- [Technical Architecture](./dev/04-architecture.md) - Code patterns
- [Design System](./design-system.md) - Visual specifications
- [Design System (Dev)](./dev/05-design-system.md) - Implementation

### Development
- [File Structure](./dev/03-structure.md) - Project organization
- [API Routes](./dev/06-api.md) - API implementation
- [Contact API](./development/api-contact.md) - Contact form details
- [Error Handling](./error-handling.md) - Error management

### Content & SEO
- [Content Specifications](./content/content-specifications.md) - Spanish copy
- [SEO Specifications](./content/seo-specifications.md) - Meta tags, schema
- [Service Pages](./content/service-pages-structure.md) - Service details

### Deployment & Operations
- [Deployment Guide](./deployment.md) - Full deployment workflow
- [Deployment (Dev)](./dev/07-deployment.md) - Developer deployment guide
- [Acceptance Criteria](./acceptance-criteria.md) - Release checklist
- [Testing Strategy](./testing-strategy.md) - Testing procedures

### Integration & Security
- [Integrations](./integrations.md) - Resend, Calendly, WhatsApp
- [Privacy & Security](./privacy-security.md) - Data handling

### Planning
- [Roadmap](./roadmap.md) - Project phases and scalability

### AI Collaboration
- [AI Guidelines](./dev/08-ai-collaboration.md) - AI development guidelines

---

## 📝 Implementation Notes

Implementation notes document the actual code generation process and are stored in `docs/implementation/`:

- `02-environment.md` - Environment setup implementation

More will be added as development progresses (e.g., `03-structure.md`, etc.)

These are progress logs that help track what was built and can be archived after project completion.

---

## 🎯 Documentation Principles

1. **No Duplication** - Each piece of information lives in one place
2. **Clear References** - Cross-reference related documents
3. **Consistent Format** - All dev docs follow the same structure (Purpose, Structure, Conventions, AI Notes)
4. **Practical Focus** - Documentation should enable action, not just describe
5. **Living Documents** - Update docs when code changes

---

**Last Updated:** October 18, 2025
