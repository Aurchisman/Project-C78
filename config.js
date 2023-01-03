import firebase from "firebase";
require("@firebase/firestore");

//Paste your firebaseConfig here
const firebaseConfig = {
    apiKey: "AIzaSyCFKhi8CP7iN0mkkgGqTl2SqZ6GnwXl62A",
    authDomain: "e-rider-app-project-c78.firebaseapp.com",
    projectId: "e-rider-app-project-c78",
    storageBucket: "e-rider-app-project-c78.appspot.com",
    messagingSenderId: "214976833288",
    appId: "1:214976833288:web:9e1fd96e138c049527aebd"
  };




firebase.initializeApp(firebaseConfig);

export default firebase.firestore();


