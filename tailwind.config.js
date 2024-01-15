/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    screens: {
    xxs: "300px",  
    xs: "480px",
    sm :"640px",
    md: "768px",
    lg: "1024px",
    xl: "1280px",
    xxl: "1536px"
     
    },

    extend: {
   maxWidth: {
    container: "1320px"
    },
    backgroundColor : {
      headerbg : "rgba(40, 40, 40, 1)",
      nvbg : "rgba(244, 4, 4, 1)",
      cmbg : "rgba(244, 4, 4, 1)",
      wh : "rgba(240, 240, 240, 1)",
      gr : "rgba(0, 0, 0, 0.6)",
      lr : "rgba(255, 255, 255, 0.5)",
      fot : "rgba(31, 31, 31, 1)",
      "lb" : "rgba(40, 40, 40, 1)",
      "hd" : "rgba(92, 106, 146, 1)",

      

    },
    fontFamily: {
      'pops': ['Poppins', 'sans-serif'],
      
    },
     colors: {
    'bl' : "rgba(0, 138, 216, 1)",
    'gr' : "rgba(0, 152, 24, 1)" ,
     "vi" : "rgba(152, 0, 119, 1)",
     "gra" : "rgba(108, 108, 108, 1)"
   
    },
 
   
    },
  },
  plugins: [],
}
