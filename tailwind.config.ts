import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        gold: {
          DEFAULT: "#c9a96e",
          light: "#e8c98a",
          dim: "#a07840",
        },
        cream: "#FFF5EF",
        "dark-brown": "#1a0d05",
        "text-dark": "#332000",
        "text-mid": "#4a3828",
        accent: "#DE8B23",
      },
      fontFamily: {
        cormorant: ["var(--font-cormorant)", "Cormorant Garamond", "Georgia", "serif"],
        raleway: ["var(--font-raleway)", "Raleway", "sans-serif"],
      },
    },
  },
  plugins: [],
};

export default config;
