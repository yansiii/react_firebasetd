// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB7_eipQMG_vZRXt5Bvo6Flwrtr9uuYOxI",
  authDomain: "demofire-e0226.firebaseapp.com",
  projectId: "demofire-e0226",
  storageBucket: "demofire-e0226.appspot.com",
  messagingSenderId: "193447209731",
  appId: "1:193447209731:web:349c0904c3e6597f48d736"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app)
const firestore = getFirestore(app)

export {auth, firestore};