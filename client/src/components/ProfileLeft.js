import React from 'react'
import '../styles/styles.css'
import FollowersCard from '../components/followersCard'
import InfoCard from './InfoCard'
import LogoSearch from '../components/logoSearch'

const ProfileLeft = () => {
  return (
    <div className='ProfileLeft'>
        <LogoSearch/>
        <InfoCard/>
        <FollowersCard/>
    </div>
    
  )
}

export default ProfileLeft