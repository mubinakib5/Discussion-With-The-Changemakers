/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx}",
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          primary: "#005f5a", // Primary brand color
          secondary: "#00857E", // Secondary brand color
          accent: "#006D67", // Accent brand color
          light: "#007771", // Lighter shade for hover states
        },
        neutral: {
          white: "#FFFFFF", // White
          black: "#000000", // Black
          gray: "#3d3d3d", // Gray for text
        },
      },
      fontFamily: {
        sans: ["Urbanist", "sans-serif"],
      },
    },
  },
  plugins: [],
};
