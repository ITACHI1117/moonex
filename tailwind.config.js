/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        'background': '#071624',
        'buttonGradient' : '#FFE68F',
        'buttonSecondGradient' : '#E4B40D',
      },
      screens:{
          '90%': '90%'
      }
    },
  },
  plugins: [],
}

