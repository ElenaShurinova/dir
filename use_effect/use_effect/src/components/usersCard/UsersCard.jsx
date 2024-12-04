import React from 'react';
import styles from './UsersCard.module.css';

export default function UsersCard({ name, username }) {
  return (
    <div className={styles.usersCard}>
     
      <p> Name:{name}</p>
      <p> UserName:{username}</p>
    </div>
  );
}