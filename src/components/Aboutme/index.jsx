import React from "react";
import "./aboutme.css";
import {IoPerson} from "react-icons/io5";

export default function AboutMe() {
  return (
    <div className="aboutme">
      <h1>Storyline</h1>
      <h4>Interesting stuff about me</h4>

      <div className="aboutme-section">
        <div className="aboutme-section-row1">
          <div className="aboutme-section-row1-first">
            <div className="aboutme-section-row1-first-text">
              <h4 id='firsticon'>Komal Gupta <IoPerson/></h4>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat
                perferendis consectetur nam similique a? Similique voluptatibus
                repudiandae iure officiis odit, ducimus id harum, sit ut debitis
                facere. Nostrum, dolorem rerum.
              </p>
            </div>
          </div>
          <div className="aboutme-section-row1-second">
            <div>
              <h4>Collaborative Approach</h4>
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Dolores quae dolore architecto accusantium, eius quibusdam?
                Possimus culpa blanditiis iste quam explicabo, sapiente
                perferendis veritatis vel delectus velit eius harum ullam.
              </p>
            </div>
            <div id='photo'>
              <h1>Photo</h1>
            </div>
          </div>
        </div>
        <div className="aboutme-section-row2">
          <div className="aboutme-section-row2-text">
            <h4>Current focus</h4>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Architecto, cum, quas aliquam eum qui modi necessitatibus eius eos
              saepe sint laborum, reiciendis placeat! Harum sunt molestiae
              debitis aliquid dolore impedit?
            </p>
          </div>
          <div>
            <p>photo</p>
          </div>
        </div>
        <div className="aboutme-section-row3">
          <div>

          <h4>Summary</h4>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt
            voluptate est delectus labore facere autem consequuntur quas quae,
            quidem impedit, minima illo? Consequuntur, ad culpa. Dolore numquam
            ut sed praesentium?
          </p>
          </div>
        </div>
      </div>
    </div>
  )
}
