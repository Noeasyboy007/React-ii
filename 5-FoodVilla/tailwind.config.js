/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        custom: ['Lobster', 'sans-serif'], // Replace with your font
      },
    },
  },
  plugins: [],
}

