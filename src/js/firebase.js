// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore} from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCHSv6zE13tRaii-dhVPyqqzqfL-gxSOPk",
  authDomain: "eventos-online-max.firebaseapp.com",
  projectId: "eventos-online-max",
  storageBucket: "eventos-online-max.appspot.com",
  messagingSenderId: "558404925596",
  appId: "1:558404925596:web:fdac44cd7cf238679d5559"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);

//conectar a la base de datos
export const db = getFirestore(app);