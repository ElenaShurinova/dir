
import React from 'react'

export default function UserCard ({firstname,lastname,age}) {

    const cardStyles = {
        backgroundColor: age >= 50 ? 'lightpink' : 'lightgreen'
    }
    
  return (
    <div style={cardStyles}>
        <p>Name: {firstname} {lastname}</p>
        <p>Age : {age}</p>


    
    </div>
  )
}

