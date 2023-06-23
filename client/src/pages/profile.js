import React from 'react'
import '../styles/styles.css'
import RightSide from '../components/rightSide'
import PostSide from '../components/postSide'
import ProfileCard from '../components/profileCard'
import ProfileLeft from '../components/ProfileLeft'

const Profile = () => {
  return (
    <div className='profile'>
       <ProfileLeft/>

       <div className='profile-center'>
        <ProfileCard location = "profilePage"/>
        <PostSide/>
       </div>
       <RightSide/>
    </div>
  )
}

export default Profile