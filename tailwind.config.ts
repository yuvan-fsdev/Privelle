import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        matteBlack: '#111111',
        softBlack: '#171717',
        champagneGold: '#C9A227',
        mutedGold: '#A9841F',
        ivoryWhite: '#F8F6F2',
        deepBurgundy: '#5A1022',
        roseBeige: '#D8B8A8',
        softRose: '#E8CFC4',
        warmTaupe: '#9B7E6A',
      },
      fontFamily: {
        heading: ['var(--font-heading)'],
        body: ['var(--font-body)'],
      },
      fontSize: {
        'xs': ['0.75rem', { lineHeight: '1rem' }],
        'sm': ['0.875rem', { lineHeight: '1.25rem' }],
        'base': ['1rem', { lineHeight: '1.5rem' }],
        'lg': ['1.125rem', { lineHeight: '1.75rem' }],
        'xl': ['1.25rem', { lineHeight: '1.75rem' }],
        '2xl': ['1.5rem', { lineHeight: '2rem' }],
        '3xl': ['1.875rem', { lineHeight: '2.25rem' }],
        '4xl': ['2.25rem', { lineHeight: '2.5rem' }],
        '5xl': ['3rem', { lineHeight: '1' }],
        '6xl': ['3.75rem', { lineHeight: '1' }],
      },
      letterSpacing: {
        normal: '0em',
        wide: '0.025em',
        wider: '0.05em',
      },
      spacing: {
        '4.5': '1.125rem',
        '5.5': '1.375rem',
      },
      borderRadius: {
        'full': '9999px',
      },
      animation: {
        fadeIn: 'fadeIn 0.7s ease-out',
        slideUp: 'slideUp 0.7s ease-out',
        float: 'float 6s ease-in-out infinite',
      },
      keyframes: {
        fadeIn: {
          'from': { opacity: '0' },
          'to': { opacity: '1' },
        },
        slideUp: {
          'from': { opacity: '0', transform: 'translateY(24px)' },
          'to': { opacity: '1', transform: 'translateY(0)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-14px)' },
        },
      },
      boxShadow: {
        'luxury': '0 8px 32px rgba(201, 162, 39, 0.08)',
        'luxury-lg': '0 16px 48px rgba(201, 162, 39, 0.12)',
      },
    },
  },
  plugins: [],
};

export default config;
