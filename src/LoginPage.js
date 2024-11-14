import React, { useState } from 'react';
import { auth, provider, signInWithPopup, signInWithEmailAndPassword, createUserWithEmailAndPassword } from './firebase';
import './LoginPage.css';

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState(''); // Added for signup confirm password
  const [message, setMessage] = useState(''); // State to store the success or error message

  // Google login handler
  const handleGoogleLogin = async () => {
    try {
      await signInWithPopup(auth, provider);
      setMessage('Successfully logged in with Google!');
    } catch (error) {
      console.error(error);
      setMessage('Error logging in with Google.');
    }
  };

  // Email login handler
  const handleEmailLogin = async (e) => {
    e.preventDefault();
    try {
      await signInWithEmailAndPassword(auth, email, password);
      setMessage('Successfully logged in!');
    } catch (error) {
      console.error(error);
      setMessage('Error logging in.');
    }
  };

  // Signup handler
  const handleSignUp = async (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      setMessage('Passwords do not match.');
      return;
    }
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      setMessage('Successfully signed up! Please log in.');
    } catch (error) {
      console.error(error);
      setMessage('Error signing up.');
    }
  };

  return (
    <div className="login-page">
      <div className="login-container">
        <h1>Welcome to CityConnect</h1>
        <p>Your gateway to local communities and events</p>

        {/* Show message if exists */}
        {message && <div className="message">{message}</div>}

        {/* Login form */}
        <form onSubmit={handleEmailLogin}>
          <input
            type="email"
            placeholder="you@example.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <button type="submit">Sign In</button>
        </form>

        {/* Signup form */}
        <form onSubmit={handleSignUp} style={{ marginTop: '10px' }}>
          <input
            type="email"
            placeholder="you@example.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <input
            type="password"
            placeholder="Confirm Password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
          />
          <button type="submit">Sign Up</button>
        </form>

        <p>Or</p>
        <button onClick={handleGoogleLogin} className="google-login-button">
          Sign in with Google
        </button>

        <p>
          Already have an account? <button onClick={() => setMessage('')}>Sign In</button>
        </p>
      </div>
    </div>
  );
};

export default LoginPage;
