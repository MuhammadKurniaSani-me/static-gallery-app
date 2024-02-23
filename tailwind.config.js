/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./public/**/*.{html,js}",
    "index.html",
    "./node_modules/flowbite/**/*.js"
  ],
  theme: {
    extend: {
      backgroundImage: {
        "welcome-jumbotron": "url('images/jumbotron-t-shirts.webp')",
        "welcome-jumbotron-alfasarana":
            "url('images/jumbotron-t-shirts-alfasarana.webp')",
      },
    }
  },
  plugins: [
    require('flowbite/plugin')
  ]
}
