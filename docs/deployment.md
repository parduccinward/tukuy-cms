# Deployment Guide

Complete deployment workflow for Mujeres Tukuy website from local development to production.

---

## 🌍 Environments

### Development
- **URL:** `http://localhost:3000`
- **Purpose:** Local development and testing
- **Branch:** Feature branches
- **Environment:** `.env.local` (not committed)
- **Analytics:** Disabled or test IDs
- **Email:** Test mode (console output or test recipient)

### Staging (Pre-Production)
- **URL:** `https://tukuy-cms-staging.vercel.app` (or Vercel preview URL)
- **Purpose:** Client review and final QA before production
- **Branch:** `staging` or PR preview deployments
- **Environment:** Vercel staging environment variables
- **Analytics:** Test mode (separate GA4 property recommended)
- **Email:** Test recipient (e.g., `staging@mujerestukuy.com`)

### Production
- **URL:** `https://mujerestukuy.com`
- **Purpose:** Live public website
- **Branch:** `main`
- **Environment:** Vercel production environment variables
- **Analytics:** Live tracking (actual GA4 property)
- **Email:** `contacto@mujerestukuy.com`

---

## 🚀 Deployment Workflow

### Initial Setup

1. **Connect Repository to Vercel**
   ```bash
   # Visit https://vercel.com/new
   # Import tukuy-cms repository
   # Configure project settings:
   # - Framework Preset: Next.js
   # - Root Directory: ./
   # - Build Command: npm run build
   # - Output Directory: .next
   ```

2. **Configure Environment Variables**
   
   **Production Environment:**
   ```bash
   # In Vercel Dashboard → Settings → Environment Variables
   RESEND_API_KEY=re_xxxxxxxxxxxxxxxxx
   NEXT_PUBLIC_GA4_ID=G-XXXXXXXXXX
   NEXT_PUBLIC_FB_PIXEL_ID=XXXXXXXXXXXXXX
   NEXT_PUBLIC_WA_NUMBER=591XXXXXXXX
   NEXT_PUBLIC_CALENDLY_URL=https://calendly.com/janette-blacutt/diagnostico
   ```

   **Staging Environment:**
   ```bash
   # Same variables but with test/staging values
   RESEND_API_KEY=re_test_xxxxxxxxxxxx
   NEXT_PUBLIC_GA4_ID=G-TESTXXXXXX
   NEXT_PUBLIC_FB_PIXEL_ID=test_XXXXXXXXX
   NEXT_PUBLIC_WA_NUMBER=591XXXXXXXX
   NEXT_PUBLIC_CALENDLY_URL=https://calendly.com/janette-blacutt/test
   ```

---

## 📋 Deployment Process

### To Staging/Preview

**Option A: PR Preview (Recommended)**
```bash
# Create feature branch
git checkout -b feature/nueva-funcionalidad

# Make changes and commit
git add .
git commit -m "feat: nueva funcionalidad"

# Push to remote
git push origin feature/nueva-funcionalidad

# Create Pull Request on GitHub
# → Vercel automatically creates preview deployment
# → Share preview URL with client for review
```

**Option B: Staging Branch**
```bash
# Merge to staging branch
git checkout staging
git merge feature/nueva-funcionalidad
git push origin staging

# → Auto-deploys to staging environment
```

**Staging Verification:**
1. Visit staging/preview URL
2. Test all changed functionality
3. Verify environment variables are correct
4. Run through manual test checklist
5. Get client approval

---

### To Production

**Prerequisites:**
- ✅ Changes tested and approved on staging
- ✅ Pre-deployment checklist completed (see below)
- ✅ Client sign-off received

**Process:**
```bash
# Ensure you're on staging branch with approved changes
git checkout staging
git pull origin staging

# Create PR from staging to main
# Review PR checklist on GitHub

# After approval, merge to main
git checkout main
git merge staging
git push origin main

# → Vercel auto-deploys to production
# → Monitor deployment in Vercel dashboard
```

**Post-Deployment:**
- Run post-deployment verification (see below)
- Monitor for errors in Vercel dashboard
- Check analytics tracking

---

## ✅ Pre-Deployment Checklist

### Code Quality
- [ ] TypeScript compiles with zero errors (`npm run build`)
- [ ] ESLint passes (`npm run lint`)
- [ ] No `console.log` statements in production code
- [ ] All environment variables documented

### Content
- [ ] Spanish copy reviewed and approved by client
- [ ] All images optimized (WebP format)
- [ ] PDFs uploaded and accessible
- [ ] Contact information verified (email, WhatsApp, Calendly)
- [ ] No placeholder text (Lorem ipsum) anywhere

### SEO
- [ ] All pages have unique title tags
- [ ] Meta descriptions present and under 160 characters
- [ ] Open Graph images uploaded (1200x630px)
- [ ] `sitemap.xml` generated and accessible
- [ ] `robots.txt` configured correctly

### Integrations
- [ ] Resend API key valid (test email sent successfully)
- [ ] Calendly link opens correct booking page
- [ ] WhatsApp number correct format (+591XXXXXXXXX)
- [ ] GA4 tracking verified (if enabled)
- [ ] Meta Pixel installed correctly (if enabled)

### Performance
- [ ] Lighthouse Performance score ≥ 90
- [ ] Lighthouse Accessibility score ≥ 95
- [ ] Lighthouse Best Practices score ≥ 95
- [ ] Lighthouse SEO score ≥ 95
- [ ] First Contentful Paint < 1.8s
- [ ] Largest Contentful Paint < 2.5s

### Security
- [ ] No API keys in client-side code
- [ ] Environment variables set in Vercel (not in code)
- [ ] Form has spam honeypot field
- [ ] Input validation on all form fields
- [ ] HTTPS enforced (automatic via Vercel)

