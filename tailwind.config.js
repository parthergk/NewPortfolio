/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      screens: {
        'xl-h800': { 'raw': '(min-width: 1280px) and (min-height: 800px)' }, // Custom screen with width and height constraint
      },
      backgroundColor: {
        "main": "#363636",
        'custom-gray': 'rgb(41, 41, 41)',
      },
      fill: {
        'custom-gray': 'rgb(41, 41, 41)', // Add your custom fill color
      },
      fontSize: {
        'md': '16px',
        "3.2xl": "32px",
        "3.4xl": "34px",
        "3.6xl": "36px",
        "3.8xl": "38px",
        "4.0": "40px",
        "5.4xl": "54px",
        'responsive-h1': 'clamp(148px, 14vw, 180px)',
        'responsivem-h1': 'clamp(115px, 15vw, 148px)',
        'responsive-span': 'clamp(36px, 3vw, 48px)',
      },
      objectPosition: {
        'left-center': 'left center',
      },
      padding: {
        '500vh': '500vh',
        '400vh': '400vh',
        '70vh' : '70vh',
      },
      translate: {
        '-2.5': '-10px', // Custom value for -10px translation
      },
      transitionDuration: {
        '400': '400ms', // Custom duration for 0.4s
      },
      transitionTimingFunction: {
        'custom-bezier': 'cubic-bezier(0.76, 0, 0.24, 1)',
      },
    },
  },
  plugins: [
  ],
};
