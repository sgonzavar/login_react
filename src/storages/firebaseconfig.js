import firebase from 'firebase';
import 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyDrmigBd4MSkPJU_NEDpR-rbkm6bpwiHw0",
    authDomain: "react-test-fbef6.firebaseapp.com",
    projectId: "react-test-fbef6",
    storageBucket: "react-test-fbef6.appspot.com",
    messagingSenderId: "583939047247",
    appId: "1:583939047247:web:1f8cd234e040c824c60f3a"
  };

  // Initialize Firebase
  const fire = firebase.initializeApp(firebaseConfig);
  const auth = fire.auth();

  export {auth};