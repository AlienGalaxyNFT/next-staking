/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.tsx"],
  theme: {
    extend: {
      colors: {
        gray: {
          900: "#010101",
          600: "#0E0E0E",
          200: "#211F27",
          100: "#2A2930",
          50: "#A8A7AC",
        },
      },
      fontFamily: {
        inter: ["Inter", "sans-serif"],
      },
    },
  },
};
