import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
export const firebaseConfig = {
    apiKey: process.env.NEXT_PUBLIC_FIREBASEAPIKEY,
    authDomain: process.env.NEXT_PUBLIC_FIREBASEAUTHDOMAIN,
    projectId: process.env.NEXT_PUBLIC_FIREBASEPID,
    storageBucket: process.env.NEXT_PUBLIC_FIREBASESTORAGEBUCKET,
    messagingSenderId: process.env.NEXT_PUBLIC_FIREBASEMESSAGEID,
    appId: process.env.NEXT_PUBLIC_FIREBASEAPPID
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);
export default app;