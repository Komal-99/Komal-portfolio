import React from "react";
import "./projects.css";
export default function Projects() {
  return (
    <div className="project">
      <h1>Projects</h1>
      <div className="cards">
      <div className="card1">
        <img src="public\pic.jpg" alt="pic1" />
        <div className="card__details">
          <div className="name">Lago di Braies</div>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Consectetur
            sodales morbi dignissim sed diam pharetra vitae ipsum odio.
          </p>

          <button>Read more</button>
        </div>
      </div>
      <div className="card2">
        <img src="public\pic.jpg" alt="pic1" />
        <div className="card__details">
          <div className="name">Lago di Braies</div>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Consectetur
            sodales morbi dignissim sed diam pharetra vitae ipsum odio.
          </p>

          <button>Read more</button>
        </div>
      </div>
      <div className="card3">
        <img src="public\pic.jpg" alt="pic1" />
        <div className="card__details">
          <div className="name">Lago di Braies</div>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Consectetur
            sodales morbi dignissim sed diam pharetra vitae ipsum odio.
          </p>

          <button>Read more</button>
        </div>
      </div>
      <div className="card4">
        <img src="public\pic.jpg" alt="pic1" />
        <div className="card__details">
          <div className="name">Lago di Braies</div>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Consectetur
            sodales morbi dignissim sed diam pharetra vitae ipsum odio.
          </p>

          <button>Read more</button>
        </div>
      </div>
    </div>
    </div>
  );
}