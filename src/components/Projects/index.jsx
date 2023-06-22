import "./projects.css";
import { useState } from "react";
import Card from "./Card";
export default function Projects() {
  const data = [
    {
      id: 1,
      title: "Lago di Braies",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Consectetur sodales morbi dignissim sed diam pharetra vitae ipsum odio.",
      link: "https://www.google.com",
      img: "public/pic.jpg",
    },
    {
      id: 1,
      title: "Lago di Braies",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Consectetur sodales morbi dignissim sed diam pharetra vitae ipsum odio.",
      link: "https://www.google.com",
      img: "public/pic.jpg",
    },
    {
      id: 1,
      title: "Lago di Braies",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Consectetur sodales morbi dignissim sed diam pharetra vitae ipsum odio.",
      link: "https://www.google.com",
      img: "public/pic.jpg",
    },
    {
      id: 1,
      title: "Lago di Braies",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Consectetur sodales morbi dignissim sed diam pharetra vitae ipsum odio.",
      link: "https://www.google.com",
      img: "public/pic.jpg",
    },
  ];

  const [number, setNumber] = useState(0);

  return (
    <div className="project">
      <h1>Projects</h1>
      <h3>{number}</h3>
      <button onClick={() => { 
        setNumber(number + 1);
      }}>Add</button>
      <div className="cards">
        {data.map((item, index) => (
         <Card {...item} key={index} />
        ))}
      </div>
    </div>
  );
}
