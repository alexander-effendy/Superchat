import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"

const firebaseConfig = {
  apiKey: "AIzaSyDGeCktgoYT9k00tb41rTYWKRFQhHXBMu4",
  authDomain: "superchat-6cd3c.firebaseapp.com",
  projectId: "superchat-6cd3c",
  storageBucket: "superchat-6cd3c.appspot.com",
  messagingSenderId: "159390739110",
  appId: "1:159390739110:web:9a7c99af70eb24ab2ea267",
  measurementId: "G-2Q3NB58CYY"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
