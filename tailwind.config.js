import { colors } from './src/theme/colors.js'

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors,
      fontFamily: {
        head: ['"Instrument Sans"', 'sans-serif'],
        body: ['Inter', 'sans-serif'],
        serif: ['"Source Serif 4"', 'ui-serif', 'Georgia', 'serif'],
      },
      maxWidth: {
        site: '480px',
        stage: '1200px',
      },
    },
  },
  plugins: [],
}
