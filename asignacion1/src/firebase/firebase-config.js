import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyAElhi0fPZqejdkfKhdVQ1FEy_kq9KQhnc",
    authDomain: "autenticacion-c57f6.firebaseapp.com",
    projectId: "autenticacion-c57f6",
    storageBucket: "autenticacion-c57f6.appspot.com",
    messagingSenderId: "850587535073",
    appId: "1:850587535073:web:72f2a59fdf0f522bde19a0"
  };
  
firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();
const googleAuthProvider = new firebase.auth.GoogleAuthProvider();
const facebookAuthProvider = new firebase.auth.FacebookAuthProvider();



export {
    db,
    googleAuthProvider,
    facebookAuthProvider,
    firebase
}