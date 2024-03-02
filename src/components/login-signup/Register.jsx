import React from 'react'
import './Register.css'
import { FaLock, FaUserAlt } from "react-icons/fa";
import { GiArchiveRegister } from "react-icons/gi";
import { Link } from 'react-router-dom';
import {  MdAttachEmail } from "react-icons/md";

function Login() {
  return (
    <>
  <div className="wrapper">
    <form action="">
      <h1>Register <GiArchiveRegister className='icon'/></h1>
      <div className="input-box">
      <input type="text" placeholder='Email' required/>
      < MdAttachEmail className='icons'/>
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
        <button type='submit'>Create Account</button>   
        <div className="registeraccount">
          <p> I have an Account🙋🏼‍♂️ <Link to="/log">Login </Link></p>
        </div>

    </form>
  </div>
    </>
  )
}

export default Login