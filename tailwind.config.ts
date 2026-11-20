import type { Config } from "tailwindcss";

export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        void: "#05060f",
        midnight: "#0a1030",
        deep: "#111a47",
        ink: "#eef0ff",
        mist: "#9ba4cc",
        arc: "#4d7cff",
        violet: "#8b5cf6",
      },
      fontFamily: {
        display: ['"Newsreader"', "Georgia", "serif"],
        sans: ['"Instrument Sans"', '"IBM Plex Sans Arabic"', "system-ui", "sans-serif"],
        arabic: ['"IBM Plex Sans Arabic"', "system-ui", "sans-serif"],
      },
    },
  },
  plugins: [],
} satisfies Config;
