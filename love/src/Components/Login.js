
import './Login.css'

import img1 from '../Components/Assets/IvyDistributorLogo.png'
import img2 from '../Components/Assets/rszivylogo2016.png'
import { useEffect, useState } from 'react'



const Login = ({status,changeStatus}) => {

const [name,setName] =useState("")
const [password,setPassword] =useState("")

const [userDetails,setuserDetails] =useState({ username:"Mendy" ,userpassword:"Mage1234"})
const [errStatus,setErrStatus] =useState(true)


useEffect(()=>{

    localStorage.setItem('user' ,JSON.stringify(userDetails))
},[])

let {username,userpassword} =JSON.parse(localStorage.getItem('user'))

const userInChangeHandler =() =>{

debugger;
if(name === username && password === userpassword)
{
    let storedata ={username,userpassword}
    sessionStorage.setItem('userData' ,JSON.stringify(storedata))
    changeStatus()
}
else {
setErrStatus(false)
}
}

    return (
        <div>

            <section className="login">
                <div className="container">
                    <img src={img1} alt="Logo" />
                    <div className="input-field">
                        <label>User Name*</label>
                        <input value={name} type="text" required  onChange={(e)=>setName(e.target.value)}  placeholder="enter your name" />
                        {errStatus ? null :<span><p>Please enter correct username</p></span>}
                        </div>
                        <div className="input-field">
                        <label>Password*</label>
                        <input value={password} type="password" required onChange={(e)=>setPassword(e.target.value)} placeholder="enter your password" />
                        {errStatus ? null :<span><p>Please enter correct Password</p></span>}
                    </div>
                    <button onClick={userInChangeHandler}>Login</button>
                   <div className="logo">
                    <h4>Forgot Password</h4>
                      <img src={img2} />
                      </div>
                </div>

            </section>

        </div>
    )
}

export default Login;