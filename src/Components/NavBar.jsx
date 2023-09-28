import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom"; 
function NavBar() {
  return (
    <div className="backdrop-blur-xl fixed top-0 w-screen bg-orange-500/5 text-orange-500 px-3 py-2 flex flex-row justify-between items-center">
      <div className="flex flex-row mx-7">
        <img src="/Logo512.png" className="w-20 h-20" />
      </div>
      <div className="flex justify-stretch gap-5 mx-3">
       
        <NavItem to="/">Home</NavItem>
        <NavItem to="/event">Event</NavItem>
        <NavItem to="/about">About</NavItem>
        <NavItem to="/contact">Contact</NavItem>
        <motion.div
          initial={{ rotateZ: -360, opacity: 0, scale: 0.2 }}
          whileInView={{ rotateZ: 0, opacity: 100, scale: 1, transition: { delay: 0.7 } }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          animate={{ scale: 1 }}
          className="select-none cursor-pointer text-xl group/summa bg-black p-1 rounded-md bg-gradient-to-tr from-orange-700 hover:from-orange-950 hover:to-orange-700 to-orange-950"
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
    <Link to={props.to} className="text-xl cursor-pointer select-none font-[zeniq] my-auto">
      {props.children}
    </Link>
  );
}

export default NavBar;
