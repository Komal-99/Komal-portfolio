import React from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div className="navbar">
      <div className="">
        <div className="navbar-container">
          <Link to="/">
            <h3>Komal.</h3>
          </Link>

          <ul className="navbar-menu">
            <li>
              <a href="#about-us">About us</a>
            </li>
            <li>
              <a href="#Experience">Experience</a>
            </li>
            <li>
              <a href="#works"> Works</a>
            </li>
            <li>
              <a href="#projects"> Projects</a>
            </li>
            <li>
              <a href="#Contact">Contact</a>
            </li>
           
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
