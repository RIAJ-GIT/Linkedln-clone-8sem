import React from 'react'
import './Login.css'
import { FaLock, FaUserAlt  } from "react-icons/fa";
import { RiLoginBoxFill } from "react-icons/ri";
import { Link } from 'react-router-dom';
import {  MdAttachEmail } from "react-icons/md";
import Register from "./Register"
function Login() {
  return (
    <>
  <div className="wrapper">
    <form action="">
      <h1>Login <RiLoginBoxFill className='icon' /></h1>
      <div className="input-box">
      <input type="text" placeholder='Email' required/>
      <MdAttachEmail className='icons'/>
      </div>
      <div className="input-box">
        <input type="text" placeholder='User Name' required/>
        <FaUserAlt className='icons' /> 
      </div>
      <div className='input-box' >
        <input type="password" placeholder='Password' required />
        <FaLock className='icons'/></div>
        <div className="remember">
          <label ><input type="checkbox" />Remember Me</label>
          <a href='#'>Forgot Password💔</a>
  
        </div>
        <button type='submit'>Login</button>   
        <div className="registeraccount">
          <p>Dont have an account✍🏼 <Link to="/reg"> Register</Link>  here</p>
        </div>

    </form>
  </div>
    </>
  )
}

export default Login