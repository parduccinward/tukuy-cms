import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#4A3E8E',
        secondary: '#4A6B50',
        accent: {
          mustard: '#E0A424',
          terracotta: '#C46C4A',
          ivory: '#F8E8D0',
        },
        success: '#10B981',
        error: '#EF4444',
        warning: '#F59E0B',
        info: '#3B82F6',
        white: '#FFFFFF',
        black: '#1A1A1A',
        gray: {
          light: '#F5F5F5',
          medium: '#9CA3AF',
          dark: '#374151',
        },
      },
      fontFamily: {
        serif: ['Playfair Display', 'serif'],
        sans: ['Montserrat', 'sans-serif'],
      },
    },
  },
  plugins: [],
};

export default config;
