# Mujeres Tukuy Design System

Visual guidelines for the mentorship website.

---

## 🎨 Colors

```css
:root {
  --primary: #4A3E8E;     /* Purple - main buttons */
  --accent: #E0A424;      /* Gold - highlights */
  --green: #25D366;       /* WhatsApp green */
  --ivory: #F8E8D0;       /* Background sections */
  --gray: #6B7280;        /* Text, borders */
}
```

**Usage:**
- **Purple** → Primary buttons, headers
- **Gold** → Quote marks, success states  
- **Green** → WhatsApp button
- **Ivory** → Section backgrounds, cards
- **Gray** → Body text, form borders

---

## 🔤 Typography

```html
<link href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;600&family=Montserrat:wght@400;600&display=swap" rel="stylesheet">
```

**Fonts:**
- **Playfair Display** → All headings (H1, H2, H3)
- **Montserrat** → Body text, buttons, forms

**Sizes:**
- H1: 48px (mobile: 36px)
- H2: 36px (mobile: 28px)  
- H3: 24px
- Body: 16px
- Small: 14px

---

## 🧩 Components

### Primary Button
```css
.btn-primary {
  background: #4A3E8E;
  color: white;
  padding: 1rem 2rem;
  border-radius: 0.5rem;
  font-weight: 600;
  border: none;
  cursor: pointer;
}

.btn-primary:hover {
  background: #3A2F71;
}
```

### Service Card
```css
.service-card {
  background: white;
  padding: 2rem;
  border-radius: 1rem;
  box-shadow: 0 2px 8px rgba(0,0,0,0.1);
  border: 1px solid #E5E7EB;
}

.service-card:hover {
  transform: translateY(-2px);
  box-shadow: 0 4px 16px rgba(74, 62, 142, 0.15);
}
```

### Contact Form
```css
.form-input {
  width: 100%;
  padding: 1rem;
  border: 2px solid #D1D5DB;
  border-radius: 0.5rem;
  font-size: 1rem;
}

.form-input:focus {
  outline: none;
  border-color: #4A3E8E;
}
```

### WhatsApp Button
```css
.whatsapp-float {
  position: fixed;
  bottom: 2rem;
  right: 2rem;
  width: 60px;
  height: 60px;
  background: #25D366;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 4px 12px rgba(0,0,0,0.2);
  z-index: 1000;
}
```

---

## 📐 Spacing

Standard spacing values:
- **Small:** 1rem (16px) 
- **Medium:** 2rem (32px)
- **Large:** 4rem (64px)

**Application:**
- Card padding: Medium
- Section margins: Large  
- Element gaps: Small

---

## 📱 Mobile

```css
@media (max-width: 768px) {
  .container { padding: 0 1rem; }
  h1 { font-size: 2.25rem; }
  h2 { font-size: 1.75rem; }
  .service-card { padding: 1.5rem; }
}
```

Minimum touch target: 44px height for buttons and links.

---

## 🎯 CTAs

### Primary CTA
```html
<a href="https://calendly.com/jane_blacutt/diagnostico" class="btn-primary">
  Agenda tu Sesión de Diagnóstico
</a>
```

### Secondary CTA
```html
<a href="/docs/brochure.pdf" download class="btn-secondary">
  Descargar Brochure
</a>
```

### WhatsApp
```html
<a href="https://wa.me/5917XXXXXXX" class="whatsapp-float" aria-label="WhatsApp">
  💬
</a>
```
