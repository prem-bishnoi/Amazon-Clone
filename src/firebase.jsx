import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyB9SadwiiSFXhyb6LTvsVtjvyYCuJ6eC1A",
  authDomain: "clone-8408c.firebaseapp.com",
  projectId: "clone-8408c",
  storageBucket: "clone-8408c.appspot.com",
  messagingSenderId: "815025723242",
  appId: "1:815025723242:web:645f618092b923081c7713",
  measurementId: "G-R6DVQV4H4Z"
};

const firebaseApp = firebase.initializeApp(firebaseConfig)

const db = firebaseApp.firestore()
const auth = firebase.auth()

export { db, auth }

