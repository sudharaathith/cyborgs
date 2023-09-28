import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom"; 
function NavBar() {
  const navg = useNavigate();
  return (
    <div className=" backdrop-blur-xl z-10 fixed top-0 w-screen bg-orange-500/5 text-orange-500  px-5 py-2 flex flex-row justify-between items-center drop-shadow-glow overflow-x-hidden">
      <div className=" flex flex-row mx-7">
        <motion.img initial={{x:-120}} whileInView={{x:0, transition:{delay:.7}}} src="/Logo512.png" className=" w-20 h-20" />
      </div>
      <div className="flex justify-stretch gap-5 mx-3">
        <NavItem navg={navg} to="/">
          Home
        </NavItem>
        <NavItem navg={navg} to="/event" delay=".1">
          Event
        </NavItem>
        <NavItem navg={navg} delay=".2">
          About
        </NavItem>
        <NavItem navg={navg} delay=".3">
          Contact
        </NavItem>
        <RegisterButton />
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
      onClick={(e) => {
        props.navg(props.to);
      }}
    >
      {props.children}
    </Link>
  );
}

function RegisterButton(props) {
  return (
    <motion.div
      initial={{ rotateZ: -180, opacity: 0, scale: 0.2 }}
      whileInView={{
        rotateZ: 0,
        opacity: 100,
        scale: 1,
        transition: { delay: 0.7 },
      }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      animate={{ scale: 1 }}
      className=" select-none cursor-pointer text-xl bg-orange-600/90 font-[zeniq] text-orange-50 px-2 py-1 rounded-md animate-pulse hover:animate-none"
    >
      Register
    </motion.div>
  );
}

export default NavBar;
