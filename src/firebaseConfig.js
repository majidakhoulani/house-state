// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBx9EZLDLIcPaPrRpEOLAr26Xr68tj8xXg",
  authDomain: "fir-test-439ba.firebaseapp.com",
  projectId: "fir-test-439ba",
  storageBucket: "fir-test-439ba.appspot.com",
  messagingSenderId: "2683276379",
  appId: "1:2683276379:web:385265a14339c9bcaa837e",
  measurementId: "G-7XZKH8MDL6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);
const db = getFirestore();
//  export default {app,auth ,db}
export default app
