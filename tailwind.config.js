/** @type {import('tailwindcss').Config} */

const colors = require("tailwindcss/colors");
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {},
    colors: {
      main: "#F53838",
      white: "#fff",
      ...colors
    },
    boxShadow: {
      custom:
        "3.9695122241973877px 7.371951103210449px 19.847558975219727px rgba(0, 0, 0, 0.09)",
    },
  },
  plugins: [],
};
