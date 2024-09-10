/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fill: {
        'custom-gray': 'rgb(41, 41, 41)', // Add your custom fill color
      },
      backgroundColor: {
        "bg-main": "#353535",
        'custom-gray': 'rgb(41, 41, 41)',
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
      },
    },
  },
  plugins: [],
};
