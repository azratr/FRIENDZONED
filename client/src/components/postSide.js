import React from 'react'
import '../styles/styles.css'
import PostShare from './postShare'
import Posts from './posts'

const PostSide = () => {
  return (
    <div className='postSide'>
        <PostShare/>
        <Posts/>
    </div>
  )
}

export default PostSide