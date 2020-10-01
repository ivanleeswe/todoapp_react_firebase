import firebase from "firebase";

const firebaseApp = firebase.initializeApp({

  apiKey: "AIzaSyBFcwx8uxlpaf6NhqjRnGAStBkLkfpWfI8",
  authDomain: "todo-app-reactfirebase.firebaseapp.com",
  databaseURL: "https://todo-app-reactfirebase.firebaseio.com",
  projectId: "todo-app-reactfirebase",
  storageBucket: "todo-app-reactfirebase.appspot.com",
  messagingSenderId: "599474054498",
  appId: "1:599474054498:web:841f71ff009381af12383b",
  measurementId: "G-3LM0581X80"

})

const db = firebaseApp.firestore();

export { db };
