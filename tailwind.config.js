/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        brand: {
          primary: "#005f5a", // 10% Brand color
          light: "#007771", // Lighter shade for hover states
        },
        neutral: {
          white: "#FFFFFF", // 60% White
          black: "#000000", // 30% Black
          gray: "#3d3d3d", // Additional gray for text
        },
      },
      fontFamily: {
        sans: ["Urbanist", "sans-serif"],
      },
    },
  },
  plugins: [],
};
