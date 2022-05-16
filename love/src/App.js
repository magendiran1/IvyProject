
import { useState } from 'react';
import './App.css';
import Dashboard from './Components/Dashboard';

import Login from './Components/Login'

function App() {

  const [status,setStatus] =useState(false)

  const changeStatus =()=>{
    setStatus(!status)
  }
  return (
    <div className="App">
 
 {status? <Dashboard /> :<Login status={status} changeStatus={changeStatus} />}
 
    </div>
  );
}

export default App;
