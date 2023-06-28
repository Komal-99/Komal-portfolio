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
      img: "https://media.gettyimages.com/id/1027026658/video/4k-data-background.jpg?s=640x640&k=20&c=D7wjW2tO0L7yrRvt8Pgeq5l2hUGthGzi8Kz-I3MzrMQ=",
    },
    {
      id: 1,
      title: "Lago di Braies",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Consectetur sodales morbi dignissim sed diam pharetra vitae ipsum odio.",
      link: "https://www.google.com",
      img: "https://media.gettyimages.com/id/1276417713/video/4k-data-background.jpg?s=640x640&k=20&c=WICX5m9XZUQftwb8PVuJneIHZ_j5lMBWhd7qLtj3T0A=",
    },
    {
      id: 1,
      title: "Lago di Braies",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Consectetur sodales morbi dignissim sed diam pharetra vitae ipsum odio.",
      link: "https://www.google.com",
      img: "https://img.freepik.com/premium-vector/yellow-comic-background-with-sun-burst-dot-halftone_534957-876.jpg",
    },
    {
      id: 1,
      title: "Lago di Braies",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Consectetur sodales morbi dignissim sed diam pharetra vitae ipsum odio.",
      link: "https://www.google.com",
      img: "https://t4.ftcdn.net/jpg/05/18/69/85/360_F_518698520_Xk9tIwoYpyX6kkVsF6GpQ1z7sKXO8YRz.jpg",
    },
  ];
  return (
    <div className="container">
      <h1 className="text-5xl font-sans mt-[75px]">Projects</h1>
 
     
      <div className="grid md:grid-cols-2 md:gap-4 gap-6  mt-14">
        {data.map((item, index) => (
         <Card {...item} key={index} />
        ))}
      </div>
    </div>
  );
}
