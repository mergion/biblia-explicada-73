/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        serif: ['"Merriweather"', 'serif'],
        sans: ['"Open Sans"', 'sans-serif'],
      },
      colors: {
        brand: {
          gold: '#D4AF37', // Gold for accents
          dark: '#1C1C1C', // Dark background
          green: '#25D366', // CTA Green
          cream: '#F9F7F2', // Light background
          red: '#D90404',
        }
      }
    },
  },
  plugins: [],
}