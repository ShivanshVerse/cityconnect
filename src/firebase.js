import { initializeApp } from 'firebase/app';
import { getAuth, GoogleAuthProvider, signInWithPopup, signInWithEmailAndPassword, createUserWithEmailAndPassword } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyBrYpMmLf_L8wKuywc8Z6Q7WPi3vlrbvmE",
  authDomain: "cityconnect-3b597.firebaseapp.com",
  projectId: "cityconnect-3b597",
  storageBucket: "cityconnect-3b597.firebasestorage.app",
  messagingSenderId: "25192709470",
  appId: "1:25192709470:web:e00f59e948eaced73823cf",
  measurementId: "G-7M9SM53E7L"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export { auth, provider, signInWithPopup, signInWithEmailAndPassword, createUserWithEmailAndPassword };
