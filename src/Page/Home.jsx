import React from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Counter from "../Components/Counter";
import TextChanger from "../Components/TextChanger";
import logo from "../Image/Text1.gif";
import Event from '../Components/Event'
import Footer from "../Components/Footer";


function Home() {
  const { scrollY } = useScroll();
  const x = useTransform(scrollY, [100, 600], [0, 200]);
  const y = useTransform(scrollY, [100, 600], [0, 300]);
  const r = useTransform(scrollY, [100, 600], [0, 90]);
  const o = useTransform(scrollY, [100, 600], [1, 0]);
  const s = useTransform(scrollY, [100, 400], [1, 0]);
  const textArray = [
    "Scroll Slowly",
    "By Department of Computer Science",
    "A Computer Science Symposium"
  ];
  const duration = 1000; // Animation duration in milliseconds
  const delay = 1000;

  return (
    <div className="flex flex-col justify-items-center min-h-screen overflow-x-hidden">
      <div className="m-auto text-white flex h-screen overflow-x-hidden">
        <div className="m-auto flex flex-col ">
          <img
            src={logo}
            className=" h-[30rem] mt-0 mx-auto"
          />
          
          <div>
            <TextChanger
              className="mx-auto text-center  font-[TrigarmLight] w-screen text-slate-200 font-semibold text-xl"
              textArray={textArray}
              duration={duration}
              delay={delay}
            />
          </div>
          {/* <div>Register</div> */}
        </div>
      </div>
      <div className="flex flex-col h-72 justify-items-center overflow-x-hidden">
        <Counter />
      </div>
      <div id="event">
      
      <h1 className="text-orange-600 font-[zeniq] text-center font-bold text-4xl">EVENTS</h1>
      <Event  className="mb-20" />
      {/* <button className="text-orange-600 font-[zeniq] border-double border-4 border-orange-600 m-auto p-4 rounded-lg flex items-center mb-10 transition-transform hover:border-orange-300 hover:scale-105">
  View Event Details
</button> */}
      </div>
      <Footer />
    </div>
  );
}

export default Home;
