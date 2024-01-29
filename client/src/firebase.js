// Import the functions you need from the SDKs you need
//import { initializeApp } from 'firebase/app';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
//const firebaseConfig = {
  //apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  //authDomain: 'mern-estate.firebaseapp.com',
 // projectId: 'mern-estate',
 // storageBucket: 'mern-estate.appspot.com',
 // messagingSenderId: '1078482850952',
 // appId: '1:1078482850952:web:28f19139ab77246602fb3d',
//};

// Initialize Firebase
// export const app = initializeApp(firebaseConfig);
// Import the functions you need from the SDKs you need
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
import { initializeApp } from "firebase/app";
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "real-estate-11ab0.firebaseapp.com",
  projectId: "real-estate-11ab0",
  storageBucket: "real-estate-11ab0.appspot.com",
  messagingSenderId: "745574367726",
  appId: "1:745574367726:web:ca43046517b4576cb3ceff"
};
// Initialize Firebase
export const app = initializeApp(firebaseConfig);
