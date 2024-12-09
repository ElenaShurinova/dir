import React, { useContext } from 'react';
import styles from './UsersCard.module.css';
import { Context } from '../../context';

export default function UsersCard({ name, username,id,phone }) {
  const cardStyle = {
  
    backgroundColor:phone.startsWith('1') ? 'lightgreen' : 'white'
  };
  const {deleteUser} = useContext(Context);
  return (
    <div className={styles.usersCard}onClick={()=>

      deleteUser(id)} style={cardStyle}>
 
     
      <p> Name:{name}</p>
      <p> UserName:{username}</p>
      <p>Phone:{phone}</p>
    </div>
  );
}