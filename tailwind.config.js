/** @type {import('tailwindcss').Config} */

const colors = require("tailwindcss/colors");
module.exports = {
  content: ["./**/*.{html,js}"],
  theme: {
    extend: {
      keyframes: {
        left: {
          '0%': { left: '0' },
          '100%': { left: '-50%' },
        },
        color: {
          '0%, 100%': {color: '#F53838'},
          '50%': {color: '#FF7777'}
        }

      }
    },
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
