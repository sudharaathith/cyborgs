import React from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Counter from "../Components/Counter";
import TextChanger from "../Components/TextChanger";

import logo from "../Image/Text1.gif";
import Footer from "../Components/Footer";
import About from "../Components/About";
import Card from "../Components/Card";
import Location  from "../Components/Location";

function Home() {
  const { scrollY } = useScroll();
  const x = useTransform(scrollY, [0, window.innerHeight], [window.innerWidth, window.innerWidth / 2]);
  const x2 = useTransform(scrollY, [0, window.innerHeight], [-window.innerWidth, -window.innerWidth / 2]);
  const opacity = useTransform(scrollY, [window.innerHeight * 1, window.innerHeight * 1.1], [1, 0]);
  const opacity1 = useTransform(scrollY, [window.innerHeight * 1.1, window.innerHeight * 1.2], [0, 1]);
  const textArray = [
    "By Department of Computer Science",
    "A Computer Science Symposium"
  ];
  const duration = 1000; // Animation duration in milliseconds
  const delay = 1000;

  return (
    <div className="flex flex-col justify-items-center min-h-screen overflow-x-hidden ">
      <div style={{ height: `${Math.floor(window.innerHeight * 1.4)}px` }} />
      <motion.div className="m-auto text-white flex h-screen  overflow-x-hidden fixed" style={{ opacity }}>
        <div className="mx-auto sm:my-auto max-sm:gap-6 flex flex-col ">
          <motion.div className=" fixed top-0 left-0 w-screen h-screen bg-black z-30 border-l" style={{ x }} />
          <motion.div className=" fixed top-0 left-0 w-screen h-screen bg-black z-30 border-r" style={{ x: x2 }} />
          <div className=" max-sm:mt-52 flex flex-col">
            <img
              src={logo}
              className=" sm:h-[30rem] -z-40 sm:mt-0 mx-auto"
            />
            <div>
              <TextChanger
                className="mx-auto text-center -z-10 font-[] w-screen text-slate-200 font-semibold text-xl"
                textArray={textArray}
                duration={duration}
                delay={delay}
              />
            </div>
          </div>
        </div>
      </motion.div>
      <motion.div className="flex flex-col h-screen justify-items-center overflow-x-hidden " style={{ opacity: opacity1 }}>
        <Counter />
      </motion.div>
        <div className=" p-10 flex z-50">
        <About />
      </div>
      <div>
        <Card />
      </div>
      <div>
        <Location />
      </div>
    <div>
    <Footer />
    </div>
    
    </div>
  );
}

export default Home;
