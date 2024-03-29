/** @type {import('tailwindcss').Config} */


const defaultTheme = require("tailwindcss/defaultTheme")

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      fontFamily: {
        "Assistant": ["Assistant", ...defaultTheme.fontFamily.sans]
      },
    },
  },
  plugins: [],
  darkMode: 'class'
}
