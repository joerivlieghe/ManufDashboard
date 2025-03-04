/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        volvo: {
          blue: '#003057',
          lightblue: '#1c6bba',
          gray: '#53565a',
          lightgray: '#f5f5f5',
          yellow: '#ffd200'
        }
      },
      fontFamily: {
        volvo: ['Volvo Novum', 'Arial', 'sans-serif']
      }
    },
  },
  plugins: [],
};