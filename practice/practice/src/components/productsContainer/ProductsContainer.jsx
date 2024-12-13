import React from "react";
import ProductsItem from '../productItem'


export default function Productscontainer ({products}) {
    return(
        <div>
            {
            products.map(el =>
            <ProductsItem key={el.id} {...el}/>)
            
}
        </div>
    )
}