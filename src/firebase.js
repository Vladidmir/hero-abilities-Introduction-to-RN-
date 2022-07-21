import { initializeApp } from "firebase/app";
import firebase from "firebase/compat/app";
import "firebase/compat/auth"
import "firebase/compat/firestore"


const firebaseConfig = {
  apiKey: "AIzaSyBHC3vvADnTDGdqbYAP1q_MXWHhrbNeOIE",
  authDomain: "auth-example-77a3b.firebaseapp.com",
  projectId: "auth-example-77a3b",
  storageBucket: "auth-example-77a3b.appspot.com",
  messagingSenderId: "403860801486",
  appId: "1:403860801486:web:f804bff165ed77fbf5cd9f"
};


let app = firebase.initializeApp(firebaseConfig)




export default firebase;
export const auth = firebase.auth()
export const db = firebase.firestore()

