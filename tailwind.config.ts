import type { Config } from "tailwindcss";

const config: Config = {
  // presets: [require('twin.macro')],
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic": "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        'green-grad': 'linear-gradient(to bottom, #D9D9D9 50%, #53AE7D 54.8%, #FFFFFF 100%)',
      },
    },
    colors: {
      yellow: "#EAA53E",
      orange: { 900: "#EAA53E", 500: "#EAA53E75", 200: "#EAA53E52"},
      green: { 900:"#019444", 700: "#019443cf" },
      black: { 900: "#000000", 700: "#141414" },
      white: "#FFFFFF",
      red: "#ED1C24",
      purple: "#662D91",
      blue: "#1C75BC",

    },
  },
  plugins: [],
};
export default config;
