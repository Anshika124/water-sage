import React from "react";
import { Link } from "react-router-dom";

function Navigation() {
  let local = JSON.parse(localStorage.getItem("userId"));
  
  return (
    <header
      style={{
        backgroundColor: "#248DC5", // Blue background
        padding: "10px 20px",
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        height: "60px",
        color: "white",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        zIndex: 1000, // Higher than the content on the page
      }}
    >
      <div>
        <Link
          to="/"
          style={{ color: "white", textDecoration: "none", fontWeight: "bold" }}
        >
          <span>Water Sage</span>
        </Link>
      </div>

      <nav>
        <ul
          style={{
            display: "flex",
            gap: "20px",
            listStyle: "none",
            margin: 0,
            padding: 0,
          }}
        >
          <li>
            <Link
              to="/techniques"
              style={{
                color: "white",
                textDecoration: "none",
                fontWeight: "bold",
              }}
            >
              Techniques
            </Link>
          </li>
          <li>
            {!local ? (
              <Link
                to="/login"
                style={{
                  color: "white",
                  textDecoration: "none",
                  fontWeight: "bold",
                }}
              >
                Login
              </Link>
            ) : (
              <Link
                to={`/profile/${local}`}
                style={{
                  color: "white",
                  textDecoration: "none",
                  fontWeight: "bold",
                }}
              >
                Profile
              </Link>
            )}
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Navigation;
