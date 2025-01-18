/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "primary-200": "#FF3D4F",
        "primary-300": "#000A2D",
        "secondary-100": "#F6F5FF"
      },
      keyframes: {
        "fade-in-up": {
          "0%": { opacity: 0, transform: "translateY(10px)" },
          "100%": { opacity: 1, transform: "translateY(0)" },
        },
        "fade-out-down": {
          "0%": { opacity: 1, transform: "translateY(0)" },
          "100%": { opacity: 0, transform: "translateY(10px)" },
        },
      },
      animation: {
        "fade-in-up": "fade-in-up 0.5s ease-in-out",
        "fade-out-down": "fade-out-down 0.5s ease-in-out",
      },
    },
  },
  plugins: [],
};
