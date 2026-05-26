import { getApp, getApps, initializeApp } from "firebase/app";
import {
  browserLocalPersistence,
  getAuth,
  GoogleAuthProvider,
  setPersistence,
} from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAuQZW9jiWgpM1pgSjU0VUpocwZuiz49d4",
  authDomain: "techacademia-a94d1.firebaseapp.com",
  projectId: "techacademia-a94d1",
  storageBucket: "techacademia-a94d1.firebasestorage.app",
  messagingSenderId: "528093280946",
  appId: "1:528093280946:web:f8f3a9f2d9227f8494e7ab",
  measurementId: "G-ZXHDLDTQWS"
};

const app = getApps().length ? getApp() : initializeApp(firebaseConfig);

const auth = getAuth(app);
const db = getFirestore(app);
const googleProvider = new GoogleAuthProvider();
const authPersistence = setPersistence(auth, browserLocalPersistence);

export { auth, authPersistence, db, googleProvider };
export default app;
