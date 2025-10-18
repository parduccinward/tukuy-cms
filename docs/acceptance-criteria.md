# Acceptance Criteria - MVP Release

Definition of "done" for Mujeres Tukuy website MVP launch.

---

## 🎯 Release Criteria Overview

The MVP must meet ALL criteria in the following categories before production deployment:
- ✅ Functional Requirements
- ✅ Content Requirements  
- ✅ Technical Requirements
- ✅ Performance Requirements
- ✅ SEO Requirements
- ✅ Security Requirements
- ✅ Browser Compatibility
- ✅ Business Requirements

---

## 1️⃣ Functional Requirements

### Core User Flows
- [ ] Homepage loads and displays all sections correctly
- [ ] All navigation links work (desktop and mobile)
- [ ] Mobile menu opens and closes properly
- [ ] Contact form accepts input and validates fields
- [ ] Form submission redirects to `/gracias` thank you page
- [ ] Email delivered to `contacto@mujerestukuy.com` within 2 minutes of submission
- [ ] Calendly button opens correct booking page in new tab
- [ ] WhatsApp floating button opens chat with correct number (+591XXXXXXXXX)
- [ ] PDF brochure downloads successfully when clicked
- [ ] All internal links navigate to correct pages
- [ ] 404 page displays for non-existent routes

### Service Pages
- [ ] `/servicios/mujer-tukuy-con-rumbo` displays complete content
- [ ] `/servicios/tukuy-renace` displays complete content
- [ ] `/servicios/tukuy-experiencias` displays complete content
- [ ] All service pages show correct methodology (e.g., 4 steps for Rumbo)
- [ ] Service-specific CTAs link to contact form with pre-selected service

### Contact Form Validation
- [ ] Empty required fields show error messages
- [ ] Invalid email format shows error message
- [ ] Service selection dropdown works correctly
- [ ] Modality field appears conditionally (for Rumbo and Renace services)
- [ ] WhatsApp field accepts phone number format
- [ ] Form prevents duplicate rapid submissions
- [ ] Honeypot field catches bot submissions
- [ ] Success message displays after successful submission

---

## 2️⃣ Content Requirements

### Spanish Copy
- [ ] All text matches approved Spanish content specifications
- [ ] No placeholder text (Lorem ipsum) on any page
- [ ] No English text except in code/technical areas
- [ ] Brand tagline appears: "Cuando una mujer se abraza a sí misma, el mundo florece con ella."
- [ ] All service descriptions match `docs/content/content-specifications.md`

### Images & Media
- [ ] All images optimized and in WebP format
- [ ] Hero image displays correctly on all devices
- [ ] Service page images load properly
- [ ] Janette's photo displays on About page
- [ ] No broken image links
- [ ] All images have descriptive alt text in Spanish
- [ ] PDF brochure (`Tukuy_Servicios_y_Guia_Visual.pdf`) uploaded and accessible

### Contact Information
- [ ] Email: `contacto@mujerestukuy.com` (correct and verified)
- [ ] WhatsApp: +591XXXXXXXXX (correct number, verified)
- [ ] Instagram: @jane_blacutt (link works)
- [ ] Calendly: Link opens correct booking page
- [ ] Location: Cochabamba or La Paz, Bolivia (as specified)

---

## 3️⃣ Technical Requirements

### Code Quality
- [ ] TypeScript compilation completes with **zero errors**
- [ ] `npm run build` succeeds without errors
- [ ] `npm run lint` passes with no errors
- [ ] No `console.log`, `console.error` in production code
- [ ] All `TODO` comments resolved or documented as known issues

### Environment Configuration
- [ ] All required environment variables defined in Vercel
- [ ] `.env.example` file present in repository
- [ ] No secrets committed to repository (`.env.local` in `.gitignore`)
- [ ] Environment variables validated in API routes
- [ ] Correct variables set for production environment:
  - `RESEND_API_KEY` (production key)
  - `NEXT_PUBLIC_GA4_ID` (if analytics enabled)
  - `NEXT_PUBLIC_FB_PIXEL_ID` (if Meta Pixel enabled)
  - `NEXT_PUBLIC_WA_NUMBER` (correct WhatsApp number)
  - `NEXT_PUBLIC_CALENDLY_URL` (correct booking link)

### API Routes
- [ ] `/api/contact` endpoint returns proper status codes
- [ ] Validation errors return 400 with descriptive messages
- [ ] Server errors return 500 with user-friendly messages
- [ ] Email sends successfully via Resend API
- [ ] Rate limiting prevents spam (max 3 submissions/hour per IP)
- [ ] Error responses in Spanish

