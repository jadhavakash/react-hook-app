import firebase from 'firebase'

var firebaseApp = firebase.initializeApp({
    // Your firebase credentials
    
    apiKey: "AIzaSyBFHpkti4gdQuAQ-wc8XBj3pZhVp2A_hdA",
    authDomain: "react-contact-form-97ca0.firebaseapp.com",
    databaseURL: "https://react-contact-form-97ca0-default-rtdb.firebaseio.com",
    projectId: "react-contact-form-97ca0",
    storageBucket: "react-contact-form-97ca0.appspot.com",
    messagingSenderId: "183819706411",
    appId: "1:183819706411:web:2b546e4d9dfe5c284cca6e"
  });

  var db =  firebaseApp.firestore();
  export {db};