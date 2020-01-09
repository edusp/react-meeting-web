import firebase from 'firebase/app'
import 'firebase/database'
import 'firebase/auth'


const firebaseConfig = {
    apiKey: "AIzaSyDbqi43d0JKBtcuDjVzjj8mQy7ZLdgS3eA",
    authDomain: "react-app-fbdb.firebaseapp.com",
    databaseURL: "https://react-app-fbdb.firebaseio.com",
    projectId: "react-app-fbdb",
    storageBucket: "react-app-fbdb.appspot.com",
    messagingSenderId: "671644451363",
    appId: "1:671644451363:web:cc6ce39afd4e93e7176796"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  export const provider = new firebase.auth.GoogleAuthProvider();
  export const auth = firebase.auth();

  export default firebase;