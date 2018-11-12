import { reactReduxFirebase } from 'react-redux-firebase'
import firebase from 'firebase'
import { createStore, compose } from 'redux'
import firebaseConfig from '../static-file/config'
import rootReducer from '../reducers/rootReducer';
const rrfConfig = {
    userProfile: 'users'
  }
  // Initialize firebase instance
firebase.initializeApp(firebaseConfig)
 const createStoreWithFirebase = compose(
  reactReduxFirebase(firebase, rrfConfig), 
)(createStore)
const initialState = {}
const store = createStoreWithFirebase(rootReducer, initialState)
export default store;