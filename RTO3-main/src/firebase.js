// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";


const firebaseConfig = {
  apiKey: "AIzaSyDW4kS5_gZUo13ttNTnhBcmMrBD9sadPAM",
  authDomain: "react-rto.firebaseapp.com",
  projectId: "react-rto",
  storageBucket: "react-rto.appspot.com",
  messagingSenderId: "1084078340140",
  appId: "1:1084078340140:web:2ed544a5e8e858c1697989",
  measurementId: "G-VPC0N1SW6G"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app;