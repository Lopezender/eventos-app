let carrousel = document.getElementById('carrousel');

carrousel.innerHTML = `<div id="indicators-carousel" class="relative" data-carousel="slide">
<div class="relative h-56 overflow-hidden md:h-96">
<!-- Item 1 -->
<div class="hidden duration-700 ease-in-out" data-carousel-item="active">
  <img src="./src/imagenes/ghostemane.jpg" class="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
    alt="...">
  <!-- Text -->
  <div
    class="absolute bottom-0 left-0 z-20 flex flex-col items-start justify-center w-full h-1/2 px-4 pb-4 text-white bg-gradient-to-t from-black/50">
    <h2 class="text-2xl font-bold">Ghostemane</h2>
    <p class="text-sm"> Incio de concierto, 25 de Mayo</p>
  </div>
</div>
<!-- Item 2 -->
<div class="hidden duration-700 ease-in-out" data-carousel-item>
  <img src="./src/imagenes/foto2.jpg" class="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
    alt="...">
  <!-- Text -->
  <div
    class="absolute bottom-0 left-0 z-20 flex flex-col items-start justify-center w-full h-1/2 px-4 pb-4 text-white bg-gradient-to-t from-black/50">
    <h2 class="text-2xl font-bold">Evento 2</h2>
    <p class="text-sm"> Inicio de concierto, 30 de mayo </p>
  </div>
</div>
<!-- Item 3 -->
<div class="hidden duration-700 ease-in-out" data-carousel-item>
  <img src="./src/imagenes/foto3.jpg" class="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
    alt="...">
  <!-- Text -->
  <div
    class="absolute bottom-0 left-0 z-20 flex flex-col items-start justify-center w-full h-1/2 px-4 pb-4 text-white bg-gradient-to-t from-black/50">
    <h2 class="text-2xl font-bold">Evento 3</h2>
    <p class="text-sm"> Inicia de concierto, 20 Mayo</p>
  </div>
</div>
<!-- Item 4 -->
<div class="hidden duration-700 ease-in-out" data-carousel-item>
  <img src="./src/imagenes/f4.jpg" class="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
    alt="...">
  <!-- Text -->
  <div
    class="absolute bottom-0 left-0 z-20 flex flex-col items-start justify-center w-full h-1/2 px-4 pb-4 text-white bg-gradient-to-t from-black/50">
    <h2 class="text-2xl font-bold"> Jon Z </h2>
    <p class="text-sm"> Inicio de concierto, 19 Mayo</p>
  </div>
</div>

<!-- Item 5 -->
<div class="hidden duration-700 ease-in-out" data-carousel-item>
  <img src="./src/imagenes/ft5.jpg" class="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 "
    alt="...">
  <!-- Text -->
  <div
    class="absolute bottom-0 left-0 z-20 flex flex-col items-start justify-center w-full h-1/2 px-4 pb-4 text-white bg-gradient-to-t from-black/50">
    <h2 class="text-2xl font-bold">Evento 5</h2>
    <p class="text-sm"> Inicio de concierto, 05 de Junio</p>
  </div>
</div>
</div>
<!-- Slider indicators -->
<div class="absolute z-30 flex space-x-3 -translate-x-1/2 bottom-5 left-1/2">
<button type="button" class="w-3 h-3 rounded-full" aria-current="true" aria-label="Slide 1"
  data-carousel-slide-to="0"></button>
<button type="button" class="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 2"
  data-carousel-slide-to="1"></button>
<button type="button" class="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 3"
  data-carousel-slide-to="2"></button>
<button type="button" class="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 4"
  data-carousel-slide-to="3"></button>
<button type="button" class="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 5"
  data-carousel-slide-to="4"></button>
</div>
<!-- Slider controls -->
<button type="button"
class="absolute top-0 left-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
data-carousel-prev>
<span
  class="inline-flex items-center justify-center w-8 h-8 rounded-full sm:w-10 sm:h-10 bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
  <svg aria-hidden="true" class="w-5 h-5 text-white sm:w-6 sm:h-6 dark:text-gray-800" fill="none"
    stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"></path>
  </svg>
  <span class="sr-only">Previous</span>
</span>
</button>
<button type="button"
class="absolute top-0 right-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
data-carousel-next>
<span
  class="inline-flex items-center justify-center w-8 h-8 rounded-full sm:w-10 sm:h-10 bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
  <svg aria-hidden="true" class="w-5 h-5 text-white sm:w-6 sm:h-6 dark:text-gray-800" fill="none"
    stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
  </svg>
  <span class="sr-only">Next</span>
</span>
</button>
</div>`;

