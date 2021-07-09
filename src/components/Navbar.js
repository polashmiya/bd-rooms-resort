import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo2 from "../images/logo2.png";
import { FaAlignRight } from "react-icons/fa";
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <nav className="navbar">
      <div className="nav-center">
        <div className="nav-header">
          <Link to="/" className="logo" >
            BD ROOMS
          </Link>
          <button
            type="button"
            className="nav-btn"
            onClick={() => setIsOpen(!isOpen)}
          >
            <FaAlignRight className="nav-icon" />
          </button>
        </div>
        <ul className={isOpen ? "nav-links show-nav" : "nav-links"}>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/rooms/">Rooms</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
