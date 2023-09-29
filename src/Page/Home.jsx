import React from 'react'
import { motion,  useScroll, useSpring, useTransform } from 'framer-motion'

import Counter from '../Components/Counter'
import Event from '../Components/Event'


function Home() {
  const { scrollY } = useScroll()
  const x = useTransform(scrollY, [100, 400], [0, (window.innerWidth/2)+80])
  const y = useTransform(scrollY, [100, 400], [0, 300])


  
  return (
    <div className="flex flex-col justify-items-center min-h-screen overflow-x-hidden">
      
      <motion.div className='m-auto text-white flex h-screen overflow-x-hidden' style={{x, y}} >
      {/* <Counter /> */}
      <img src='/Logo512.png' className=' w-64 h-64 m-auto'/>
      </motion.div>
      <div className='flex flex-col h-screen justify-items-center overflow-x-hidden'>

      <Counter />
      </div>
      <div id="event">
      
      <h1 className="text-orange-600 font-[zeniq] text-center font-bold text-4xl">EVENTS</h1>
      <Event  className="mb-20" />
      <button className="text-orange-600 font-[zeniq] border-double border-4 border-orange-600 m-auto p-4 rounded-lg flex items-center mb-10 transition-transform hover:border-orange-300 hover:scale-105">
  View Event Details
</button>
      </div>

    </div>

  )
}

export default Home