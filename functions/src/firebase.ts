// src/firebase.ts
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAyJLUpzkPTkEhWQ_J05-5-bzN-WcucbiI",
  authDomain: "child-health-system-6ba6d.firebaseapp.com",
  projectId: "child-health-system-6ba6d",
  storageBucket: "child-health-system-6ba6d.firebasestorage.app",
  messagingSenderId: "1030939299208",
  appId: "1:1030939299208:web:a0237c00b6b80d26663e3d",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Export Firebase services
export const auth = getAuth(app);
export const db = getFirestore(app);

export default app;
