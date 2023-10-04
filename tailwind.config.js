/** @type {import('tailwindcss').Config} */

const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'hero-pattern': "url('./images/hero-1280@2x.jpg')",
        // 'footer-texture': "url('/img/footer-texture.png')",
      }
    },
    
  },
  fontFamily: {
    sans: ["'Inter Variable'", ...defaultTheme.fontFamily.sans],
  },
  plugins: [],
}
