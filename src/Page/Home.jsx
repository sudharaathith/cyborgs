import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import NavBar from '../Components/NavBar';
import Background from '../Components/Background';
import Counter from '../Components/Counter';
import ParticleSystem from '../Components/ParticleSystem';
import LoadingVideo from './LoadingVideo';

function Home() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

  const logoVariants = {
    hidden: {
      opacity: 0,
      y: 50, 
    },
    visible: {
      opacity: 1,
      y: 0, 
      transition: {
        duration: 1,
        ease: 'easeOut', 
      },
    },
  };

  return (
    <div className="flex justify-center items-center h-screen">
      {loading ? (
        <LoadingVideo />
      ) : (
        <motion.div
          initial="hidden"
          animate="visible"
          variants={logoVariants}
          className="m-auto text-white flex"
        >
          <img src="/Logo512.png" className="w-64 h-64 m-auto" alt="Logo" />
        </motion.div>
      )}
    </div>
  );
}

export default Home;
