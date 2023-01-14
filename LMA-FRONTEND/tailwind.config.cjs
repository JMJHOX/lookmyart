/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    fontFamily: {
      Raleway: ["Raleway", "sans-serif"],
      OpenSans: ["Open Sans", "sans-serif"],
    },
    colors: {
      primary: {
        DEFAULT: "#F9F1DB",
        100: "#F9F1DB",
        200: "#F3DFB5",
        300: " #EBC986",
        400: "#E5B367",
        500: "#DB9234",
        600: "#CD7A29",
      },
      secondary: {
        DEFAULT: "#DDE2FF",
        100: "#DDE2FF",
        200: "#C2CAFF",
        300: " #9CA6FF",
        400: "#7577FF",
        500: "#6C63FF",
        600: "#6C63FF",
      },
      background: "#FFFFFF",
      white: "#F8F8F8",
      black: "#3B3B3B",
      error: "#E33A3A",
      sucess: "#47CB54",
      warning: "#47CB54",
    },
    extend: {
      colors: {
        blueLight: '#243c5a',
        grayregal: "#9E9C9C",
      },
      dropShadow: {
        "3xl": "0 4px 4px rgba(0, 0, 0, 0.25)",
      },
      boxShadow: {
        "4xl": "0 4px 4px 0px rgba(0, 0, 0, 0.25)",
      },
      lineHeight: {
        space: "2.6rem",
        "extra-space": "3.5rem",
      },
      backgroundImage: {
        painter: "url('./assets/bg-painter.svg')",
        "painter-sm": "url('./assets/painter-sm.svg')",
        "girlpaint-bg": "url('./assets/bg-girlpaint.svg')",
        "torre-bg": "url('./assets/bg-torre.png')",
        "torre-sm": "url('./assets/bg-torre-sm.png')",
      },
    },
  },
  plugins: [],
};
