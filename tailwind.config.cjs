/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ['class'],
  content: ['index.html', './src/**/*.{ts,tsx}'],
  prefix: '',
  theme: {
    container: {
      center: true,
      padding: '1rem',
      screens: {
        sm: '320px',
        md: '640px',
        lg: '1200px',
        xl: '1500px',
        '2xl': '1400px',
      },
    },
    extend: {
      fontFamily: {
        rubik: ['Rubik', 'sans-serif'],
        rubikOne: ['Rubik Mono One', 'monospace'],
      },
      boxShadow: {
        dark: '0 3px 0 3px #000000, 0 0 0 3px #000000',
        card: '0 3px 0 3px #161616, 0 0 0 3px #161616',
        green: '0 3px 0 3px #1D5939, 0 0 0 3px #1D5939',
      },
      colors: {
        background: '#121212',
        greyLight: '#F6FAFB',
        base: {
          dark: '#161616',
          greenDark: '#173324',
          green: '#1D5939',
          greenLight: '#4CAF50',
          light: '#ffffff',
          border: 'rgba(23, 51, 36, 0.4)',
        },
        error: {
          DEFAULT: '#D32F2F',
          light: 'rgba(211, 47, 47, 0.1)',
        },
        warning: {
          DEFAULT: '#FF7A00',
          light: 'rgba(255, 214, 0, 0.1)',
        },
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)',
      },
      keyframes: {
        'accordion-down': {
          from: { height: '0' },
          to: { height: 'var(--radix-accordion-content-height)' },
        },
        'accordion-up': {
          from: { height: 'var(--radix-accordion-content-height)' },
          to: { height: '0' },
        },
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
      },
    },
  },
  plugins: [require('tailwindcss-animate')],
};
