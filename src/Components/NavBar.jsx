import React from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

function NavBar() {
    const navg = useNavigate();
  return (
    <div className=" backdrop-blur-xl fixed top-0 w-screen bg-orange-500/5 text-orange-500  px-3 py-2 flex flex-row justify-between items-center">
      <div className=" flex flex-row mx-7">
        <img src="/Logo512.png" className=" w-20 h-20" />
        {/* <div className='my-auto mx-2 text-2xl font-bold font-["Poppin"]'>Cyborgs</div> */}
      </div>
      <div className="flex justify-stretch gap-5 mx-3">
        <NavItem navg={navg} to='/'>Home</NavItem>
        <NavItem navg={navg} to='/event' delay=".1">Event</NavItem>
        <NavItem navg={navg} delay=".2">About</NavItem>
        <NavItem navg={navg} delay=".3">Contact</NavItem>
        <motion.div
          initial={{ rotateZ: -360, opacity: 0, scale: 0.2 }}
        //   transition={{ delay: 0.7 }}
          whileInView={{ rotateZ: 0, opacity: 100, scale: 1 ,transition:{delay:.7}}}
          whileHover={{ scale: 1.1}}
          whileTap={{ scale:.9}}
          animate={{scale:1}}
          className=" select-none cursor-pointer text-xl group/summa bg-black p-1 rounded-md bg-gradient-to-tr from-orange-700 hover:from-orange-950 hover:to-orange-700 to-orange-950"
        >
            <div className="rounded-md group-hover/summa:text-orange-200 group-hover/summa:drop-shadow-glow bg-orange-900 text-white font-[zeniq] px-2 py-1">
            Register
            </div>
          
        </motion.div>
      </div>
    </div>
  );
}

function NavItem(props) {
  return (
    <motion.div
      className=" text-xl cursor-pointer select-none font-[zeniq] my-auto"
      initial={{ y: -70, rotateZ: -130 }}
      transition={{ delay: 0.3 + props.delay ? props.delay : 0 }}
      whileInView={{ y: 0, rotateZ: 0 }}
      onClick={(e)=>{props.navg(props.to)}}
    >
      {props.children}
    </motion.div>
  );
}

export default NavBar;
