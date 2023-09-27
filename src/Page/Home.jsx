import React from 'react'
import { motion, useMotionTemplate, useMotionValue } from 'framer-motion'
import NavBar from '../Components/NavBar'
import Background from '../Components/Background'

function Home() {
  
  return (
    <Background>
      <NavBar />
    </Background>

  )
}

export default Home