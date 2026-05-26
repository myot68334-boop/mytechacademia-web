import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./data/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        midnight: {
          50: "#f4f7fb",
          100: "#e6edf8",
          200: "#c8d6ee",
          300: "#a4b9e2",
          400: "#7a95d5",
          500: "#5a79c9",
          600: "#455fa8",
          700: "#384d87",
          800: "#2c3d6b",
          900: "#1f2c4c",
          950: "#141d33",
        },
        aurora: {
          DEFAULT: "#7c9bff",
          100: "#f1f5ff",
          200: "#dbe5ff",
          300: "#b7caff",
          400: "#95b0ff",
          500: "#7c9bff",
          600: "#5476f3",
          700: "#405dd3",
          800: "#3349ab",
          900: "#293a88",
        },
        blush: {
          100: "#f9ebf2",
          300: "#eecadd",
          500: "#d993c1",
          700: "#ba6aa1",
        },
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "-apple-system", "BlinkMacSystemFont", "Segoe UI", "Helvetica", "Arial", "sans-serif"],
        display: ["Clash Display", "Inter", "system-ui", "sans-serif"],
      },
      backgroundImage: {
        "grid-overlay": "radial-gradient(circle at 25% 25%, rgba(124, 155, 255, 0.18) 0, rgba(124, 155, 255, 0) 50%), radial-gradient(circle at 75% 20%, rgba(217, 147, 193, 0.2) 0, rgba(217, 147, 193, 0) 55%)",
      },
      boxShadow: {
        glow: "0 20px 50px rgba(20, 29, 51, 0.35)",
        "inner-glow": "inset 0 1px 0 rgba(255, 255, 255, 0.6)",
      },
      keyframes: {
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(24px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "fade-in": {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        "pulse-soft": {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0.85" },
        },
      },
      animation: {
        "fade-up": "fade-up 0.9s ease-out forwards",
        "fade-in": "fade-in 1s ease-out forwards",
        "pulse-soft": "pulse-soft 6s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};

export default config;
