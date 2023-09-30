import React from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Counter from "../Components/Counter";
import TextChanger from "../Components/TextChanger";
import logo from "../Image/Text1.gif";
import Event from '../Components/Event'
import Footer from "../Components/Footer";


function Home() {
  const { scrollY } = useScroll();
  const x = useTransform(scrollY ,[0, window.innerHeight], [window.innerWidth, window.innerWidth/2]);
  const x2 = useTransform(scrollY ,[0, window.innerHeight], [-window.innerWidth, -window.innerWidth/2]);
  const opacity = useTransform(scrollY ,[ window.innerHeight*1, window.innerHeight*1.1], [ 1, 0]);
  const opacity1 = useTransform(scrollY ,[ window.innerHeight*1.1, window.innerHeight*1.2], [ 0, 1]);
  const textArray = [
    "Scroll Slowly",
    "By Department of Computer Science",
    "A Computer Science Symposium"
  ];
  const duration = 1000; // Animation duration in milliseconds
  const delay = 1000;

  return (
    <div className="flex flex-col justify-items-center min-h-screen overflow-x-hidden ">
      <div style={{height:`${Math.floor(window.innerHeight*1.2)}px`}} />
      <motion.div className="m-auto text-white flex h-screen  overflow-x-hidden fixed" style={{opacity}}>
        <div className="mx-auto sm:my-auto flex flex-col ">
          <motion.div className=" fixed top-0 left-0 w-screen h-screen bg-black z-20 border-l" style={{x}} />
          <motion.div className=" fixed top-0 left-0 w-screen h-screen bg-black z-20 border-r" style={{x:x2}} />
          <div className=" max-sm:mt-52">
          <img
            src={logo}
            className=" sm:h-[30rem] sm:mt-0 mx-auto"
          />
          
          <div>
            <TextChanger
              className="mx-auto text-center  font-[] w-screen text-slate-200 font-semibold text-xl"
              textArray={textArray}
              duration={duration}
              delay={delay}
            />
          </div>
          </div>
          {/* <div>Register</div> */}
        </div>
      </motion.div>
      <motion.div className="flex flex-col h-screen justify-items-center overflow-x-hidden " style={{opacity:opacity1}}>
        <Counter />
      </motion.div>
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
