/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    '*.php',
    './inc/*.php',
    './src/**/*.php',
    './template-parts/**/*.php'
  ],
  theme: {
    container: {
      center: true,
      padding: '1rem',
    },
    extend: {
      fontFamily: {
        'sans': '"Rubik", sans-serif',
      },
      colors: {
        green: {
          lighter: '#9FC3AA',
          light: '#3f8755',
          DEFAULT: '#007036',
          dark: '#2d4f38'
        }
      }
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}
