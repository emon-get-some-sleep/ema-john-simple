// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDeR1Bj8j2rz9wVzwMhHjEUKnG4d1xHOrA",
  authDomain: "ema-john-with-firebase-a-18f9f.firebaseapp.com",
  projectId: "ema-john-with-firebase-a-18f9f",
  storageBucket: "ema-john-with-firebase-a-18f9f.appspot.com",
  messagingSenderId: "345083098857",
  appId: "1:345083098857:web:75b72f74ab18dab0b12278"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;