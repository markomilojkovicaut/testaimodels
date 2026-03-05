import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        blue: {
          DEFAULT: "#2981e2",
          hover: "#1a6fd4",
          light: "#60a5fa",
          glow: "rgba(41,129,226,0.15)",
        },
        gray: {
          text: "#9CA3AF",
        },
        bg: {
          darkest: "#0b0f14",
          dark: "#0e171e",
          mid: "#12161a",
          card: "#111820",
        },
        border: {
          DEFAULT: "rgba(41,129,226,0.12)",
          subtle: "rgba(255,255,255,0.06)",
        },
      },
      fontFamily: {
        heading: ["Commissioner", "sans-serif"],
        body: ["Quicksand", "sans-serif"],
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-hero": "radial-gradient(ellipse at 50% 0%, rgba(41,129,226,0.15) 0%, transparent 70%)",
      },
      animation: {
        "fade-up": "fadeInUp 0.7s ease forwards",
        "fade-in": "fadeIn 0.7s ease forwards",
        "pulse-glow": "pulseGlow 3s ease-in-out infinite",
        float: "float 4s ease-in-out infinite",
        "spin-slow": "spin-slow 20s linear infinite",
      },
      boxShadow: {
        blue: "0 0 24px rgba(41,129,226,0.3)",
        "blue-lg": "0 0 48px rgba(41,129,226,0.2)",
        card: "0 4px 32px rgba(0,0,0,0.4)",
      },
    },
  },
  plugins: [],
};
export default config;
