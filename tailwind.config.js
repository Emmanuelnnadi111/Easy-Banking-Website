/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./assets/** .html', '*.html'],
  theme: {  
    
    extend: {

       fontFamily: {
        'Public-Sans': ['Public-Sans', 'sans-serif'],
        'Merriweather': ['Merriweather', 'serif'],
      },backgroundImage: {
        'mobile-bg': "url('/assets/images/bg-intro-mobile.svg')",
        'desktop-bg': "url('/assets/images/bg-intro-desktop.svg')",
      }
      
    },
     colors: {
        darkBlue: '#2d314d',
        limeGreen: '#31d35c',
        brightCyan: '#2bb7da',
         /* Neutral */
        grayishBlue: '#9698a6',
        lightGrayishBlue: '#f3f4f6',
        veryLightGray: '#fafafa',
        White: '#ffffff',
      }
   
  },
  plugins: [],
}

