import React from "react";
import "./navbar.css";
import Drawer from "./drawer";

function Navbar() {
  return (
    <div className="navbar">
      <h1 className="logo">Title</h1>
      <span className="links">
        <a href="#home">Home</a>
        <a href="#services">Services</a>
        <a href="#about">About</a>
        <a href="#features">Features</a>
        <a href="#price">Price</a>
        <a href="#team">Team</a>
      </span>
      <button className="btn">Sign up</button>
      <Drawer />
    </div>
  );
}

export default Navbar;
