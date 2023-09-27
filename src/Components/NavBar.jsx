import React from "react";
import { motion } from "framer-motion";

function NavBar() {
  return (
    <div className=" backdrop-blur-xl fixed top-0 w-screen bg-orange-500/5 text-orange-500  px-3 py-2 flex flex-row justify-between items-center">
      <div className=" flex flex-row mx-7">
        <img src="/Logo512.png" className=" w-20 h-20" />
        {/* <div className='my-auto mx-2 text-2xl font-bold font-["Poppin"]'>Cyborgs</div> */}
      </div>
      <div className="flex justify-stretch gap-5 mx-3">
        <NavItem>Home</NavItem>
        <NavItem delay=".1">Event</NavItem>
        <NavItem delay=".2">About</NavItem>
        <NavItem delay=".3">Contact</NavItem>
        <motion.div
          initial={{ rotateZ: -360, opacity: 0, scale: 0.2 }}
          transition={{ delay: 0.7 }}
          whileInView={{ rotateZ: 0, opacity: 100, scale: 1 }}
          className=" text-xl bg-black p-1 rounded-md bg-gradient-to-tr from-orange-700 to-orange-950"
        >
            <div className="rounded-md bg-orange-900 text-white px-2 py-1">
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
      className=" text-xl cursor-pointer select-none font-[url('/public/Zeniq.ttf')] my-auto"
      initial={{ y: -40, rotateZ: -90 }}
      transition={{ delay: 0.3 + props.delay ? props.delay : 0 }}
      whileInView={{ y: 0, rotateZ: 0 }}
    >
      {props.children}
    </motion.div>
  );
}

export default NavBar;
