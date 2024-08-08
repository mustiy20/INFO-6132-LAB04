import { initializeApp } from 'firebase/app';
import { addDoc, collection, deleteDoc, doc, getDocs, getFirestore, serverTimestamp } from 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyAvxIiDpMSZOntpBEO5ZJUANjBbWJlEtdg",
    authDomain: "cabapp-65568.firebaseapp.com",
    projectId: "cabapp-65568",
    storageBucket: "cabapp-65568.appspot.com",
    messagingSenderId: "441268990478",
    appId: "1:441268990478:web:813c8ea1259dd0e6f8825f"
  };
  

const app = initializeApp(firebaseConfig);
const firestore = getFirestore(app);

export { addDoc, collection, deleteDoc, doc, firestore, getDocs, serverTimestamp };
