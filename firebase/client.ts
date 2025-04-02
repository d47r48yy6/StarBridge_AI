
import { } from "firebase/app";
// Import the functions you need from the SDKs you need
import { initializeApp , getApp,getApps} from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC9HzKy1_PgN-LwZVgt_S0Tf5EKgNqMPR8",
  authDomain: "starbridge-ai.firebaseapp.com",
  projectId: "starbridge-ai",
  storageBucket: "starbridge-ai.firebasestorage.app",
  messagingSenderId: "640887643460",
  appId: "1:640887643460:web:2f8e7e90e0f5d1162f8b11",
  measurementId: "G-TFV14FYCGJ"
};

// Initialize Firebase
const app = !getApps.length ? initializeApp(firebaseConfig): getApp();
export const auth = getAuth(app);
export const db = getFirestore(app);