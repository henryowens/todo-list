import { Config } from "tailwindcss";

const config: Config = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        charcoal: {
          50: "#FCFCFC",
          100: "#FAFAFA",
          200: "#F6F6F6",
          300: "#D6D6D6",
          400: "#B8B8B8",
          500: "#999999",
          600: "#7A7A7A",
          700: "#5C5C5C",
          800: "#3D3D3D",
          900: "#1F1F1F",
          950: "#0F0F0F",
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
        secondary: {
          DEFAULT: "#50FD90",
          50: "#FFFFFF",
          100: "#F1FFF6",
          200: "#C9FEDD",
          300: "#A1FEC3",
          400: "#78FDAA",
          500: "#50FD90",
          600: "#19FC6D",
          700: "#02DA52",
          800: "#02A33D",
          900: "#016B28",
          950: "#01501E",
        },
      },
    },
  },
  plugins: [],
};

export default config;
