import React from 'react'
import { Link } from 'react-router-dom'

const Login = () => {
  return (
    <div className='login-page'>
      <form>
        <h1>Login</h1>
        <label htmlFor='email'>
          <h3>Email</h3>
          <input type='email' id=''name='email' placeholder='Enter Your Email'/>
        </label>
        <label htmlFor='password'>
          <h3>password</h3>
          <input type='text' id='' name='password' placeholder='Enter password'/>
        </label>
        <button>Submit</button>
      </form>
      <p>Don't have an account?<Link to='/register'> Sign up</Link></p>
    </div>
  )
}

export default Login