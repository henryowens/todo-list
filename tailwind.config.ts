import { Config } from "tailwindcss";

const config: Config = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        slate: {
          200: "#f6f6f6",
        },
      },
    },
  },
  plugins: [],
};

export default config;
