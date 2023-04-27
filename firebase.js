import firebase from "firebase/app";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAqf4qwSHSZHtifTpTYZ6FSe8NpktqHl7o",
  authDomain: "react-hooks-blog-7ce2b.firebaseapp.com",
  projectId: "react-hooks-blog-7ce2b",
  storageBucket: "react-hooks-blog-7ce2b.appspot.com",
  messagingSenderId: "401602356865",
  appId: "1:401602356865:web:407cbbb90572cd747e0f80",
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export const firestore = firebase.firestore();
