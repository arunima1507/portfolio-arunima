const config = {
  darkMode: "class",
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./lib/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#070B17",
        foreground: "#FFFFFF",
        cyan: {
          300: "#67E8F9",
          400: "#22D3EE",
          500: "#06B6D4",
        },
        purple: {
          400: "#A78BFA",
          500: "#8B5CF6",
        },
      },
      fontFamily: {
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
      },
      animation: {
        "pulse-slow": "pulse-slow 6s ease-in-out infinite",
        blink: "blink 1s step-start infinite",
        float: "float 4s ease-in-out infinite",
      },
      keyframes: {
        "pulse-slow": {
          "0%, 100%": { opacity: "0.5", transform: "scale(1)" },
          "50%": { opacity: "0.8", transform: "scale(1.08)" },
        },
        blink: {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-14px)" },
        },
      },
      boxShadow: {
        glow: "0 0 30px rgba(34, 211, 238, 0.25)",
        "glow-lg": "0 0 60px rgba(34, 211, 238, 0.3)",
      },
      backdropBlur: {
        xs: "2px",
      },
    },
  },
  plugins: [],
};

export default config;