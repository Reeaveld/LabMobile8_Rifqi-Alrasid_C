// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCgZXMCCkkPESLv2oAlNVx8d9L3NDLxMWw",
  authDomain: "vue-terserahkalian.firebaseapp.com",
  projectId: "vue-terserahkalian",
  storageBucket: "vue-terserahkalian.firebasestorage.app",
  messagingSenderId: "437665359176",
  appId: "1:437665359176:web:61b72f74a780612310ff7d"
};

// Initialize Firebase

const firebase = initializeApp(firebaseConfig);
const auth = getAuth(firebase);
const googleProvider = new GoogleAuthProvider();

export { auth, googleProvider };