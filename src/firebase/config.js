import  * as firebase from 'firebase/app';
import 'firebase/storage';
import 'firebase/firestore';
 
 // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyBTmWZLdbPjb7scQ_nb7XASF7cDaakBT2c",
    authDomain: "grupo-saaf-catalogo.firebaseapp.com",
    databaseURL: "https://grupo-saaf-catalogo.firebaseio.com",
    projectId: "grupo-saaf-catalogo",
    storageBucket: "grupo-saaf-catalogo.appspot.com",
    messagingSenderId: "832755352345",
    appId: "1:832755352345:web:ca50557041032333bdbb88"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  const saafStorage = firebase.storage();
  const saafFirestore = firebase.firestore();
  const timestamp = firebase.firestore.FieldValue.serverTimestamp;

  export { saafStorage, saafFirestore, timestamp };