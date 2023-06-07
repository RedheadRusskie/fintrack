import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs } from "firebase/firestore/lite";

const firebaseConfig = {
  apiKey: "AIzaSyCvn2IHFPKFoj5zreUWdKMtGGF28Zx7-P8",
  authDomain: "fintrack-42a31.firebaseapp.com",
  projectId: "fintrack-42a31",
  storageBucket: "fintrack-42a31.appspot.com",
  messagingSenderId: "326064563230",
  appId: "1:326064563230:web:f253688bafd13fe3377a0f",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
export default db;
