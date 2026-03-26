/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{vue,js,ts}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif']
      },
      colors: {
        accent: {
          DEFAULT: '#6366f1',
          dark: '#818cf8'
        }
      }
    }
  },
  plugins: []
}
