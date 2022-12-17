/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        grayregal: "#9E9C9C",
      },
      dropShadow: {
        "3xl": "0 4px 4px rgba(0, 0, 0, 0.25)",
      },
      lineHeight: {
        "space": "2.6rem",
        "extra-space": "3.5rem",
      },
      backgroundImage: {
        "painter": "url('./assets/bg-painter.svg')",
        "girlpaint-bg": "url('./assets/bg-girlpaint.svg')",
        "torre-bg": "url('./assets/bg-torre.svg')",
      },
    },
  },
  plugins: [],
};
