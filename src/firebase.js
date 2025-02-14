import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
export const firebaseConfig = {
    apiKey: NEXT_PUBLIC_FIREBASEAPIKEY,
    authDomain: FIREBASEAUTHDOMAIN,
    projectId: FIREBASEPID,
    storageBucket: FIREBASESTORAGEBUCKET,
    messagingSenderId: FIREBASEMESSAGEID,
    appId: FIREBASEAPPID
  };

  // Initialize Firebase
// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);
export default app;