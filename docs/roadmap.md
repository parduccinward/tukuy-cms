# Project Roadmap

Strategic planning and scalability roadmap for Mujeres Tukuy website.

---

## 🎯 Roadmap Overview

This document outlines the phased development approach, triggers for each phase, and architectural considerations to ensure scalable growth without major refactors.

---

## 📍 Phase 1: MVP (Current) - 4-6 weeks

### Goal
Launch functional lead generation website with core mentorship services.

### Scope

**Pages:**
- `/` - Homepage with hero, services overview, CTAs
- `/sobre-mi` - About Janette Blacutt
- `/servicios` - Services landing page
- `/servicios/mujer-tukuy-con-rumbo` - Mentorship program detail
- `/servicios/tukuy-renace` - Transformation circles detail
- `/servicios/tukuy-experiencias` - Corporate events detail
- `/contacto` - Contact form
- `/testimonios` - Social proof
- `/gracias` - Thank you page

**Features:**
- Contact form with Resend email integration
- Calendly booking CTA (external link)
- WhatsApp floating button
- Basic GA4 analytics tracking
- SEO optimization (meta tags, schema, sitemap)
- Mobile-responsive design

**Content Management:**
- Static pages (developer-managed)
- Content updates require code changes
- Spanish copy as specified in documentation

### Success Criteria
- [ ] Generate 10+ qualified leads in first month
- [ ] <5% contact form failure rate
- [ ] Lighthouse scores >90 across all metrics
- [ ] Zero critical accessibility issues (WCAG AA)
- [ ] Client can understand and access all lead information

### Tech Debt Accepted
- Manual content updates (no CMS)
- No blog or dynamic content
- Manual testimonial management
- No A/B testing capability
- No automated email sequences

### Estimated Effort
**60-80 hours** (1.5-2 months part-time)

---

## 📍 Phase 2: Content Management - 8-10 weeks

### Trigger Conditions
**Proceed to Phase 2 if ANY of these occur:**
- Client requests >2 content updates per week
- Need to launch blog/recursos section
- Want to add new testimonials without developer
- Desire to update service descriptions independently

### Goal
Enable client to manage content independently without developer intervention.

### Technical Changes

**1. CMS Integration: Sanity.io**

```typescript
// Migration Strategy
// Step 1: Install Sanity
npm install @sanity/client @sanity/image-url next-sanity

// Step 2: Create schemas
// sanity/schemas/page.ts
export default {
  name: 'page',
  title: 'Página',
  type: 'document',
  fields: [
    { name: 'title', type: 'string', title: 'Título' },
    { name: 'slug', type: 'slug', title: 'URL' },
    { name: 'content', type: 'array', title: 'Contenido', of: [{ type: 'block' }] }
  ]
}

// Step 3: Migrate existing content
// Create Sanity documents for each page
// Keep current URLs (no SEO impact)

// Step 4: Update Next.js pages to fetch from Sanity
export async function generateStaticParams() {
  const pages = await client.fetch('*[_type == "page"]');
  return pages.map((page) => ({ slug: page.slug.current }));
}
```

**2. New Features**
- Blog post creation and management
- Testimonial CRUD interface in Sanity Studio
- Service description editing
- Image upload and management via Sanity
- Draft/publish workflow

**3. Backward Compatibility**
- API routes remain unchanged (`/api/contact`)
- Same form submission logic
- No changes to design system
- All URLs stay the same (SEO preserved)

### New Pages
- `/blog` - Blog listing
- `/blog/[slug]` - Individual blog posts
- `/recursos` - Resources/downloads page (if needed)

### Content Types
```typescript
// Sanity schemas
- Page (flexible pages)
- BlogPost (articles)
- Service (service details)
- Testimonial (client stories)
- Settings (site-wide config)
```

### Success Criteria
- [ ] Client can add/edit content without developer
- [ ] Content changes go live within 5 minutes (revalidation)
- [ ] Blog posts have proper SEO (auto-generated meta tags)
- [ ] Zero breaking changes to existing pages
- [ ] Training documentation provided

