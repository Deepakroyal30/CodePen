import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyCXohmyfa--vDMx3NjFK98VtLG0LwJdHTQ",
  authDomain: "auth-8a864.firebaseapp.com",
  projectId: "auth-8a864",
  storageBucket: "auth-8a864.appspot.com",
  messagingSenderId: "706682759417",
  appId: "1:706682759417:web:52e6a97efed8aaf7df1a28"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const database =  getAuth(app);