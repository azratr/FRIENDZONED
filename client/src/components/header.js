import React from 'react'
import { NavLink } from 'react-router-dom'
import pic from '../images/pic.png'
import "../styles/styles.css"

const Header = () => {
  return (
    <div className='nav-bar'>
        <NavLink to={'/'}>
            <img src={pic} alt='pic' style={{height:"50px", marginTop:"10px",marginLeft:"25px"}}/>
            
              
        </NavLink>
    </div>
  )
}

export default Header