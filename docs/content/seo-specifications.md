# SEO Metadata Specifications

Complete SEO metadata including page titles, descriptions, URLs, and optimization requirements based on Spanish content strategy.

---

## 🎯 Global SEO Strategy

### Target Keywords
- **Primary:** mentoría mujeres emprendedoras, coaching femenino, negocios con propósito
- **Secondary:** mentalidad emprendedora, transformación personal, liderazgo femenino
- **Local:** mentoría La Paz, coaching Bolivia, emprendimiento femenino Bolivia

### SEO Goals
- **Local visibility** for "mentoría emprendedoras La Paz"
- **Organic traffic** for mentorship and coaching services
- **Brand authority** for conscious business development
- **Conversion optimization** for diagnostic session bookings

---

## 📄 Page-by-Page SEO Specifications

### 🏠 Home Page (`/`)

```html
<title>Mujeres Tukuy – Mentoría y estrategia para emprendedoras con propósito</title>
<meta name="description" content="Mentoría de negocios, círculos de transformación femenina y eventos con propósito. Acompañamiento estratégico y emocional para ordenar tu negocio y tu vida." />

<!-- Open Graph -->
<meta property="og:title" content="Mujeres Tukuy – Mentoría y estrategia para emprendedoras con propósito" />
<meta property="og:description" content="Ordena tu negocio, fortalece tu mentalidad y transforma tu vida con conciencia. Mentoría integral para mujeres emprendedoras." />
<meta property="og:type" content="website" />
<meta property="og:url" content="https://mujerestukuy.com/" />
<meta property="og:image" content="https://mujerestukuy.com/images/og-home.jpg" />

<!-- Twitter -->
<meta name="twitter:card" content="summary_large_image" />
<meta name="twitter:title" content="Mujeres Tukuy – Mentoría y estrategia para emprendedoras con propósito" />
<meta name="twitter:description" content="Mentoría de negocios, círculos de transformación femenina y eventos con propósito." />

<!-- Schema.org -->
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "Mujeres Tukuy",
  "description": "Mentoría y estrategia para emprendedoras con propósito",
  "url": "https://mujerestukuy.com",
  "telephone": "+591XXXXXXXX",
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "La Paz",
    "addressCountry": "Bolivia"
  },
  "founder": {
    "@type": "Person",
    "name": "Janette Blacutt"
  },
  "serviceType": "Business Mentoring"
}
</script>
```

**H1:** Mentoría, estrategia y propósito para mujeres emprendedoras  
**URL:** `/` (canonical)

---

### 👤 About Page (`/sobre-mi`)

```html
<title>Sobre Janette Blacutt – Mujeres Tukuy</title>
<meta name="description" content="Mentora de Negocios Conscientes con más de 20 años de experiencia emprendiendo. Acompaño a mujeres a integrar estrategia, mentalidad y propósito en su crecimiento." />

<meta property="og:title" content="Sobre Janette Blacutt – Mentora de Negocios Conscientes" />
<meta property="og:description" content="Más de 20 años emprendiendo. Especializada en acompañar mujeres a construir negocios sostenibles con propósito." />
<meta property="og:type" content="profile" />
```

**H1:** Sobre Janette Blacutt – Mujeres Tukuy  
**URL:** `/sobre-mi`

---

### 🌿 Services Landing (`/servicios`)

```html
<title>Servicios – Mujeres Tukuy</title>
<meta name="description" content="Programas, mentorías y experiencias para ordenar tu negocio, fortalecer tu confianza y reconectarte con tu propósito." />

<meta property="og:title" content="Servicios de Mentoría para Mujeres Emprendedoras" />
<meta property="og:description" content="Programas integrales: Mujer Tukuy con Rumbo, Tukuy Renace y Tukuy Experiencias para transformar tu vida y negocio." />
```

**H1:** Servicios – Mujeres Tukuy  
**URL:** `/servicios`

---

### 🌸 Service Detail Pages

#### Mujer Tukuy con Rumbo (`/servicios/mujer-tukuy-con-rumbo`)

```html
<title>Mujer Tukuy con Rumbo – Mentoría integral para mujeres emprendedoras</title>
<meta name="description" content="Programa de mentoría para ordenar tu negocio, fortalecer tu mentalidad y avanzar con claridad, propósito y equilibrio." />

<meta property="og:title" content="Mujer Tukuy con Rumbo – Mentoría Integral" />
<meta property="og:description" content="Deja de improvisar y construye una vida y un negocio con propósito. Programa de 9 semanas grupal o mentoría individual." />
<meta property="og:type" content="service" />

<!-- Service Schema -->
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "Mujer Tukuy con Rumbo",
  "description": "Mentoría integral para ordenar tu negocio y fortalecer tu mentalidad",
  "provider": {
    "@type": "Organization",
    "name": "Mujeres Tukuy"
  },
  "serviceType": "Business Mentoring",
  "offers": {
    "@type": "Offer",
    "availability": "Available"
  }
}
</script>
```

