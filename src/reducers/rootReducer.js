import { firebaseReducer } from 'react-redux-firebase'
import {  combineReducers } from 'redux';
import loginReducer from './loginReducer';
const rootReducer = combineReducers({
    firebase: firebaseReducer,
    loginReducer
  })

export default rootReducer;
