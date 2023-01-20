/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      container: {
        center: true,
      },
      spacing: {
        '1/3': '33.333333%',
        full: '100%',
        500: '500px',
        50: '50px',
      },
      colors: {
        main: '#ff4182',
        sub: '#f8dbe5',
        kakao: '#FEE500',
      },
      boxShadow: {
        default: '0 0 40px -10px rgb(0 0 0 / 0.25);',
      },
      minHeight: {
        960: '960px',
      },
    },
  },
  plugins: [require('daisyui')],
  daisyui: {
    themes: [
      {
        light: {
          ...require('daisyui/src/colors/themes')['[data-theme=light]'],
          primary: '#ff4182',
          secondary: '#f3f4f6',
          'secondary-content': '#000',
          'secondary-focus': '#eee',
          accent: '#FEE500',
        },
        // mytheme: {
        // primary: '#ff4182',
        // secondary: '#D926A9',
        // accent: '#1FB2A6',
        // neutral: '#191D24',
        // 'base-100': '#2A303C',
        // info: '#3ABFF8',
        // success: '#36D399',
        // warning: '#FBBD23',
        // error: '#F87272',
        // },
      },
    ],
    darkTheme: 'dark',
  },
};
