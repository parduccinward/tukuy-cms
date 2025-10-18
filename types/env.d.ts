/**
 * Type definitions for environment variables
 * Extends Next.js ProcessEnv interface
 */

declare global {
  namespace NodeJS {
    interface ProcessEnv {
      // Server-only variables
      RESEND_API_KEY: string;
      NODE_ENV: 'development' | 'production' | 'test';

      // Client-side variables (NEXT_PUBLIC_*)
      NEXT_PUBLIC_WA_NUMBER: string;
      NEXT_PUBLIC_CALENDLY_URL: string;
      NEXT_PUBLIC_GA4_ID?: string;
      NEXT_PUBLIC_FB_PIXEL_ID?: string;
    }
  }
}

export {};
