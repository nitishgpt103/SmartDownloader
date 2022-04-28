import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore/lite";

const firebaseConfig = {
  apiKey: "AIzaSyAzx6ND9p_k_3LzB3WeaemHN5Fkmse_pWQ",
  authDomain: "smartdownloader-39552.firebaseapp.com",
  databaseURL: "https://smartdownloader-39552-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "smartdownloader-39552",
  storageBucket: "smartdownloader-39552.appspot.com",
  messagingSenderId: "60058079676",
  appId: "1:60058079676:web:ce4aa073c1adb946c35bb9",
  measurementId: "G-SQW4C3XFWQ"
};


const app = initializeApp(firebaseConfig);
const database = getFirestore();
const auth = getAuth();
const provider = new GoogleAuthProvider();
const storage = getStorage(app);

export { auth, database, storage , provider };