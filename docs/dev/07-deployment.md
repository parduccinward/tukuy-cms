# Deployment

## Purpose

How to deploy the application to Vercel for staging and production environments.

---

## Structure

### Environments

1. **Development** - Local machine (`npm run dev`)
2. **Staging** - Vercel preview (PR deployments)
3. **Production** - Vercel production (main branch)

### Git Workflow

```
feature/branch → PR → staging preview
                 ↓
              main → production deploy
```

---

## Conventions

### Vercel Setup

**Initial Setup:**
1. Push code to GitHub repository
2. Import repository in Vercel dashboard
3. Configure environment variables
4. Deploy

**Environment Variables:**
Set in Vercel dashboard for each environment:
- Production environment: main branch values
- Preview environment: staging/test values

Required variables:
```
RESEND_API_KEY
NEXT_PUBLIC_WA_NUMBER
NEXT_PUBLIC_CALENDLY_URL
```

Optional variables:
```
NEXT_PUBLIC_GA4_ID
NEXT_PUBLIC_FB_PIXEL_ID
```

### Deployment Flow

**Automatic Deployment:**
- Push to `main` → Production deploy
- Open PR → Preview deploy (unique URL)
- Push to PR branch → Preview updates

**Manual Deployment:**
```bash
# Using Vercel CLI
vercel          # Deploy to preview
vercel --prod   # Deploy to production
```

### Pre-Deployment Checklist

- [ ] All environment variables configured in Vercel
- [ ] `npm run build` succeeds locally
- [ ] `npm run lint` passes
- [ ] TypeScript compiles without errors
- [ ] Contact form tested locally
- [ ] Analytics IDs updated (if applicable)
- [ ] Lighthouse scores >90 (run locally)

### Post-Deployment Verification

- [ ] Site loads without errors
- [ ] Navigation works on all pages
- [ ] Contact form submits successfully
- [ ] Email received via Resend
- [ ] WhatsApp button opens correct number
- [ ] Calendly link opens correct URL
- [ ] Analytics tracking fires (check Network tab)
- [ ] Mobile responsive (test on real device)
- [ ] Lighthouse scores >90 in production

### Rollback Procedure

**Via Vercel Dashboard:**
1. Go to Deployments tab
2. Find previous successful deployment
3. Click "⋯" → "Promote to Production"

**Via Git:**
```bash
git revert HEAD
git push origin main
```

### Domain Configuration

**Custom Domain:**
1. Add domain in Vercel dashboard
2. Configure DNS records (A/CNAME)
3. Wait for SSL certificate (automatic)
4. Verify HTTPS working

**Recommended:**
- `www.mujerestukuy.com` → Primary
- `mujerestukuy.com` → Redirect to www

---

## AI Notes

- Never commit `.env.local` or `.env.production` files
- Vercel automatically optimizes images, fonts, and JavaScript
- Use `next/image` for automatic image optimization
- Vercel Edge Network provides CDN automatically
- Check build logs in Vercel dashboard if deployment fails
- Preview deployments are disposable (don't use for important testing)
- Use staging environment variables for preview deployments
- Vercel Analytics optional (free tier available)
- Consider DDoS protection if needed (Vercel Pro plan)
- Monitor deployment time (should be <2 minutes for this size project)
