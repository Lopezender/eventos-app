import"./carrousel-b1dc49a4.js";import{R as s,_ as o,f as n,d as a}from"./firebase-0b008f5d.js";const l=s(o(a,"eventos")),c=await n(l);let i=document.getElementById("eventos");c.forEach(t=>{let e=t.data();i.innerHTML+=`<li> <p class="text-center font-serif text-black mt-6 font-extrabold bg-red-500"> ${e.nombre}</p>
    <div class="container">
    <img src="${e.ímagen}" alt="${e.nombre}" class="h-auto max-w-full ml-auto mx-auto mt-8 w-full">
       </div>

       <div class="titulo bg-green-400">
       <span class="font-medium top-20 left-16"> ${e.sede_id}</span>
       <p class="font-medium top-20 left-16"> ${e.hora}</p>
       <p class="font-medium top-20 left-16"> ${e.descripción}</p>
       </div>

       <div class=" text-blue-600 flex bg-green-400">
       <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418" />
  <span class="flex font-medium top-20 left-16">Público</span>
</svg>
</div>

    </li>`});
