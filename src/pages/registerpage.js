import React from 'react';
import './RegisterPage.css';

const RegisterPage = () => {
  return (
    <div className="register-page">
      <h2>Register</h2>
      <form className="auth-form">
        <label htmlFor="username">Username</label>
        <input type="text" id="username" placeholder="Enter your username" required />

        <label htmlFor="email">Email</label>
        <input type="email" id="email" placeholder="Enter your email" required />

        <label htmlFor="password">Password</label>
        <input type="password" id="password" placeholder="Enter your password" required />

        <button type="submit" className="submit-btn">Register</button>
      </form>
      <p className="redirect">
        Already have an account? <a href="/login">Login here</a>
      </p>
    </div>
  );
};

export default RegisterPage;
