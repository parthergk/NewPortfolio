/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundColor: {
        "main": "#343434",
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
        'responsive-h1': 'clamp(148px, 12vw, 162px)',
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
    },
  },
  plugins: [],
};
