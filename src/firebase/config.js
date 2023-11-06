import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'
import 'firebase/storage'

const firebaseConfig = {
    apiKey: "AIzaSyClBbz4smn71XitRl07dKZOkcMnKaHx5GI",
    authDomain: "book-4cec8.firebaseapp.com",
    projectId: "book-4cec8",
    storageBucket: "book-4cec8.appspot.com",
    messagingSenderId: "599730761719",
    appId: "1:599730761719:web:445f16c541841b332588f2"
  };


 //this is to init firebase (connect to backend)

  firebase.initializeApp(firebaseConfig)

  //this is to init services from firebase
  const projectFirestore = firebase.firestore()
  const projectAuth = firebase.auth()
  const projectStorage = firebase.storage()

  //timestamp
  const timestamp = firebase.firestore.FieldValue.serverTimestamp

  export { projectFirestore, projectAuth, projectStorage, timestamp }