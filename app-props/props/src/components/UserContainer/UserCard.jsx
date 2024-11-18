import React from 'react'
import UserCard from '../UserCard/UserCard'

const userData =[

    {
        id: 1,
        firstname: 'Inna',
        lastname: 'Antonova',
        age: 23
    },
    {
        id: 2,
        firstname: 'Anna',
        lastname: 'Petrova',
        age: 54
    },
    {
        id: 3,
        firstname: 'Oleg',
        lastname: 'Demidov',
        age: 53
    },
    {
        id: 4,
        firstname: 'Igor',
        lastname: 'Ushanov',
        age: 12
    }
]
 export default function UserContainer  ()  {
  return (
    <div>
       { userData
       .filter(el=>el.age >=18)
       .map( el => <UserCard 
        key={el.id}
         firstname={el.firstname} lastname={el.lastname} age={el.age}/> 
     )}
    </div>
  )
}

