import firebase from 'firebase/app'
import "@firebase/firestore"

const app = firebase.initializeApp( {
    apiKey: "AIzaSyBQI6xF2UpcgvMJfmeuk5VaZdVDgWAZy10",
    authDomain: "react-tc-e1011.firebaseapp.com",
    projectId: "react-tc-e1011",
    storageBucket: "react-tc-e1011.appspot.com",
    messagingSenderId: "993616870491",
    appId: "1:993616870491:web:40e025073a3f7da797137e"
  });

  export function getFirbase(){
      return app;
  }

  export function getFirestore(){
      return firebase.firestore(app)
  }
  