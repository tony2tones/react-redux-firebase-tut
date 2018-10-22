import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

// Initialize Firebase
var config = {
  apiKey: "AIzaSyAoNVjsbgpTpqJ3tvnGobcDmEjXQr9ZBH4",
  authDomain: "react-redux-tut-5a0e9.firebaseapp.com",
  databaseURL: "https://react-redux-tut-5a0e9.firebaseio.com",
  projectId: "react-redux-tut-5a0e9",
  storageBucket: "react-redux-tut-5a0e9.appspot.com",
  messagingSenderId: "294504005247"
};
firebase.initializeApp(config);
firebase.firestore().settings({ timestampsInSnapshots: true });

export default firebase;