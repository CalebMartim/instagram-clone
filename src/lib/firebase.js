import Firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import "firebase/compat/auth";

// import { seedDatabase } from "../seed";

const config = {
  apiKey: "AIzaSyBFDuNCJp0gSTL05-uGFhdEOU6rM_BFiyk",
  authDomain: "lebs-instagram.firebaseapp.com",
  projectId: "lebs-instagram",
  storageBucket: "lebs-instagram.appspot.com",
  messagingSenderId: "60615822562",
  appId: "1:60615822562:web:277ce8598eaaeee65822bb",
};

const firebase = Firebase.initializeApp(config);
const { FieldValue } = Firebase.firestore;

// seedDatabase(firebase);

export { firebase, FieldValue };
