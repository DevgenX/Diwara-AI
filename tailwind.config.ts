import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        bg:       "#05060f",
        surface:  "#0c0e1e",
        surface2: "#111328",
        faint:    "#1e2035",
        accent:   "#6366f1",
        accent2:  "#818cf8",
        accent3:  "#38bdf8",
        muted:    "#94a3b8",
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
        mono: ["var(--font-jetbrains)", "monospace"],
      },
      animation: {
        "buddy-float": "buddyFloat 6s ease-in-out infinite",
        "speech-float": "speechFloat 6s ease-in-out infinite",
        pulse2: "pulse2 2s ease-in-out infinite",
      },
      keyframes: {
        buddyFloat: {
          "0%,100%": { top: "80px",  left: "60px"  },
          "25%":     { top: "200px", left: "340px" },
          "50%":     { top: "300px", left: "560px" },
          "75%":     { top: "120px", left: "480px" },
        },
        speechFloat: {
          "0%,20%":   { top: "42px",  left: "110px", opacity: "1" },
          "30%":      { top: "42px",  left: "110px", opacity: "0" },
          "50%,60%":  { top: "165px", left: "390px", opacity: "0" },
          "70%,80%":  { top: "165px", left: "390px", opacity: "1" },
          "90%":      { top: "165px", left: "390px", opacity: "0" },
          "100%":     { top: "42px",  left: "110px", opacity: "0" },
        },
        pulse2: {
          "0%,100%": { opacity: "1",   transform: "scale(1)"   },
          "50%":     { opacity: "0.5", transform: "scale(0.8)" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
