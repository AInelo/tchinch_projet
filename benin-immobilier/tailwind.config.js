/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        'primary' : '#252F2C',
        'secondary' : '#465A54',
      },

      fontSize: {
        'footerTitleSize': '13px',
        'footerLinkSize': '18px',
      }

    },
  },

  plugins: [],
}


