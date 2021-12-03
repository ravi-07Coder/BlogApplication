import React, { useState } from "react";
import "./Register.css";
import axios from "axios";
import {LS_AUTH_TOKEN} from "../constants/data";

const Register = () => {
    const [ user, setUser] = useState({
        name: "",
        email:"",
        password:"",
        reEnterPassword: ""
    })

    const handleChange = e => {
        const { name, value } = e.target
        setUser({
            ...user,
            [name]: value
        })
    }

    const register = () => {
        const { name, email, password, reEnterPassword } = user
        if( name && email && password && (password === reEnterPassword)){
            console.log(name, email, password);
            axios.post("https://blog-application-server.herokuapp.com/register", {name, email, password})
            .then( res => {
                localStorage.setItem(LS_AUTH_TOKEN, res.data.token);
                window.location.href = "/";
            })
        } else {
            alert("invlid input")
        }
    }

    return (
        <div className="register">
            {console.log("User", user)}
            <h1 style={{marginTop:185}}>REGISTRATION</h1>
            <input s tyle={{marginTop:35}}type="text" name="name" value={user.name} placeholder="Your Name" onChange={ handleChange }></input>
            <input type="text" name="email" value={user.email} placeholder="Your Email" onChange={ handleChange }></input>
            <input type="password" name="password" value={user.password} placeholder="Your Password" onChange={ handleChange }></input>
            <input type="password" name="reEnterPassword" value={user.reEnterPassword} placeholder="Re-enter Password" onChange={ handleChange }></input>
            <div  style={{marginRight:185, marginTop:25}} className="button" onClick={register} >Register</div>
        
            <div style={{marginRight:-95, marginTop:-50}} className="button" onClick={()=> {window.location.href="/login"}}>Login</div>
        </div>
    )
}

export default Register