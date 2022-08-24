const defaultTheme = require('tailwindcss/defaultTheme')


module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: 'media', // or 'media' or 'class'
  theme: {
    container: {
      center: true,
    },
    extend: {
      fontFamily: {
        sans: ['Inter var', ...defaultTheme.fontFamily.sans],
      },
      keyframes: {
        'blink': {
          '0%': {
            opacity: '0',
          },
          '45%': {
            opacity: '1',
          },
          '55%': {
            opacity: '1',
          },
          '100%': {
              opacity: '1',
          },
        }
      },
      animation: {
        'blink': 'blink 1s infinite'
      }
    }
  },
  variants: {
    extend: {},
  },
  plugins: [],
  safelist: [
    "h-1/2",
    "h-1/3",
    "h-1/4"
  ]
}
