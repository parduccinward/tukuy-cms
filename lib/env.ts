/**
 * Environment Variable Validation
 * 
 * Validates that all required environment variables are set.
 * Call this at application startup to fail fast if configuration is missing.
 */

const requiredServerVars = [
  'RESEND_API_KEY',
] as const;

const requiredClientVars = [
  'NEXT_PUBLIC_WA_NUMBER',
  'NEXT_PUBLIC_CALENDLY_URL',
] as const;

const optionalClientVars = [
  'NEXT_PUBLIC_GA4_ID',
  'NEXT_PUBLIC_FB_PIXEL_ID',
] as const;

/**
 * Validates that all required environment variables are present
 * @throws Error if any required variable is missing
 */
export function validateEnv(): void {
  const missing: string[] = [];

  // Check required server-side variables
  for (const key of requiredServerVars) {
    if (!process.env[key]) {
      missing.push(key);
    }
  }

  // Check required client-side variables
  for (const key of requiredClientVars) {
    if (!process.env[key]) {
      missing.push(key);
    }
  }

  if (missing.length > 0) {
    throw new Error(
      `Missing required environment variables:\n${missing.map(v => `  - ${v}`).join('\n')}\n\n` +
      `Please check your .env.local file or environment configuration.`
    );
  }
}

/**
 * Type-safe environment variable access
 */
export const env = {
  // Server-only variables (API routes, Server Components)
  resend: {
    apiKey: process.env.RESEND_API_KEY as string,
  },

  // Client-side variables (accessible in browser)
  whatsapp: {
    number: process.env.NEXT_PUBLIC_WA_NUMBER as string,
    url: `https://wa.me/${process.env.NEXT_PUBLIC_WA_NUMBER}`,
  },

  calendly: {
    url: process.env.NEXT_PUBLIC_CALENDLY_URL as string,
  },

  analytics: {
    ga4Id: process.env.NEXT_PUBLIC_GA4_ID,
    fbPixelId: process.env.NEXT_PUBLIC_FB_PIXEL_ID,
  },

  // Helpers
  isDevelopment: process.env.NODE_ENV === 'development',
  isProduction: process.env.NODE_ENV === 'production',
} as const;

/**
 * Log environment configuration status (safe for production)
 */
export function logEnvStatus(): void {
  if (env.isDevelopment) {
    console.log('🔧 Environment Configuration:');
    console.log(`  - Resend API: ${env.resend.apiKey ? '✅ Configured' : '❌ Missing'}`);
    console.log(`  - WhatsApp: ${env.whatsapp.number ? '✅ Configured' : '❌ Missing'}`);
    console.log(`  - Calendly: ${env.calendly.url ? '✅ Configured' : '❌ Missing'}`);
    console.log(`  - GA4: ${env.analytics.ga4Id ? '✅ Configured' : '⚪ Optional (not set)'}`);
    console.log(`  - FB Pixel: ${env.analytics.fbPixelId ? '✅ Configured' : '⚪ Optional (not set)'}`);
  }
}
