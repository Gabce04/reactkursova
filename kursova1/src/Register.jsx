import React, { useState } from 'react';
import axios from 'axios';
import styles from './Register.module.css';

const Register = () => {
  const [form, setForm] = useState({
    name: '',
    email: '',
    password: '',
    sex: 'male',
    cardType: 'monthly',
  });
  const [error, setError] = useState('');

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Trying to submit form:", form);

    axios
      .post('http://localhost:3001/users', form)
      .then((response) => {
        console.log('User registered successfully:', response.data);
        alert('Registered successfully');
        window.location.href = '/login';
      })
      .catch((err) => {
        console.error('Error during registration:', err);
        if (err.response) {
          console.log('Backend response:', err.response.data);
        }
        setError('There was an error registering the user.');
      });
  };

  return (
    <div className={styles.container}>
      <form onSubmit={handleSubmit} className={styles.card}>
        <h2 className={styles.title}>Register</h2>
        {error && <p className={styles.error}>{error}</p>}

        <input
          name="name"
          placeholder="Name"
          value={form.name}
          onChange={handleChange}
          className={styles.input}
          required
        />
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

        <select
          name="sex"
          value={form.sex}
          onChange={handleChange}
          className={styles.select}
        >
          <option value="male">Male</option>
          <option value="female">Female</option>
        </select>

        <select
          name="cardType"
          value={form.cardType}
          onChange={handleChange}
          className={styles.select}
        >
          <option value="year">All Year</option>
          <option value="monthly">Monthly Pass</option>
          <option value="weekly">Weekly Pass</option>
          <option value="daily">Daily Pass</option>
        </select>

        <button type="submit" className={styles.button}>Register</button>
      </form>
    </div>
  );
};

export default Register;
