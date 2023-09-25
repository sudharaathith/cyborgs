import React from 'react'
import { motion } from 'framer-motion'

function Home() {
  return (
    <div className=' w-screen h-screen'>
         <motion.div
        initial={{ y: 0, x: 0 }}
        animate={{ y: -10, x: -10 }}
        transition={{ repeat: Infinity, duration: 10, repeatType: 'reverse' }}
        className="w-full h-full bg-gradient-to-b from-blue-500 via-blue-400 to-blue-300"
      />
    </div>
  )
}

export default Home