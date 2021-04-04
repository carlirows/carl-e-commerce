import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

const config = {
    apiKey: "AIzaSyAD66Z70s-EYBQ2nsrT8L9cqOsL4cM3-qM",
    authDomain: "carl-e-commerce.firebaseapp.com",
    projectId: "carl-e-commerce",
    storageBucket: "carl-e-commerce.appspot.com",
    messagingSenderId: "169664152028",
    appId: "1:169664152028:web:574b3836eb6d7d72be8f19",
    measurementId: "G-HJZL45GPFC"
  }

  firebase.initializeApp(config)

  export const auth = firebase.auth()
  export const firestore = firebase.firestore()

  const provider = new firebase.auth.GoogleAuthProvider()
  provider.setCustomParameters({prompt:'select_account'})
  export const signInWithGoogle = () => auth.signInWithPopup(provider)

  export default firebase


