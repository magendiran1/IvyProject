
import { useState } from 'react';
import './App.css';
import Dashboard from './Components/Dashboard';

import Login from './Components/Login'
import SignUp from './Components/Signup';

function App() {

  const [status,setStatus] =useState(false)

  const changeStatus =()=>{
    setStatus(!status)
  }
  return (
    < >
 
 {status? <Dashboard /> :<Login status={status} changeStatus={changeStatus} />}
 
  {/* <SignUp /> */}
    </>
  );
}

export default App;
