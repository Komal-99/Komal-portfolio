import React from "react";

import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div className="bg-zinc-200 py-4 fixed top-0 w-screen" id="">
  
        <div className="container flex justify-between items-center">
          <Link to="/">
            <h3 className="font-sans text-lg">Komal.</h3>
          </Link>

          <ul className="md:flex gap-10 hidden md:black">
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
    
  );
  
}

export default Navbar;
