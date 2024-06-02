import React from 'react'
import './Login.css'
import { MdEmail } from "react-icons/md";
import { FaUser } from "react-icons/fa";
import { RiLockPasswordFill } from "react-icons/ri";

function Login() {
  return (
    <div className='container'>
        <div className="header">
            <div className="text">Sign Up</div>
            <div className="underline"></div>
        </div>
        <div className="inputs">
            <div className="input">
              <FaUser />
                <input type="text" />
            </div>
            <div className="input">
                <MdEmail />
                <input type="email" />
            </div>
            <div className="input">
            <RiLockPasswordFill />
                <input type="password" />
            </div>
        </div>
        <div className="forgot-password">Lost Password? <span>Click here!</span></div>
     <div className="submit-container">
        <div className="submit">Sign Up</div>
        <div className="submit">Login</div>
     </div>

    </div>
  )
}

export default Login