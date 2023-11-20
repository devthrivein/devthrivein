/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['index.html','artikel.html','contact.html', 'about.html', 'pricing.html'],
  theme: {
    container: {
      center: true,
      padding: '16px',
    },
    extend: {
      colors: {
      },
      screens: {
        '2xl': '1320px',
      },
      fontFamily: {
        poppins: "'Poppins', sans-serif",
      },
    },
  },
  plugins: [],
}

