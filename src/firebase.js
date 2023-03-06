// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAwH5WtgsSRE_lQkNZudjLuMo7GcCidIiQ",
  authDomain: "iobellaauth.firebaseapp.com",
  projectId: "iobellaauth",
  storageBucket: "iobellaauth.appspot.com",
  messagingSenderId: "905081105461",
  appId: "1:905081105461:web:8c43012d3cfb556f0b157c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth()
export const storage = getStorage(app);