import React from 'react'
import '../styles/styles.css'
import ProfileSide from '../components/profileSide'
import PostSide from '../components/postSide'
import RightSide from '../components/rightSide'

const Home = () => {
  return (
    <div className='home'>
      <ProfileSide/>
      <PostSide/>
      <RightSide/>

    </div>
  )
}

export default Home