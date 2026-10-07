/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        kkp: {
          dark: '#0C2340',
          navy: '#1A365D',
          blue: '#0284C7',
          light: '#E0F2FE',
          accent: '#0284C7',
        }
      }
    },
  },
  plugins: [],
}