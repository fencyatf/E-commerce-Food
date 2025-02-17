import React from "react";
import { assets } from "../assets/assets";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";


const Home = () => {
  return (
    <div className="homepage-container position-relative text-white">
      <img
        src={assets.homepage}
        className="img-fluid w-100 h-100 position-absolute" style={{ objectFit: "cover" }}
        alt="homepage"
      />
      <div className="overlay d-flex flex-column justify-content-center align-items-center position-absolute w-100 h-100 px-3">
        <h2 className="title  text-center">Welcome to our</h2>
        <h1 className="foodkart display-4 text-center fw-bold">FOOD KART</h1>
        <p className="subtitle text-center px-md-5">
        Food is a universal language that connects people, cultures, and traditions. It brings joy, comfort, and a sense of belonging, whether through shared meals or exploring global cuisines. Food also reflects history and creativity, delighting the senses while nourishing the body. Embracing sustainable and mindful practices ensures its positive impact on health, communities, and the planet.
        </p>
        <Link to="/login">
          <Button variant="primary">LOGIN</Button>
        </Link>

      </div>
    </div>
  );
};

export default Home;
