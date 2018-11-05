import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

var config = {
  apiKey: "AIzaSyAI7a7ao3mL87_rDfLJ-iQCVrJ6M5BonKw",
  authDomain: "marioplan-4e2aa.firebaseapp.com",
  databaseURL: "https://marioplan-4e2aa.firebaseio.com",
  projectId: "marioplan-4e2aa",
  storageBucket: "marioplan-4e2aa.appspot.com",
  messagingSenderId: "942420480163"
};
firebase.initializeApp(config);
firebase.firestore().settings({ timestampsInSnapshots: true });

export default firebase;
