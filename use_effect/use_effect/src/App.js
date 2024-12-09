import {useEffect, useState} from 'react';
import './App.css';
import{getAllUsers} from './users';
import { Context } from './context';

import UsersContainer from './components/usersContainer/UsersContainer';

function App() {

  const [users, setUsers] = useState ([]);
  useEffect(() => getAllUsers(setUsers),[]);

  const deleteUser = (userId) => {
    setUsers(users.filter(el => el.id !== userId));
  };


  return (
    <div > 
      <Context.Provider value={{deleteUser}}>
    <UsersContainer users={users} />
    </Context.Provider>
   
    </div>
  );
}

export default App;
