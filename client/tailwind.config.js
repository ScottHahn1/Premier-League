/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        darkpurple: 'rgb(56, 0, 60)',
        pink: 'rgb(233, 0, 82)'
      },
    },
  },
  plugins: [],
};