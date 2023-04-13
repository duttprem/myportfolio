import React from "react";
import "./aboutcontent.css";
import { Link } from "react-router-dom";
import ReactImg1 from "../assets/react1.png";
import ReactImg2 from "../assets/react2.jpg";

const AboutContent = () => {
  return (
    <div className="about">
      <div className="left">
        <h1>Who AM I ?</h1>
        <p>
          I'M a react front-end developer . I create responsive and secure
          websites.
        </p>
        <Link to="/contact">
          <button className="btn">CONTACT</button>
        </Link>
      </div>
      <div className="right">
        <div className="img-container">
          <div
            className="img-stack
    top"
          >
            <img src={ReactImg2} className="img" alt="true" />
          </div>
          <div
            className="img-stack
    bottom"
          >
            <img src={ReactImg1} className="img" alt="true" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutContent;
