import { Config } from "tailwindcss";

const config: Config = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        slate: {
          200: "#f6f6f6",
        },
        primary: {
          DEFAULT: "#6357B1",
          50: "#D7D4EB",
          100: "#CAC6E5",
          200: "#B1ABD8",
          300: "#978FCB",
          400: "#7D73BE",
          500: "#6357B1",
          600: "#4C428E",
          700: "#383068",
          800: "#231E41",
          900: "#0E0D1B",
          950: "#040408",
        },
      },
    },
  },
  plugins: [],
};

export default config;
