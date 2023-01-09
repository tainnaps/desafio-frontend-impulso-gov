/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      hueRotate: {
        '243': '243deg'
      }
    },
    colors: {
      'blue': '#00BCD4',
      'black': '#000000',
      'white': '#FFFFFF',
      'dark-gray': '#363636'
    }
  },
  plugins: [],
};
