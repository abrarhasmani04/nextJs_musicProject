

import type { Config } from "tailwindcss";

const config: Config = {
  // 1. Specify where your components live so Tailwind can tree-shake unused styles
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    // Include this line if you use the 'src' directory structure:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],

  darkMode: "class",
  theme: {
    extend: {

      animation: {
        spotlight: "spotlight 2s ease .75s 1 forwards",
      },
      
      colors: {
        brand: {
          50: "#f5f7fa",
          900: "#1e293b",
        },
      },
  

    keyframes:{
      spotlight:{
        "0%":{
          opacity:0,
          transform: "translate(-72%, -62%) scale(0.5)",
        },

        "100%": {
          opacity: 1,
          transform: "translate(-50%,-40%) scale(1)",
        },

      },
    },
  },
  },
  plugins: [],
};

export default config;
