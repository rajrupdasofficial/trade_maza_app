import React from "react";
import "../assets/css/Navbar.css";
const Navbar: React.FC = () => {
  return (
    <nav className="navbar">
      <div className="logo">Macro</div>
      <ul className="nav-links">
        <li>
          <a href="#">Hero</a>
        </li>
        <li>
          <a href="#">What We Do</a>
        </li>
        <li>
          <a href="#">Offer You Can't</a>
        </li>
        <li>
          <a href="#">Contact Us</a>
        </li>
        <div className="btngrp">
          <li>
            <button className="signin-btn">Sign In</button>
          </li>
        </div>
      </ul>
    </nav>
  );
};

export default Navbar;
