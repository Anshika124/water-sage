import React, { useState } from "react";
import "../styles/Login.css";
import logo from "../assets/water-sage-logo.jpeg";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post("http://localhost:5000/users/login", {
        username,
        password,
      });
      console.log(response.data);
      navigate("/");
    } catch (err) {
      console.error(err);
      setError("Login failed. Please check your username and password.");
    }
  };

  return (
    <div className="login-page" style={{ padding: "70px" }}>
      <div className="login-container">
        <div className="welcome-section">
          <h1>Welcome to</h1>
          <div className="logo">
            <img src={logo} alt="WaterSage Logo" />
          </div>
          <p className="intro-text">
            Water Sage is an interactive platform designed to raise awareness
            about water conservation, provide users with techniques and methods,
            and visualize water scarcity through real-time data. Join us in our
            efforts to save the planet, one drop at a time.
          </p>
        </div>

        <div className="login-section">
          <form className="login-form" onSubmit={handleSubmit}>
            {error && <p style={{ color: 'red' }}>{error}</p>} 
            <label>Username</label>
            <input
              type="text"
              placeholder="Enter your name"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />

            <label>Password</label>
            <input
              type="password"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />

            <div className="forgot-password">
              <a href="/forgot-password">Forgot Password?</a>
            </div>

            <button type="submit" className="sign-in-button">
              SIGN IN
            </button>

            <p className="signup-text">
              Don't have an account?
              <Link to="/register" rel="noopener noreferrer">
                Register
              </Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
