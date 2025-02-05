// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
    authDomain: "task-manager-c35d7.firebaseapp.com",
    projectId: "task-manager-c35d7",
    storageBucket: "task-manager-c35d7.firebasestorage.app",
    messagingSenderId: "139764539583",
    appId: "1:139764539583:web:3671c1849eb60fbe43e60a",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
