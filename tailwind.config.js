/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#08090C",
        surface: "#0F1117",
        "surface-border": "#1E2230",
        cobalt: "#2438E0",
        ink: "#151A3A",
        bluecode: {
          400: "#38BDF8",
          500: "#0EA5E9",
          600: "#0284C7",
        },
      },
    },
  },
  plugins: [],
}