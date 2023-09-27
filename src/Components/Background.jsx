import React from 'react'
import { motion, useMotionTemplate, useMotionValue } from 'framer-motion'
import ParticleSystem from './ParticleSystem';
import NavBar from './NavBar';

function Background(props) {
    let mouseX = useMotionValue(0);
  let mouseY = useMotionValue(0);

  function handleMouseMove({
    currentTarget,
    clientX,
    clientY,
  }) {
    let { left, top } = currentTarget.getBoundingClientRect();

    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  }
  return (
    <div
      className="group bg-black w-full min-h-screen "
      onMouseMove={handleMouseMove}
    >
      
        <motion.div
          className="pointer-events-none absolute inset-0 rounded-xl transition duration-300 opacity-100"
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
        <ParticleSystem />
        <div className={props.className}>
        <NavBar />
         { props.children }
        </div>
      </div>
  )
}

export default Background