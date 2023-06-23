import React, { useState } from 'react'
import '../styles/styles.css'
import home from '../images/home.png'
import noti from '../images/noti.png'
import comment from '../images/commenticon.jpg'
import {UilSetting} from '@iconscout/react-unicons'
import TrendCard from './TrendCard'
import ShareModal from './ShareModal'
import { Link } from 'react-router-dom'

const RightSide = () => {
  const [modalOpened, setModalOpened] = useState(false);
  return (
    <div className='right-Side'>
        <div className='nav-Icons'>
            <Link to="../home">
            <img src={home} alt='' style={{height:"30px"}}/>
            </Link>
            <UilSetting/>
            <img src={noti} alt='' style={{height:"30px"}}/>
            <Link to = '../chat'>
            <img src={comment} alt='' style={{height:"25px"}}/>
            </Link>
        </div>

        <TrendCard/>

        <button className='btn'  onClick={()=>setModalOpened(true)}>
           
            share
        </button>
        <ShareModal
             modalOpened={modalOpened} 
            setModalOpened={setModalOpened}/>

    </div>
  )
}

export default RightSide