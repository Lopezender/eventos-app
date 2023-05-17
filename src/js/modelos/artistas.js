//Importar firebase y su configuracion
import {db} from '../firebase';

//Importar getFirestore para leer la base de datos
import { doc,collection, setDoc, query, deleteDoc, getDocs} from 'firebase/firestore';

//Leer la coleccion de artistas
const artistas = query(collection(db, "artistas"));

//Leer los documentos de la coleccion de forma asincrona
const querySnapshot = await getDocs(artistas);

let artistas_contenedor = document.getElementById('artistas');

querySnapshot.forEach((doc) => {
  let artista = doc.data()
  let id = doc.id;
  
  artistas_contenedor.innerHTML += `
    <li class="">
        <img src="${artista.foto}" alt="${artista.nombre}" class="">
    
        <div class="flex-1 flex flex-col">
          <span>${artista.nombre}</span>  
          <span class="text-sm text-red-700">${artista.pais} | ${artista.genero}</span>  

        </div>

        <div id="tareas">
          <a href="editar-artista.html?id=${id}" >Editar</a>
          <a data-doc="${id}" id="eliminar" href="#">Eliminar</a>
        </div> 
    </li>`;
});

if(querySnapshot.size == 0){
  artistas_contenedor.innerHTML = `
    <li class="">
        <div class="flex-1 text-center flex flex-col">
          <span>No hay artistas</span>
        </div>
    </li>`;
}



//Agregar el evento click a todos los botones de eliminar
const eliminar = document.querySelectorAll('#eliminar');

eliminar.forEach((item) => {
  item.addEventListener('click', eliminarArtista);
});

//Function to delete artist
function eliminarArtista(e){
  //Prevent the default action
  e.preventDefault();

  //Usar sweetalert para confirmar la accion
  Swal.fire({
    title: "¿Estas seguro?",
    text: "Una vez eliminado, no podras recuperar este artista",
    icon: "warning",
    showCancelButton: true,
    confirmButtonColor: '#DD6B55',
    confirmButtonText: 'Si, borrar!',
    cancelButtonText: "No, cancelar!",
    closeOnConfirm: false,
    closeOnCancel: false
  })
  .then((result) => {
    //Si el usuario confirma
    if (result.isConfirmed) {
      //Buscar el id del artista a eliminar
      const id = e.target.dataset.doc;  
      
      //Buscar el documento en la coleccion
      const docRef = doc(db, "artistas", id);

      //Eliminar el documento
      deleteDoc(docRef)
      .then(() => {
        //Mostar un mensaje de confirmacion
        Swal.fire({
          title: "Eliminado!",
          text: "El artista ha sido eliminado.",
          icon: "success",
        })
        .then(() => {
          //Redireccionar a artistas.html
          window.location.href = "artistas.html";
        })
      })
    }
  })
}

//Agregar el evento click al boton de crear un artista
const btnCrear = document.getElementById('crear');

btnCrear.addEventListener('click', crearArtista);

function crearArtista(){
  Swal.fire({
    title: 'Crear artista',
    html: `
      <input id="nombre" class="swal2-input" placeholder="Nombre">
      <input id="pais" class="swal2-input" placeholder="Pais">
      <input id="genero" class="swal2-input" placeholder="Genero">
      <input id="foto" class="swal2-input" placeholder="Foto">
    `,
    confirmButtonText: 'Crear',
    focusConfirm: false,
    preConfirm: () => {
      const nombre = Swal.getPopup().querySelector('#nombre').value;
      const pais = Swal.getPopup().querySelector('#pais').value;
      const genero = Swal.getPopup().querySelector('#genero').value;
      const foto = Swal.getPopup().querySelector('#foto').value;
      if (!nombre || !pais || !genero || !foto) {
        Swal.showValidationMessage(`Por favor, llena todos los campos`)
      }
      return { nombre: nombre, pais: pais, genero: genero, foto: foto }
    }
  }).then((result) => {
    if (result.isConfirmed) {
      //Agregar el artista a la base de datos
      addArtist(result.value);
    }
  })
}

//Funcion para agregar un artista en la base de datos
function addArtist(artista){
  //Agregar un nuevo documento con un ID aleatorio en la coleccion de artistas
  const docRef = doc(collection(db, "artistas"));

  //Definit el objeto que se va a guardar en la base de datos
  setDoc(docRef, artista)
  .then(() => {
    //Mostrar un mensaje de exito
    Swal.fire({
      title: "Creado!",
      text: "El artista ha sido creado.",
      icon: "success",
    })
    .then(() => {
      //Redireccionar a artistas.html
      window.location.href = "artistas.html";
    })
  })
}