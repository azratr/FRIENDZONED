import React from 'react'
import { useParams } from 'react-router-dom'

const PageRender = () => {
    const {page} = useParams()
    console.log(page);
  return (
    <div>PageRender</div>
  )
}

export default PageRender