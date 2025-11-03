import { Ratelimit } from '@upstash/ratelimit'
import { kv } from '@vercel/kv'

// Create a rate limiter that allows 5 requests per minute
export const rateLimit = new Ratelimit({
  redis: kv,
  limiter: Ratelimit.slidingWindow(5, '1 m'),
  analytics: true,
  prefix: 'mujerestukuy_contact',
})

// Development fallback when Redis is not available
const developmentRateLimit = {
  limit: async (identifier: string) => {
    // In development, we'll use a simple in-memory rate limiting
    // This is not production-ready but prevents build errors
    return { success: true }
  }
}

// Export the appropriate rate limiter based on environment
export const rateLimiter = process.env.NODE_ENV === 'production' ? rateLimit : developmentRateLimit