// Import the functions you need from the SDKs you need
import firebase from "firebase/app";
import 'firebase/firestore';
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBxYd6iUd8UwqHsLHRF-auWEv_u89fzqfc",
    authDomain: "tallerbp-5bb7b.firebaseapp.com",
    projectId: "tallerbp-5bb7b",
    storageBucket: "tallerbp-5bb7b.appspot.com",
    messagingSenderId: "910569472692",
    appId: "1:910569472692:web:08c4b5a961d3b9ff2d8de1",
    measurementId: "G-39YSNEJT1V"
  };

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
export{firebase}
