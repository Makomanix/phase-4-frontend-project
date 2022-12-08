import React from 'react';
import {Routes, Route} from 'react-router-dom'
import UserContainer from './components/UserContainer';
import Login from './components/Login';
import SignUp from './components/SignUp';
import TracksContainer from './components/TracksContainer';
import DriversContainer from './components/DriversContainer';
import NavBar from './components/NavBar';



function App() {
  return (
    <div className="bg-slate-200">
      <NavBar/>
      <Routes>
        <Route path='/' element={<UserContainer />} />
        <Route path='/login' element={<Login />} />
        <Route path='/sign_up' element={<SignUp />} />
        <Route path='/drivers' element={<DriversContainer />} />
        <Route path='/tracks' element={<TracksContainer />} />
      </Routes>
      
        
    </div>  
  );
}

export default App;

