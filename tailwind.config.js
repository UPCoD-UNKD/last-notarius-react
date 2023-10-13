/** @type {import('tailwindcss').Config} */

const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    screens: {
      sm: "570px",
      //=> @media (min-width: 360px) { ... }

      // md: "768px",
      // => @media (min-width: 768px) { ... }

      lg: "768px",
      // => @media (min-width: 820px) { ... }

      // "2lg": "1024px",
      // => @media (min-width: 820px) { ... }

      xl: "1280px",
      // => @media (min-width: 1280px) { ... }

      // "1xl": "1366px",
      // // => @media (min-width: 1366px) { ... }

      "2xl": "1536px",
      // => @media (min-width: 1536px) { ... }

      // 3xl: "1920px",
      // // => @media (min-width: 1920px) { ... }
    },
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
