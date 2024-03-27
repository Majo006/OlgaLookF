// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDXPrAoVNvxBUuCeU_VIUOdvg2CrwrLqD0",
  authDomain: "baiolga-26df3.firebaseapp.com",
  projectId: "baiolga-26df3",
  storageBucket: "baiolga-26df3.appspot.com",
  messagingSenderId: "484655129396",
  appId: "1:484655129396:web:52e39214b39669ed5abb61",
  measurementId: "G-6N4M0VJNJ0"
};

// Initialize Firebase
const appFirebase = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export default appFirebase;