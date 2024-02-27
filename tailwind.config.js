import colors from "tailwindcss/colors"
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        secondary: {
          DEFAULT: colors.purple[200],
          hover: colors.purple[300],
          border: colors.purple[400],
          text: colors.purple[500],
          dark: colors.purple[800],
          ["dark-hover"]: colors.purple[900]
        }
      }
    },
  },
  plugins: [],
}

