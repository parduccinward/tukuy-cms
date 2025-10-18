# Privacy & Security

Data handling and security measures for Mujeres Tukuy website.

---

## 🔐 Security Measures

### HTTPS Enforcement
- SSL certificate provided by Vercel
- All traffic automatically redirected to HTTPS
- Secure headers configured by default

### Form Security
```javascript
// Basic spam protection
const honeypot = document.querySelector('input[name="website"]');
if (honeypot && honeypot.value !== '') {
  // Block submission - likely spam
  return false;
}
```

### Input Validation
```javascript
// Contact form validation
export function validateForm(data) {
  const errors = {};
  
  if (!data.name || data.name.length < 2) {
    errors.name = 'Nombre requerido';
  }
  
  if (!data.email || !isValidEmail(data.email)) {
    errors.email = 'Email válido requerido';
  }
  
  if (!data.message || data.message.length < 10) {
    errors.message = 'Mensaje debe tener al menos 10 caracteres';
  }
  
  return errors;
}
```

### Rate Limiting
- Vercel Edge Functions provide basic rate limiting
- Additional protection via form submission delays
- Honeypot fields to catch bots

---

## 🛡️ Data Protection

### Data Collection
**Collected Information:**
- Name (required)
- Email address (required)  
- WhatsApp number (optional)
- Service interest (optional)
- Message content (required)

**Not Collected:**
- Passwords
- Payment information
- Browsing behavior (beyond basic analytics)
- Personal identification documents

### Data Storage
- **No database** - emails sent directly via Resend API
- **No persistent storage** of form submissions
- **Temporary processing** only during email delivery
- **No user accounts** or login systems

### Data Processing
```javascript
// app/api/contact/route.ts
export async function POST(request) {
  const data = await request.json();
  
  // Validate input
  const errors = validateForm(data);
  if (Object.keys(errors).length > 0) {
    return NextResponse.json({ errors }, { status: 400 });
  }
  
  // Send email immediately
  await sendEmail(data);
  
  // No data stored after this point
  return NextResponse.json({ success: true });
}
```

---

## 📊 Analytics Privacy

### Google Analytics 4
```javascript
// Anonymized tracking
gtag('config', 'GA_MEASUREMENT_ID', {
  anonymize_ip: true,
  respect_user_privacy: true,
  send_page_view: false // Manual page view tracking
});
```

### Meta Pixel
```javascript
// Privacy-compliant tracking
fbq('init', 'PIXEL_ID', {
  external_id: false, // No personal identifiers
  em: false, // No email hashing
  ph: false  // No phone hashing
});
```

### Consent Management
```javascript
// Simple consent banner
function initAnalytics() {
  const consent = localStorage.getItem('analytics_consent');
  
  if (consent === 'accepted') {
    loadGA4();
    loadMetaPixel();
  }
}
```

---

## 🌐 Third-Party Services

### Resend (Email)
- **Purpose:** Contact form email delivery
- **Data shared:** Form submission content only
- **Retention:** As per Resend's policy
- **Location:** US servers

### Calendly (Booking)
- **Purpose:** Session scheduling
- **Data shared:** None from our site (direct redirect)
- **User interaction:** Direct with Calendly platform
- **Privacy:** Governed by Calendly's privacy policy

### Vercel (Hosting)
- **Purpose:** Website hosting and deployment
- **Data processed:** Standard web server logs
- **Retention:** 30 days for logs
- **Location:** Global CDN

---

## 🔒 Environment Variables

### Production Configuration
```bash
# Required for email functionality
RESEND_API_KEY=your_api_key_here

# Analytics (optional)
NEXT_PUBLIC_GA4_ID=G-XXXXXXXXXX
NEXT_PUBLIC_FB_PIXEL_ID=XXXXXXXXXXXXXX

# Contact integration
NEXT_PUBLIC_WA_NUMBER=5917XXXXXXXX
```

### Development Security
- Environment variables never committed to Git
- `.env.local` added to `.gitignore`
- API keys restricted by domain in production

---

## ⚖️ Legal Compliance

### GDPR Considerations
- **Lawful basis:** Legitimate interest for business communication
- **Data minimization:** Only collect necessary information
- **Purpose limitation:** Email used only for inquiry response
- **Right to erasure:** No persistent storage to delete

### Cookie Policy
```html
<!-- Simple cookie notice -->
<div class="cookie-banner">
  <p>Este sitio usa cookies para analytics. Al continuar, aceptas su uso.</p>
  <button onclick="acceptCookies()">Aceptar</button>
</div>
```

### Terms of Service
Basic terms covering:
- Website usage
- Contact form submission
- Intellectual property
- Limitation of liability

---

## 🚨 Incident Response

### Security Issues
1. **Identify** the security concern
2. **Isolate** affected systems (disable forms if needed)
3. **Investigate** scope and impact
4. **Remediate** the vulnerability
5. **Monitor** for additional issues

### Data Breach Protocol
1. **Assess** if personal data is involved
2. **Contain** the breach immediately
3. **Notify** relevant parties within 72 hours
4. **Document** the incident and response
5. **Review** and improve security measures

### Contact for Security Issues
**Email:** security@mujerestukuy.com  
**Response time:** Within 24 hours  
**Escalation:** Technical lead and business owner

---

**Last Updated:** October 2025  