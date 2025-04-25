/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        // textcolor: "#DB3F29",
        textcolor: "#F97316",
      },
      fontFamily: {
        titillium: ['"Titillium Web"', 'sans-serif'],
        inter: ['Inter', 'sans-serif'],
      },
    },
  },
  daisyui: {
  },
  plugins: [require("daisyui")],
}

