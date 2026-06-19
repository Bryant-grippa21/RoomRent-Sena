/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          50:  "#eaf4f7",
          100: "#cadffb",
          200: "#9fcce8",
          300: "#71bfd1",
          400: "#4da8be",
          500: "#517399",
          600: "#3d5a7a",
          700: "#2d4460",
          800: "#1e3048",
          900: "#0b2236",
        },
        surface: {
          light: "#f5f7fa",
          dark:  "#0b2236",
        },
        card: {
          light: "#ffffff",
          dark:  "#112840",
        },
        nav: {
          light: "#cadffb",
          dark:  "#0f1f30",
        },
        muted: {
          light: "#65727c",
          dark:  "#94a3b8",
        },
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
      },
    },
  },
  plugins: [],
};
