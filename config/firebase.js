import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

// Initialize Firebase// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCaF3oEUPIBIb-TbF1eKwMK1_DbtbVIBXo",
  authDomain: "database-viapulsa.firebaseapp.com",
  projectId: "database-viapulsa",
  storageBucket: "database-viapulsa.appspot.com",
  messagingSenderId: "1063322312975",
  appId: "1:1063322312975:web:07f72e3a14ba45f4f5de7a",
  measurementId: "G-36GMWEVTHZ",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const firestore = getFirestore(app);
export const storage = getStorage(app);
export const provider = new GoogleAuthProvider();
// For more information on how to access Firebase in your project,
// see the Firebase documentation: https://firebase.google.com/docs/web/setup#access-firebase
