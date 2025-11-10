import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyDV81nualXmn5G7BLQ0Cg5zK4E_3HAmqOs",
  authDomain: "goodrent-30f9f.firebaseapp.com",
  databaseURL: "https://goodrent-30f9f-default-rtdb.firebaseio.com",
  projectId: "goodrent-30f9f",
  storageBucket: "goodrent-30f9f.firebasestorage.app",
  messagingSenderId: "741537020679",
  appId: "1:741537020679:web:46e46220845a3cd24763a2",
  measurementId: "G-Z8T7T8XJQE"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const database = getDatabase(app);
