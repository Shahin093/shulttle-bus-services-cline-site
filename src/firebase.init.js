// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyC5fZ9-x3jW-vgMYdzUr027F2mZtukbUKg",
    authDomain: "shuttle-bus-services.firebaseapp.com",
    projectId: "shuttle-bus-services",
    storageBucket: "shuttle-bus-services.appspot.com",
    messagingSenderId: "467873991695",
    appId: "1:467873991695:web:fe45a59a53d0180ce5e77a",
    measurementId: "G-TM28SGEPH4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;