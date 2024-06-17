/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        "clash-display": ["Clash Display", "sans-serif"],
      },
      colors: {
        "textmi-dark": "#080B2C",
        "textmi-purple": {
          base: "#960DEF",
        },
      },
    },
  },
  plugins: [],
};
