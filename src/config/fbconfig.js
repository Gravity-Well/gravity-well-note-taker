import firebase from "firebase/app";
import "firebase/firestore";


const firebaseConfig = {
    // apiKey: "AIzaSyDHsWF_mzvWnpmgNJdNYZOPnuDKDtBN4XM",
    // authDomain: "gravitywellnotes.firebaseapp.com",
    // databaseURL: "https://gravitywellnotes-default-rtdb.firebaseio.com",
    // projectId: "gravitywellnotes",
    // storageBucket: "gravitywellnotes.appspot.com",
    // messagingSenderId: "864342904837",
    // appId: "1:864342904837:web:21c45b7f29082628624c6c"
  
    apiKey:process.env.REACT_APP_APIKEY,
    authDomain:process.env.REACT_APP_AUTHDOMAINURL,
    databaseURL:process.env.REACT_APP_DATABASEURL,
    projectId: process.env.REACT_APP_PROJECTID,
    storageBucket: process.env.REACT_APP_STORAGEBUCKET,
    messagingSenderId:process.env.REACT_APP_MESSAGINGSENDERID,
    appId:process.env.APPID
  }
 
  console.log( process.env.DATABASEURL)
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
export default firebase;
