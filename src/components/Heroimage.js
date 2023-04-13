import "./Heroimage.css";
import React from "react";
import introImage from "../assets/laptop.avif";
import { Link } from "react-router-dom";

const Heroimage = () => {
  return (
    <div className="hero">
      <div className="mask">
        <img className="intro-image" src={introImage} alt="IntroImage" />
      </div>
      <div className="content">
        <p>HI, I AM A FRONT END DEVELOPER.</p>
        <h1>REACT DEVELOPER.</h1>
        <div>
          <Link to="/project" className="btn">
            Project
          </Link>
          <Link to="/contact" className="btn light">
            Contact
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Heroimage;
