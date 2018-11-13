import React from 'react';
import './App.css';
import Main from './Components/Main/Main';
import Sidebar from './Components/Sidebar/Sidebar';


const App = () => {
    return (
        <div className="App">
        <Sidebar />
        <Main />
      </div>
        
    )
    
}


export default App;
