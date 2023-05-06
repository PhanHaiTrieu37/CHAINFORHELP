import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getStorage } from 'firebase/storage'
const firebaseConfig = {
  apiKey: "AIzaSyCYziczU0HexXC44CzT7zvJu7rX4vuR2eI",
  authDomain: "uploadingfile-661d6.firebaseapp.com",
  projectId: "uploadingfile-661d6",
  storageBucket: "uploadingfile-661d6.appspot.com",
  messagingSenderId: "377391236110",
  appId: "1:377391236110:web:03976393136abe285ea85f",
  measurementId: "G-GR6EZ1T5X8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const storage = getStorage(app);