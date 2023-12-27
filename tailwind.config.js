/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["*.html"],
  theme: {
    screens:{
      sm: '576px',
      md: '768px',
      lg: '992px',
      xl: '1200px'
    },
    container:{
      center: true,
    },
    extend: {
      fontFamily:{
        poppims: "'Poppins', sans-serif",
        montserrat: "'Montserrat', sans-serif",
      },
      colors: {
        'primary' : '#FD3D57'
      }
    },
  },
  variants: {
    extand: {
      display: ['group-hover'],
      visibility: ['group-hover'],
    },
  },
  plugins: [require('@tailwindcss/forms')],
}
