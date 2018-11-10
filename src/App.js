import React from 'react';
import { Provider } from 'react-redux';
import './App.css';
import Login from './Components/Login';
import createStoreWithFirebase from './store/index';
import rootReducer from './reducers/rootReducer';

const initialState = {}
const store = createStoreWithFirebase(rootReducer, initialState)


const App = () => (
  <Provider store={store}>
    <Login />
  </Provider>
);


export default App;
