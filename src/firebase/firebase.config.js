// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA2VR_MEbwEs_6aU8m8GnRa26NJJbozBWI",
  authDomain: "book-store-application-18307.firebaseapp.com",
  projectId: "book-store-application-18307",
  storageBucket: "book-store-application-18307.firebasestorage.app",
  messagingSenderId: "127891706671",
  appId: "1:127891706671:web:04862131e90d87636a87da"
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)