import React from "react";
import { assets } from "../assets/assets";

const AboutUs = () => {
  return (
    <div className="container my-5">
      
      <div className="text-center mb-4">
        <h2 className="text-muted">A few words</h2>
        <h1 className="aboutus display-4 fw-bold">About Us</h1>
      </div>

      <p className="text-center mb-5">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel eaque fugiat, 
        tempore harum non itaque quasi? Non at quis ut iure obcaecati. Eum rem est 
        voluptatibus ab reprehenderit amet rerum!
      </p>

      <div className="row g-4">
        <div className="col-md-4">
          <div className="image-container">
            <img src={assets.about1} alt="About Us 1" className="equal-img" />
          </div>
        </div>
        <div className="col-md-4">
          <div className="image-container">
            <img src={assets.about2} alt="About Us 2" className="equal-img" />
          </div>
        </div>
        <div className="col-md-4">
          <div className="image-container">
            <img src={assets.about3} alt="About Us 3" className="equal-img" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;