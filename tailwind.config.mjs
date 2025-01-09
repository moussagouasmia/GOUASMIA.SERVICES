import { Outfit, Ovo } from 'next/font/google';

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
       lighthover: '#fcf4ff',
       darkhover : '#2a004a',
       darkTheme : '#11001F',
      },
      boxShadow: {
        'black' : '4px 4px 0 #000',
        'white' : '4px 4px 0 #fff',

      },
      fontFamily : {
        Outfit : ["outfit", "sans-serif"],
        Ovo: ["ovo","serif"],
      },
      gridTemplateColumns : {
        'auto': 'repeat(auto-fit, minmax(200px, 1fr))'
      }
      
      
    },
  },
  darkMode:'selector',
  plugins: [],
};
