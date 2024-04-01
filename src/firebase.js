// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAi_Adhcl-0C8SufKDUvUlapAniHeIfT88",
  authDomain: "auth-react-fa033.firebaseapp.com",
  projectId: "auth-react-fa033",
  storageBucket: "auth-react-fa033.appspot.com",
  messagingSenderId: "982843393480",
  appId: "1:982843393480:web:7d6a292cb7843745216cfd",
  measurementId: "G-TZTKF9CC5X"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);