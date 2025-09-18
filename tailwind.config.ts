/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      screens: {
        'xs': '370px',
      },
      colors: {
        gray: {
          100: '#FAFAFA',
          200: '#96949A4D',
          300: '#96949A',
          400: '#737373',
          500: '#404040',
        },
      },
      wordSpacing: {
        'tight': '-4px',
        'normal': '0px',
        'wide': '4px',
      },
    },
  },
  plugins: [
    function({ addUtilities }) {
      const wordSpacingUtilities = {
        '.word-spacing-tight': {
          'word-spacing': '-5px',
        },
        '.word-spacing-normal': {
          'word-spacing': '0px',
        },
        '.word-spacing-wide': {
          'word-spacing': '4px',
        },
      }
      addUtilities(wordSpacingUtilities)
    }
  ],
};
