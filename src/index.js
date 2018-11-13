import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { Provider } from 'react-redux';
import createStoreWithFirebase from './store/index'
import rootReducer from './reducers/rootReducer';


const initialState = {}
const store = createStoreWithFirebase(rootReducer, initialState)

const render = ()=>{
    return ReactDOM.render(
        <Provider store={store}>
            <App />
        </Provider>, document.getElementById('root'))
}
store.subscribe(render);






// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
