import { reactReduxFirebase } from 'react-redux-firebase'
import firebase from 'firebase'
import { createStore, compose } from 'redux'
const firebaseConfig = {
    apiKey: "AIzaSyAschOGA0-8sTpxuWfICuVjv64xXYNXxFk",
      authDomain: "s1mplechat-1480e.firebaseapp.com",
      databaseURL: "https://s1mplechat-1480e.firebaseio.com",
      projectId: "s1mplechat-1480e",
      storageBucket: "s1mplechat-1480e.appspot.com",
      messagingSenderId: "586571699709"
  }
  
const rrfConfig = {
    userProfile: 'users',
    enableLogging: false, 
  }
  // Initialize firebase instance
firebase.initializeApp(firebaseConfig)

 const createStoreWithFirebase = compose(
  reactReduxFirebase(firebase, rrfConfig), 
)(createStore)
export default createStoreWithFirebase;