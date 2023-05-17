//Importar firebase y su configuracion
import {db} from '../firebase';

//Importar getFirestore para leer la base de datos
import { doc, updateDoc, onSnapshot } from 'firebase/firestore';

//Leer los datos del documento con el id pasado por el url
const queryString = window.location.search;

const urlParams = new URLSearchParams(queryString);

const id = urlParams.get('id');
console.log(id);
const docRef = doc(db, "artistas", id);

onSnapshot(docRef, (doc) => {
  if (doc.exists()) {
    let artista = doc.data();
    document.getElementById('nombre').value = artista.nombre;
    document.getElementById('pais').value = artista.país;
    document.getElementById('genero').value = artista.genero;
    document.getElementById('foto').value = artista.Foto;
  } else {
    console.log("No existe el documento");
  }
});

//Buscar el boton de guardar
const btnGuardar = document.getElementById('guardar');

//Agregar el evento click al boton guardar
btnGuardar.addEventListener('click', guardar);

//Function para guardar los datos del artista

function guardar(){
  const nombre = document.getElementById('nombre').value;
  const pais = document.getElementById('pais').value;
  const genero = document.getElementById('genero').value;
  const foto = document.getElementById('foto').value;

  const docRef = doc(db, "artistas", id);

  // actualizar en firebase el documento con el id
  return updateDoc(docRef, {
    nombre: nombre,
    pais: pais,
    genero: genero,
    foto: foto
  })
  .then(() => {
    window.location.href = "artistas.html";
  })
  .catch((error) => {
    // The document probably doesn't exist.
    console.error("Error: ", error);
  });
}