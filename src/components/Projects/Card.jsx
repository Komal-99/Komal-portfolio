import React from 'react'

function Card({ title, desc, img, link}) {
  return (
    <div className="grid md:grid-cols-2 md:gap-6 gap-4" >
      <div className="md:h-[200px] h-[100px]">
      <img src={img} alt="" className='h-full w-full object-cover rounded-lg bg-top'/>
      </div>
      <div className="flex flex-col justify-center">
        <div className="">{title}</div>
        <p>{desc}</p>

        <button className='bg-zinc-900 text-center flex justify-center items-center text-white py-2 md:w-[200px]'>Read more</button>

      </div>
    </div>
  );
}

export default Card
