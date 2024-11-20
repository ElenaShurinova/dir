import React from 'react'
import s from './ProductsItem.module.css'

export default function ProductsItem  ({title, price})  {
    const ItemStyle = {
        backgroundColor: price >= 50 ? 'lightpink' : 'lightgreen'
    }

  return (

    <div className={s.item} style={ItemStyle}>
        <p>Title: {title}</p>
        <p>Price:{price}</p>
    </div>
  )}