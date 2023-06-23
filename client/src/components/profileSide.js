import React from 'react'
import LogoSearch from './logoSearch'
import ProfileCard from './profileCard'
import '../styles/styles.css'
import FollowersCard from './followersCard'

const profileSide = () => {
  return (
    <div className='profileSide'>
      <LogoSearch/>
      <ProfileCard location="homepage"/>
      <FollowersCard/>
      </div>
  )
}

export default profileSide