import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyB-SrnGHIWReuaFg5sg6bCq_iJZQC3gTKc",
  authDomain: "assignment-12-466b5.firebaseapp.com",
  projectId: "assignment-12-466b5",
  storageBucket: "assignment-12-466b5.appspot.com",
  messagingSenderId: "356190242268",
  appId: "1:356190242268:web:f6a28020c519c34347bb19"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app;