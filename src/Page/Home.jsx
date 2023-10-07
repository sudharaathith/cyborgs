
import { motion, useScroll, useTransform } from "framer-motion";
import Counter from "../Components/Counter";
import TextChanger from "../Components/TextChanger";

import logo from "../Image/Text3.gif";
import Footer from "../Components/Footer";
import About from "../Components/About";
import Card from "../Components/Card";
import Location from "../Components/Location";
import GlitchText from "../Components/GlitchText";


function Home() {
  const { scrollY } = useScroll();
  const x = useTransform(scrollY, [0, window.innerHeight], [window.innerWidth, window.innerWidth / 2]);
  const x2 = useTransform(scrollY, [0, window.innerHeight], [-window.innerWidth, -window.innerWidth / 2]);
  const opacity = useTransform(scrollY, [window.innerHeight * 1, window.innerHeight * 1.1], [1, 0]);
  const opacity1 = useTransform(scrollY, [window.innerHeight * 1.1, window.innerHeight * 1.2], [0, 1]);
  const textArray = [
    "SRM Valliammai Engineering College",
    "By the Department of Computer Science and Engineering",
    "A National Level Technical Symposium 2K23"
  ];
  const textArray1 = [
    "SRM Valliammai Engineering College",
    "Department of Computer Science & Engineering",
    // "A National Level Technical Symposium 2K23"
  ];
  const duration = 1000; // Animation duration in milliseconds
  const delay = 1000;
  
  return (
    <div className="flex flex-col relative justify-items-center min-h-screen overflow-x-hidden ">
      
      <div style={{ height: `${Math.floor(window.innerHeight * 1.4)}px` }} id="home" />
      <motion.div className="m-auto text-white flex h-screen  overflow-x-hidden fixed" style={{ opacity }}>
        <div  className="mx-auto sm:my-auto max-sm:gap-6 flex flex-col ">
          <motion.div className=" fixed top-0 left-0 w-screen h-screen bg-black z-30 border-l" style={{ x }}  />
          <motion.div className=" fixed top-0 left-0 w-screen h-screen bg-black z-30 border-r" style={{ x: x2 }} />
          <div  className="cy_glich relative  flex flex-col">
            <img 
              src={logo}
              className=" glich -z-40 mx-auto"
            />
            <div className="cse_current">
              <TextChanger
                className="cse mx-auto text-center -z-10 font-[trigram] w-screen text-xl"
                textArray={textArray}
                duration={duration}
                delay={delay}
              />
            </div>
            <div className="info">
    {/* By the Department of CSE<br /> */}
              <TextChanger
                className=""
                textArray={textArray1}
                duration={duration}
                delay={delay}
              />
            </div>
              <div className="date">
                On October 21'st 2023
              </div>
              <div className="date1">
              <span>A National Level Technical Symposium </span><br /> On October 21'st 2023
              </div>
          </div>
        </div>
      </motion.div>
      <motion.div className="flex flex-col h-screen justify-items-center overflow-x-hidden " style={{ opacity: opacity1 }}>
        <Counter />
      </motion.div>
      <div id="about" className=" flex z">
        <About />
      </div>
      <div id="event"className='z-[60]'>
        <Card />
      </div>
      <div  className='z-50 flex'>
        <Location />
      </div>
      
      <Footer  />
  
    </div>
  );
}

export default Home;
