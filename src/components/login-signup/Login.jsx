import React from 'react'
import './Login.css'
import { FaLock, FaUserAlt  } from "react-icons/fa";
import { RiLoginBoxFill } from "react-icons/ri";
import { Link } from 'react-router-dom';
import Register from "./Register"
function Login() {
  return (
    <>
  <div className="wrapper">
    <form action="">
      <h1>Login <RiLoginBoxFill className='icon' /></h1>
      <div className="input-box">
        <input type="text" placeholder='username' required/>
        <FaUserAlt className='icons' /> 
      </div>
      <div className='input-box' >
        <input type="password" placeholder='password' required />
        <FaLock className='icons'/></div>
        <div className="remember">
          <label ><input type="checkbox" />remember me</label>
          <a href='#'>forgot password💔</a>
  
        </div>
        <button type='submit'>login</button>   
        <div className="registeraccount">
          <p>dont have an account✍🏼 <Link to="/reg"> Register</Link> </p>
        </div>

    </form>
  </div>
    </>
  )
}

export default Login