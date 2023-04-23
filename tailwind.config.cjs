/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}","*.html","*.css",
  "./node_modules/flowbite/**/*.js" // Esta linea se agrega para que tailwind cargue la paquete Flowbite
],
  theme: {
    extend: {},
  },
  plugins: [
    require('flowbite/plugin') //Esta linea se agrega para cargar la declaración del plugin Flowbite
  ],
}