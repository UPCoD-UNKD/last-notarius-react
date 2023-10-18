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
        'hero-pattern': "url('./images/hero-01-1280@2x.jpg')",
        // 'footer-texture': "url('/img/footer-texture.png')",
      },

      colors: {
        

        
        // main: "#9D7558",
       

        accent1: "#9D7558",
        // accent3: "#9E71AB",
        
        // disabled: "#BC9DC5",
        
        // red: "#E7414B",
        // lightGrey: "#6b7280",
        lightGrey: "#6b7280",
        
       
        // bg: "#272727",
        bgDark: "#272727",
        // shadow: "#AB80B8",

        // // uwp
        // // main: "#FF304D",
        // light: "#F8F8F8",
        // dark: "#171717",
        // grey: "#323232",
        // // lightGrey: "#E0E0E0",
        // lightDarkGrey: "#909090",
        // // middleGrey: "#919191",
        // lightRed: "#FF445E",
        // darkGrey: "#474747",
        // activeRed: "#DC2D45",

        // link: "#4B73FF",
        // linkActive: "#86A1FF",
        // formBg: "#EEEEEE",
        // formBgDark: "#202020",
        // dynamicBg: "#FF304DB2",
        // langBg: "#262626",
        // scrollBar: "#F9D4D9",
        // bgColorBtnForm: "#535353",
        // mainTextBlue: "#6355ff",


      },

    },
    
  },
  fontFamily: {
    sans: ["'Inter Variable'", ...defaultTheme.fontFamily.sans],
  },
  plugins: [],
}
