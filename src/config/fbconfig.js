import firebase from "firebase/app";
import "firebase/firestore";


const firebaseConfig = {
    apiKey: "AIzaSyDHsWF_mzvWnpmgNJdNYZOPnuDKDtBN4XM",
    authDomain: "gravitywellnotes.firebaseapp.com",
    databaseURL: "https://gravitywellnotes-default-rtdb.firebaseio.com",
    projectId: "gravitywellnotes",
    storageBucket: "gravitywellnotes.appspot.com",
    messagingSenderId: "864342904837",
    appId: "1:864342904837:web:21c45b7f29082628624c6c"
  }
 

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
export default firebase;
