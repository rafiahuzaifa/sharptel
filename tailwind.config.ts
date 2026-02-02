import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}", // ← add if using src folder
  ],

  theme: {
    extend: {
      colors: {
        primary: {
          50:  "#fef2f2",
          100: "#fee2e2",
          200: "#fecaca",
          300: "#fca5a5",
          400: "#f87171",
          500: "#ef4444",
          DEFAULT: "#ef4444",
          600: "#dc2626",
          700: "#b91c1c",
          800: "#991b1b",
          900: "#7f1d1d",
        },
        bg: "#ffffff",
        text: {
          DEFAULT: "#111827",
          secondary: "#4b5563",
        },
      },

      boxShadow: {
        glass: "0 8px 32px rgba(239, 68, 68, 0.08)",
        card: "0 10px 30px rgba(0,0,0,0.06)",
      },

      borderRadius: {
        "4xl": "2rem",
      },
    },
  },

  plugins: [],
};

export default config;