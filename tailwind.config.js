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
        "Barlow": ["Barlow", ...defaultTheme.fontFamily.sans],
        "Inter": ["Inter", ...defaultTheme.fontFamily.sans],
        "Sarabun": ["Sarabun", ...defaultTheme.fontFamily.sans],
        "Mulish": ["Mulish", ...defaultTheme.fontFamily.sans],
        "Assistant": ["Assistant", ...defaultTheme.fontFamily.sans]
      },
    },
  },
  plugins: [],
  darkMode: 'class'
}
