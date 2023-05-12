import"./carrousel-b1dc49a4.js";import{R as s,_ as r,f as o,d as e}from"./firebase-0b008f5d.js";const i=s(r(e,"artistas")),n=await o(i);let l=document.getElementById("artistas");n.forEach(a=>{let t=a.data();l.innerHTML+=`<li>${t.nombre} - ${t.país}
        <img src="${t.Foto}" alt="${t.nombre}" class="w-48 h-48 rounded-full">
    </li>`});
