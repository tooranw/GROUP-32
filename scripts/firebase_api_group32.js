//---------------------------------------------------
// replace the lines below with your own "firebaseConfig"
// key value pairs
//--------------------------------------------------- 

// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyAwcw6Hj5Qi0zUiVv60QMQrivEEQ7MWqsY",
    authDomain: "march02demojerry.firebaseapp.com",
    projectId: "march02demojerry",
    storageBucket: "march02demojerry.appspot.com",
    messagingSenderId: "184017772502",
    appId: "1:184017772502:web:05e6eb3356c32bad8a0e77",
    measurementId: "G-4Z41JGHQWK"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();