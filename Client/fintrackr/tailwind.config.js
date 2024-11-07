/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#1ABC9C", // mint
        secondary: "#2C3E50", // charcoal
        customBg: "#F4F6F8", // Light Gray (antiflash-white)
        customCard: "#7F8C8D", // Deep Gray (battleship-gray)
        customBtn: "#E74C3C", // Red (vermillion)
      },
      fontFamily: {
        sans: ["Roboto", "sans-serif"],
      },
    },
  },
  plugins: [],
};
