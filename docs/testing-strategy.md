# Testing Strategy - MVP

Manual testing procedures and quality assurance for Mujeres Tukuy website MVP.

---

## 🎯 Testing Overview

**MVP Approach:** Manual testing with comprehensive checklists  
**Rationale:** Small scope, infrequent updates, cost-effective for MVP  
**Future:** Automated testing in Phase 2 (CMS implementation)

---

## 📋 Pre-Deployment Testing

### 1. Local Development Testing

Before pushing code, test locally:

```bash
# Start development server
npm run dev

# In separate terminal, run checks
npm run lint          # ESLint validation
npm run type-check    # TypeScript errors (if script exists)
npm run build         # Production build test
```

**Checklist:**
- [ ] No TypeScript errors
- [ ] No ESLint errors
- [ ] Build completes successfully
- [ ] No console warnings about missing environment variables

---

### 2. Manual Functional Testing

#### Test Scenario 1: Homepage Navigation
**Objective:** Verify all homepage elements and navigation

| Step | Action | Expected Result | Pass/Fail |
|------|--------|----------------|-----------|
| 1 | Visit homepage | Page loads within 3 seconds | ☐ |
| 2 | Check hero section | H1, subtitle, and CTAs visible | ☐ |
| 3 | Click "Reservar sesión" | Opens Calendly in new tab | ☐ |
| 4 | Click "Descargar brochure" | PDF downloads | ☐ |
| 5 | Click service card | Navigates to service detail page | ☐ |
| 6 | Click "Sobre Mí" in nav | Navigates to about page | ☐ |
| 7 | Click "Contacto" in nav | Navigates to contact page | ☐ |
| 8 | Scroll to footer | All links present and working | ☐ |

---

#### Test Scenario 2: Contact Form - Happy Path
**Objective:** Successful form submission with all fields

| Step | Action | Expected Result | Pass/Fail |
|------|--------|----------------|-----------|
| 1 | Navigate to `/contacto` | Form displays correctly | ☐ |
| 2 | Enter name: "María Test" | Input accepts text | ☐ |
| 3 | Enter email: "test@ejemplo.com" | Input accepts email | ☐ |
| 4 | Enter WhatsApp: "+59170123456" | Input accepts phone | ☐ |
| 5 | Select service: "Mujer Tukuy con Rumbo" | Dropdown works | ☐ |
| 6 | Check modality field appears | Modality dropdown visible | ☐ |
| 7 | Select modality: "Individual" | Selection works | ☐ |
| 8 | Enter message: "Me interesa el programa" | Textarea accepts text | ☐ |
| 9 | Click "Enviar" | Button shows "Enviando..." state | ☐ |
| 10 | Wait for response | Redirects to `/gracias` | ☐ |
| 11 | Check email inbox | Email received within 2 min | ☐ |

**Email Verification:**
- [ ] Subject line includes service name and user name
- [ ] Email contains all form data
- [ ] Email formatted correctly (not raw HTML)
- [ ] Reply-to address is user's email

---

#### Test Scenario 3: Contact Form - Validation Errors
**Objective:** Form prevents invalid submissions

| Step | Action | Expected Result | Pass/Fail |
|------|--------|----------------|-----------|
| 1 | Leave all fields empty | Cannot submit | ☐ |
| 2 | Click "Enviar" | Error messages appear | ☐ |
| 3 | Enter name only | Still shows other errors | ☐ |
| 4 | Enter invalid email: "test@" | Email error shown | ☐ |
| 5 | Enter valid email | Email error clears | ☐ |
| 6 | Select service | Service error clears | ☐ |
| 7 | Enter short message (< 10 chars) | Message error shown | ☐ |
| 8 | Enter proper message | All errors cleared | ☐ |
| 9 | Submit form | Succeeds | ☐ |

---

#### Test Scenario 4: Service Pages
**Objective:** All service pages display correctly

**For Each Service Page:**
- `/servicios/mujer-tukuy-con-rumbo`
- `/servicios/tukuy-renace`
- `/servicios/tukuy-experiencias`

| Step | Action | Expected Result | Pass/Fail |
|------|--------|----------------|-----------|
| 1 | Navigate to service page | Page loads correctly | ☐ |
| 2 | Check H1 heading | Service name displayed | ☐ |
| 3 | Check methodology section | Steps/process visible | ☐ |
| 4 | Check modalities | Formats listed | ☐ |
| 5 | Check CTA button | "Reserva diagnóstico" visible | ☐ |
| 6 | Click CTA | Goes to contact with pre-selected service | ☐ |
| 7 | Verify service pre-selected | Dropdown shows correct service | ☐ |

---

#### Test Scenario 5: WhatsApp Integration
**Objective:** WhatsApp button works on all pages

| Step | Action | Expected Result | Pass/Fail |
|------|--------|----------------|-----------|
| 1 | Visit homepage | Floating WhatsApp button visible | ☐ |
| 2 | Click WhatsApp button | Opens WhatsApp (app or web) | ☐ |
| 3 | Check number | Correct number: +591XXXXXXXXX | ☐ |
| 4 | Check pre-filled message | Greeting message present | ☐ |
| 5 | Navigate to different page | Button still visible | ☐ |
| 6 | Test on mobile device | Opens WhatsApp app | ☐ |

