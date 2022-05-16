
import './Login.css'

import img1 from '../Components/Assets/IvyDistributorLogo.png'
import img2 from '../Components/Assets/rszivylogo2016.png'
import { useEffect, useState } from 'react'



const Login = ({status,changeStatus}) => {

const [name,setName] =useState("")
const [password,setPassword] =useState("")

const [userDetails,setuserDetails] =useState({ username:"Mendy" ,password:"Mage1234"})


console.log(JSON.stringify(userDetails))

useEffect(()=>{

    localStorage.setItem('user' ,"hello")
},[])
const userInChangeHandler =() =>{



}

    return (
        <div>

            <section className="login">
                <div className="container">
                    <img src={img1} alt="Logo" />
                    <div className="input-field">
                        <label>User Name*</label>
                        <input value={name} type="text" required  onChange={(e)=>setName(e.target.value)}  placeholder="enter your name" />
                        </div>
                        <div className="input-field">
                        <label>Password*</label>
                        <input value={password} type="password" required onChange={(e)=>setPassword(e.target.value)} placeholder="enter your password" />
                    </div>
                    <button onClick={()=>changeStatus()}>Login</button>
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