### Build & Deployment
- [ ] Vercel deployment succeeds automatically on `main` push
- [ ] Build time < 2 minutes
- [ ] No build warnings (or all documented)
- [ ] Correct Next.js version (15.x)
- [ ] Dependencies up to date (no critical vulnerabilities)

---

## 4️⃣ Performance Requirements

### Lighthouse Scores (Production Build)
- [ ] **Performance:** ≥ 90
- [ ] **Accessibility:** ≥ 95
- [ ] **Best Practices:** ≥ 95
- [ ] **SEO:** ≥ 95

### Core Web Vitals
- [ ] **LCP (Largest Contentful Paint):** < 2.5s
- [ ] **FID (First Input Delay):** < 100ms
- [ ] **CLS (Cumulative Layout Shift):** < 0.1

### Bundle Sizes
- [ ] First Load JS: < 150KB (gzipped)
- [ ] Total page weight (homepage): < 1MB
- [ ] Hero image: < 150KB
- [ ] Service images: < 80KB each

### Loading Performance
- [ ] Images lazy-load below the fold
- [ ] Fonts load without FOIT (Flash of Invisible Text)
- [ ] No render-blocking resources
- [ ] Static pages pre-rendered at build time

---

## 5️⃣ SEO Requirements

### Meta Tags (All Pages)
- [ ] Unique `<title>` tag on every page (< 60 characters)
- [ ] Unique meta description on every page (< 160 characters)
- [ ] Open Graph tags present (`og:title`, `og:description`, `og:image`)
- [ ] Twitter Card tags present
- [ ] Canonical URLs set correctly
- [ ] Language tag: `<html lang="es">`

### Structured Data
- [ ] Schema.org LocalBusiness markup on homepage
- [ ] Schema.org Service markup on service pages
- [ ] Valid JSON-LD (test with Google Rich Results Test)

### Technical SEO
- [ ] `sitemap.xml` generated and accessible at `/sitemap.xml`
- [ ] `robots.txt` present and correctly configured at `/robots.txt`
- [ ] Clean URL structure (no query parameters for pages)
- [ ] All pages indexable (no `noindex` accidentally set)
- [ ] Proper heading hierarchy (H1 → H2 → H3) on all pages
- [ ] Internal links use descriptive anchor text

### Images
- [ ] All images have descriptive alt text in Spanish
- [ ] Image filenames descriptive (not IMG_1234.jpg)
- [ ] Open Graph image: 1200x630px (for social sharing)

---

## 6️⃣ Security Requirements

### Authentication & Authorization
- [ ] No authentication required (public site)
- [ ] No user accounts or login system
- [ ] No sensitive data stored

### Data Protection
- [ ] API keys not exposed in client-side code
- [ ] Environment variables not committed to repository
- [ ] HTTPS enforced (automatic via Vercel)
- [ ] No API keys in browser DevTools/Network tab

### Form Security
- [ ] Input validation on all form fields (client and server)
- [ ] Honeypot field prevents simple bots
- [ ] Rate limiting prevents abuse (3 submissions/hour per IP)
- [ ] No SQL injection risk (no database)
- [ ] No XSS vulnerabilities (React escapes by default)
- [ ] Email content sanitized before sending

### Headers & Policies
- [ ] Security headers set (automatic via Vercel)
- [ ] Content Security Policy configured (if needed)
- [ ] CORS not overly permissive

---

## 7️⃣ Browser Compatibility

### Desktop Browsers (Latest Versions)
- [ ] **Chrome/Edge:** Full functionality
- [ ] **Safari:** Full functionality
- [ ] **Firefox:** Full functionality

### Mobile Browsers
- [ ] **Mobile Safari (iOS 14+):** Full functionality
- [ ] **Mobile Chrome (Android 10+):** Full functionality

### Responsive Design
- [ ] **Desktop:** 1920x1080, 1366x768 tested
- [ ] **Tablet:** iPad (768x1024) tested
- [ ] **Mobile:** iPhone SE (375x667), iPhone 12+ (390x844) tested
- [ ] All text readable without zooming
- [ ] Touch targets minimum 44x44px
- [ ] Horizontal scrolling not required

