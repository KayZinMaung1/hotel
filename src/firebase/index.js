import { initializeApp } from "firebase/app";
import {
  getAuth,
} from "firebase/auth";
import {
  getFirestore,
} from "firebase/firestore";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyASEL-20W74wM9t-5KuTcYZ208gez1NIIM",
    authDomain: "hotelhub-16836.firebaseapp.com",
    projectId: "hotelhub-16836",
    storageBucket: "hotelhub-16836.appspot.com",
    messagingSenderId: "316762001306",
    appId: "1:316762001306:web:b48e420b6dedffd9cbf423",
    measurementId: "G-2YTDZ7CRKY"
  };

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);


export {
   auth,
   db,
   app
  };
