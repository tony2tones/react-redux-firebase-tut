import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

 // Initialize Firebase
 var config = {
  apiKey: "AIzaSyCHBv--mX4KE65f-G4mZ_Esnkj_RVBJoss",
  authDomain: "redux-tut-app.firebaseapp.com",
  databaseURL: "https://redux-tut-app.firebaseio.com",
  projectId: "redux-tut-app",
  storageBucket: "redux-tut-app.appspot.com",
  messagingSenderId: "979040838920"
};
firebase.initializeApp(config);
firebase.firestore().settings({ timestampsInSnapshots: true });

export default firebase;