import { useMotionValue } from 'framer-motion';
import React from 'react'

function useMouse() {
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
    {
        handleMouseMove,
        mouseX,
        mouseY
    }
  )
}

export default useMouse