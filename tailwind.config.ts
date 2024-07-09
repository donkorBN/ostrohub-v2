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
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
    colors: {
      yellow: "#EAA53E",
      green: "#019444",
      black: { 900: "#000000", 700:"#141414" },
      white: "#FFFFFF",
      red: "#ED1C24",
      purple: "#662D91",
      blue: "#1C75BC",
      
    },
  },
  plugins: [],
};
export default config;
