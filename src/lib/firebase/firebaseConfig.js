import { initializeApp } from 'firebase/app';
import { getFirestore } from "firebase/firestore"
import { getStorage } from "firebase/storage"
import { getAuth } from "firebase/auth"
 
const firebaseConfig = {
    apiKey: "AIzaSyAoSEmb15XDQWNiEwFw6EsrVzbXQMEQsB4",
    authDomain: "advanced-audio-player-fb968.firebaseapp.com",
    projectId: "advanced-audio-player-fb968",
    storageBucket: "advanced-audio-player-fb968.appspot.com",
    messagingSenderId: "999193035727",
    appId: "1:999193035727:web:a1caa753e01974780108ba",
    measurementId: "G-VE7NWZZ639"
  };

export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)
export const storage = getStorage(app)
export const auth = getAuth(app)