### Estimated Effort
**60-80 hours** (8-10 weeks part-time)

### Cost Considerations
- Sanity: Free tier sufficient for MVP (10k documents, 3 users)
- Upgrade if >10k documents or >3 team members: ~$199/month

---

## 📍 Phase 3: E-commerce - 12-16 weeks

### Trigger Conditions
**Proceed to Phase 3 if ANY of these occur:**
- Client launches paid workshops or group programs
- Need to accept online payments
- Want automated enrollment management

### Goal
Enable online payment for workshops, courses, and group programs.

### Technical Changes

**1. Payment Integration: Stripe**

```typescript
// New API routes
// app/api/checkout/create-session/route.ts
export async function POST(request: Request) {
  const { workshopId, customerEmail } = await request.json();
  
  const session = await stripe.checkout.sessions.create({
    payment_method_types: ['card'],
    line_items: [{ price: workshopPriceId, quantity: 1 }],
    mode: 'payment',
    success_url: `${process.env.NEXT_PUBLIC_URL}/confirmacion?session_id={CHECKOUT_SESSION_ID}`,
    cancel_url: `${process.env.NEXT_PUBLIC_URL}/talleres/${workshopId}`,
    customer_email: customerEmail,
  });

  return NextResponse.json({ sessionId: session.id });
}

// app/api/checkout/webhook/route.ts
// Handle Stripe webhook events (payment success, failure)
export async function POST(request: Request) {
  const sig = request.headers.get('stripe-signature');
  const event = stripe.webhooks.constructEvent(body, sig, webhookSecret);
  
  switch (event.type) {
    case 'checkout.session.completed':
      // Send confirmation email
      // Create enrollment record
      break;
  }
}
```

**2. Database Addition**

**Option A: Vercel Postgres (Recommended)**
```bash
# Simple setup, integrated with Vercel
vercel postgres create tukuy-db
```

**Option B: Supabase**
```bash
# More features, free tier generous
npm install @supabase/supabase-js
```

**Schema:**
```sql
-- Enrollments table
CREATE TABLE enrollments (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  workshop_id TEXT NOT NULL,
  customer_email TEXT NOT NULL,
  customer_name TEXT NOT NULL,
  stripe_session_id TEXT UNIQUE NOT NULL,
  amount_paid INTEGER NOT NULL,
  status TEXT NOT NULL CHECK (status IN ('pending', 'completed', 'refunded')),
  created_at TIMESTAMP DEFAULT NOW()
);

-- Workshops table
CREATE TABLE workshops (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  title TEXT NOT NULL,
  description TEXT,
  price INTEGER NOT NULL,
  stripe_price_id TEXT NOT NULL,
  max_participants INTEGER,
  start_date TIMESTAMP,
  status TEXT DEFAULT 'draft'
);
```

**3. New Pages**
- `/talleres` - Workshop/program listings
- `/talleres/[slug]` - Workshop details with purchase CTA
- `/checkout` - Stripe checkout (handled by Stripe Checkout)
- `/confirmacion` - Post-payment success page
- `/mi-cuenta` - User dashboard (view purchases) - optional

### Features
- Workshop catalog management (Sanity CMS)
- Stripe Checkout integration
- Automated confirmation emails
- Enrollment tracking
- Participant management
- Refund handling

### Success Criteria
- [ ] Secure payment processing (PCI compliant via Stripe)
- [ ] Automated enrollment emails
- [ ] Client can view all enrollments
- [ ] Workshop capacity limits enforced
- [ ] Failed payment handling

### Estimated Effort
**100-120 hours** (12-16 weeks part-time)

### Cost Considerations
- Stripe: 2.9% + $0.30 per transaction
- Database: Vercel Postgres free tier (60 hours compute/month)
- Email: Resend may need upgrade for transactional volume

