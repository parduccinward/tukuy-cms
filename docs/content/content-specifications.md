# Content Specifications - Spanish Copy

Complete Spanish content blocks and copy specifications for all pages based on provided content strategy.

---

## 🏠 Home Page (`/`)

### Hero Section
```html
<h1>Mentoría, estrategia y propósito para mujeres emprendedoras</h1>
<p>Ordena tu negocio, fortalece tu mentalidad y transforma tu vida con conciencia.</p>
```

**Primary CTA:** "Reservar sesión de diagnóstico" → `/contacto`  
**Secondary CTA:** "Descargar brochure" → `/docs/Tukuy_Servicios_y_Guia_Visual.pdf`

### Services Overview Block
**Section Title:** "Servicios"

1. **Mujer Tukuy con Rumbo**
   - Description: "Mentoría para ordenar tu negocio con propósito."
   - Link: `/servicios/mujer-tukuy-con-rumbo`

2. **Tukuy Renace**  
   - Description: "Círculos y mentorías para transitar cambios con amor propio."
   - Link: `/servicios/tukuy-renace`

3. **Tukuy Experiencias**
   - Description: "Organización de eventos con propósito para organizaciones."
   - Link: `/servicios/tukuy-experiencias`

### About Preview Block
```html
<h2>Sobre Mí</h2>
<p>Soy Janette Blacutt – Mentora de Negocios Conscientes y Coach de Vida. Más de 20 años emprendiendo. Acompaño a mujeres a construir negocios sostenibles, ordenados y con sentido, integrando estrategia, mentalidad y propósito.</p>
```
**CTA:** "Conóceme" → `/sobre-mi`

### How We Work Section
```html
<h2>Cómo Trabajamos</h2>
<ol>
  <li>Diagnóstico y objetivos</li>
  <li>Plan claro (negocio + mentalidad)</li>
  <li>Acompañamiento y resultados</li>
</ol>
```

### Final CTA Section
```html
<blockquote>"Dentro de cada mujer habita todo lo necesario para transformarse."</blockquote>
```
**CTA:** "Reservar sesión" → `/contacto`

---

## 👤 About Page (`/sobre-mi`)

### Page Structure
- **H1:** "Sobre Janette Blacutt – Mujeres Tukuy"
- Professional photo prominently displayed
- Personal story and credentials
- Mission statement integration
- Brand quote: "Cuando una mujer se abraza a sí misma, el mundo florece con ella."

---

## 🌿 Services Landing (`/servicios`)

### Page Structure
- **H1:** "Servicios – Mujeres Tukuy"
- **Subtitle:** "Programas, mentorías y experiencias para ordenar tu negocio, fortalecer tu confianza y reconectarte con tu propósito."

### Service Cards
Three main service offerings with clear descriptions and links to detail pages.

---

## 🌸 Service Detail Pages

### Mujer Tukuy con Rumbo (`/servicios/mujer-tukuy-con-rumbo`)

```html
<h1>Mujer Tukuy con Rumbo</h1>
<h2>Deja de improvisar y construye una vida y un negocio con propósito.</h2>

<p><strong>Descripción:</strong> Mentoría para ordenar tu negocio, fortalecer tu mentalidad y reconectar con tu propósito. Para emprendedoras, agentes inmobiliarias y mujeres en transición.</p>

<h3>Modalidades:</h3>
<ul>
  <li>Grupal (9 semanas)</li>
  <li>Individual (personalizada)</li>
</ul>

<h3>Resultados:</h3>
<ul>
  <li>Visión y propósito claros</li>
  <li>Estructura y estrategia definida</li>
  <li>Confianza y mentalidad fortalecida</li>
  <li>Equilibrio vida-trabajo</li>
</ul>

<h3>Metodología (4 pasos):</h3>
<ol>
  <li>Encender tu grandiosidad</li>
  <li>Entrar al bosque oscuro</li>
  <li>Descubrir tu luz</li>
  <li>Diseñar tu plan transformador</li>
</ol>
```

**CTA:** "Reserva diagnóstico" → `/contacto`

### Tukuy Renace (`/servicios/tukuy-renace`)

```html
<h1>Tukuy Renace</h1>
<h2>Círculos y mentorías para sanar, reinventarte y reconectar con tu poder interior.</h2>

<p><strong>Descripción:</strong> Para mujeres en menopausia, nido vacío, duelo o reinvención. Coaching y bienestar emocional.</p>

<h3>Modalidades:</h3>
<ul>
  <li>Talleres/círculos grupales</li>
  <li>Mentoría individual</li>
</ul>

<p><strong>Próximo lanzamiento:</strong> Menopausia Consciente</p>
```

