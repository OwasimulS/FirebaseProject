import { initializeApp } from "https://www.gstatic.com/firebasejs/9.9.2/firebase-app.js";
import {
  getDatabase,
  ref,
  push,
  set,
  onValue,
} from "https://www.gstatic.com/firebasejs/9.9.2/firebase-database.js";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBHoni6-Jo9A_KMstEO2zBdH7-6JoNc6JU",
  authDomain: "fir-demo-9833c.firebaseapp.com",
  projectId: "fir-demo-9833c",
  storageBucket: "fir-demo-9833c.appspot.com",
  messagingSenderId: "917613001884",
  appId: "1:917613001884:web:e0620de2bcb85e6aa88159"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Realtime Database and get a reference to the service
const database = getDatabase(app);

export { database, ref, push, set, onValue };
