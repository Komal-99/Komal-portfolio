import React from 'react'

function Card({ title, desc, img, link}) {
  return (
    <div className="grid grid-cols-2 gap-4" >
      <img src={img} alt="" className='h-full object-cover rounded-lg'/>
      <div className="flex flex-col justify-center">
        <div className="">{title}</div>
        <p>{desc}</p>

        <button className='bg-zinc-900 text-white py-2'>Read more</button>

      </div>
    </div>
  );
}

export default Card
