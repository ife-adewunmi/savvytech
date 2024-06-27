// @ts-check
const { fontFamily } = require('tailwindcss/defaultTheme')
const colors = require('tailwindcss/colors')

/** @type {import("tailwindcss/types").Config } */
module.exports = {
  content: [
    './node_modules/pliny/**/*.js',
    './app/**/*.{js,ts,jsx,tsx}',
    './pages/**/*.{js,ts,tsx}',
    './src/components/**/*.{js,ts,tsx}',
    './src/layouts/**/*.{js,ts,tsx}',
    './src/data/**/*.mdx',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      lineHeight: {
        11: '2.75rem',
        12: '3rem',
        13: '3.25rem',
        14: '3.5rem',
      },
      fontFamily: {
        display_bold: ['gopher_bold'],
        display_medium: ['gopher_medium'],
        display_regular: ['gopher_regular'],
        body: ['var(--font-open-sans)'],

        // sans: ['var(--font-space-grotesk)', ...fontFamily.sans],
      },
      colors: {
        // primary: colors.pink,
        gray: colors.gray,
        primary: {
          50: '#E0E0E8',
          100: '#CCCDDC',
          200: '#B9B9CF',
          300: '#A5A6C3',
          400: '#9192B7',
          500: '#7D7EAB',
          600: '#696B9F',
          700: '#565792',
          800: '#424486',
          900: '#2E307A',
        },
        secondary: {
          50: '#F3DFDF',
          100: '#F2CACB',
          200: '#F2B6B6',
          300: '#F1A1A2',
          400: '#F08C8D',
          500: '#EF7778',
          600: '#EE6264',
          700: '#EE4E4F',
          800: '#ED393B',
          900: '#EC2426',
        },
        purple: {
          50: '#E2E0E9',
          100: '#D1CCDE',
          200: '#BFB8D2',
          300: '#AEA4C7',
          400: '#9C90BC',
          500: '#8A7DB1',
          600: '#7969A6',
          700: '#67559A',
          800: '#56418F',
          900: '#442D84',
        },
        neutral: {
          10: '#F8FAFC',
          50: '#F1F5F9',
          100: '#E2E8F0',
          200: '#CBD5E1',
          300: '#94A3B8',
          400: '#64748B',
          500: '#475569',
          600: '#334155',
          700: '#1E293B',
          800: '#0F172A',
          900: '#020617',
        },
      },

      backgroundImage: (theme) => ({
        main_gradient: `linear-gradient(to right, #2D307A 0%, #452D84 52%, #EC2426 100%)`,
        main_gradient_hover: `linear-gradient(to right, #2D307A 0%, #452D84 77%, #EC2426 100%)`,
      }),
      typography: ({ theme }) => ({
        DEFAULT: {
          css: {
            a: {
              color: theme('colors.primary.500'),
              '&:hover': {
                color: `${theme('colors.primary.600')}`,
              },
              code: { color: theme('colors.primary.400') },
            },
            'h1,h2': {
              fontWeight: '700',
              letterSpacing: theme('letterSpacing.tight'),
            },
            h3: {
              fontWeight: '600',
            },
            code: {
              color: theme('colors.indigo.500'),
            },
          },
        },
        invert: {
          css: {
            a: {
              color: theme('colors.primary.500'),
              '&:hover': {
                color: `${theme('colors.primary.400')}`,
              },
              code: { color: theme('colors.primary.400') },
            },
            'h1,h2,h3,h4,h5,h6': {
              color: theme('colors.gray.100'),
            },
          },
        },
      }),
    },
  },
  plugins: [require('@tailwindcss/forms'), require('@tailwindcss/typography')],
}
