import React from 'react'
import './Navbar.css'

function Navbar() {
  return (
    <div className='navbar'>
        
        <h3>Komal</h3>
        <ul className="navbar-menu">
            <li>
                <a href='#about-us'>About us</a>
            </li>
            <li><a href='#Experience'>Experience</a></li>
            <li>
                <a href='#works'> Works</a>
            </li>
            <li>
                <a href='#projects'> Projects</a>
            </li>
            <li>
                <a href='Contact'>Contact</a>
            </li>
            <li>
                <a href='Gallery'>My Gallery</a>
            </li>
        </ul>
    </div>
  )
}

export default Navbar