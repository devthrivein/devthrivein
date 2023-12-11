/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['index.html','artikel.html','contact.html', 'about.html', 'pricing.html', 'campaign.html', 'article-page1.html', 'faq.html', 'artikel-page1.html','artikel-page2.html', 'artikel-page3.html','tac.html','campaign-page1.html'],
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
  plugins: [
     require('tailwindcss-animated')
  ],
}

