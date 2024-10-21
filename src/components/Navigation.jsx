import React from 'react'
import { Link, NavLink } from 'react-router-dom'

function Navigation() {
  return (
    <header style={{
      backgroundColor: '#248DC5',  // Blue background
      padding: '10px 20px',
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      height: '60px',
      color: 'white',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
    }}>
      {/* Logo on the left */}
      <div>
        {/* <img
          src="logo.png"
          alt="Logo"
          style={{ height: '40px', width: 'auto' }}
        /> */}
        <Link to="/" style={{ color: 'white', textDecoration: 'none', fontWeight: 'bold' }}><span>Water Sage</span></Link>
      </div>

      {/* Links on the right */}
      <nav>
        <ul style={{
          display: 'flex',
          gap: '20px',
          listStyle: 'none',
          margin: 0,
          padding: 0,
        }}>
          <li>
            <Link to="/techniques" style={{ color: 'white', textDecoration: 'none', fontWeight: 'bold' }}>
              Techniques
            </Link>
          </li>
          <li>
            <Link to="/login" style={{ color: 'white', textDecoration: 'none', fontWeight: 'bold' }}>
              Login
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Navigation