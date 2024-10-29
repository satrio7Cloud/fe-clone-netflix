// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDY9-wJ2rSDlAnU5mnTLfaNL6suqwfmUQA",
  authDomain: "react-netflix-a1c56.firebaseapp.com",
  projectId: "react-netflix-a1c56",
  storageBucket: "react-netflix-a1c56.appspot.com",
  messagingSenderId: "430869821723",
  appId: "1:430869821723:web:e74a3b50e6809625587bbe",
  measurementId: "G-T5YJDDTEBJ",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const firebaseAuth = getAuth(app);
