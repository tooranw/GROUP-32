//---------------------------------------------------
// replace the lines below with your own "firebaseConfig"
// key value pairs
//--------------------------------------------------- 

// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyDgMtvOdW1Bf6GKfIpGqcx40fCSashDGFA",
    authDomain: "group32database-2cf96.firebaseapp.com",
    projectId: "group32database-2cf96",
    storageBucket: "group32database-2cf96.appspot.com",
    messagingSenderId: "399508154319",
    appId: "1:399508154319:web:94c92001b97239d39f14ba",
    measurementId: "G-NWBTKMQK73"
  };

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();