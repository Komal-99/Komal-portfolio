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



  return (
    <div className="">
      <h1 className="text-5xl font-sans mt-[75px]">Projects</h1>
 
     
      <div className="grid grid-cols-2 gap-4 mt-10">
        {data.map((item, index) => (
         <Card {...item} key={index} />
        ))}
      </div>
    </div>
  );
}
