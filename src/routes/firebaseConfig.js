import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage"
import { getAuth } from "firebase/auth";


const firebaseConfig = {
    apiKey: "AIzaSyDrI4C5pgg7qylW1bZDY-n8aQ712iWcynA",
    authDomain: "digicalestate.firebaseapp.com",
    projectId: "digicalestate",
    storageBucket: "digicalestate.appspot.com",
    messagingSenderId: "163845315513",
    appId: "1:163845315513:web:f6b9126278788af722f468",
    measurementId: "G-8GZXHYFFDD"
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const db = getFirestore(app);
export const storge = getStorage(app)