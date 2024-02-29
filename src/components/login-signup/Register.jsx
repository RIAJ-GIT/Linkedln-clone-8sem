import React from 'react'
import './Register.css'
import { FaLock, FaUserAlt } from "react-icons/fa";
import { GiArchiveRegister } from "react-icons/gi";
import { Link } from 'react-router-dom';
function Login() {
  return (
    <>
  <div className="wrapper">
    <form action="">
      <h1>Register <GiArchiveRegister className='icon'/></h1>
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
        <button type='submit'>Create Account</button>   
        <div className="registeraccount">
          <p> i have an Account🙋🏼‍♂️ <Link to="/log">Login </Link></p>
        </div>

    </form>
  </div>
    </>
  )
}

export default Login