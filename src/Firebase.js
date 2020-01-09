import firebase from 'firebase/app'
import 'firebase/database'
import 'firebase/auth'


var firebaseConfig = {
  apiKey: "AIzaSyBKzX4NySMINtpoqAe4v81t34Gj-abhuGo",
  authDomain: "meeting-react-app.firebaseapp.com",
  databaseURL: "https://meeting-react-app.firebaseio.com",
  projectId: "meeting-react-app",
  storageBucket: "meeting-react-app.appspot.com",
  messagingSenderId: "272771970019",
  appId: "1:272771970019:web:a82186892cea00f12d26d6"
};
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  export const provider = new firebase.auth.GoogleAuthProvider();
  export const auth = firebase.auth();

  export default firebase;