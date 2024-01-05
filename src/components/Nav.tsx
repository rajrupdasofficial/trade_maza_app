import React from "react";
// import React from "react";
// import { HiMenu } from "react-icons/hi";
// import { SlClose } from "react-icons/sl";
import "../assets/css/Navbar.css";
import { Link } from "react-router-dom";
const Navbar: React.FC = () => {
  // const [isMenuOpen, setIsMenuOpen] = useState(false);

  // const toggleMenu = () => {
  //   setIsMenuOpen(!isMenuOpen);
  // };

  // const closeMenu = () => {
  //   setIsMenuOpen(false);
  // };
  return (
    <>
      <nav className="navbar">
        <div className="logo">Macro</div>
        <ul className="nav-links">
          <li>
            <Link to="/">Hero</Link>
          </li>
          <li>
            <Link to="/">What We Do</Link>
          </li>
          <li>
            <Link to="/">Offer You Can't</Link>
          </li>
          <li>
            <Link to="/blogs">Blogs</Link>
          </li>
          <li>
            <Link to="/">Contact Us</Link>
          </li>

          <div className="btngrp">
            <li>
              <button className="signin-btn">Sign In</button>
            </li>
          </div>
        </ul>
        {/* <a
          href="#"
          className={`menu ${isMenuOpen ? "active" : ""}`}
          onClick={toggleMenu}>
          <HiMenu />
        </a> */}
      </nav>
      {/* <ul className={`nav-mobile ${isMenuOpen ? "active" : ""}`}>
        <SlClose />
        <li>
          <Link to="/" onClick={closeMenu}>
            Home
          </Link>
        </li>
        <li>
          <Link to="/" onClick={closeMenu}>
            About
          </Link>
        </li>
        <li>
          <Link to="/" onClick={closeMenu}>
            Contact
          </Link>
        </li>
      </ul> */}
    </>
  );
};

export default Navbar;
