/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Noto Sans SC"', 'Inter', 'sans-serif'],
        handwriting: ['Caveat', 'cursive'],
      },
      colors: {
        lab: {
          bg: '#F7F8FA',
          card: '#FFFFFF',
          text: '#1A1D20',
          muted: '#64748B',
          subtle: '#94A3B8',
          border: '#E2E8F0',
          navy: '#1A2B4C',
          navyHover: '#0F172A',
          accent: '#2563EB',
          pill: '#EEF2F6',
        },
      },
      boxShadow: {
        subtle: '0 1px 3px 0 rgba(0, 0, 0, 0.02), 0 1px 2px 0 rgba(0, 0, 0, 0.04)',
        'hover-card':
          '0 10px 25px -5px rgba(15, 23, 42, 0.08), 0 8px 10px -6px rgba(15, 23, 42, 0.04)',
      },
    },
  },
  plugins: [],
};