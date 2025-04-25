import React, { useEffect, useState } from 'react';
import styles from './Profile.module.css';

const Profile = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const userData = localStorage.getItem('user');
    if (userData) {
      setUser(JSON.parse(userData));
    }
  }, []);

  if (!user) {
    return <p>Loading...</p>;
  }

  return (
    <div className={styles.container}>
      <div className={styles.card}>
        <h2 className={styles.title}>User Profile</h2>
        <p><strong>ID:</strong> {user.id}</p>
        <p><strong>Name:</strong> {user.name}</p>
        <p><strong>Email:</strong> {user.email}</p>
        <p><strong>Sex:</strong> {user.sex}</p>
        <p><strong>Card Type:</strong> {user.cardType}</p>
      </div>
    </div>
  );
};

export default Profile;
