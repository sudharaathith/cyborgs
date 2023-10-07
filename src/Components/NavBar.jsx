import React from "react";
import { motion } from "framer-motion";
import logo from '../Image/Logo512.png'
import AnchorLink from "react-anchor-link-smooth-scroll";

function NavBar() {
  return (
    <div className=" navbar backdrop-blur-xl z-[99]  absolute top-0 w-screen bg-orange-500/5 text-violet-300  px-5 py-2 sm:flex flex-row justify-between items-center  overflow-x-hidden">
      <div className=" flex flex-row mx-7">
        <motion.img initial={{x:-120}} whileInView={{x:0, transition:{delay:.4}}} src={logo} className=" w-20 h-20" />
      </div>
      <div className="flex justify-stretch gap-5 mx-3">
        <NavItem  ><AnchorLink href='#home'>Home</AnchorLink></NavItem>
        
        <NavItem   delay=".2" ><AnchorLink href='#about1'>About</AnchorLink></NavItem>
        <NavItem  delay=".1"><AnchorLink href='#event'>Event</AnchorLink></NavItem>
        <NavItem  delay=".3"><AnchorLink href='#contact'>Contact</AnchorLink></NavItem>
      <RegisterButton />
      </div>
    </div>
  );
}


function NavItem(props) {
  return (
    <motion.div
      className=" text-xl cursor-pointer select-none font-[UnderStation] my-auto"
      initial={{ y: -70, rotateZ: -130 }}
      transition={{ delay: 0.3 + props.delay ? props.delay : 0 }}
      whileInView={{ y: 0, rotateZ: 0 }}
      
    >
      {props.children}
    </motion.div>
  );
}

function RegisterButton(props) {
  return (
    <motion.a
      initial={{ rotateZ: -180, opacity: 0, scale: 0.2, transition: { delay: 0.7 }, }}
      whileInView={{
        rotateZ: 0,
        opacity: 100,
        scale: 1,
        
      }}
      href="https://forms.gle/7SrbYJdiAnknXV5v8"
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      animate={{ scale: 1 }}
      className=" font-[UnderStation] text-xl mx-auto text-center self-center py-2 px-4 w-fit text-slate-200 shadow-md border rounded-full cursor-pointer my-auto"
    >
      Register
    </motion.a>
  );
}

export default NavBar;
