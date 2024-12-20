
import './App.css';
import {  Routes, Route} from 'react-router-dom';

import UsersPage from './page/usersPage/UsersPage';
import ProductsPage from './page/productsPage/ProductsPage'
import MainPage from './page/mainPage/MainPage';
import NavMenu from './components/navMenu/NavMenu';


function App() {
  return (
    <div>
      <NavMenu/>
    <Routes>
     
  
        <Route path="/" element={<MainPage/>} />
        <Route path="/users" element={<UsersPage/>} />
        <Route path="/products" element={<ProductsPage/>} />
   
    </Routes>
    </div>
  );
};


export default App;
