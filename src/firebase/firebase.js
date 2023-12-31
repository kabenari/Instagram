import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";
import {getFirestore} from "firebase/firestore";
import {getStorage} from "firebase/storage"



const firebaseConfig = {
  apiKey: "AIzaSyC_TB94Usv4Yyt-Q4Fsum_sQkOXGhDA0WQ",
  authDomain: "skill-flex-592b3.firebaseapp.com",
  projectId: "skill-flex-592b3",
  storageBucket: "skill-flex-592b3.appspot.com",
  messagingSenderId: "590970417677",
  appId: "1:590970417677:web:c200d0b68fdd653f6b5b44",
  measurementId: "G-ZS2DCJT928"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const firestore = getFirestore(app);
const storage = getStorage(app);

export {app,auth,storage,firestore};
