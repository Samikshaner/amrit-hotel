/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        gold: "#b89b5e",        // ochre gold
        goldLight: "#d6bf7a",
        goldDark: "#9f843a",
      },
      fontFamily: {
        serif: ["Cormorant Garamond", "serif"],
        sans: ["Outfit", "sans-serif"],
      },
    },
  },
  plugins: [],
};
