// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// import { auth } from './../../../firebase-tutorial/src/config/firebase';
// import { GoogleAuthProvider } from 'firebase/auth/c';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBRa4Q0Iw-oFgO1e3OQIbiNKiIyIdp14kU",
    authDomain: "reactsociallogin-424605.firebaseapp.com",
    projectId: "reactsociallogin-424605",
    storageBucket: "reactsociallogin-424605.appspot.com",
    messagingSenderId: "241665866435",
    appId: "1:241665866435:web:15677cb96f5cfee2d18076",
    measurementId: "G-HBLHPFW7V8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app)
export const googleProvider = new GoogleAuthProvider();
export const db = getFirestore(app);