/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        gray: {
          100: '#FAFAFA',
          200: '#96949A4D',
          300: '#96949A',
          400: '#737373',
          500: '#404040',
        },
      },
    },
  },
  plugins: [],
};
