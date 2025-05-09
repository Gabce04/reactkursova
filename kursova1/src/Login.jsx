import React, { useState } from 'react';
import axios from 'axios';
import styles from './Login.module.css';

const Login = () => {
  const [form, setForm] = useState({
    email: '',
    password: '',
  });
  const [error, setError] = useState('');

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Trying to login with:', form);

    axios
      .get('http://localhost:3001/users') // Make sure your JSON server is running
      .then((response) => {
        const users = response.data;
        if (!Array.isArray(users)) {
          setError('Invalid users data.');
          return;
        }

        const user = users.find(
          (u) => u.email === form.email && u.password === form.password
        );

        if (user) {
          console.log('Login successful:', user);
          alert(`Welcome, ${user.name}!`);
          localStorage.setItem('user', JSON.stringify(user));
          window.location.href = '/profile'; // Redirect to profile page
        } else {
          setError('Invalid credentials. Please check your email and password.');
        }
      })
      .catch((err) => {
        console.error('Error during login:', err);
        if (err.response) {
          setError(`Server Error: ${err.response.status}`);
        } else {
          setError('Something went wrong. Try again.');
        }
      });
  };

  return (
    <div className={styles.container}>
      <form onSubmit={handleSubmit} className={styles.card}>
        <h2 className={styles.title}>Login</h2>
        {error && <p className={styles.error}>{error}</p>}

        <input
          name="email"
          type="email"
          placeholder="Email"
          value={form.email}
          onChange={handleChange}
          className={styles.input}
          required
        />

        <input
          name="password"
          type="password"
          placeholder="Password"
          value={form.password}
          onChange={handleChange}
          className={styles.input}
          required
        />

        <button type="submit" className={styles.button}>
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;
