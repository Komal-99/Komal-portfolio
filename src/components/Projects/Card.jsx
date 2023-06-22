import React from 'react'

function Card({ title, desc, img, link}) {
  return (
    <div className="card" >
      <img src={img} alt="pic1" />
      <div className="card__details">
        <div className="name">{title}</div>
        <p>{desc}</p>

        <button>Read more</button>
      </div>
    </div>
  );
}

export default Card