**Primary CTA:** "Anótate a la lista" (for upcoming launch)  
**Secondary CTA:** "Únete a un círculo" → `/contacto?servicio=renace`

### Tukuy Experiencias (`/servicios/tukuy-experiencias`)

```html
<h1>Tukuy Experiencias</h1>
<h2>Diseño y coordinación de eventos con propósito para organizaciones.</h2>

<p><strong>Descripción:</strong> Talleres, charlas y retiros transformadores. Logística + facilitación + contención emocional.</p>

<h3>Modalidades:</h3>
<ul>
  <li>Medio día</li>
  <li>Jornada completa</li>
  <li>A medida</li>
</ul>
```

**CTA:** "Solicita tu evento" → `/contacto?servicio=experiencias`

---

## 📞 Contact Page (`/contacto`)

### Page Structure
```html
<h1>Contacto – Mujeres Tukuy</h1>
<p class="intro">Cuéntame en qué etapa estás y cómo te gustaría avanzar.</p>
```

### Form Fields (Required)
- **Nombre** (text, required)
- **Email** (email, required)  
- **WhatsApp** (tel, optional)
- **Servicio de interés** (select, required)
  - Mujer Tukuy con Rumbo
  - Tukuy Renace
  - Tukuy Experiencias
  - Consulta general
- **Modalidad** (select, conditional)
  - Grupal
  - Individual
- **Mensaje** (textarea, required)

### CTAs
- **Primary:** "Enviar"
- **Alternative:** "WhatsApp directo" → `https://wa.me/+591[number]`

---

## 💬 Testimonials Page (`/testimonios`)

### Page Structure
- **H1:** "Testimonios – Mujeres Tukuy"
- **Subtitle:** "Historias reales de transformación, crecimiento y empoderamiento de mujeres acompañadas por Tukuy."
- Client testimonials with photos
- Success stories showcase
- Video testimonials (if available)

---

## 📚 Resources Page (`/recursos`)

### Page Structure
- **H1:** "Recursos – Mujeres Tukuy"
- **Subtitle:** "Artículos, guías y materiales para inspirarte a emprender con conciencia y equilibrio."
- Future content area for blog articles, guides, and downloadable resources

---

## 🙏 Thank You Page (`/gracias`)

```html
<h1>Gracias – Mujeres Tukuy</h1>
<p>Tu mensaje fue recibido con éxito. Muy pronto nos pondremos en contacto contigo para acompañarte en tu camino de transformación.</p>

<h2>Próximos pasos:</h2>
<ol>
  <li>Revisaremos tu consulta</li>
  <li>Te contactaremos en las próximas 24 horas</li>
  <li>Agendaremos tu sesión de diagnóstico</li>
</ol>

<h2>Mientras tanto:</h2>
<ul>
  <li><a href="/recursos">Explora nuestros recursos gratuitos</a></li>
  <li><a href="https://instagram.com/jane_blacutt">Síguenos en Instagram</a></li>
  <li><a href="https://wa.me/+591[number]">Escríbenos por WhatsApp</a></li>
</ul>
```

---

## 🦶 Footer Content

### Contact Information
```html
<p><strong>Email:</strong> contacto@mujerestukuy.com</p>
<p><strong>Instagram:</strong> @jane_blacutt</p>
<p><strong>WhatsApp:</strong> +591 [agregar número]</p>
<p><strong>Ubicación:</strong> La Paz – Bolivia</p>
```

### Brand Quote
```html
<blockquote>"Cuando una mujer se abraza a sí misma, el mundo florece con ella."</blockquote>
```

### Footer Links
- Inicio
- Sobre mí  
- Servicios
- Testimonios
- Contacto

---

## 🎨 Brand Voice & Tone

### Key Characteristics
- **Professional yet approachable**
- **Empowering and supportive**
- **Clear value propositions**
- **Action-oriented language**

### Key Phrases to Use
- "con propósito"
- "transforma tu vida"
- "ordena tu negocio"
- "fortalece tu mentalidad"
- "reconectar con tu poder interior"
- "construcción consciente"

### Avoid
- Overly technical jargon
- Aggressive sales language
- Generic business terminology
- Male-centric language patterns

---

## 📱 WhatsApp Integration

### Floating Button Text
"WhatsApp"

### Direct Links
- **General contact:** `https://wa.me/+591[number]?text=Hola, me interesa conocer más sobre los servicios de Mujeres Tukuy`
- **Diagnostic session:** `https://wa.me/+591[number]?text=Hola, me gustaría agendar una sesión de diagnóstico`
- **Service inquiry:** `https://wa.me/+591[number]?text=Hola, me interesa el servicio de [Service Name]`

---