---

#### Test Scenario 6: Mobile Navigation
**Objective:** Mobile menu works correctly

| Step | Action | Expected Result | Pass/Fail |
|------|--------|----------------|-----------|
| 1 | Resize to mobile (< 768px) | Hamburger menu appears | ☐ |
| 2 | Click hamburger icon | Menu opens/slides in | ☐ |
| 3 | Click "Servicios" | Submenu expands | ☐ |
| 4 | Click service link | Navigates and closes menu | ☐ |
| 5 | Open menu again | Menu opens | ☐ |
| 6 | Click outside menu | Menu closes | ☐ |
| 7 | Click close icon (X) | Menu closes | ☐ |

---

## 🖥️ Browser Compatibility Testing

### Desktop Testing Matrix

| Test Case | Chrome | Safari | Firefox | Edge |
|-----------|--------|--------|---------|------|
| Homepage loads | ☐ | ☐ | ☐ | ☐ |
| Navigation works | ☐ | ☐ | ☐ | ☐ |
| Form submission | ☐ | ☐ | ☐ | ☐ |
| Images display | ☐ | ☐ | ☐ | ☐ |
| Fonts load correctly | ☐ | ☐ | ☐ | ☐ |
| CTAs clickable | ☐ | ☐ | ☐ | ☐ |
| PDF downloads | ☐ | ☐ | ☐ | ☐ |

---

### Mobile Testing Matrix

| Test Case | iOS Safari | Android Chrome |
|-----------|------------|----------------|
| Homepage loads | ☐ | ☐ |
| Mobile menu works | ☐ | ☐ |
| Form submission | ☐ | ☐ |
| Form inputs usable | ☐ | ☐ |
| Keyboard doesn't obscure fields | ☐ | ☐ |
| Images responsive | ☐ | ☐ |
| Touch targets adequate (44px min) | ☐ | ☐ |
| WhatsApp opens app | ☐ | ☐ |
| Calendly opens in browser | ☐ | ☐ |

---

## 📱 Responsive Design Testing

### Breakpoint Testing

Test at these specific resolutions:

**Desktop:**
- [ ] 1920x1080 (Full HD)
- [ ] 1366x768 (Common laptop)
- [ ] 1280x720 (Smaller laptop)

**Tablet:**
- [ ] 768x1024 (iPad Portrait)
- [ ] 1024x768 (iPad Landscape)

**Mobile:**
- [ ] 375x667 (iPhone SE, small phone)
- [ ] 390x844 (iPhone 12/13/14)
- [ ] 414x896 (iPhone 11 Pro Max)
- [ ] 360x800 (Common Android)

**For Each Breakpoint Check:**
- [ ] Layout doesn't break
- [ ] Text readable without zooming
- [ ] Images don't overflow
- [ ] Buttons/CTAs accessible
- [ ] No horizontal scrolling
- [ ] Navigation appropriate for size

---

## ⚡ Performance Testing

### Lighthouse Testing

**Run Lighthouse on these pages:**
- Homepage: `/`
- Service page: `/servicios/mujer-tukuy-con-rumbo`
- Contact page: `/contacto`
- About page: `/sobre-mi`

**For Each Page:**
```bash
# In Chrome DevTools
1. Open DevTools (F12)
2. Go to Lighthouse tab
3. Select:
   - Mode: Navigation
   - Device: Mobile (test both Mobile and Desktop)
   - Categories: All
4. Click "Analyze page load"
```

**Required Scores:**
- [ ] Performance: ≥ 90
- [ ] Accessibility: ≥ 95
- [ ] Best Practices: ≥ 95
- [ ] SEO: ≥ 95

**Core Web Vitals:**
- [ ] LCP (Largest Contentful Paint): < 2.5s
- [ ] FID (First Input Delay): < 100ms
- [ ] CLS (Cumulative Layout Shift): < 0.1

---

## 🔍 SEO Validation

### Meta Tag Verification

**For Each Page, Check:**
- [ ] View source (Ctrl+U)
- [ ] Verify `<title>` tag present and unique
- [ ] Verify meta description present and unique
- [ ] Verify Open Graph tags present
- [ ] Verify `lang="es"` on `<html>` tag
- [ ] Verify canonical URL set correctly

### SEO Tools Testing

**Google Rich Results Test:**
```
1. Visit: https://search.google.com/test/rich-results
2. Enter page URL
3. Verify LocalBusiness schema valid (homepage)
4. Verify Service schema valid (service pages)
```

**Google Mobile-Friendly Test:**
```
1. Visit: https://search.google.com/test/mobile-friendly
2. Enter page URL
3. Verify "Page is mobile friendly"
```

### Sitemap & Robots Testing

- [ ] Visit `/sitemap.xml` - Verify all pages listed
- [ ] Visit `/robots.txt` - Verify correct configuration
- [ ] Check sitemap includes all public pages
- [ ] Check robots.txt allows indexing

---

