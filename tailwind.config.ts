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
        yellow: '#eec200',
        red:'#DE3618',
        bgRed: '#fcebe8',
        custombg: '#f9fafb',
        custombg1:'#edf9f9',
        primary: '#47C1BF',  
        secondary: '#5C6AC4', 
        dark: '#161D25', 
        lightGray: '#959EAD', 
        lightGray2: '#C4CDD5',
        blue: '#006FBB', 
        darkGray: '#212B36', 
        mediumGray: '#5A7184', 
        gray: '#637381', 
        purple: '#43467F',
      },
      animation: {
        'loop-scroll': 'loop-scroll 50s linear infinite',
      },
      keyframes: {
        'loop-scroll': {
          from: { transform: 'translateX(0)' },
          to: { transform: 'translateX(-100%)' },
        }
      }    
    },
  },
  plugins: [],
};

export default config;
