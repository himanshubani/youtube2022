import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyATvgCzqz0lSJ8HVleslKXwtaVotEZ6YAA",
  authDomain: "chat-project-3fe13.firebaseapp.com",
  projectId: "chat-project-3fe13",
  storageBucket: "chat-project-3fe13.appspot.com",
  messagingSenderId: "994569869441",
  appId: "1:994569869441:web:f025e2f43bfcb2414b5580"
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore();
