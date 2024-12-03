import React from 'react'
import s from './index.module.css'

export default function PostItem  ({title,description,deletePost,id,liked})  {

  const cardStyle = {
    backgroundColor:liked ? 'pink' : 'gray'
 
  }
  return (
    
    <div className={s.item} style={cardStyle}>
    <span onClick={() => deletePost(id)}>X</span>
    <h3>{title}</h3>
    <p>{description}</p>
    
    </div>
  )
}

