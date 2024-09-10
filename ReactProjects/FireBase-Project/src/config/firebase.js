// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCZHWB63Y4frqE4F1NftVJ32yy6IU66DPw",
  authDomain: "vite-contact-b633d.firebaseapp.com",
  projectId: "vite-contact-b633d",
  storageBucket: "vite-contact-b633d.appspot.com",
  messagingSenderId: "789687844099",
  appId: "1:789687844099:web:08843f1b9d4fcbdd3abd36"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);