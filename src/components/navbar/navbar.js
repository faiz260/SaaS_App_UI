import React from "react";
import "./navbar.css";

function Navbar() {
  return (
    <div className="navbar">
      <h1 className="logo">Title</h1>
      <span className="links">
        <a href="#">Home</a>
        <a href="#">About</a>
        <a href="#">Feature</a>
        <a href="#">Price</a>
        <a href="#">Team</a>
      </span>
      <button className="btn">Sign up</button>
    </div>
  );
}

export default Navbar;
