import React, {useState, useEffect} from 'react';
import {Routes, Route} from 'react-router-dom'
import UserContainer from './components/UserContainer';
import Login from './components/Login';
import SignUp from './components/SignUp';
import TracksContainer from './components/TracksContainer';
import DriversContainer from './components/DriversContainer';
import NavBar from './components/NavBar';



function App() {
  const [drivers, setDrivers] = useState([])

  useEffect(() => {
    fetch(`/drivers`)
    .then((res) => res.json())
    .then((drivers) => setDrivers(drivers));
}, [setDrivers])

  return (
    <div >
      <NavBar />
      <Routes >
        <Route path='/' element={<UserContainer drivers={drivers}/>} />
        <Route path='/login' element={<Login drivers={drivers} setDrivers={setDrivers}/>} />
        <Route path='/sign_up' element={<SignUp />} />
        <Route path='/drivers' element={<DriversContainer />} />
        <Route path='/tracks' element={<TracksContainer />} />
      </Routes>
      
        
    </div>  
  );
}

export default App;

