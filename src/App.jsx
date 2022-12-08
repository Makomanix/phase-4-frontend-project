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
    <div className="bg-slate-200">
      <NavBar />
      <Routes>
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

{/* <div className="px-2 flex justify-between items-center w-full h-full">
  <div className="flex items-center">
    <h1 className='text-4xl font-bold pl-8 mr-4'>Track Days</h1>
    <ul className="flex">
      <li>Tracks</li>
      <li>Drivers</li>
    </ul>
  </div>
  <div className='flex pr-4'>
    <button className='border-none bg-transparent mr-4'>Sign In</button>
    <button>Sign up</button>

  </div>
</div> */}