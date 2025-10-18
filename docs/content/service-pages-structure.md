# Service Pages Content Structure

Detailed content structure, methodologies, and implementation guidelines for all three service pages based on Spanish specifications.

---

## 🎯 Service Page Framework

### Universal Service Page Structure
Each service page follows this consistent framework:

1. **Hero Section** - Service name, compelling subtitle, brief description
2. **Problem/Solution** - Target audience pain points and service benefits  
3. **Methodology** - Step-by-step process or framework
4. **Modalities** - Available formats (grupal/individual)
5. **Expected Outcomes** - Clear results and transformations
6. **Testimonials** - Service-specific social proof
7. **Call-to-Action** - Primary conversion element

---

## 🌸 Mujer Tukuy con Rumbo

### Target Audience
- **Primary:** Emprendedoras established but disorganized
- **Secondary:** Real estate agents seeking structure  
- **Tertiary:** Women in career transition

### Page Content Structure

#### Hero Section
```html
<section class="service-hero">
  <h1>Mujer Tukuy con Rumbo</h1>
  <h2 class="subtitle">Deja de improvisar y construye una vida y un negocio con propósito</h2>
  
  <div class="hero-description">
    <p><strong>Mentoría para ordenar tu negocio, fortalecer tu mentalidad y reconectar con tu propósito.</strong></p>
    <p>Para emprendedoras, agentes inmobiliarias y mujeres en transición que quieren avanzar con claridad y equilibrio.</p>
  </div>

  <div class="hero-ctas">
    <a href="/contacto?servicio=mujer-tukuy-con-rumbo" class="cta-primary">
      Reserva tu diagnóstico gratuito
    </a>
    <a href="#methodology" class="cta-secondary">
      Conoce la metodología
    </a>
  </div>
</section>
```

#### Problem Identification
```html
<section class="problem-section">
  <h3>¿Te identificas con alguna de estas situaciones?</h3>
  
  <div class="problem-grid">
    <div class="problem-card">
      <h4>Desorganización</h4>
      <p>Tu negocio funciona, pero sientes que le falta estructura y claridad en los procesos.</p>
    </div>
    
    <div class="problem-card">
      <h4>Falta de Dirección</h4>
      <p>Tienes ideas y objetivos, pero no sabes cómo ejecutarlos de manera efectiva.</p>
    </div>
    
    <div class="problem-card">
      <h4>Desequilibrio</h4>
      <p>Te sientes abrumada tratando de balancear el trabajo, la familia y el crecimiento personal.</p>
    </div>
    
    <div class="problem-card">
      <h4>Mentalidad Limitante</h4>
      <p>Dudas de tus capacidades y te bloqueas ante decisiones importantes.</p>
    </div>
  </div>
</section>
```

#### Methodology Section
```html
<section id="methodology" class="methodology-section">
  <h3>Metodología: 4 Pasos de Transformación</h3>
  
  <div class="methodology-steps">
    <div class="step">
      <div class="step-number">1</div>
      <div class="step-content">
        <h4>Encender tu grandiosidad</h4>
        <p>Reconectas con tu propósito y visión. Identificas tus fortalezas únicas y el impacto que quieres generar en el mundo.</p>
        <ul>
          <li>Clarificación de valores y propósito personal</li>
          <li>Identificación de fortalezas y talentos naturales</li>
          <li>Definición de visión a largo plazo</li>
        </ul>
      </div>
    </div>

    <div class="step">
      <div class="step-number">2</div>
      <div class="step-content">
        <h4>Entrar al bosque oscuro</h4>
        <p>Enfrentas y transformas las creencias limitantes que te frenan. Trabajamos los miedos y patrones que sabotean tu crecimiento.</p>
        <ul>
          <li>Identificación de creencias limitantes</li>
          <li>Trabajo emocional y mental</li>
          <li>Desarrollo de herramientas de autorregulación</li>
        </ul>
      </div>
    </div>

    <div class="step">
      <div class="step-number">3</div>
      <div class="step-content">
        <h4>Descubrir tu luz</h4>
        <p>Fortaleces tu confianza y desarrollas una mentalidad empoderada. Aprendes a tomar decisiones desde tu sabiduría interior.</p>
        <ul>
          <li>Construcción de autoestima y confianza</li>
          <li>Desarrollo de liderazgo personal</li>
          <li>Práctica de toma de decisiones conscientes</li>
        </ul>
      </div>
    </div>

    <div class="step">
      <div class="step-number">4</div>
      <div class="step-content">
        <h4>Diseñar tu plan transformador</h4>
        <p>Creas estrategias claras y sistemas ordenados para tu negocio. Estableces rutinas que sostienen tu crecimiento integral.</p>
        <ul>
          <li>Planificación estratégica del negocio</li>
          <li>Creación de sistemas y procesos</li>
          <li>Diseño de rutinas de equilibrio vida-trabajo</li>
        </ul>
      </div>
    </div>
  </div>
</section>
```