## 🔐 Security Testing

### Manual Security Checks

**API Endpoint Testing:**
```bash
# Test contact form endpoint
curl -X POST https://mujerestukuy.com/api/contact \
  -H "Content-Type: application/json" \
  -d '{"name":"Test","email":"test@test.com","service":"consulta-general","message":"Test"}'

# Expected: 200 OK with success:true
```

**Rate Limiting Test:**
```bash
# Submit form 4 times rapidly
# Expected: 4th submission blocked with 429 status
```

**XSS Attempt:**
- [ ] Try submitting `<script>alert('XSS')</script>` in form fields
- [ ] Verify script not executed
- [ ] Verify email doesn't contain executable script

**SQL Injection (N/A for MVP but verify):**
- [ ] Try submitting `'; DROP TABLE--` in form fields
- [ ] Verify no database errors (no database in MVP)

### Environment Variables Check

- [ ] Inspect page source - no API keys visible
- [ ] Check Network tab - no secrets in requests
- [ ] Verify `.env.local` not committed to Git
- [ ] Verify Vercel environment variables set correctly

---

## ♿ Accessibility Testing

### Keyboard Navigation Test

**Using Only Keyboard (no mouse):**
- [ ] Tab through all interactive elements
- [ ] All links/buttons receive visible focus
- [ ] Form fields accessible via Tab
- [ ] Can submit form with Enter key
- [ ] Can close mobile menu with Escape
- [ ] No keyboard traps

### Screen Reader Testing

**Using VoiceOver (Mac) or NVDA (Windows):**
- [ ] Page title announced
- [ ] Landmarks identified (header, nav, main, footer)
- [ ] Heading structure logical
- [ ] Form labels associated with inputs
- [ ] Required fields announced
- [ ] Error messages announced
- [ ] Link purposes clear from text

### Color Contrast Testing

**Use WebAIM Contrast Checker:**
```
https://webaim.org/resources/contrastchecker/
```

**Test These Combinations:**
- [ ] Purple (#4A3E8E) on white - Ratio ≥ 4.5:1
- [ ] Body text (#374151) on white - Ratio ≥ 4.5:1
- [ ] Link text on background - Ratio ≥ 4.5:1
- [ ] Error red text - Ratio ≥ 4.5:1

---

## 📊 Analytics Verification

### Google Analytics 4 Testing

**Setup:**
```bash
# Enable GA4 DebugView
1. Install Google Analytics Debugger extension (Chrome)
2. Or add ?debug_mode=true to URL
```

**Events to Verify:**
- [ ] `page_view` fires on each page visit
- [ ] `calendly_click` fires when Calendly button clicked
- [ ] `whatsapp_click` fires when WhatsApp button clicked
- [ ] `form_submit` fires on successful form submission
- [ ] `brochure_download` fires when PDF downloaded (if tracked)

**Real-Time Report Check:**
- [ ] Visit GA4 dashboard → Real-Time report
- [ ] Perform actions on site
- [ ] Verify events appear within 10 seconds

---

## 🐛 Bug Tracking Template

When issues found during testing:

```markdown
## Bug #[Number]: [Brief Description]

**Severity:** Critical / High / Medium / Low
**Browser:** Chrome 118 / Safari 17 / etc.
**Device:** Desktop / iPhone 12 / etc.

### Steps to Reproduce:
1. Navigate to...
2. Click on...
3. Enter...
4. Submit...

### Expected Behavior:
Form should submit successfully

### Actual Behavior:
Error message displayed: "..."

### Screenshot:
[Attach if applicable]

### Additional Info:
Console errors, network requests, etc.
```

---

## ✅ Testing Sign-Off

### Pre-Staging Deployment
- [ ] All local tests passed
- [ ] Code reviewed
- [ ] No console errors
- [ ] Build successful

**Tester:** ___________________  
**Date:** ___________________

---

### Pre-Production Deployment
- [ ] All staging tests passed
- [ ] Cross-browser testing complete
- [ ] Mobile testing complete
- [ ] Performance requirements met
- [ ] Client approved on staging
- [ ] No critical bugs remaining

**Tester:** ___________________  
**Client Approval:** ___________________  
**Date:** ___________________

---

## 🔄 Regression Testing (Future Updates)

When making changes after initial launch:

### Quick Smoke Test (After Small Changes)
- [ ] Homepage loads
- [ ] Contact form works
- [ ] No console errors

### Full Regression Test (After Major Changes)
- [ ] Run all test scenarios above
- [ ] Verify unchanged areas still work
- [ ] Check new functionality thoroughly

---

## 📈 Future Testing Strategy (Phase 2)

When CMS is added, consider:

### Automated Testing
- **Unit Tests:** Vitest for utility functions
- **Component Tests:** React Testing Library
- **E2E Tests:** Playwright for critical flows
- **Visual Regression:** Percy or Chromatic

### Continuous Integration
- GitHub Actions to run tests on every PR
- Block merge if tests fail
- Automated Lighthouse checks

---

**Document Version:** 1.0  
**Last Updated:** October 18, 2025  
**Next Review:** After MVP launch
