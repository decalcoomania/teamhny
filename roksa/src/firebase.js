import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDTBZBCocsBNPbm4DBtN3jc_VYQ1w9xqYc",
  authDomain: "team-c9a85.firebaseapp.com",
  projectId: "team-c9a85",
  storageBucket: "team-c9a85.firebasestorage.app",
  messagingSenderId: "287485636828",
  appId: "1:287485636828:web:17d59e99edd90e27038419",
  measurementId: "G-YLZPBVXQEL"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app); 
const analytics = getAnalytics(app);
