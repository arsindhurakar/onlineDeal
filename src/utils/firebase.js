import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDwgkgEjirlZR-6O5ziHwHIkpOwj1iybmQ",
  authDomain: "onlinedeal-ac1d9.firebaseapp.com",
  projectId: "onlinedeal-ac1d9",
  storageBucket: "onlinedeal-ac1d9.appspot.com",
  messagingSenderId: "967367349971",
  appId: "1:967367349971:web:33a37cc6f0b931e4762626",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
