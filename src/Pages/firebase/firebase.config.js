// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA8eZMoyOyIOKJC5GRJ9GGONatccO6jo-A",
  authDomain: "tour-guide-review.firebaseapp.com",
  projectId: "tour-guide-review",
  storageBucket: "tour-guide-review.appspot.com",
  messagingSenderId: "687402839534",
  appId: "1:687402839534:web:337f741a57dc5fa23cb2ff"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;