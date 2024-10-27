// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDJa7wwdLLteoZvZqFnl7RKhb6uyOx3yqA",
  authDomain: "netflix-gpt-420.firebaseapp.com",
  projectId: "netflix-gpt-420",
  storageBucket: "netflix-gpt-420.appspot.com",
  messagingSenderId: "340700946084",
  appId: "1:340700946084:web:e33d9961c06c437c80d031"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);