### Legal Requirements
⚠️ **Required before Phase 3:**
- [ ] Updated Privacy Policy (payment data handling)
- [ ] Terms of Service (refund policy, workshop terms)
- [ ] Cookie Policy (Stripe cookies)
- [ ] Legal review recommended

---

## 📍 Phase 4: CRM Integration - 6-8 weeks

### Trigger Conditions
**Proceed to Phase 4 if:**
- Lead volume >50/month consistently
- Need automated follow-up sequences
- Want lead scoring and segmentation
- Client spending >5 hours/week on manual follow-up

### Goal
Automate lead management and follow-up workflows.

### CRM Options

**Option A: HubSpot (Recommended for small business)**
- Free tier: Unlimited contacts, basic email, forms
- Paid: Starts at $45/month (automation, sequences)

**Option B: Pipedrive**
- Visual pipeline management
- Starts at $14.90/user/month

**Option C: ActiveCampaign**
- Strong email automation
- Starts at $29/month

### Technical Integration

```typescript
// app/api/contact/route.ts - Enhanced with CRM sync
export async function POST(request: Request) {
  // Existing form processing
  const result = await sendEmail(data);
  
  // NEW: Sync to CRM
  try {
    await syncToCRM({
      email: data.email,
      name: data.name,
      phone: data.whatsapp,
      source: 'website_contact_form',
      service_interest: data.service,
      modality: data.modality,
      notes: data.message
    });
  } catch (crmError) {
    // Don't fail form submission if CRM sync fails
    console.error('CRM sync failed:', crmError);
  }
  
  return NextResponse.json({ success: true });
}

// lib/crm.ts
export async function syncToCRM(contact: ContactData) {
  // HubSpot example
  const response = await fetch('https://api.hubapi.com/crm/v3/objects/contacts', {
    method: 'POST',
    headers: {
      'Authorization': `Bearer ${process.env.HUBSPOT_API_KEY}`,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      properties: {
        email: contact.email,
        firstname: contact.name.split(' ')[0],
        lastname: contact.name.split(' ').slice(1).join(' '),
        phone: contact.phone,
        hs_lead_status: 'NEW',
        servicio_interes: contact.service_interest
      }
    })
  });
  
  return response.json();
}
```

### Automation Workflows

**Example Sequences:**
1. **Immediate:** Welcome email with service info PDF
2. **Day 1:** Educational content about chosen service
3. **Day 3:** Case study/testimonial related to service
4. **Day 5:** Calendly booking reminder
5. **Day 7:** Personal outreach from Janette (if not booked)

### Success Criteria
- [ ] All form submissions sync to CRM automatically
- [ ] Automated welcome sequence working
- [ ] Lead scoring implemented
- [ ] Client can manage pipeline visually
- [ ] Email open/click tracking enabled

### Estimated Effort
**50-70 hours** (6-8 weeks part-time)

### Cost Considerations
- CRM subscription: $15-100/month depending on features
- Email sending volume may increase (Resend upgrade possible)

---

## 🏗️ Scalability Considerations

### Current Architecture Supports

✅ **Easy to Scale:**
- Traffic growth (Vercel CDN auto-scales)
- Adding new static pages
- Form field additions (modular design)
- Additional analytics/tracking
- Image optimization (Next.js built-in)

### Will Require Refactor

❌ **Challenging to Add Later:**
- User authentication system (not in scope currently)
- Real-time features (websockets) - not needed
- Multi-language support (only Spanish for MVP)
- High-volume transactions (>100 orders/day) - database optimization needed

### Decision Points

**When to Add CMS (Phase 2)?**
- ✅ Content updates >2 per week
- ✅ Want blog functionality
- ✅ Multiple people need content access

**When to Add Payments (Phase 3)?**
- ✅ Ready to sell workshops/courses
- ✅ Have legal requirements in place
- ✅ Customer support process defined

**When to Add CRM (Phase 4)?**
- ✅ Lead volume >50/month
- ✅ Spending >5 hours/week on manual follow-up
- ✅ Need lead nurturing automation

