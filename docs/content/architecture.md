# Site Architecture

Information architecture and routing structure for Mujeres Tukuy website.

---

## 🗺️ Site Map

```
/
├── sobre-mi/
├── servicios/
│   ├── mujer-tukuy-con-rumbo/
│   ├── tukuy-renace/
│   └── tukuy-experiencias/
├── contacto/
├── testimonios/
├── cafe/ (coming soon)
├── recursos/ (optional)
└── gracias/
```

---

## 📄 Page Details

### Home (`/`)
**Purpose:** Lead generation and service overview  
**Key Elements:**
- Hero section with value proposition
- Primary CTA (Calendly booking)
- Secondary CTA (brochure download)
- Three service previews
- Testimonials carousel
- About section summary
- WhatsApp integration

**Content Blocks:**
```jsx
<Hero />
<ServicesOverview />
<AboutPreview />
<TestimonialsCarousel />
<CTASection />
```

### About (`/sobre-mi`)
**Purpose:** Build trust and credibility  
**Key Elements:**
- Professional photo
- Personal story and credentials
- Mission statement
- Certifications/achievements
- Brand quote integration

### Services Landing (`/servicios`)
**Purpose:** Service category overview  
**Key Elements:**
- Three service cards with descriptions
- Pricing information (if applicable)
- Comparison table
- Links to detailed service pages

### Service Detail Pages
**Structure applies to:**
- `/servicios/mujer-tukuy-con-rumbo`
- `/servicios/tukuy-renace`  
- `/servicios/tukuy-experiencias`

**Key Elements:**
- Service hero with specific value proposition
- Detailed program description
- Target audience definition
- Expected outcomes
- Process/methodology
- Testimonials specific to service
- Booking CTA

### Contact (`/contacto`)
**Purpose:** Lead capture and communication  
**Key Elements:**
- Contact form (name, email, WhatsApp, service, message)
- Contact information
- WhatsApp direct link
- Business hours
- Response time expectations

### Testimonials (`/testimonios`)
**Purpose:** Social proof and credibility  
**Key Elements:**
- Client testimonials with photos
- Success stories
- Before/after case studies
- Video testimonials (if available)

### Café Tukuy (`/cafe`)
**Purpose:** Future content area  
**Current State:** Coming soon page  
**Future Content:**
- Podcast episodes
- Blog articles
- Event announcements
- Resource gallery

### Thank You (`/gracias`)
**Purpose:** Form submission confirmation  
**Key Elements:**
- Success message
- Next steps information
- Additional resources
- Social media links

---

## 🧭 Navigation Structure

### Main Navigation
```jsx
const mainNav = [
  { label: 'Inicio', href: '/' },
  { label: 'Sobre Mí', href: '/sobre-mi' },
  { 
    label: 'Servicios', 
    href: '/servicios',
    submenu: [
      { label: 'Mujer Tukuy con Rumbo', href: '/servicios/mujer-tukuy-con-rumbo' },
      { label: 'Tukuy Renace', href: '/servicios/tukuy-renace' },
      { label: 'Tukuy Experiencias', href: '/servicios/tukuy-experiencias' }
    ]
  },
  { label: 'Testimonios', href: '/testimonios' },
  { label: 'Contacto', href: '/contacto' }
];
```

### Footer Navigation
```jsx
const footerNav = [
  {
    title: 'Servicios',
    links: [
      { label: 'Mujer Tukuy con Rumbo', href: '/servicios/mujer-tukuy-con-rumbo' },
      { label: 'Tukuy Renace', href: '/servicios/tukuy-renace' },
      { label: 'Tukuy Experiencias', href: '/servicios/tukuy-experiencias' }
    ]
  },
  {
    title: 'Información',
    links: [
      { label: 'Sobre Mí', href: '/sobre-mi' },
      { label: 'Testimonios', href: '/testimonios' },
      { label: 'Contacto', href: '/contacto' }
    ]
  }
];
```

---

## 🎯 Conversion Flow

### Primary Flow (Diagnostic Session)
1. **Entry:** Home page hero or service pages
2. **Action:** Click "Agenda tu Sesión de Diagnóstico"
3. **Destination:** Calendly booking page
4. **Outcome:** Scheduled consultation

### Secondary Flow (Brochure Download)
1. **Entry:** Any page with brochure CTA
2. **Action:** Click "Descargar Brochure"
3. **Destination:** PDF download or email capture
4. **Outcome:** Lead qualification

### Contact Flow
1. **Entry:** Contact page or floating WhatsApp
2. **Action:** Submit form or WhatsApp message
3. **Destination:** Thank you page or WhatsApp chat
4. **Outcome:** Direct communication

---

## 📱 Mobile Navigation

### Hamburger Menu Structure
```jsx
const mobileNav = [
  { label: 'Inicio', href: '/' },
  { label: 'Sobre Mí', href: '/sobre-mi' },
  { label: 'Servicios', href: '/servicios' },
  { label: 'Testimonios', href: '/testimonios' },
  { label: 'Contacto', href: '/contacto' },
  { label: 'Agenda Sesión', href: 'https://calendly.com/...', primary: true }
];
```

---

## 🔗 Internal Linking Strategy

### Cross-Page Connections
- Home → Service pages (service cards)
- Service pages → Contact (end of page CTA)
- About → Services (credential validation)
- Testimonials → Services (social proof)
- All pages → Contact (navigation + WhatsApp)

### SEO Internal Links
```jsx
// Example internal linking structure
const internalLinks = {
  home: ['sobre-mi', 'servicios', 'contacto'],
  'sobre-mi': ['servicios', 'testimonios'],
  servicios: ['contacto', 'testimonios'],
  'service-detail': ['otros-servicios', 'contacto'],
  testimonios: ['servicios', 'contacto']
};
```

---

## 🏗️ Technical Implementation

### Next.js App Router Structure
```
app/
├── layout.tsx                    # Root layout
├── page.tsx                      # Home page
├── sobre-mi/
│   └── page.tsx
├── servicios/
│   ├── page.tsx                  # Services overview
│   ├── mujer-tukuy-con-rumbo/
│   │   └── page.tsx
│   ├── tukuy-renace/
│   │   └── page.tsx
│   └── tukuy-experiencias/
│       └── page.tsx
├── contacto/
│   └── page.tsx
├── testimonios/
│   └── page.tsx
├── cafe/
│   └── page.tsx
├── gracias/
│   └── page.tsx
└── not-found.tsx                 # 404 page
```

### Shared Components
```jsx
// components/Layout.tsx
export function Layout({ children }) {
  return (
    <>
      <Header />
      <main>{children}</main>
      <WhatsAppButton />
      <Footer />
    </>
  );
}
```

---

## 📊 Analytics Tracking

### Page Views
- Track all main page visits
- Monitor service page engagement
- Measure contact page conversion

### Events
- CTA button clicks
- Form submissions
- WhatsApp button clicks
- Brochure downloads
- Navigation interactions

---

## 🎨 Content Strategy

### Page Hierarchy
1. **Home** - Primary landing, broad appeal
2. **Services** - Core business value
3. **About** - Trust and credibility
4. **Contact** - Conversion completion
5. **Testimonials** - Social proof support

### Content Tone
- **Professional yet approachable**
- **Empowering and supportive**
- **Clear value propositions**
- **Action-oriented CTAs**

---