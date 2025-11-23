/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      animation: {
        animate1: "animate1 5s linear infinite",
      },
      keyframes: {
        animate1: {
          "0%": { transform: "rotate(300deg)" },
          "10%": { transform: "rotate(360deg)" },
          "100%": { transform: "rotate(360deg)" },
        },
      },
    },
  },
  plugins: [],
};
