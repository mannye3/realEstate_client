// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// const firebaseConfig = {
//   apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
//   authDomain: "prifaestate.firebaseapp.com",
//   projectId: "prifaestate",
//   storageBucket: "prifaestate.firebasestorage.app",
//   messagingSenderId: "45045396631",
//   appId: "1:45045396631:web:49686fd16c02e2646965d2",
// };

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "blog-a0740.firebaseapp.com",
  projectId: "blog-a0740",
  storageBucket: "blog-a0740.appspot.com",
  messagingSenderId: "393140868832",
  appId: "1:393140868832:web:c28ad572d91df9cf266285",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
