import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Navbar.module.css';

const Navbar = () => {
  const user = JSON.parse(localStorage.getItem('user'));

  return (
    <div className={styles.pageWrapper}>
      <nav className={styles.navbar}>
        <div></div> 
        <div className={styles.navLinks}>
          <Link to="/">Home</Link>
          {!user ? (
            <>
              <Link to="/login">Login</Link>
              <Link to="/register">Register</Link>
            </>
          ) : (
            <>
              <span style={{ color: '#4ade80' }}>Welcome, {user.name}</span>
              <button
                onClick={() => {
                  localStorage.removeItem('user');
                  window.location.reload();
                }}
                style={{
                  backgroundColor: '#dc2626',
                  padding: '0.3rem 0.8rem',
                  borderRadius: '0.375rem',
                  color: 'white',
                  border: 'none',
                  cursor: 'pointer',
                }}
              >
                Logout
              </button>
            </>
          )}
        </div>
      </nav>
      <div className={styles.logo}>GYMPRO</div>
    </div>
  );
};

export default Navbar;
