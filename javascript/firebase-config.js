// 1. Import the specific Firebase functions you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.x/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.x/firebase-firestore.js";

// 2. Your project's specific keys (Copy from Firebase Console)
const firebaseConfig = {
  apiKey: "AIzaSy...",
  authDomain: "your-app.firebaseapp.com",
  projectId: "your-app",
  storageBucket: "your-app.appspot.com",
  messagingSenderId: "123456789",
  appId: "1:123456789:web:abcdef"
};

// 3. Initialize the app and the database
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app); // Note the "export" here!
