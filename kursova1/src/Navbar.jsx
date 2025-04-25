import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Navbar.module.css';

const Navbar = () => {
  const user = JSON.parse(localStorage.getItem('user'));

  const buttonStyle = {
    backgroundColor:' #06143a', 
    padding: '0.3rem 0.8rem',
    borderRadius: '0.375rem',
    color: 'white',
    border: 'none',
    cursor: 'pointer',
    marginLeft: '0.5rem',
  };

  const welcomeStyle = {
    color: '#facc15',
    fontWeight: 'bold',
    marginRight: '0.5rem',
  };

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
              <Link to="/profile">Profile</Link> 
            </>
          ) : (
            <>
              <span style={welcomeStyle}>Welcome, {user.name}</span>
              <button
                onClick={() => {
                  localStorage.removeItem('user');
                  window.location.reload();
                }}
                style={buttonStyle}
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
