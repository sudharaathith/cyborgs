import React from "react";
import { motion, useScroll, useTransform } from "framer-motion";

import Counter from "../Components/Counter";

function Home() {
  const { scrollY } = useScroll();
  const x = useTransform(scrollY, [100, 400], [0, window.innerWidth / 2 + 80]);
  const y = useTransform(scrollY, [100, 400], [0, 300]);

  return (
    <div className="flex flex-col justify-items-center min-h-screen overflow-x-hidden">
      <motion.div
        className="m-auto text-white flex h-screen overflow-x-hidden"
        style={{ x, y }}
      >
        <img src="/Logo512.png" className=" w-64 h-64 m-auto" />
      </motion.div>
      <div className="flex flex-col h-screen justify-items-center overflow-x-hidden">
        <Counter />
      </div>
    </div>
  );
}

export default Home;
