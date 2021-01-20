/* eslint-disable no-unused-vars */
import firebase from 'firebase/app';
import 'firebase/firestore';
import "firebase/auth";

var firebaseConfig = {
  apiKey: "AIzaSyAKVbF7JunawPdWS0zqhV0izkAzDGL-p5I",
  authDomain: "burguer-queen-ae027.firebaseapp.com",
  projectId: "burguer-queen-ae027",
  storageBucket: "burguer-queen-ae027.appspot.com",
  messagingSenderId: "10679795447",
  appId: "1:10679795447:web:5bcf4c49bdb33698be9df2"
};

const fb = firebase.initializeApp(firebaseConfig);
export const db = fb.firestore();