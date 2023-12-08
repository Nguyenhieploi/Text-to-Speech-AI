/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./login.html"
  ],
  theme: {
    extend: {
      fontFamily:{
        outfit:["Outfit",'san-serif'],
        playfair:["Playfair Display",'serif'],
        PlusJakarta:["Plus Jakarta Sans",'sans-serif']
      },
      screens: {
        'desktop': {'max': '1200px'},
        'tablet': {'min': '768px', 'max': '1024px'}
      },
    },
  },
  plugins: [],
}