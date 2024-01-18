import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        white: "#FFFFFF",
        "light-gray": "#ECECEC",
        gray: "#B0B0B0",
        "pale-grey": "#F6F6F6",
        black: "#23222",
        "light-green": "#BDCC75",
        "dark-green": "#A1AE5F",
      },
    },
  },
  plugins: [],
};
export default config;