#### Modalities & Investment
```html
<section class="modalities-section">
  <h3>Modalidades Disponibles</h3>
  
  <div class="modality-cards">
    <div class="modality-card">
      <h4>Programa Grupal</h4>
      <div class="modality-details">
        <p><strong>Duración:</strong> 9 semanas</p>
        <p><strong>Formato:</strong> Encuentros grupales semanales</p>
        <p><strong>Incluye:</strong></p>
        <ul>
          <li>9 sesiones grupales de 2 horas</li>
          <li>Workbook completo con ejercicios</li>
          <li>Acceso a comunidad privada</li>
          <li>2 sesiones individuales de seguimiento</li>
        </ul>
        <p><strong>Ideal para:</strong> Mujeres que valoran el aprendizaje comunitario y la contención grupal</p>
      </div>
    </div>
    
    <div class="modality-card featured">
      <h4>Mentoría Individual</h4>
      <div class="modality-details">
        <p><strong>Duración:</strong> Personalizada (3-6 meses)</p>
        <p><strong>Formato:</strong> Sesiones 1:1 intensivas</p>
        <p><strong>Incluye:</strong></p>
        <ul>
          <li>Diagnóstico completo personalizado</li>
          <li>Plan estratégico diseñado específicamente</li>
          <li>Sesiones semanales/quincenales</li>
          <li>Soporte vía WhatsApp entre sesiones</li>
          <li>Recursos y herramientas exclusivas</li>
        </ul>
        <p><strong>Ideal para:</strong> Emprendedoras con necesidades específicas y agenda flexible</p>
      </div>
    </div>
  </div>
</section>
```

#### Expected Outcomes
```html
<section class="outcomes-section">
  <h3>Al finalizar el programa tendrás:</h3>
  
  <div class="outcomes-grid">
    <div class="outcome-item">
      <div class="outcome-icon">🎯</div>
      <h4>Visión y propósito claros</h4>
      <p>Sabrás exactamente hacia dónde vas y por qué. Tu negocio tendrá un north star que guía todas tus decisiones.</p>
    </div>
    
    <div class="outcome-item">
      <div class="outcome-icon">🏗️</div>
      <h4>Estructura y estrategia definida</h4>
      <p>Sistemas organizados, procesos claros y un plan de acción que puedes ejecutar paso a paso.</p>
    </div>
    
    <div class="outcome-item">
      <div class="outcome-icon">💪</div>
      <h4>Confianza y mentalidad fortalecida</h4>
      <p>Herramientas para gestionar dudas, miedos y limitaciones. Liderazgo desde tu autenticidad.</p>
    </div>
    
    <div class="outcome-item">
      <div class="outcome-icon">⚖️</div>
      <h4>Equilibrio vida-trabajo</h4>
      <p>Rutinas sostenibles que te permiten crecer profesionalmente sin sacrificar tu bienestar personal.</p>
    </div>
  </div>
</section>
```

---

## 🌷 Tukuy Renace

### Target Audience  
- **Primary:** Women in menopause seeking support
- **Secondary:** Women with empty nest syndrome
- **Tertiary:** Women processing grief or major life transitions

### Page Content Structure

#### Hero Section
```html
<section class="service-hero renace">
  <h1>Tukuy Renace</h1>
  <h2 class="subtitle">Círculos y mentorías para sanar, reinventarte y reconectar con tu poder interior</h2>
  
  <div class="hero-description">
    <p><strong>Espacios sagrados de transformación para mujeres en momentos de transición.</strong></p>
    <p>Para mujeres en menopausia, nido vacío, duelo o procesos de reinvención que buscan acompañamiento consciente y amoroso.</p>
  </div>
</section>
```