**H1:** Mujer Tukuy con Rumbo  
**URL:** `/servicios/mujer-tukuy-con-rumbo`

#### Tukuy Renace (`/servicios/tukuy-renace`)

```html
<title>Tukuy Renace – Círculos y mentorías de transformación femenina</title>
<meta name="description" content="Espacios para sanar, reinventarte y reconectar con tu poder interior. Acompañamiento para mujeres en menopausia, duelo o nido vacío." />

<meta property="og:title" content="Tukuy Renace – Transformación Femenina" />
<meta property="og:description" content="Círculos y mentorías para sanar, reinventarte y reconectar con tu poder interior en momentos de transición." />
```

**H1:** Tukuy Renace  
**URL:** `/servicios/tukuy-renace`

#### Tukuy Experiencias (`/servicios/tukuy-experiencias`)

```html
<title>Tukuy Experiencias – Eventos con propósito y liderazgo femenino</title>
<meta name="description" content="Diseño y coordinación de talleres, charlas y retiros transformadores. Integración de propósito, bienestar y conexión." />

<meta property="og:title" content="Tukuy Experiencias – Eventos Transformadores" />
<meta property="og:description" content="Diseño y coordinación de talleres, charlas y retiros con propósito para organizaciones y grupos." />
```

**H1:** Tukuy Experiencias  
**URL:** `/servicios/tukuy-experiencias`

---

### ⭐ Testimonials Page (`/testimonios`)

```html
<title>Testimonios – Mujeres Tukuy</title>
<meta name="description" content="Historias reales de transformación, crecimiento y empoderamiento de mujeres acompañadas por Tukuy." />

<meta property="og:title" content="Testimonios de Transformación – Mujeres Tukuy" />
<meta property="og:description" content="Descubre las historias reales de mujeres que han transformado su vida y negocio con nuestro acompañamiento." />
```

**H1:** Testimonios – Mujeres Tukuy  
**URL:** `/testimonios`

---

### 💬 Contact Page (`/contacto`)

```html
<title>Contacto – Mujeres Tukuy</title>
<meta name="description" content="Agenda tu sesión de diagnóstico o solicita información sobre nuestros programas y experiencias con propósito." />

<meta property="og:title" content="Contacto – Agenda tu Sesión de Diagnóstico" />
<meta property="og:description" content="Cuéntanos en qué etapa estás y cómo te gustaría avanzar. Primera consulta gratuita disponible." />
```

**H1:** Contacto – Mujeres Tukuy  
**URL:** `/contacto`

---

### 📚 Resources Page (`/recursos`)

```html
<title>Recursos – Mujeres Tukuy</title>
<meta name="description" content="Artículos, guías y materiales para inspirarte a emprender con conciencia y equilibrio." />

<meta property="og:title" content="Recursos Gratuitos para Emprendedoras" />
<meta property="og:description" content="Descarga guías, artículos y materiales para potenciar tu crecimiento personal y profesional." />
```

**H1:** Recursos – Mujeres Tukuy  
**URL:** `/recursos`

---

### 📄 Thank You Page (`/gracias`)

```html
<title>Gracias – Mujeres Tukuy</title>
<meta name="description" content="Tu mensaje fue recibido con éxito. Muy pronto nos pondremos en contacto contigo para acompañarte en tu camino de transformación." />
<meta name="robots" content="noindex" />
```

**H1:** Gracias – Mujeres Tukuy  
**URL:** `/gracias`

---

## 🗂️ Site Structure & URLs

### Clean URL Structure
```
https://mujerestukuy.com/
├── sobre-mi/
├── servicios/
│   ├── mujer-tukuy-con-rumbo/
│   ├── tukuy-renace/
│   └── tukuy-experiencias/
├── testimonios/
├── contacto/
├── recursos/
└── gracias/
```

### URL Guidelines
- **No special characters** or accents in URLs
- **Lowercase only**
- **Hyphens for word separation**
- **Descriptive and readable**
- **Consistent structure**

---

## 🎨 Image SEO

### Image Naming Convention
```
# Homepage
hero-mujeres-tukuy-mentoria.jpg
janette-blacutt-mentora-negocios.jpg
servicios-transformacion-femenina.jpg

# Service Pages
mujer-tukuy-rumbo-mentoria.jpg
tukuy-renace-circulos-transformacion.jpg
tukuy-experiencias-eventos-proposito.jpg

# Testimonials
testimonio-[nombre]-transformacion.jpg
```

### Alt Text Examples
```html
<img src="hero-mujeres-tukuy.jpg" alt="Janette Blacutt, mentora de negocios conscientes para mujeres emprendedoras" />

<img src="servicios-overview.jpg" alt="Tres servicios principales: Mujer Tukuy con Rumbo, Tukuy Renace y Tukuy Experiencias" />

<img src="testimonio-maria.jpg" alt="María, emprendedora transformada con mentoría Mujeres Tukuy" />
```

