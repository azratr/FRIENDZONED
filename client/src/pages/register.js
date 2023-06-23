import React from 'react'
import { Link } from 'react-router-dom'

const Register = () => {
  return (
    <div>
      <h1>Sign Up</h1>
      <form>
        <h3>Enter Your Name</h3>
        <label htmlFor='name'>
          <input type='text' name='fname' id='' placeholder='Enter Your Name'/>
        </label>
        <h3>Enter Your Email id</h3>
        <label htmlFor='email'>
          <input type='email' name='email' id= '' placeholder='Enter Your Email'/>
        </label>
        <h3>password</h3>
        <label htmlFor='password'>
          <input type='password' name='password' id='' placeholder='Enter Your Password'/>
        </label>
        <h3>Confirm password</h3>
        <label htmlFor='password'>
          <input type='password' name='password' id='' placeholder='Re-enter Your password'/>
        </label>
        <button>Submit</button>

      </form>
      <p>Already have an account?<Link to='/'>login</Link></p>
    </div>
  )
}

export default Register