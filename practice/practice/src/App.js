
import './App.css';
import Productscontainer from './components/productsContainer/ProductsContainer';
import { getAllProducts } from './requests/products';
 import {useState, useEffect} from "react";
 import AddProductForm from './components/addProductForm'
function App() {
 
    const [products, setProducts] = useState([]);
  
    useEffect(() => getAllProducts(setProducts), []);
  
  
      console.log(products); 




  return (
    <div>
      <AddProductForm/>
      <Productscontainer products={products}/>
   </div>
  );

}
export default App;
