import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
     colors: {
      "light-active": ": #F2DAC2",
      "active": "#977656",
      "dark": "#050505",
     },
     backgroundImage: {
      'background-image': "url('assets/bg-image.jpg')",
     },
     backgroundColor: {
      "dark": '#050505',
     }
    },
  },
  plugins: [],
};
export default config;
