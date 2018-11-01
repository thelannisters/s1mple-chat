import React, { Component } from 'react';
import { Provider } from 'react-redux'
import { createStore, combineReducers, compose } from 'redux'
import { reactReduxFirebase, firebaseReducer } from 'react-redux-firebase'
import firebase from 'firebase'
import './App.css';
import Login from './Components/Login'
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

const rootReducer = combineReducers({
  firebase: firebaseReducer,
})

const initialState = {}
const store = createStoreWithFirebase(rootReducer, initialState)

const App = () => (
  <Provider store={store}>
    <Login />
  </Provider>
);


export default App;
