/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    '*.php',
    './inc/*.php',
    './src/**/*.php',
    './template-parts/**/*.php'
  ],
  theme: {
    extend: {
      fontFamily: {
        'sans': '"Rubik", sans-serif',
      },
      colors: {
        green: {
          DEFAULT: '#007036'
        }
      }
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}