**When to Add Database?**
- ✅ E-commerce (Phase 3)
- ✅ User accounts needed
- ✅ Complex data relationships

---

## 📊 Growth Metrics

### Phase 1 Success Indicators
- [ ] 10+ leads/month from website
- [ ] 5%+ conversion rate (visitors → leads)
- [ ] <3% form abandonment rate
- [ ] 60%+ of leads qualify for services

### Phase 2 Success Indicators
- [ ] Client updates content weekly without developer
- [ ] 2+ blog posts per month published
- [ ] Blog drives 20%+ of organic traffic

### Phase 3 Success Indicators
- [ ] 5+ workshop sales per month
- [ ] <1% payment failure rate
- [ ] 90%+ customer satisfaction with checkout

### Phase 4 Success Indicators
- [ ] 50+ leads/month in CRM
- [ ] 30%+ email open rate
- [ ] 10%+ conversion from email sequences

---

## 🚀 Technology Evolution

### MVP Stack (Phase 1)
```
Frontend: Next.js 15 + React + TailwindCSS
Backend: Next.js API Routes
Email: Resend
Content: Static (MDX files)
Analytics: Google Analytics 4
Hosting: Vercel
```

### Phase 2 Stack
```
+ CMS: Sanity.io
+ Image CDN: Sanity CDN
```

### Phase 3 Stack
```
+ Payments: Stripe
+ Database: Vercel Postgres or Supabase
+ Transactional Email: Resend (upgraded)
```

### Phase 4 Stack
```
+ CRM: HubSpot or Pipedrive
+ Email Automation: ActiveCampaign or HubSpot
+ Webhooks: CRM integrations
```

---

## 💰 Budget Planning

### Phase 1 (MVP)
- Vercel: **Free** (hobby plan sufficient)
- Resend: **Free** (3,000 emails/month)
- Domain: **~$15/year**
- **Total: ~$15/year**

### Phase 2 (CMS)
- Sanity: **Free** (free tier)
- **Additional: $0/month**

### Phase 3 (E-commerce)
- Stripe: **2.9% + $0.30 per transaction**
- Database: **Free** (Vercel Postgres free tier)
- Resend: **~$10-20/month** (upgrade for volume)
- **Additional: ~$10-20/month + transaction fees**

### Phase 4 (CRM)
- CRM: **$15-100/month**
- Email automation: **Included or $29/month**
- **Additional: ~$45-130/month**

---

## 📅 Timeline Summary

| Phase | Duration | Effort | Launch | Cost |
|-------|----------|--------|--------|------|
| Phase 1: MVP | 4-6 weeks | 60-80h | Now | $15/year |
| Phase 2: CMS | 8-10 weeks | 60-80h | +3 months | +$0 |
| Phase 3: E-commerce | 12-16 weeks | 100-120h | +6 months | +$20/mo |
| Phase 4: CRM | 6-8 weeks | 50-70h | +9 months | +$50/mo |

**Total Timeline:** ~12 months for full platform  
**Total Effort:** 270-350 hours  
**Total Cost:** $15/year → $1,000+/year fully scaled

---

## ✅ Phase Readiness Checklist

### Before Starting Phase 2 (CMS)
- [ ] Phase 1 launched successfully
- [ ] Client requesting frequent content updates
- [ ] Budget approved for potential Sanity upgrade
- [ ] Client trained on basic CMS concepts

### Before Starting Phase 3 (E-commerce)
- [ ] Phase 2 completed and stable
- [ ] Workshop/course content ready
- [ ] Privacy policy updated
- [ ] Terms of service drafted
- [ ] Stripe account created
- [ ] Refund policy defined

### Before Starting Phase 4 (CRM)
- [ ] Phase 3 operational (if applicable)
- [ ] Lead volume justifies automation
- [ ] CRM platform selected
- [ ] Email sequences planned
- [ ] Budget approved for CRM subscription

---

**Document Version:** 1.0  
**Last Updated:** October 18, 2025  
**Next Review:** After Phase 1 launch (3 months)
