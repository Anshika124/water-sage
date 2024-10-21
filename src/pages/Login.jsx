import React from 'react'
import { Link } from 'react-router-dom'

function Login() {
  return (
    <div style={{ padding: '70px 20px', maxWidth: '400px', margin: '0 auto' }}>
      <h2>Login</h2>
      <form>
        <div>
          <label htmlFor="username">Username</label>
          <input type="text" id="username" placeholder="Enter your username" required />
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <input type="password" id="password" placeholder="Enter your password" required />
        </div>
        <div>
          <button type="submit">Login</button>
        </div>
      </form>
      <p style={{ marginTop: '20px' }}>
        Dont't have an account? <Link to="/register">Register here</Link>
      </p>
    </div>
  )
}

export default Login