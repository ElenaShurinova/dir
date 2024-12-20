import React from  'react'
import s from './NavMenu.module.css'
import { NavLink } from 'react-router-dom'
export default function NavMenu () {
    return(
        <nave className={s.navMenu}>
<NavLink to='/'>Main</NavLink>
<NavLink to='/users'>users</NavLink>
<NavLink to='/products'>products</NavLink>


        </nave>
    )

}