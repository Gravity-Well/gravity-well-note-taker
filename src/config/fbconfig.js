import firebase from "firebase/app";
import "firebase/firestore";


const firebaseConfig = {

  
    apiKey:process.env.REACT_APP_APIKEY,
    authDomain:process.env.REACT_APP_AUTHDOMAINURL,
    databaseURL:process.env.REACT_APP_DATABASEURL,
    projectId: process.env.REACT_APP_PROJECTID,
    storageBucket: process.env.REACT_APP_STORAGEBUCKET,
    messagingSenderId:process.env.REACT_APP_MESSAGINGSENDERID,
    appId:process.env.APPID
  }
 

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
export default firebase;
