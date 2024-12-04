import React from 'react';
import UsersCard from '../usersCard/UsersCard';
import styles from './UsersContainer.module.css';


export default function UsersContainer({ users }) {
  return (
    <div  className={styles.usersContainer} >
      {users.map(el => (
        <UsersCard key={el.id} {...el} />
      ))}
    </div>
  );
}