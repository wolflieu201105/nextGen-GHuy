// Import the functions you need from the SDKs you need
import { getAuth } from 'https://www.gstatic.com/firebasejs/10.0.0/firebase-auth.js'
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.0.0/firebase-app.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDqBXHRhVtnx7gtgQLkHQxsWA_Wq6tQVc0",
  authDomain: "nextgen-auth-e826f.firebaseapp.com",
  projectId: "nextgen-auth-e826f",
  storageBucket: "nextgen-auth-e826f.appspot.com",
  messagingSenderId: "308405998855",
  appId: "1:308405998855:web:05c72f6c0c5c62db7b21a2",
  measurementId: "G-QS3ML8TXKS"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)