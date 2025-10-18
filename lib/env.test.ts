/**
 * @jest-environment node
 */

describe('Environment Configuration', () => {
  const originalEnv = process.env;

  beforeEach(() => {
    // Reset modules to get fresh env object
    jest.resetModules();
  });

  afterAll(() => {
    // Restore original environment
    process.env = originalEnv;
  });

  describe('validateEnv()', () => {
    it('should pass when all required variables are set', () => {
      process.env = {
        ...originalEnv,
        RESEND_API_KEY: 're_test_key_123',
        NEXT_PUBLIC_WA_NUMBER: '59176543210',
        NEXT_PUBLIC_CALENDLY_URL: 'https://calendly.com/test',
      };

      const { validateEnv } = require('./env');
      expect(() => validateEnv()).not.toThrow();
    });

    it('should throw error when RESEND_API_KEY is missing', () => {
      process.env = {
        ...originalEnv,
        NEXT_PUBLIC_WA_NUMBER: '59176543210',
        NEXT_PUBLIC_CALENDLY_URL: 'https://calendly.com/test',
      };
      // @ts-ignore
      delete process.env.RESEND_API_KEY;

      const { validateEnv } = require('./env');
      expect(() => validateEnv()).toThrow(/RESEND_API_KEY/);
    });

    it('should throw error when NEXT_PUBLIC_WA_NUMBER is missing', () => {
      process.env = {
        ...originalEnv,
        RESEND_API_KEY: 're_test_key_123',
        NEXT_PUBLIC_CALENDLY_URL: 'https://calendly.com/test',
      };
      // @ts-ignore
      delete process.env.NEXT_PUBLIC_WA_NUMBER;

      const { validateEnv } = require('./env');
      expect(() => validateEnv()).toThrow(/NEXT_PUBLIC_WA_NUMBER/);
    });

    it('should throw error when NEXT_PUBLIC_CALENDLY_URL is missing', () => {
      process.env = {
        ...originalEnv,
        RESEND_API_KEY: 're_test_key_123',
        NEXT_PUBLIC_WA_NUMBER: '59176543210',
      };
      // @ts-ignore
      delete process.env.NEXT_PUBLIC_CALENDLY_URL;

      const { validateEnv } = require('./env');
      expect(() => validateEnv()).toThrow(/NEXT_PUBLIC_CALENDLY_URL/);
    });

    it('should throw error listing all missing variables', () => {
      process.env = { ...originalEnv };
      // @ts-ignore
      delete process.env.RESEND_API_KEY;
      // @ts-ignore
      delete process.env.NEXT_PUBLIC_WA_NUMBER;
      // @ts-ignore
      delete process.env.NEXT_PUBLIC_CALENDLY_URL;

      const { validateEnv } = require('./env');
      expect(() => validateEnv()).toThrow(/Missing required environment variables/);
    });
  });

  describe('env object', () => {
    beforeEach(() => {
      process.env = {
        ...originalEnv,
        RESEND_API_KEY: 're_test_key_123',
        NEXT_PUBLIC_WA_NUMBER: '59176543210',
        NEXT_PUBLIC_CALENDLY_URL: 'https://calendly.com/test/session',
        NEXT_PUBLIC_GA4_ID: 'G-TEST123',
        NEXT_PUBLIC_FB_PIXEL_ID: '123456789',
        NODE_ENV: 'development',
      };
    });

    describe('resend', () => {
      it('should expose API key', () => {
        const { env } = require('./env');
        expect(env.resend.apiKey).toBe('re_test_key_123');
      });
    });

    describe('whatsapp', () => {
      it('should expose number', () => {
        const { env } = require('./env');
        expect(env.whatsapp.number).toBe('59176543210');
      });

      it('should generate correct WhatsApp URL', () => {
        const { env } = require('./env');
        expect(env.whatsapp.url).toBe('https://wa.me/59176543210');
      });
    });

    describe('calendly', () => {
      it('should expose URL', () => {
        const { env } = require('./env');
        expect(env.calendly.url).toBe('https://calendly.com/test/session');
      });
    });

    describe('analytics', () => {
      it('should expose GA4 ID when set', () => {
        const { env } = require('./env');
        expect(env.analytics.ga4Id).toBe('G-TEST123');
      });

      it('should expose FB Pixel ID when set', () => {
        const { env } = require('./env');
        expect(env.analytics.fbPixelId).toBe('123456789');
      });

      it('should be undefined when analytics not configured', () => {
        process.env = {
          ...originalEnv,
          RESEND_API_KEY: 're_test_key_123',
          NEXT_PUBLIC_WA_NUMBER: '59176543210',
          NEXT_PUBLIC_CALENDLY_URL: 'https://calendly.com/test',
        };
        // @ts-ignore
        delete process.env.NEXT_PUBLIC_GA4_ID;
        // @ts-ignore
        delete process.env.NEXT_PUBLIC_FB_PIXEL_ID;

        jest.resetModules();
        const { env } = require('./env');

        expect(env.analytics.ga4Id).toBeUndefined();
        expect(env.analytics.fbPixelId).toBeUndefined();
      });
    });

    describe('environment flags', () => {
      it('should detect development environment', () => {
        process.env = {
          ...originalEnv,
          NODE_ENV: 'development',
          RESEND_API_KEY: 're_test_key_123',
          NEXT_PUBLIC_WA_NUMBER: '59176543210',
          NEXT_PUBLIC_CALENDLY_URL: 'https://calendly.com/test',
        };
        jest.resetModules();
        const { env } = require('./env');

        expect(env.isDevelopment).toBe(true);
        expect(env.isProduction).toBe(false);
      });

      it('should detect production environment', () => {
        process.env = {
          ...originalEnv,
          NODE_ENV: 'production',
          RESEND_API_KEY: 're_test_key_123',
          NEXT_PUBLIC_WA_NUMBER: '59176543210',
          NEXT_PUBLIC_CALENDLY_URL: 'https://calendly.com/test',
        };
        jest.resetModules();
        const { env } = require('./env');

        expect(env.isDevelopment).toBe(false);
        expect(env.isProduction).toBe(true);
      });
    });
  });

  describe('logEnvStatus()', () => {
    let consoleLogSpy: jest.SpyInstance;

    beforeEach(() => {
      consoleLogSpy = jest.spyOn(console, 'log').mockImplementation();
      process.env = {
        ...originalEnv,
        NODE_ENV: 'development',
        RESEND_API_KEY: 're_test_key_123',
        NEXT_PUBLIC_WA_NUMBER: '59176543210',
        NEXT_PUBLIC_CALENDLY_URL: 'https://calendly.com/test',
      };
    });

    afterEach(() => {
      consoleLogSpy.mockRestore();
    });

    it('should log environment status in development', () => {
      const { logEnvStatus } = require('./env');
      logEnvStatus();

      expect(consoleLogSpy).toHaveBeenCalled();
      expect(consoleLogSpy).toHaveBeenCalledWith(expect.stringContaining('Environment Configuration'));
    });

    it('should not log in production', () => {
      process.env = {
        ...originalEnv,
        NODE_ENV: 'production',
        RESEND_API_KEY: 're_test_key_123',
        NEXT_PUBLIC_WA_NUMBER: '59176543210',
        NEXT_PUBLIC_CALENDLY_URL: 'https://calendly.com/test',
      };
      jest.resetModules();
      const { logEnvStatus } = require('./env');
      
      logEnvStatus();

      expect(consoleLogSpy).not.toHaveBeenCalled();
    });
  });
});
