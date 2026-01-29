// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import firebase from "firebase/compat/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAqknpDEkYFLk8yNhblF4y3SrvVZcgkV8Q",
  authDomain: "project1-1152a.firebaseapp.com",
  projectId: "project1-1152a",
  storageBucket: "project1-1152a.firebasestorage.app",
  messagingSenderId: "779522677025",
  appId: "1:779522677025:web:ba1fc6d79fda69f68a8660",
  measurementId: "G-97JYZTTRYP",
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);


export default firebase ;