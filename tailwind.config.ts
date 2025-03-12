import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        primary: "var(--primary)",
        secondary: {
          DEFAULT: "var(--secondary)",
          dark: "var(--secondary-dark)",
          light: "var(--secondary-light)",
        },
        lightBlue: "var(--light-blue)",
        disabledBg: "#B0B0B0",
      },
      boxShadow: {
        primary: "0px 20px 80px 0px",
      },
    },
    animation: {
      "bounce-original": "bounceOriginal 1s infinite",
      "bounce-delayed": "bounceDelayed 1s infinite",
      "bounce-smooth": "bounceSmooth 1s ease-in-out",
    },
    keyframes: {
      bounceOriginal: {
        "0%, 100%": {
          transform: "translateY(0)",
        },
        "50%": {
          transform: "translateY(-5px)",
        },
      },
      bounceDelayed: {
        "0%, 25%": { transform: "translateY(0)" },
        "75%": { transform: "translateY(-5px)" },
        "100%": { transform: "translateY(0)" },
      },
      bounceSmooth: {
        "0%, 100%": { transform: "translateY(0)", easing: "ease-out" },
        "50%": { transform: "translateY(-10px)", easing: "ease-in" },
      },
    },
  },
  variants: {
    extend: {
      backgroundColor: ["disabled"],
    },
  },
  plugins: [],
} satisfies Config;
