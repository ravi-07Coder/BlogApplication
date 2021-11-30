import React, {useState} from "react"
import "./login.css"
import axios from "axios"

import { LS_AUTH_TOKEN } from "../constants/data"

const Login = () => {


    const [ user, setUser] = useState({
        email:"",
        password:""
    })

    const handleChange = e => {
        const { name, value } = e.target
        setUser({
            ...user,
            [name]: value
        })
    }

    const login = () => {
        axios.post("https://blog-application-server.herokuapp.com/login", user)
        .then(res => {
            localStorage.setItem(LS_AUTH_TOKEN, res.data.token);
            window.location.href = "/"
        })
    }

    return (
        
       
       <div className="login">
            
     
            <h1 style={{marginTop:100,textDecoration:'underline'}}>Login</h1>
            <input type="text" name="email" value={user.email} onChange={handleChange} placeholder="Enter your Email"></input>
            <input type="password" name="password" value={user.password} onChange={handleChange}  placeholder="Enter your Password" ></input>
            <div style={{marginTop:25}} className="button" onClick={login}>Login</div>
         
            <div style={{marginTop:15}}className="button" onClick={() => {window.location.href = "/register"}}>Register</div>
        </div>
    
    )
}

export default Login