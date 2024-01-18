/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        roboto: ['Roboto', 'sans-serif'],
        quicksand: ['Quicksand', 'sans-serif'],
      },
      colors:{
        "text-light":"#606060",
        "text-dark":"#1D2540",
        "text":"#444444"
      }
    },
  },
  plugins: [],
}

