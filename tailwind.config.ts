import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: "1.25rem",
        sm: "1.5rem",
        lg: "2rem",
        xl: "2rem",
        "2xl": "2rem",
      },
      screens: {
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1280px",
        "2xl": "1280px",
      },
    },
    extend: {
      colors: {
        blue: {
          DEFAULT: "#2981e2",
          hover: "#1a6fd4",
          light: "#60a5fa",
          glow: "rgba(41,129,226,0.15)",
        },
        bg: {
          darkest: "#0b0f14",
          dark: "#0e171e",
          mid: "#12161a",
          card: "#111820",
        },
      },
      fontFamily: {
        heading: ["Commissioner", "sans-serif"],
        body: ["Quicksand", "sans-serif"],
      },
      maxWidth: {
        site: "1280px",
      },
      animation: {
        "fade-up": "fadeInUp 0.7s ease forwards",
        "pulse-glow": "pulseGlow 3s ease-in-out infinite",
        float: "float 4s ease-in-out infinite",
      },
      boxShadow: {
        blue: "0 0 24px rgba(41,129,226,0.3)",
        "blue-lg": "0 0 48px rgba(41,129,226,0.2)",
      },
    },
  },
  plugins: [],
};
export default config;