---

## 📊 Technical SEO Requirements

### Core Web Vitals Optimization
- **LCP (Largest Contentful Paint):** < 2.5s
- **FID (First Input Delay):** < 100ms  
- **CLS (Cumulative Layout Shift):** < 0.1

### Performance Optimization
```typescript
// Image optimization
import Image from 'next/image';

<Image
  src="/images/hero-mujeres-tukuy.jpg"
  alt="Mentoría para mujeres emprendedoras"
  width={800}
  height={600}
  priority
  placeholder="blur"
  blurDataURL="data:image/jpeg;base64,..."
/>

// Font optimization
import { Playfair_Display, Montserrat } from 'next/font/google';

const playfair = Playfair_Display({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-playfair'
});
```

### Sitemap.xml Structure
```xml
<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>https://mujerestukuy.com/</loc>
    <lastmod>2025-01-01</lastmod>
    <changefreq>weekly</changefreq>
    <priority>1.0</priority>
  </url>
  <url>
    <loc>https://mujerestukuy.com/sobre-mi</loc>
    <lastmod>2025-01-01</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
  </url>
  <url>
    <loc>https://mujerestukuy.com/servicios</loc>
    <lastmod>2025-01-01</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.9</priority>
  </url>
  <!-- Additional URLs... -->
</urlset>
```

### Robots.txt
```
User-agent: *
Allow: /

# Sitemap location
Sitemap: https://mujerestukuy.com/sitemap.xml

# Block admin areas (if any)
Disallow: /admin/
Disallow: /api/
```

---

## 🔍 Local SEO Optimization

### Google My Business Integration
```json
{
  "businessName": "Mujeres Tukuy",
  "category": "Business Consultant",
  "description": "Mentoría y estrategia para mujeres emprendedoras con propósito. Acompañamiento integral para ordenar tu negocio y transformar tu vida.",
  "website": "https://mujerestukuy.com",
  "phone": "+591XXXXXXXX",
  "address": "La Paz, Bolivia",
  "services": [
    "Mentoría de Negocios",
    "Coaching Femenino", 
    "Círculos de Transformación",
    "Eventos Empresariales"
  ]
}
```

### Local Schema Markup
```json
{
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "Mujeres Tukuy",
  "image": "https://mujerestukuy.com/images/logo-mujeres-tukuy.jpg",
  "description": "Mentoría y estrategia para mujeres emprendedoras con propósito",
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "La Paz",
    "addressRegion": "La Paz",
    "addressCountry": "BO"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": -17.3895,
    "longitude": -66.1568
  },
  "url": "https://mujerestukuy.com",
  "telephone": "+591XXXXXXXX",
  "email": "contacto@mujerestukuy.com",
  "openingHours": "Mo-Fr 09:00-18:00",
  "priceRange": "$$"
}
```

---

## 📈 Content Marketing SEO

### Blog/Resource Topics (Future)
1. **"Cómo ordenar tu negocio en 30 días"** - Long-tail keyword targeting
2. **"Mentalidad emprendedora femenina"** - Thought leadership
3. **"Equilibrio vida-trabajo para madres emprendedoras"** - Niche targeting
4. **"Transformación personal en la menopausia"** - Service-specific content

### Internal Linking Strategy
```javascript
// Strategic internal links
const internalLinkMap = {
  home: [
    { anchor: "mentoría integral", url: "/servicios/mujer-tukuy-con-rumbo" },
    { anchor: "círculos de transformación", url: "/servicios/tukuy-renace" },
    { anchor: "conoce mi historia", url: "/sobre-mi" }
  ],
  services: [
    { anchor: "agenda tu consulta", url: "/contacto" },
    { anchor: "lee testimonios reales", url: "/testimonios" }
  ]
};
```

---

## 🎯 Conversion Optimization

### CTA Optimization
- **Primary CTA:** "Agenda tu Sesión de Diagnóstico" (high intent)
- **Secondary CTA:** "Descargar Brochure Gratuito" (lead magnet)
- **Persistent CTA:** WhatsApp floating button (immediate contact)

### Landing Page Optimization
```html
<!-- Service-specific landing page elements -->
<h1>Mujer Tukuy con Rumbo – Mentoría para Emprendedoras</h1>
<h2>¿Sientes que tu negocio necesita más orden y dirección?</h2>

<!-- Problem/Solution framework -->
<section class="problem-agitation">
  <h3>Si te identificas con alguna de estas situaciones:</h3>
  <ul>
    <li>Tu negocio funciona pero sientes que le falta estructura</li>
    <li>Tienes ideas claras pero no sabes cómo ejecutarlas</li>
    <li>Te sientes abrumada entre el trabajo y la vida personal</li>
  </ul>
</section>

<section class="solution">
  <h3>Entonces este programa es para ti</h3>
  <!-- Solution content -->
</section>
```

---