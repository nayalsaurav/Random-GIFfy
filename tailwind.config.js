/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#3498db", // Primary color (light mode)
        accent1: "#f39c12", // Accent color
        darkBackground: "#121212", // Dark background color
        lightText: "#ffffff", // Light text color
        textPrimary: "#e0e0e0", // Light text for subheadings
      },
    },
  },
  plugins: [],
};

