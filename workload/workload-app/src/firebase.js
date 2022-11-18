// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBojiOeq1vbsP4iAGmZNGmcrJWzlZx3aS8",
  authDomain: "workload-f8d0f.firebaseapp.com",
  projectId: "workload-f8d0f",
  storageBucket: "workload-f8d0f.appspot.com",
  messagingSenderId: "642890819582",
  appId: "1:642890819582:web:59d212d07f6fea0c4a02af",
  measurementId: "G-3GY759WC0S"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();