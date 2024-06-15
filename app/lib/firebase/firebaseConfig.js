// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBAjSVp0_EkuA5vd1D-R7JUMfim1nbw9Io",
    authDomain: "next-firebase-2df96.firebaseapp.com",
    projectId: "next-firebase-2df96",
    storageBucket: "next-firebase-2df96.appspot.com",
    messagingSenderId: "858154160362",
    appId: "1:858154160362:web:9a0dd868b1a914d04f8793",
    measurementId: "G-EKF0W2P01V"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const analytics = app.name && typeof window !== 'undefined' ? getAnalytics(app) : null;
const db = getFirestore(app);

export { app, analytics, auth, db };