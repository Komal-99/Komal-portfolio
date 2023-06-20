import React from 'react'
import './hero.css'
import {RiContactsFill} from 'react-icons/ri'
import {HiExternalLink} from 'react-icons/hi'
export default function Hero() {
  return (

    <div className="hero">
        <div className="hero-left">
            <h1>Hi, I am <br />
             <span>Komal Gupta</span></h1>
            <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat perferendis consectetur nam similique a? Similique voluptatibus repudiandae iure officiis odit, ducimus id harum, sit ut debitis facere. Nostrum, dolorem rerum.</p>
            <div className='hero-button'> 
            <a id='default-button' href='https://drive.google.com/file/d/1oOtomzjZWLfrOZChTwu4ZiQ_iXVkuSuN/view?usp=sharing'>Resume<HiExternalLink/></a>
              
              <a id="outline-button" href='contact'>
                Contact Me <RiContactsFill/>
              </a>
            </div>
            
        </div>
        <div className="hero-right">
          <img src='/pic2.jpg'/>

        </div>
    </div>

  )
}