#### Transition Moments
```html
<section class="transitions-section">
  <h3>Momentos de Transición que Acompañamos</h3>
  
  <div class="transitions-grid">
    <div class="transition-card">
      <h4>Menopausia Consciente</h4>
      <p>Un proceso de transformación física, emocional y espiritual. Te acompañamos a vivirlo desde la sabiduría y el auto-amor.</p>
    </div>
    
    <div class="transition-card">
      <h4>Nido Vacío</h4>
      <p>Cuando los hijos crecen y se independizan. Momento de reconectar contigo misma y redescubrir tu identidad más allá de la maternidad.</p>
    </div>
    
    <div class="transition-card">
      <h4>Duelo y Pérdidas</h4>
      <p>Acompañamiento en procesos de duelo por pérdidas significativas. Sanación emocional con contención y herramientas.</p>
    </div>
    
    <div class="transition-card">
      <h4>Reinvención Personal</h4>
      <p>Momentos de cuestionamiento y búsqueda de nuevo sentido. Apoyo para soltar lo que ya no sirve y abrazar lo nuevo.</p>
    </div>
  </div>
</section>
```

#### Circle Methodology
```html
<section class="circle-methodology">
  <h3>La Medicina del Círculo Femenino</h3>
  
  <div class="methodology-content">
    <p>Trabajamos desde la ancestral sabiduría de los círculos de mujeres, espacios donde se honra la feminidad cíclica y se sostienen los procesos de transformación.</p>
    
    <div class="circle-elements">
      <div class="element">
        <h4>Palabra Sagrada</h4>
        <p>Cada mujer tiene espacio para ser escuchada sin juicio. La palabra tiene poder sanador cuando es sostenida en comunidad.</p>
      </div>
      
      <div class="element">
        <h4>Rituales de Paso</h4>
        <p>Ceremonias conscientes que honran las transiciones y facilitan la integración de los cambios.</p>
      </div>
      
      <div class="element">
        <h4>Sabiduría Ancestral</h4>
        <p>Conectamos con la sabiduría femenina ancestral y los ciclos naturales para encontrar guía interior.</p>
      </div>
      
      <div class="element">
        <h4>Herramientas Integradoras</h4>
        <p>Meditación, escritura consciente, trabajo corporal y técnicas de liberación emocional.</p>
      </div>
    </div>
  </div>
</section>
```

#### Upcoming Program
```html
<section class="upcoming-program">
  <div class="program-announcement">
    <h3>Próximo Lanzamiento: Menopausia Consciente</h3>
    <p>Un programa especial de 8 semanas para acompañar a mujeres en su proceso de menopausia desde una perspectiva integral y consciente.</p>
    
    <div class="program-highlights">
      <ul>
        <li>Comprensión de los cambios físicos y emocionales</li>
        <li>Herramientas naturales para síntomas</li>
        <li>Exploración de la sexualidad en esta nueva etapa</li>
        <li>Nutrición y cuidado corporal consciente</li>
        <li>Desarrollo de la sabiduría de la mujer madura</li>
      </ul>
    </div>
    
    <a href="/contacto?servicio=menopausia-consciente" class="cta-primary">
      Anótate a la lista de espera
    </a>
  </div>
</section>
```

---

## 🌿 Tukuy Experiencias

### Target Audience
- **Primary:** Corporate HR departments and wellness coordinators
- **Secondary:** Women's organizations and groups
- **Tertiary:** Retreat centers and event organizers

### Page Content Structure

#### Hero Section
```html
<section class="service-hero experiencias">
  <h1>Tukuy Experiencias</h1>
  <h2 class="subtitle">Diseño y coordinación de eventos con propósito para organizaciones</h2>
  
  <div class="hero-description">
    <p><strong>Talleres, charlas y retiros transformadores que integran propósito, bienestar y conexión humana.</strong></p>
    <p>Experiencias diseñadas para organizaciones que valoran el desarrollo integral de sus colaboradoras y la construcción de cultura consciente.</p>
  </div>
</section>
```

