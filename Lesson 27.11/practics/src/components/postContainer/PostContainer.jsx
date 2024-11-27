import React from 'react'
import PostItem from '../postItem/PostItem'
export default function PostContainer  ({posts})  {
  return (
    <div>
        {
        posts.map(el=> <postItem key={el.id}
            title={el.title} description={el.description}/>

        )
        }
        </div>
  )
}
