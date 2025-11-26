/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["'Plus Jakarta Sans'", "sans-serif"],
        body: ["'Inter'", "sans-serif"],
      },
      colors: {
        primary: "#4F46E5", // Indigo 600
        secondary: "#0EA5E9", // Sky 500
        accent: "#F59E0B", // Amber 500
        dark: "#0F172A", // Slate 900
        light: "#F8FAFC", // Slate 50
        purpleColor: "#8B5CF6", // Violet 500 - keeping for compatibility but updated tone
      },
      boxShadow: {
        large: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
        glow: "0 0 15px rgba(79, 70, 229, 0.5)",
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
      }
    },
  },
  plugins: [],
};