#### Service Offering Types
```html
<section class="experience-types">
  <h3>Tipos de Experiencias</h3>
  
  <div class="experience-grid">
    <div class="experience-card">
      <h4>Talleres Corporativos</h4>
      <div class="experience-content">
        <p>Programas para equipos de trabajo enfocados en liderazgo consciente, comunicación asertiva y bienestar laboral.</p>
        <ul>
          <li>Liderazgo femenino consciente</li>
          <li>Inteligencia emocional en el trabajo</li>
          <li>Equilibrio vida-trabajo</li>
          <li>Comunicación no violenta</li>
        </ul>
      </div>
    </div>
    
    <div class="experience-card">
      <h4>Charlas Inspiracionales</h4>
      <div class="experience-content">
        <p>Conferencias motivacionales sobre emprendimiento femenino, transformación personal y liderazgo con propósito.</p>
        <ul>
          <li>Emprendimiento con propósito</li>
          <li>Reinvención en la vida adulta</li>
          <li>Sabiduría femenina en el liderazgo</li>
          <li>Construcción de negocios conscientes</li>
        </ul>
      </div>
    </div>
    
    <div class="experience-card">
      <h4>Retiros de Transformación</h4>
      <div class="experience-content">
        <p>Experiencias inmersivas de 1-3 días para profundización personal y conexión grupal en entornos naturales.</p>
        <ul>
          <li>Retiros de liderazgo femenino</li>
          <li>Círculos de sanación y propósito</li>
          <li>Experiencias de team building consciente</li>
          <li>Ceremonias de transición y celebración</li>
        </ul>
      </div>
    </div>
  </div>
</section>
```

#### Methodology & Approach
```html
<section class="approach-section">
  <h3>Nuestro Enfoque Integral</h3>
  
  <div class="approach-pillars">
    <div class="pillar">
      <h4>🎯 Propósito Claro</h4>
      <p>Cada experiencia está diseñada con intención específica y objetivos claros de transformación personal y grupal.</p>
    </div>
    
    <div class="pillar">
      <h4>💝 Logística Completa</h4>
      <p>Nos encargamos de todos los detalles: coordinación, materiales, ambientación y seguimiento post-evento.</p>
    </div>
    
    <div class="pillar">
      <h4>🤲 Facilitación Experta</h4>
      <p>Conducción profesional que combina técnicas de coaching, dinámicas grupales y herramientas de transformación.</p>
    </div>
    
    <div class="pillar">
      <h4>❤️ Contención Emocional</h4>
      <p>Espacios seguros donde las participantes pueden explorar, expresarse y crecer con acompañamiento consciente.</p>
    </div>
  </div>
</section>
```

#### Format Options
```html
<section class="format-options">
  <h3>Modalidades de Servicio</h3>
  
  <div class="format-cards">
    <div class="format-card">
      <h4>Medio Día</h4>
      <p><strong>Duración:</strong> 4 horas</p>
      <p><strong>Ideal para:</strong> Talleres temáticos específicos, charlas con actividades prácticas</p>
      <p><strong>Formato:</strong> 1 facilitadora + materiales básicos</p>
    </div>
    
    <div class="format-card">
      <h4>Jornada Completa</h4>
      <p><strong>Duración:</strong> 8 horas</p>
      <p><strong>Ideal para:</strong> Experiencias transformacionales, team building profundo</p>
      <p><strong>Formato:</strong> Facilitación + logística completa + catering consciente</p>
    </div>
    
    <div class="format-card">
      <h4>Diseño Personalizado</h4>
      <p><strong>Duración:</strong> Según necesidad</p>
      <p><strong>Ideal para:</strong> Programas corporativos específicos, retiros multi-día</p>
      <p><strong>Formato:</strong> Consultoría + diseño + ejecución integral</p>
    </div>
  </div>
</section>
```

---

## 🎨 Implementation Guidelines

### Component Structure
Each service page should be built with reusable React components:

```typescript
// Service page component structure
interface ServicePageProps {
  service: 'rumbo' | 'renace' | 'experiencias';
}

// Components needed:
- ServiceHero
- ProblemSection  
- MethodologySection
- ModalitiesSection
- OutcomesSection
- TestimonialsCarousel
- CTASection
- ServiceNavigation
```

### Content Management
```typescript
// Service content schema
interface ServiceContent {
  slug: string;
  title: string;
  subtitle: string;
  description: string;
  targetAudience: string[];
  methodology: MethodologyStep[];
  modalities: Modality[];
  outcomes: Outcome[];
  testimonials: Testimonial[];
  cta: CTAConfig;
}
```

### SEO Integration
Each service page implements:
- Service-specific schema markup
- Optimized meta descriptions  
- Internal linking between services
- Related service suggestions
- FAQ sections (future enhancement)

---