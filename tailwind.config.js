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
      colors: {
        "content-primary": "#a5f3fc",
        "content-primary-accent": "#06b6d4",
        "content-secondary": "#db2777",
        "content-secondary-accent": "#b91c1c",
        "content-links": "#f266a0",
        "content-default": "white",
        "content-greyed": "#a8a29e",
        "background-default": "black",
        "background-accent": "#1c1917",
        "background-accent-darker": "#0b0a09",
        "macos-window": "#F5F5F5",
        "macos-window-dark": "#C0BFC0",
        "macos-close": "#FF605C",
        "macos-minimize": "#FFBD44",
        "macos-maximize": "#00CA4E",
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
