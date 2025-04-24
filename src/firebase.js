import { initializeApp } from "firebase/app";
import { getMessaging, getToken, onMessage } from 'firebase/messaging'

const firebaseConfig = {
  apiKey: "AIzaSyC6YuKraeDXHkVnTd7FItOYOLWpXrRoJ7o",
  authDomain: "tailwind-pwa.firebaseapp.com",
  projectId: "tailwind-pwa",
  storageBucket: "tailwind-pwa.firebasestorage.app",
  messagingSenderId: "916791676269",
  appId: "1:916791676269:web:1589a490122f3f3af51e64",
  measurementId: "G-DC7VXNZ4CX"
};

const app = initializeApp(firebaseConfig);
const messaging = getMessaging(app)

export { messaging, getToken, onMessage }