import "./aboutme.css";

export default function AboutMe() {
  return (
    <div className="aboutme">
      <h1>Storyline</h1>
      <h4>Interesting stuff about me</h4>

      <div className="aboutme-section">
        <div className="aboutme-section-row1">
          <div className="aboutme-section-row1-first">
            <div className="aboutme-section-row1-first-text">
              <h4 id="firsticon">Komal Gupta</h4>
              <p>
                Hello there! My name is Komal Gupta, and I am a passionate and
                dedicated tech enthusiast with a deep interest in the field of
                artificial intelligence (AI). The continuous advancements and
                potential of AI have always fascinated me, inspiring me to
                explore this rapidly evolving field. My ultimate goal is to
                create scalable applications that simplify everyday tasks and
                make a positive impact on a global scale.
              </p>
            </div>
          </div>
          <div className="aboutme-section-row1-second">
            <div>
              <h4>Participatory</h4>
              <p>
                Apart from my technical pursuits, I am actively engaged in
                sharing knowledge and giving back to the community. I thoroughly
                enjoy blogging and organizing meetups to connect with fellow
                tech enthusiasts, exchange insights, and inspire others to
                pursue their own paths in technology. Through these platforms, I
                have had the privilege of sharing my experiences and
                contributing to the growth of the tech community. I firmly
                believe in the power of collaboration and recognize its role in
                driving innovation.
              </p>
            </div>
            {/* <div id="photo"></div> */}
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
          <div>{/* <p>photo</p> */}</div>
        </div>
        <div className="aboutme-section-row3">
          <div>
            <h4>Summary</h4>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt
              voluptate est delectus labore facere autem consequuntur quas quae,
              quidem impedit, minima illo? Consequuntur, ad culpa. Dolore
              numquam ut sed praesentium?
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
