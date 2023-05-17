import"./carrousel-a47c82c6.js";import{R as c,_ as s,f as d,m as r,g as f,w as u,d as o}from"./firebase-0d16ecc9.js";const m=c(s(o,"artistas")),n=await d(m);let l=document.getElementById("artistas");n.forEach(e=>{let t=e.data(),a=e.id;l.innerHTML+=`
    <li class="">
        <img src="${t.foto}" alt="${t.nombre}" class="">
    
        <div class="flex-1 flex flex-col">
          <span>${t.nombre}</span>  
          <span class="text-sm text-red-700">${t.pais} | ${t.genero}</span>  

        </div>

        <div id="tareas">
          <a href="editar-artista.html?id=${a}" >Editar</a>
          <a data-doc="${a}" id="eliminar" href="#">Eliminar</a>
        </div> 
    </li>`});n.size==0&&(l.innerHTML=`
    <li class="">
        <div class="flex-1 text-center flex flex-col">
          <span>No hay artistas</span>
        </div>
    </li>`);const p=document.querySelectorAll("#eliminar");p.forEach(e=>{e.addEventListener("click",h)});function h(e){e.preventDefault(),Swal.fire({title:"¿Estas seguro?",text:"Una vez eliminado, no podras recuperar este artista",icon:"warning",showCancelButton:!0,confirmButtonColor:"#DD6B55",confirmButtonText:"Si, borrar!",cancelButtonText:"No, cancelar!",closeOnConfirm:!1,closeOnCancel:!1}).then(t=>{if(t.isConfirmed){const a=e.target.dataset.doc,i=r(o,"artistas",a);f(i).then(()=>{Swal.fire({title:"Eliminado!",text:"El artista ha sido eliminado.",icon:"success"}).then(()=>{window.location.href="artistas.html"})})}})}const w=document.getElementById("crear");w.addEventListener("click",g);function g(){Swal.fire({title:"Crear artista",html:`
      <input id="nombre" class="swal2-input" placeholder="Nombre">
      <input id="pais" class="swal2-input" placeholder="Pais">
      <input id="genero" class="swal2-input" placeholder="Genero">
      <input id="foto" class="swal2-input" placeholder="Foto">
    `,confirmButtonText:"Crear",focusConfirm:!1,preConfirm:()=>{const e=Swal.getPopup().querySelector("#nombre").value,t=Swal.getPopup().querySelector("#pais").value,a=Swal.getPopup().querySelector("#genero").value,i=Swal.getPopup().querySelector("#foto").value;return(!e||!t||!a||!i)&&Swal.showValidationMessage("Por favor, llena todos los campos"),{nombre:e,pais:t,genero:a,foto:i}}}).then(e=>{e.isConfirmed&&v(e.value)})}function v(e){const t=r(s(o,"artistas"));u(t,e).then(()=>{Swal.fire({title:"Creado!",text:"El artista ha sido creado.",icon:"success"}).then(()=>{window.location.href="artistas.html"})})}
