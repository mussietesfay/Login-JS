import React, { useState } from 'react'
import './Login.css'
import { MdEmail } from "react-icons/md";
import { FaUser } from "react-icons/fa";
import { RiLockPasswordFill } from "react-icons/ri";

function Login() {
const [action, setaction]=useState('Sign Up')

  return (
    <div className='container'>
        <div className="header">
            <div className="text">{action}</div>
            <div className="underline"></div>
        </div>
        <div className="inputs">
            {
               action==="LogIn"? <div></div>:<div className="input">
               <span className='icons'><FaUser /></span>
                 <input type="text"  placeholder='Name'/>
             </div>
            }
        
            <div className="input">
                <span className='icons'><MdEmail /></span>
                <input type="email" placeholder='Email Id' />
            </div>
            <div className="input">
            <span className='icons'><RiLockPasswordFill /></span>
                <input type="password" placeholder='Password' />
            </div>
        </div>
        {
        action==="Sign Up" ? <div></div>:<div className="forgot-password">Lost Password? <span>Click here!</span></div>
        }
        
     <div className="submit-container">
        <div className={action==="LogIn"?"submit gray": "submit"} onClick={()=>{setaction('Sign Up')}}>Sign Up</div>
        <div className={action==="Sign Up"?"submit gray": "submit"} onClick={()=>{setaction('LogIn')}}>LogIn</div>
     </div>

    </div>
  )
}

export default Login