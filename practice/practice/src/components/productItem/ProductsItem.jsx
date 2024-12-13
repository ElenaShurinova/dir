import React from "react";
import s from  './ProductsItem.module.css'

export default function ProductsItem ({thumbnail,title,prise}) {
    return(
        <div>
           <img src={thumbnail} alt ={title}/>
           <p>{title}</p>
           <p>{prise}$</p>

            
            
        </div>
    )
}