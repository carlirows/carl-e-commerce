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
  !firebase.apps.length ?
  firebase.initializeApp(config) :
  firebase.app()
  
  export const createUserProfileDocument = async (userAuth, additionalData) => {

    if(!userAuth) return
    const userRef = firestore.doc(`users/$${userAuth.uid}`)
    const snapShot = await userRef.get()
    
    if(!snapShot.exists) {
      const { displayName, email } = userAuth
      const createdAt = new Date()

      try {
        await userRef.set({
          displayName,
          email,
          createdAt,
          ...additionalData
        })
      } catch (e) {
        console.log('error creating user', e.message)
      }
    }
    return userRef
  }
  

  export const auth = firebase.auth()
  export const firestore = firebase.firestore()

  const provider = new firebase.auth.GoogleAuthProvider()
  provider.setCustomParameters({prompt:'select_account'})
  export const signInWithGoogle = () => auth.signInWithPopup(provider)

  export default firebase


