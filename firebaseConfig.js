// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

import { initializeAuth, getReactNativePersistence } from "firebase/auth";
import ReactNativeAsyncStorage from "@react-native-async-storage/async-storage";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBcAUdQfkHcnLv1aRS0yF_HCTdJ_31gwlM",
  authDomain: "priorcare-88c63.firebaseapp.com",
  projectId: "priorcare-88c63",
  storageBucket: "priorcare-88c63.appspot.com",
  messagingSenderId: "475409230747",
  appId: "1:475409230747:web:d424aa2c82a9d899710f3e",
};

// Initialize Firebase
export const FirebaseApp = initializeApp(firebaseConfig);

export const FirebaseAuth = initializeAuth(FirebaseApp, {
  persistence: getReactNativePersistence(ReactNativeAsyncStorage),
});
