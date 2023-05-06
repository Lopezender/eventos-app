//Importar firebase y su configuracion
import {db} from '../firebase';

//Importar getFirestore para leer la base de datos
import { collection, query, getDocs} from 'firebase/firestore';

//Leer la coleccion de artistas
const artistas = query(collection(db, "artistas"));

//Leer los documentos de la coleccion de forma asincrona
const querySnapshot = await getDocs(artistas);

let artistas_contenedor = document.getElementById('artistas');

querySnapshot.forEach((doc) => {
  let artista = doc.data()
    artistas_contenedor.innerHTML += `<li>${artista.nombre} - ${artista.país}
        <img src="${artista.Foto}" alt="${artista.nombre}" class="w-48 h-48 rounded-full">
    </li>`;
});