import React from 'react'
import './hero.css'

export default function Hero() {
  return (

    <div className="hero">
        <div className="hero-left">
            <h1>Hi, I am Komal Gupta</h1>
            <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat perferendis consectetur nam similique a? Similique voluptatibus repudiandae iure officiis odit, ducimus id harum, sit ut debitis facere. Nostrum, dolorem rerum.</p>
            <div className='hero-button'>
              <button>
                Resume
              </button>
              <button>
                Contact
              </button>
            </div>
            
        </div>
        <div className="hero-right">
          <img src='public\pic2.jpg'/>

        </div>
    </div>

  )
}
