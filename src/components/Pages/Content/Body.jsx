import React from 'react';
import './Body.css';
import imagePaths from '../../imagepaths';


const Body = () => {
    return (
      <div className="container">
        <h3 className="centered-background">Community</h3>
        <div className="content">
        <h1>
        Trusted by over 20 universities <br /> and firms.
        </h1>
          <div className="image-row">
            <img src={imagePaths.Logo1} alt="Image 1" />
            <img src={imagePaths.Logo2}alt="Image 2" />
            <img src={imagePaths.Logo3} alt="Image 3" />
            <img src={imagePaths.Logo4} alt="Image 4" />
          </div>
        </div>
      </div>
    );
  };
  
  export default Body;