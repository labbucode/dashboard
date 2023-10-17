import React, { useState } from 'react';
import './LoginPage.css';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import Oval from './assists/Oval.svg';
import Logo from './assists/Logo.svg';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

function LoginPage() {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [isInvalidCredentials, setIsInvalidCredentials] = useState(false);
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');

  const validateEmail = (email) => {
    const re = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    return re.test(email);
  };

  const handleLogin = (e) => {
    e.preventDefault();
    setIsLoading(true);
    setIsInvalidCredentials(false);
    setEmailError('');
    setPasswordError('');

    if (email === '' || password === '') {
      setIsInvalidCredentials(true);

      if (email === '') {
        setEmailError('Email is required');
      }

      if (password === '') {
        setPasswordError('Password is required');
      }
      setIsLoading(false);
    } else if (!validateEmail(email)) {
      setEmailError('Invalid email format');
      setIsLoading(false);
    } else if (password.length < 8) {
      setPasswordError('Password must be at least 8 characters');
      setIsLoading(false);
    } else {
      axios
        .post('https://backend-bbi9.onrender.com/auth/login', {
          email: email,
          password: password,
        })
        .then((data) => {
          localStorage.setItem('token', data.access);
          navigate('/dashboard/createproject');
        })
        .catch((err) => {
          setIsInvalidCredentials(true);
          setIsLoading(false);
          console.log(err);
        });
    }
  };

  return (
    <>
      <div className="blue-box">
        <img className="OvalIcon" src={Oval} alt="Oval" />
        <div className="logo">
          <img src={Logo} alt="Logo" />
          <p>Online Project Management</p>
        </div>
      </div>
      <div className="login-container">
        <form className="login-form">
          <h3>Login to get started</h3>
          <div className="form-group">
            <label htmlFor="email">Email:</label>
            <input
              type='email'
              id="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
                setEmailError('');
              }}
              style={{ border: emailError === '' ? '1px solid black' : '1px solid red' }}
            />
            {emailError && <p className="error-text">{emailError}</p>}
          </div>
          <div className="form-group-password-input">
            <label htmlFor="password">Password:</label>
            <input
              type={showPassword ? 'text' : 'password'}
              id="password"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
                setPasswordError('');
              }}
              style={{ border: passwordError === '' ? '1px solid black' : '1px solid red' }}
            />
            {passwordError && <p className="error-text">{passwordError}</p>}

            
            <button
              className="show-password-button"
              onClick={() => setShowPassword(!showPassword)}
            >
              {/* here */}
              {showPassword ? <FaEyeSlash /> : <FaEye />}
            </button>
          </div>
          <div className="form-group-forget-password">
            <p className="forgot-password">Forgot Password?</p>
          </div>

          <div className="form-group">
            <button className="login-button" onClick={handleLogin} disabled={isLoading}>
              {isLoading ? 'Loading...' : 'Login'}
            </button>
          </div>
        </form>
        {isInvalidCredentials && (
          <p className="inv-cred">Invalid credentials</p>
        )}
      </div>
    </>
  );
}

export default LoginPage;
