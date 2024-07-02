/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Poppins", "sans-serif"]
      },
      color: {
        gray: {
          900: "#1F1D2B",
          800: "#252836",
          500: "#808191",
          400: "#B7B9D2",
        }
      }
    },
  },
  plugins: [],
}

