/* eslint-disable no-unused-vars */
import * as firebase from "firebase/app";
import 'firebase/firestore';
import "firebase/auth";

firebase.initializeApp({
    apiKey: "AIzaSyDOCAbC123dEf456GhI789jKl01-MnO",
  authDomain: "myapp-project-123.firebaseapp.com",
  databaseURL: "https://myapp-project-123.firebaseio.com",
  projectId: "myapp-project-123",
  storageBucket: "myapp-project-123.appspot.com",
  messagingSenderId: "65211879809",
  appId: "1:65211879909:web:3ae38ef1cdcb2e01fe5f0c",
  measurementId: "G-8GSGZQ44ST"
});
let db = firebase.firestore();
// db.settings({timestampsInSnapshots: true});
export default db;