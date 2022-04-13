// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBT994RbGEJ926HYL30BaQjCKSC8hnEhKI",
  authDomain: "kausar-shop.firebaseapp.com",
  projectId: "kausar-shop",
  storageBucket: "kausar-shop.appspot.com",
  messagingSenderId: "525593591476",
  appId: "1:525593591476:web:ac23a6b33316c5c059e1e1",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;
