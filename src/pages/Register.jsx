import React, { useState } from "react";
import "../styles/Register.css";
import logo from "../assets/water-sage-logo.jpeg";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
function Register() {
  const [fullName, setFullName] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phoneNo, setPhone] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        "http://localhost:5000/users/register",
        {
          fullName,
          username,
          email,
          password,
          phoneNo,
        }
      );
      console.log(response.data);

      navigate("/");
    } catch (err) {
      console.error(err);
      setError("Registration failed. Please try again.");
    }
  };

  return (
    <div className="container" style={{ paddingTop: "70px;" }}>
      <div className="main-content">
        <div className="left-panel">
          <h1>Welcome to</h1>
          <img src={logo} alt="Water Sage Logo" className="logo" />
          <p className="description">
            Water Sage is an interactive platform designed to raise awareness
            about water conservation, provide users with techniques and methods,
            and visualize water scarcity through real-time data. Join us in our
            efforts to save the planet, one drop at a time.
          </p>
        </div>

        <div className="right-panel">
          <h2>Create your account</h2>
          <form className="signup-form" onSubmit={handleSubmit}>
            {error && <p style={{ color: 'red' }}>{error}</p>} 
            <input
              type="text"
              placeholder="Full Name"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              required
            />
            <input
              type="text"
              placeholder="Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
            <input
              type="email"
              placeholder="E-mail"
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
            <input type="password" placeholder="Confirm Password" required />
            <input
              type="text"
              placeholder="Phone no."
              value={phoneNo}
              onChange={(e) => setPhone(e.target.value)}
              required
            />
            <button type="submit">SIGN UP</button>
          </form>
          <p>
            Have an account? <Link to="/Login">Login</Link>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Register;
