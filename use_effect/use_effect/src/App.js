import {useEffect, useState} from 'react';
import './App.css';
import{getAllUsers} from './users';
import UsersContainer from './components/usersContainer/UsersContainer';

function App() {

  const [users, setUsers] = useState ([]);
  useEffect(() => getAllUsers(setUsers),[]);




  return (
    <div className='App' > 
    <UsersContainer users={users}/>
    </div>
  );
}

export default App;
