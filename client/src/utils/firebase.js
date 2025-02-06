// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: import.meta.env.VITE_APP_FIREBASE_API_KEY,
  authDomain: "taskmanager-510.firebaseapp.com",
  projectId: "taskmanager-510",
  storageBucket: "taskmanager-510.appspot.com",
  messagingSenderId: "157176218519",
  appId: "1:157176218519:web:53a5d087a0e879ce2d7ad2",
  measurementId: "G-564TFE35EX",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
