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
        "bg-main": "#353535",
      },
      fontSize: {
        'md': '16px',
        "3.2xl": "32px",
        "3.4xl": "34px",
        "3.6xl": "36px",
        "3.8xl": "38px",
        "4.0": "40px",
        "5.4xl": "54px"

      },
    },
  },
  plugins: [],
};
