import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./lib/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        dark: {
          DEFAULT: "#050510",
          50: "#0a0a1a",
          100: "#0f0f24",
          200: "#15152e",
          300: "#1a1a38",
          400: "#252545",
          500: "#303055",
        },
        brand: {
          orange: "#E8612D",
          "orange-light": "#FF7A45",
          "orange-dark": "#C94E1E",
          "orange-soft": "#FFF1EB",
          navy: "#14304D",
          "navy-light": "#1E4A6E",
          "navy-dark": "#0C1F33",
          "navy-soft": "#E8EEF4",
        },
        accent: {
          amber: "#F59E0B",
          coral: "#F87171",
          cyan: "#06B6D4",
          emerald: "#10B981",
          pink: "#EC4899",
          violet: "#8B5CF6",
        },
      },
      fontFamily: {
        poppins: ["var(--font-poppins)", "Poppins", "sans-serif"],
      },
      animation: {
        float: "float 6s ease-in-out infinite",
        "float-delayed": "float 6s ease-in-out 3s infinite",
        "float-slow": "float 8s ease-in-out infinite",
        "pulse-slow": "pulse 4s ease-in-out infinite",
        "spin-slow": "spin 20s linear infinite",
        glow: "glow 2s ease-in-out infinite alternate",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-20px)" },
        },
        glow: {
          "0%": { opacity: "0.4" },
          "100%": { opacity: "0.8" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
