import React from "react";
import "./contactus.css";
export default function Contactus() {
  return (
    <div className="container mt-[100px] flex flex-col ">
      <h1 className="text-5xl font-sans ">Contact us</h1>
    
    <div className="">
      <div className="">
        <h2 className="my-3 text-2xl">Let's Connect!</h2>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Exercitationem adipisci eveniet itaque deleniti perferendis praesentium molestias, odit veritatis culpa alias voluptate vitae fugit blanditiis beatae dolorum. Ea accusamus ut laboriosam!
        </p>
      </div>
      <div className="mt-4 grid md:grid-cols-2 gap-4">
        <input className="px-3 py-4 bg-slate-100 w-full rounded-lg" placeholder="Enter your Name"/>
        <input className="px-3 py-4 bg-slate-100 w-full rounded-lg" placeholder="Enter your email"/>
          <textarea  rows={ 3} className="px-3 py-4 bg-slate-100 md:col-span-2 w-full rounded-lg md:mt-0 mt-3" placeholder="Your Query"/>
        </div>
        <div className="mt-5 flex justify-end">

        <button className="px-3 py-4 bg-zinc-900 text-white flex justify-center items-center w-[200px]">Submit</button>
        </div>

    </div>
    </div>
  );
}
