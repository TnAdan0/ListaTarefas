/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: 'jit',
  darkMode: 'class',
  content: ["./src/**/*.{html,js,php,css}"],
  theme: {
    extend: {
      colors:{
        VeryDarkDesaturatedBlue: '#25273C',
        VeryLightGrayishBlue: '#E4E5F1',
      },
    },
  },
  plugins: [],

}