### Browser Testing
- [ ] Chrome (latest)
- [ ] Safari (latest, desktop and iOS)
- [ ] Firefox (latest)
- [ ] Edge (latest)
- [ ] Mobile Chrome (Android)

---

## 🔍 Post-Deployment Verification

### Immediately After Deploy (< 5 minutes)

1. **Visit production URL:** `https://mujerestukuy.com`
2. **Homepage loads correctly:** Check hero, images, CTAs
3. **Test contact form:**
   - Fill out all fields
   - Submit form
   - Verify redirect to `/gracias`
4. **Confirm email received:** Check `contacto@mujerestukuy.com`
5. **Test Calendly button:** Click → verify opens correct booking page
6. **Test WhatsApp button:** Click → verify opens chat with correct number

### Within 1 Hour

7. **Check all service pages:**
   - `/servicios/mujer-tukuy-con-rumbo`
   - `/servicios/tukuy-renace`
   - `/servicios/tukuy-experiencias`
8. **Verify navigation:** Desktop and mobile menu work correctly
9. **Test form on mobile device:** iOS and Android if possible
10. **Check Google Analytics:** Verify events are being tracked

### Within 24 Hours

11. **Review Vercel Analytics:** Check for 404s or 500 errors
12. **Monitor contact form:** Check for spam submissions
13. **Verify SEO meta tags:** View source code on key pages
14. **Test all external links:** Ensure none are broken
15. **Check page load times:** Compare to performance budget

---

## 🔄 Rollback Procedure

If critical issue detected after production deployment:

### Option 1: Instant Rollback (< 2 minutes)
```bash
# In Vercel Dashboard:
1. Go to Deployments tab
2. Find last known-good deployment
3. Click "..." menu → "Promote to Production"
4. Confirm promotion
```

### Option 2: Fix Forward (Preferred for non-critical issues)
```bash
# Create hotfix branch from main
git checkout main
git checkout -b hotfix/issue-description

# Fix the issue and test locally
npm run dev
# Test thoroughly

# Commit and push
git add .
git commit -m "fix: description of issue"
git push origin hotfix/issue-description

# Create PR to main (expedited review)
# Merge and deploy
```

### Option 3: Emergency Revert
```bash
# If you need to revert a specific commit
git checkout main
git revert <commit-hash>
git push origin main
# → Auto-deploys without the problematic changes
```

### Post-Rollback
- [ ] Document incident in deployment log
- [ ] Notify client of issue and resolution
- [ ] Create issue in GitHub to track fix
- [ ] Review what went wrong in pre-deployment checks

---

## 📊 Monitoring After Deployment

### Daily (First Week)
- Check Vercel function logs for errors
- Monitor contact form submission rate
- Review analytics for traffic patterns
- Check email inbox for test/spam submissions

### Weekly (Ongoing)
- Review GA4 conversion rates
- Check performance metrics (Vercel Analytics)
- Monitor error rate trends
- Review user feedback from form messages

### Monthly
- Performance audit (Lighthouse)
- Content updates needed
- Security updates (dependencies)
- Backup verification

---

## 🛠️ Troubleshooting

### Deployment Fails

**Build Error:**
```bash
# Check build logs in Vercel dashboard
# Common fixes:
npm run build  # Test locally first
npm run lint   # Fix any linting errors
```

**Environment Variable Missing:**
```bash
# Verify in Vercel Dashboard → Settings → Environment Variables
# Make sure variables are set for correct environment (Production/Preview)
```

### Site Not Loading After Deployment

1. Check Vercel deployment status (should be "Ready")
2. Verify domain configuration in Vercel
3. Check DNS settings (if custom domain)
4. Clear browser cache and try incognito mode

### Contact Form Not Working

1. Check Vercel function logs for errors
2. Verify `RESEND_API_KEY` is set correctly
3. Test API endpoint directly: `POST /api/contact`
4. Check spam folder for test emails
5. Verify rate limiting isn't blocking submissions

### Analytics Not Tracking

1. Verify GA4 ID in environment variables
2. Check browser console for errors
3. Use GA4 DebugView to test events
4. Confirm consent/tracking initialized on page load

---

## 📝 Deployment Log

Keep a record of all production deployments:

```markdown
| Date | Version | Changes | Deployed By | Issues |
|------|---------|---------|-------------|--------|
| 2025-10-20 | v1.0.0 | Initial launch | Diego | None |
| 2025-10-25 | v1.0.1 | Fix contact form validation | Diego | None |
```

---

## 🔐 Security Best Practices

### Environment Variables
- ✅ **DO:** Store all secrets in Vercel environment variables
- ✅ **DO:** Use different keys for staging and production
- ❌ **DON'T:** Commit `.env` files to repository
- ❌ **DON'T:** Share production keys in chat/email

### API Keys
- ✅ **DO:** Rotate keys periodically (quarterly)
- ✅ **DO:** Revoke immediately if compromised
- ❌ **DON'T:** Use production keys in development
- ❌ **DON'T:** Expose keys in client-side code

### Access Control
- ✅ **DO:** Limit Vercel project access to necessary people
- ✅ **DO:** Use 2FA for GitHub and Vercel accounts
- ❌ **DON'T:** Share account credentials

---

## 📚 Related Documentation

- [Acceptance Criteria](./acceptance-criteria.md) - Release requirements
- [Testing Strategy](./testing-strategy.md) - Manual test procedures
- [Error Handling](./error-handling.md) - Error management
- [Monitoring](./monitoring.md) - Post-launch monitoring setup

---

**Last Updated:** October 18, 2025