### Critical Functionality per Browser
- [ ] Contact form submits successfully
- [ ] Mobile menu opens/closes
- [ ] Images display correctly
- [ ] CTAs clickable and work
- [ ] WhatsApp button opens app/web WhatsApp

---

## 8️⃣ Accessibility Requirements (WCAG AA)

### Color & Contrast
- [ ] Text contrast ratio ≥ 4.5:1 (normal text)
- [ ] Text contrast ratio ≥ 3:1 (large text)
- [ ] Primary purple (#4A3E8E) on white meets contrast requirements
- [ ] Form error states have sufficient contrast

### Keyboard Navigation
- [ ] All interactive elements focusable via Tab key
- [ ] Focus indicators visible on all elements
- [ ] Modal dialogs trap focus (if any)
- [ ] "Skip to main content" link provided
- [ ] No keyboard traps

### Forms
- [ ] All inputs have associated `<label>` elements
- [ ] Required fields marked with `aria-required="true"`
- [ ] Error messages announced to screen readers
- [ ] Error messages linked to form fields
- [ ] Success messages announced

### Images & Media
- [ ] All content images have descriptive alt text
- [ ] Decorative images use `alt=""`
- [ ] Logo has appropriate alt text
- [ ] No information conveyed by color alone

### Semantic HTML
- [ ] Proper heading hierarchy (H1 → H2 → H3)
- [ ] Landmarks used (`<header>`, `<nav>`, `<main>`, `<footer>`)
- [ ] Lists use `<ul>`, `<ol>` appropriately
- [ ] Buttons use `<button>`, links use `<a>`

---

## 9️⃣ Business Requirements

### Analytics & Tracking
- [ ] Google Analytics 4 installed (if opted in)
- [ ] GA4 tracking ID verified in Vercel environment variables
- [ ] Conversion events tracked:
  - `calendly_click` - Diagnostic booking CTA clicked
  - `whatsapp_click` - WhatsApp button clicked
  - `form_submit` - Contact form submitted
  - `brochure_download` - PDF brochure downloaded
- [ ] Events visible in GA4 Real-Time report

### Client Access
- [ ] Client has access to Vercel project (viewer role minimum)
- [ ] Client can update environment variables independently
- [ ] Client receives email notifications for form submissions
- [ ] Client can access analytics dashboard (GA4)

### Documentation
- [ ] README.md up to date
- [ ] Deployment instructions complete
- [ ] Contact form integration documented
- [ ] How to update content (Phase 1 limitations noted)
- [ ] Known issues/limitations documented

### Legal (If Required)
- [ ] Privacy Policy page (if collecting analytics)
- [ ] Terms of Service page (if required by client)
- [ ] Cookie consent banner (if using tracking)

---

## ✅ Sign-Off Checklist

### Developer Certification
- [ ] All acceptance criteria above met
- [ ] Known issues documented in GitHub Issues
- [ ] Support documentation provided to client
- [ ] Deployment completed successfully
- [ ] Post-deployment verification completed

**Developer Name:** _______________________  
**Date:** _______________________  
**Signature:** _______________________

---

### Client Approval
- [ ] Content reviewed and approved on staging
- [ ] All functionality tested and approved
- [ ] Contact information verified (email, phone, links)
- [ ] Branding and design approved
- [ ] Ready for production launch

**Client Name:** Janette Blacutt  
**Date:** _______________________  
**Signature:** _______________________

---

## 📋 Post-Launch Monitoring (First 30 Days)

### Week 1
- [ ] Daily: Check for errors in Vercel dashboard
- [ ] Daily: Verify form submissions working
- [ ] Daily: Monitor spam rate

### Week 2-4
- [ ] Weekly: Review GA4 conversion rates
- [ ] Weekly: Check performance metrics
- [ ] Weekly: Monitor user feedback

### After 30 Days
- [ ] Assess if Phase 2 (CMS) needed based on content update frequency
- [ ] Review analytics and optimize conversion paths
- [ ] Plan any necessary improvements

---

## 🚫 Known Limitations (MVP)

**Acceptable for MVP Launch:**
- Content updates require code changes (no CMS)
- No blog/recursos section implemented yet
- Manual testimonial management
- No A/B testing capability
- No automated email sequences
- No payment processing (workshops)

**To Address in Phase 2:**
- Add CMS (Sanity.io) for content management
- Implement blog functionality
- Add testimonial management interface
- Payment integration (Stripe) for workshops

---

**Document Version:** 1.0  
**Last Updated:** October 18, 2025  
**Next Review:** After MVP launch
