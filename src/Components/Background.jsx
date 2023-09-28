import React, { useState } from "react";
import { motion, useMotionTemplate } from "framer-motion";
import ParticleSystem from "./ParticleSystem";
import NavBar from "./NavBar";
import useMouse from "../Util/useMouse";

function Background(props) {
  const { handleMouseMove, mouseX, mouseY } = useMouse();
  const [isHide, setIsHide] = useState(false);

  setTimeout(() => setIsHide(true), 7000);
  return (
    <div
      className="group absolute bg-black w-screen min-h-screen overflow-x-hidden"
      onMouseMove={handleMouseMove}
    >
      <motion.div
        className="pointer-events-none top-0 left-0 w-screen h-full absolute inset-0 rounded-xl transition duration-300 opacity-100 overflow-x-hidden"
        style={{
          background: useMotionTemplate`
              radial-gradient(
                300px circle at ${mouseX}px ${mouseY}px,
                rgba(245, 128, 12, 0.15),
                transparent 80%
              )
            `,
        }}
      />
      {isHide ? <ParticleSystem /> : null}
      <div className="">
        <NavBar />
        {props.children}
      </div>
    </div>
  );
}

export default Background;
