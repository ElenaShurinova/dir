import React from 'react'
import{products} from '../data/products'
import ProductsItem from '../productsItem/ProductItem'
import s from './ProductsContainer.module.css'

export default function ProductsContainer  ()  {
  return (
    <div className={s.container}>
      {
        products.map (
          el => <ProductsItem key={el.id} title={el.title} price={el.price}/>
        )
      }
    </div>
  )
}


