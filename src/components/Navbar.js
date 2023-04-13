import { Link } from "react-router-dom";
import "./Navbar.css";
import { FaBars, FaTimes } from "react-icons/fa";

import React, { useState } from "react";

const Navbar = () => {
  const [Click, setClick] = useState(false);
  const handleClick = () => setClick(!Click);

  const [color , setcolor] = useState(false)
  const changecolor = ( ) =>{
    if(window.scrollY >=100) {
        setcolor(true);
    } else{
        setcolor(false)
    }
  }

  window.addEventListener("scroll",changecolor);
  return (
    <div className={ color ? "header header-bg" : "header"}>
      <Link to="/">
        <h1>Prem Dutt</h1>
      </Link>
      <ul className={ Click  ?  "nav-menu  active"  :  "nav-menu"}>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/Project">Project</Link>
        </li>
        <li>
          <Link to="/About">About</Link>
        </li>
        <li>
          <Link to="/Contact">Contact</Link>
        </li>
      </ul>
      <div className="hamburger" onClick={handleClick}>
        {Click ? (
          <FaTimes size={20} style={{ color: "#fff" }} />
        ) : (
          <FaBars size={20} style={{ color: "#fff" }} />
        )}
      </div>
    </div>
  );
};

export default Navbar;
