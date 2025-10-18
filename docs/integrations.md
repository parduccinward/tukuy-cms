# Integrations - MVP

Essential third-party services for Mujeres Tukuy website.

---

## 📧 Contact Form (Resend)

### Setup
```bash
npm install resend
```

### Email API
```typescript
// app/api/contact/route.ts
import { NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  const { name, email, message } = await request.json();

  if (!name || !email || !message) {
    return NextResponse.json({ error: 'Missing fields' }, { status: 400 });
  }

  await resend.emails.send({
    from: 'Tukuy <no-reply@mujerestukuy.com>',
    to: 'contacto@mujerestukuy.com',
    subject: `Consulta de ${name}`,
    html: `
      <h3>Nueva consulta</h3>
      <p><b>Nombre:</b> ${name}</p>
      <p><b>Email:</b> ${email}</p>
      <p><b>Mensaje:</b> ${message}</p>
    `
  });

  return NextResponse.json({ success: true });
}
```

---

## 📅 Calendly (Booking)

Simple button that links to Calendly:

```jsx
// components/CalendlyButton.jsx
export function CalendlyButton() {
  return (
    <a
      href={process.env.NEXT_PUBLIC_CALENDLY_URL}
      target="_blank"
      rel="noopener noreferrer"
      className="btn-primary"
    >
      Agenda tu Sesión
    </a>
  );
}
```

---

## 💬 WhatsApp

Floating button for direct messaging:

```jsx
// components/WhatsAppButton.jsx
export function WhatsAppButton() {
  const waUrl = `https://wa.me/${process.env.NEXT_PUBLIC_WA_NUMBER}`;
  
  return (
    <a
      href={waUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="whatsapp-float"
    >
      💬
    </a>
  );
}
```

---

## 📊 Google Analytics (Optional)

Basic GA4 setup:

```html
<!-- app/layout.tsx -->
<Script
  src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA4_ID}`}
  strategy="afterInteractive"
/>
<Script id="ga4" strategy="afterInteractive">
  {`
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
    gtag('config', '${process.env.NEXT_PUBLIC_GA4_ID}');
  `}
</Script>
```

---

## ⚙️ Environment Variables

```bash
# .env.local
RESEND_API_KEY=your_resend_key
NEXT_PUBLIC_GA4_ID=G-XXXXXXXXXX
NEXT_PUBLIC_WA_NUMBER=5917XXXXXXXX
NEXT_PUBLIC_CALENDLY_URL=https://calendly.com/jane_blacutt/diagnostico
```

**MVP Priority:** Contact form > WhatsApp > Calendly > Analytics
