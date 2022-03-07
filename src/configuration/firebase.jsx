import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

// ----------



const firebaseConfig = {
  apiKey: "AIzaSyB-HxwnSmrSiecmrlO6euN_OQ7QgYCvoB4",
  authDomain: "login-authentication-214e1.firebaseapp.com",
  projectId: "login-authentication-214e1",
  storageBucket: "login-authentication-214e1.appspot.com",
  messagingSenderId: "211977241676",
  appId: "1:211977241676:web:ac19e21859798b989d60e9"
};


const app = initializeApp(firebaseConfig);

const db = getFirestore();

const auth = getAuth();

export { db , auth }




