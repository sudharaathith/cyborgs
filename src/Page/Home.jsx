import React from 'react'
import { motion,  useScroll, useSpring } from 'framer-motion'

import Counter from '../Components/Counter'


function Home() {
  

  
  return (
    <div className="flex flex-col justify-items-center min-h-screen">
      
      <div className='m-auto text-white flex h-screen' >
      {/* <Counter /> */}
      <img src='/Logo512.png' className=' w-64 h-64 m-auto'/>
      </div>
      <div className='flex flex-col h-screen justify-items-center'>

      <Counter />
      </div>
    </div>

  )
}

export default Home