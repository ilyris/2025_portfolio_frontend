import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
export const firebaseConfig = {
    apiKey: "AIzaSyAEQDIakaojdGe5oLjS7HmDoG3ottscx6k",
    authDomain: "portfolio-39fde.firebaseapp.com",
    projectId: "portfolio-39fde",
    storageBucket: "portfolio-39fde.firebasestorage.app",
    messagingSenderId: "956650241791",
    appId: "1:956650241791:web:09b1d3681b19e72f6a56ca"
  };

  // Initialize Firebase
// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);
export default app;