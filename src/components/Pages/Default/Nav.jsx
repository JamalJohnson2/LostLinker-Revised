import React, { useState } from 'react';
import imagePaths from '../../imagepaths';

const Nav = () => {
    const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

    const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
    };

     const closeMobileMenu = () => {
    setMobileMenuOpen(false);
    
    };
  
    return (
        <>
    <nav className="navbar">
      <div className="logo">
        <img src={imagePaths.Weblogo} alt="LostLinker-Icon" />
        </div>

      {/*<div className={`nav-links ${isMobileMenuOpen ? 'mobile-menu' : ''}`}>
        <a href="#" onClick={closeMobileMenu}>Home</a>
        <a href="#" onClick={closeMobileMenu}>About</a>
        <a href="#" onClick={closeMobileMenu}>Services</a>
        <a href="#" onClick={closeMobileMenu}>Contact</a>
        
        {isMobileMenuOpen && (
          <a href="#" onClick={closeMobileMenu}>Submit</a>
        )}
        </div>*/}

      <div className="submit-button">
        <button>Submit</button>
      </div>

      <div className="hamburger-menu" onClick={toggleMobileMenu}>
        &#9776;
      </div>
    </nav>
      </>
    );
  };

export default Nav;