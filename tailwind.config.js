/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./public/**/*.{html,js}",
    "index.html",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "welcome-jumbotron": "url('/images/jumbotron-t-shirts.webp')",
        "welcome-jumbotron-alfasarana":
            "url('./public/images/jumbotron-t-shirts-alfasarana.webp')",
      },
    }
  },
  plugins: [],
}
