/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.astro', './src/**/*.html', './src/**/*.js', './src/**/*.tsx'],
  theme: {
    extend: {
      colors: {
        utemBlue: '#005DA4',
        utemIndigo: '#4C1D95'
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'sans-serif']
      }
    }
  },
  plugins: []
};
