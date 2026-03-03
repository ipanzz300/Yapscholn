/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./views/**/*.html",
    "./index.html",
    "./components/**/*.html",
    "./src/**/*.{html,js}",
    "./js/**/*.js"
  ],
  theme: {
    extend: {
      fontFamily: {
        'poppins': ['Poppins', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
