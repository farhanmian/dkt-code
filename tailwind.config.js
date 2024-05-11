/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    colors: {
      'lightbrand': '#00000',
      'link': '#00689d',
      'lightgrey': '#d9dde1'
    },
    fontFamily: {
      'sans': ['Roboto', 'sans-serif'],
      'condensed': ['Roboto Condensed', 'sans-serif'],
    },
    extend: {},
  },
  plugins: [require("daisyui")],
}

