# Environment Variables Setup

Quick guide for configuring environment variables for Mujeres Tukuy CMS.

## 🚀 Quick Start

1. **Copy the template:**
   ```bash
   cp .env.local.template .env.local
   ```

2. **Fill in your values** in `.env.local`

3. **Never commit** `.env.local` (it's already in `.gitignore`)

---

## 📋 Required Variables

### 1. RESEND_API_KEY
**Purpose:** Send contact form emails  
**How to get:**
1. Sign up at [resend.com](https://resend.com)
2. Go to API Keys section
3. Create new API key
4. Copy the key (starts with `re_`)

**Format:** `RESEND_API_KEY=re_xxxxxxxxxxxxxxxxxxxx`

---

### 2. NEXT_PUBLIC_WA_NUMBER
**Purpose:** WhatsApp contact button  
**How to get:** Your WhatsApp business number

**Format:** Country code + number (no spaces, no +)
- ✅ Correct: `5917654321`
- ❌ Wrong: `+591 7654321`

**Example:** `NEXT_PUBLIC_WA_NUMBER=59176543210`

---

### 3. NEXT_PUBLIC_CALENDLY_URL
**Purpose:** Booking session CTA button  
**How to get:**
1. Sign up at [calendly.com](https://calendly.com)
2. Create an event type (e.g., "Sesión Diagnóstico")
3. Copy the event link

**Format:** `NEXT_PUBLIC_CALENDLY_URL=https://calendly.com/your-username/event-name`

---

## 🎯 Optional Variables

### NEXT_PUBLIC_GA4_ID
**Purpose:** Google Analytics 4 tracking

**How to get:**
1. Go to [Google Analytics](https://analytics.google.com)
2. Create property
3. Copy Measurement ID (format: `G-XXXXXXXXXX`)

**Format:** `NEXT_PUBLIC_GA4_ID=G-XXXXXXXXXX`

---

### NEXT_PUBLIC_FB_PIXEL_ID
**Purpose:** Meta/Facebook Pixel tracking

**How to get:**
1. Go to [Facebook Events Manager](https://business.facebook.com/events_manager)
2. Create or find your Pixel
3. Copy Pixel ID (numeric)

**Format:** `NEXT_PUBLIC_FB_PIXEL_ID=123456789012345`

---

## 🔒 Security Notes

- ✅ **Server-only variables** (no `NEXT_PUBLIC_` prefix): Only accessible in API routes
- ✅ **Client-side variables** (`NEXT_PUBLIC_` prefix): Exposed to browser
- ❌ **Never commit** `.env.local` or `.env.production`
- ❌ **Never expose** API keys in client-side code

---

## 🧪 Testing

After setting up, run validation:

```bash
npm run dev
```

Check console for:
```
🔧 Environment Configuration:
  - Resend API: ✅ Configured
  - WhatsApp: ✅ Configured
  - Calendly: ✅ Configured
  - GA4: ⚪ Optional (not set)
  - FB Pixel: ⚪ Optional (not set)
```

---

## 🚢 Deployment (Vercel)

1. Go to Vercel dashboard
2. Select your project
3. Go to Settings → Environment Variables
4. Add all variables for Production environment
5. Optionally add different values for Preview environment

---

## 🆘 Troubleshooting

### "Missing required environment variable: RESEND_API_KEY"
- Check that `.env.local` exists
- Verify the variable name is exactly `RESEND_API_KEY`
- Restart dev server after adding variables

### "WhatsApp button not working"
- Ensure number format has no spaces or `+` symbol
- Must start with country code (591 for Bolivia)

### "Analytics not tracking"
- These are optional - safe to leave empty for MVP
- Check browser console for errors if configured

---

**Need help?** Check `lib/env.ts` for validation logic.
