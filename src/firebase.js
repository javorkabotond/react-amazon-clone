import firebase from 'firebase'

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyCHwIKT94l3aMrFcNonupoOGuSnfpqiUGM",
  authDomain: "clone-cf84b.firebaseapp.com",
  databaseURL: "https://clone-cf84b.firebaseio.com",
  projectId: "clone-cf84b",
  storageBucket: "clone-cf84b.appspot.com",
  messagingSenderId: "877540667350",
  appId: "1:877540667350:web:78ddd6f079ed8e1c7e3e77",
  measurementId: "G-RQCLEJNXWW"
});

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };