import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAQWytuY1zMicwfx5e3qoizpKBL35N6kDA",
  authDomain: "inventory-tracking-syste-5c22d.firebaseapp.com",
  projectId: "inventory-tracking-syste-5c22d",
    databaseURL: "https://inventory-tracking-syste-5c22d-default-rtdb.firebaseio.com",
  storageBucket: "inventory-tracking-syste-5c22d.firebasestorage.app",
  messagingSenderId: "934106045107",
  appId: "1:934106045107:web:49eeeadb9119c437f9eec6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getDatabase(app);