/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    colors: {
      'blue': '#00BCD4',
      'black': '#1F1F1F',
      'white': '#FFFFFF',
      'gray-1': '#606E78',
      'gray-2': '#A6B5BE',
      'gray-3': '#EFF5F9',
    },
    fontFamily: {
      display: ['Inter', 'sans-serif'],
    },
  },
  plugins: [],
};
