import React from 'react'

import {RiContactsFill} from 'react-icons/ri'
import {HiExternalLink} from 'react-icons/hi'
export default function Hero() {
  return (

    <div className="container md:h-screen h-[80vh] items-center grid md:grid-cols-3 gap-6  ">
        <div className="md:col-span-2 flex flex-col justify-center h-full gap-3">
            <h1 className='text-3xl'>Hi, I am <br />
             <span className='text-6xl font-sans'>Komal Gupta</span></h1>
            <p className='text-xl'> Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat perferendis consectetur nam similique a? Similique voluptatibus repudiandae iure officiis odit, ducimus id harum, sit ut debitis facere. Nostrum, dolorem rerum.</p>
            <div className='flex items-center gap-4'> 
            <a id='' className='flex items-center gap-2 md:text-xl px-6 py-3 bg-orange-500 rounded-full' href='https://drive.google.com/file/d/1oOtomzjZWLfrOZChTwu4ZiQ_iXVkuSuN/view?usp=sharing'>Resume<HiExternalLink/></a>
              
              <a id="" className='flex items-center gap-2 md:text-xl text-md px-6 py-3 bg-zinc-200  border-black rounded-full' href='contact'>
                Contact Me <RiContactsFill/>
              </a>
            </div>
            
        </div>
        <div className="hidden md:flex ">
          <img src='/pic2.jpg' className="rounded-2xl w-full md:h-[60vh] object-cover"/>

        </div>
    </div>

  )
}
