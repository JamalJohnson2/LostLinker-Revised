import React from 'react';
import './Hero.css';
import imagePaths from '../../imagepaths';

const Hero = () => {
    return (
        <div className="hero-section">
        <div className="hero-background"></div>
        <div className="hero-content">
        <h1>Recovering Lost Valuables: A Comprehensive Guide to Reclaiming Your Lost Possessions</h1>
        <p>Exchange information about lost or found items. Our platform allows you to connect with others to reunite with your 
      lost belongings or assist someone in finding theirs.</p>
        <button className="get-started-button">Get Started</button>
        <button className="Learnmore">Learn More</button>
      </div>
    </div>
    );
  };
  
export default Hero;