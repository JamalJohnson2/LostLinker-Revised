import React, { useState } from 'react';
import './Navigation.css'; 
import imagePaths from '../../imagepaths';

const Navbar = () => {
    const [showMenu, setShowMenu] = useState(false);
  
    const toggleMenu = () => {
      setShowMenu(!showMenu);
    };
  
    return (
      <div className="navbar-container">
        <div className="top-container">
          <h1>LostLinker is developed to meet the exacting requirements of ITS311.</h1>
        </div>
        <nav className="navbar-main">
          <div className="logo-container">
            <img src={imagePaths.Weblogo} alt="Logo" />
          </div>
          <div className={`menu-icon ${showMenu ? 'active' : ''}`} onClick={toggleMenu}>
            <span></span>
            <span></span>
            <span></span>
          </div>
          <ul className={`nav-links ${showMenu ? 'active' : ''}`}>
            <li><a href="#">Home</a></li>
            <li><a href="#">About</a></li>
            <li><a href="#">Services</a></li>
            <li><a href="#">Contact</a></li>
          </ul>
          <div className="get-started">
            <button>Get Started</button>
          </div>
        </nav>
      </div>
    );
  };
  
  export default Navbar;