/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        // Text - gray-50, gray-300, gray-500 and gray-950
        // BG - white, gray-100, gray-800 and gray-900
        "theme-yellow": "#e9c46a",
        "theme-orange": "#f4a261",
        "theme-dark-blue": "#264653",
        "theme-blue": "#48cae4",
        "theme-cyan": "#38a3a5"
      }
    }
  },
  plugins: []
};
