import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth'
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyDm8PMlIdsolC2ViWgQT1k_zu0R458ZQQE",
  authDomain: "time-zee-pro.firebaseapp.com",
  projectId: "time-zee-pro",
  storageBucket: "time-zee-pro.firebasestorage.app",
  messagingSenderId: "289788313722",
  appId: "1:289788313722:web:1b210c86d18416263d3bc3",
};

const FireApp = initializeApp(firebaseConfig);
export const Auth = getAuth(FireApp)
export const DB = getFirestore(FireApp)