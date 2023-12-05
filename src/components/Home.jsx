import React from 'react';
import './Home.css'
import imagePaths from '../components/imagepaths';
import CardList from './Cardlist';
const Navbar = () => {
  return (
    <>
    <div className="app-container">
      <div className="logo-container">
        <img src={imagePaths.Weblogo} alt="Logo" className="logo" />
      </div>
      <div className="links-container">
        <ul className="nav-links">
          <li><a href="#">Home</a></li>
          <li><a href="#">Lost</a></li>
          <li><a href="#">Found</a></li>
          <li><a href="#">Help</a></li>
          <li><a href="#">Contact</a></li>
        </ul>
      </div>
      <div className="submit-container">
        <button className="submit-button">Submit</button>
      </div>
    </div>
    <header className="header">
      <div className="header-bg"></div>
      <h1 className="header-title">Recovering Lost Valuables: A Comprehensive Guide to Reclaiming Your Lost Possessions</h1>
      <p className="header-description">Exchange information about lost or found items. Our platform allows you to connect with others to reunite with your 
      lost belongings or assist someone in finding theirs. Take advantage of all the available tools and resources to make the search for lost items as efficient 
      and effective as possible.</p>
    </header>
    <h1 className="recent-posts-title">Recent Posts</h1>
    <CardList/>
    <div className="load-more-button-container">
    <button className="load-more-button">Load More</button>
    </div>
    <div className="hero-container">
      <div className="left-column">
      <h1 className="welcome-header">Discover the Power of Connection with Lost Linker!</h1>
        <p className="welcome-message">
        Lost Linker isn't just a lost and found website; it's a beacon of hope, a virtual sanctuary for lost items seeking reunion with their owners. Our mission is simple yet profound: to bring together lost belongings and their rightful owners through the magic of connection.
        </p>
        <button className="login-button">
          Log In
        </button>
      </div>

      <div className="right-column">
      <img
          src={imagePaths.heroimg}
          alt="Hero Image"
          className="hero-image"
        />
      </div>
    </div>
  </>
  );
};

export default Navbar;
