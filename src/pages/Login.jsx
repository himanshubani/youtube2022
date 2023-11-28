import React from 'react'
import Add from '../img/addAvatar.png'
const Login = () => {
  return (
    <div className='formContainer'>
        <div className="formWrapper">
            <span className="logo">Bani Chat</span>
            <span className='title'>Register</span>
            <form action="">
                <input type="email" placeholder='email'/>
                <input type="password" placeholder='password'/>
        
                <button>Login</button>
            </form>
            <p>Don't have an account? Sign Up</p>
        </div>
    </div>
  )
}

export default Login;