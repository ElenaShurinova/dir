import React from 'react'
import PostItem from '../postItem/PostItem'

export default function PostContainer  ({posts,deletePost})  {
  return (
    <div>


      
        {
        posts.map(el=> <PostItem key={el.id}
            deletePost={deletePost} {...el}/>

        )
        }
        </div>
  )
}
