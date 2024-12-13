export const getAllProducts = setState => {
    fetch('https://dummyjson.com/products')
        .then(res => res.json())
        .then(json => setState(json.products))
     
}
