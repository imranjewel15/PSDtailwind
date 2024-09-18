/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      maxWidth: {
        container: '1170px',
      },
      colors: {
        primary_color: '#0f2f44',
        text_white:'#fefefe',
        text_black:'#222222',
        purple_color:'#8484bf',
        yellow_color: '#ffc712',

      }, 
      fontFamily: {
        ubuntu: ["Ubuntu", "sans-serif"],
        abril: ["Abril Fatface", "sans-serif"],
        opensans: ["Open Sans", "sans-serif"],
      },
      
    },
  },
  plugins: [],
}