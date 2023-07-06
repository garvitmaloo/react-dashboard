/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: "class",
  theme: {
    screens: {
      tablets: "700px",
      desktop: "1250px"
    },
    colors: {
      "theme-yellow": "#e9c46a",
      "theme-orange": "#f4a261",
      "theme-dark-blue": "#264653",
      "theme-blue": "#48cae4",
      "theme-cyan": "#38a3a5",
      "gray-50": "rgb(249, 250, 251)",
      "gray-100": "rgb(243, 244, 246)",
      "gray-200": "rgb(229, 231, 235)",
      "gray-300": "rgb(209, 213, 219)",
      "gray-500": "rgb(107, 114, 128)",
      "gray-800": "rgb(31, 41, 55)",
      "gray-900": "rgb(17, 24, 39)",
      "gray-950": "rgb(3, 7, 18)",
      "green-100": "rgb(220, 252, 231)",
      "red-100": "rgb(254, 226, 226)",
      "red-300": "rgb(252, 165, 165)",
      "red-800": "rgb(153, 27, 27)",
      white: "rgb(255, 255, 255)"
    },
    extend: {}
  },
  plugins: []
};
