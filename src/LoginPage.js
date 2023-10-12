import React, { useState, useEffect } from 'react';
import './LoginPage.css';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import Oval from './assists/Oval.svg';
import Logo from './assists/Logo.svg';
import { useNavigate } from "react-router-dom";
import axios, { Axios } from 'axios';



function LoginPage() {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [isInvalidCredentials, setIsInvalidCredentials] = useState(false);

  const handleLogin = (e) => {
    e.preventDefault()
    setIsLoading(true);
    setIsInvalidCredentials(false)
    
    if (email === "" || password === "") {
      setIsInvalidCredentials(true)
      setIsLoading(false);
    } else {
      axios.post("https://backend-bbi9.onrender.com/auth/login", { "email": email, "password": password })
        .then(data => {
          localStorage.setItem("token", data.access)
          navigate("/dashboard/createproject")
        }
        ).catch(err => {
          console.log(err);
        })
    }
  };




  return (
    <>
      <div className="blue-box">
        <img className="OvalIcon" src={Oval} />
        <div className="logo">
          <img src={Logo} />
          <p>Online Project Management</p>
        </div>
      </div>
      <div className="login-container">
        <div className="login-form">
          <h3>Login to get started</h3>
          <div className="form-group">
            <label htmlFor="email">Email:</label>
            <input
              type="text"
              id="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="form-group-password-input">
            <label htmlFor="password">Password:</label>
            <input
              type={showPassword ? 'text' : 'password'}
              id="password"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <button
              className="show-password-button"
              onClick={() => setShowPassword(!showPassword)}
            >
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

        </div>
        {isInvalidCredentials && (
          <p className="inv-cred">Invalid credentials</p>
        )}
      </div>
    </>
  );
}

export default LoginPage;
