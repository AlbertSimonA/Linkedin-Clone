import React from 'react';

import Header from '../src/components/Header'
import './App.css';

import Feed from './components/Feed';
import Login from './components/Login';

import Sidebar from './components/Sidebar';
import Widgets from './components/Widgets';






function App() {

 


  return (
    <div className="app">
     
      <Header />
      
        <Login/>
      
        
      <div className='app__body'>
      <Sidebar/>
      <Feed/>
    
       {/* Feed */}

      <Widgets/>
       
     </div>


     

      

     


      
    </div>
  );
}

export default App;
