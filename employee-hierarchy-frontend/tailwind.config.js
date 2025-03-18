/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./app/**/*.{js,ts,jsx,tsx}",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class", // Enable dark mode using the 'dark' class
  theme: {
    extend: {
      colors: {
        // Light Mode Colors
        light: {
          background: "#F4F4F4",
          text: "#2D3748",
          primary: "#1A7F44",
          secondary: "#A0AEC0",
          accent: "#48BB78",
          border: "#CBD5E0",
        },
        // Dark Mode Colors
        dark: {
          background: "#1A202C",
          text: "#EDF2F7",
          primary: "#38A169",
          secondary: "#4A5568",
          accent: "#81E6D9",
          border: "#2D3748",
        },
      },
    },
  },
  plugins: [],
};
