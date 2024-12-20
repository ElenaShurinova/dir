

import React from 'react';
import { getUsers } from '../../requests/user';


export default function ProductsPage  ()  {

   
          getUsers();
    
  return (
    <div>
      <h1>Products Page</h1>
      <p> Products Page!</p>
    </div>
  );
};

