/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.tsx"],
  theme: {
    extend: {
      colors: {
        gray: {
          900: "#010101",
          200: "#211F27",
          100: "#2A2930",
          50: "#A8A7AC",
        },
      },
      gradientColorStops: {
        orange: ["#FB6060", "#FF8A70"],
        blue: ["#7A85E8", "#6CD6F9"],
      },
      fontFamily: {
        inter: ["Inter", "sans-serif"],
      },
    },
  },
};
