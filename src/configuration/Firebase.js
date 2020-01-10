import firebase from 'firebase/app'
import 'firebase/database'
import 'firebase/auth'

import config from '..configuration/config'

  //Getting credential from config file
  //Not commited to Github
  const firebaseConfig = config;
  
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig.firebase);

  export const provider = new firebase.auth.GoogleAuthProvider();
  export const auth = firebase.auth();

  export default firebase;