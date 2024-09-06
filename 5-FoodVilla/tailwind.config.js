/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        custom: ['Averia Libre, system-ui', 'sans-serif'], // Replace with your font
      },
    },
  },
  plugins: [],
}

