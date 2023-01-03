/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      container: {
        center: true,
      },
      colors: {
        main: '#b6f0ff',
        'main-light': '#ffa1c6',
        'main-middle': '#cd2568',
        'main-drak': '#bb1356',
      },
    },
  },
  plugins: [],
};
