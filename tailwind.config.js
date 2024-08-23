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
      },
      content: {
        'left-caret': 'url("data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20fill%3D%22none%22%20viewBox%3D%220%200%2024%2024%22%20stroke-width%3D%221.5%22%20stroke%3D%22white%22%20class%3D%22%22%3E%0A%20%20%3Cpath%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%20d%3D%22m8.25%204.5%207.5%207.5-7.5%207.5%22%20%2F%3E%0A%3C%2Fsvg%3E")',
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}
