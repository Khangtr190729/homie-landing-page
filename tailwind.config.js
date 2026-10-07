/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'mocha': '#3B2A20',
        'brown': '#7B5E4A',
        'ivory': '#FAF7F0',
        'caramel': '#A67C52',
        'latte': '#D1B89A',
        'cream': '#F2E7D5',
      },
      fontFamily: {
        sans: ['Inter', 'Roboto', 'Outfit', 'sans-serif'],
      },
      keyframes: {
        shimmer: {
          '100%': { transform: 'translateX(100%)' },
        }
      },
      animation: {
        shimmer: 'shimmer 1.5s infinite',
      }
    },
  },
  plugins: [],
}
