import React from 'react'
import logo from '../Image/Logo512.png'
import { motion, useScroll, useTransform } from 'framer-motion'

function About(props) {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY ,[ window.innerHeight*1.5, window.innerHeight*2], [100, 0]);
  const o = useTransform(scrollY ,[ window.innerHeight*1.5, window.innerHeight*2], [0, 1]);
  const x = useTransform(scrollY ,[ window.innerHeight*1.7, window.innerHeight*2.1], [100, 0]);
  const o1 = useTransform(scrollY ,[ window.innerHeight*1.7, window.innerHeight*2.1], [0,1]);
  const y1 = useTransform(scrollY ,[ window.innerHeight*1.8, window.innerHeight*2.2], [100, 0]);
  const o2 = useTransform(scrollY ,[ window.innerHeight*1.8, window.innerHeight*2.2], [0,1]);
  const x1 = useTransform(scrollY ,[ window.innerHeight*2.3, window.innerHeight*2.8], [-100,0]);
  const o3 = useTransform(scrollY ,[ window.innerHeight*2.3, window.innerHeight*2.8], [0,1]);
  const y2 = useTransform(scrollY ,[ window.innerHeight*2.4, window.innerHeight*3.3], [100, 0]);
  const x2 = useTransform(scrollY ,[ window.innerHeight*3.5, window.innerHeight*4], [100, 0]);
  const o4 = useTransform(scrollY ,[ window.innerHeight*3.5, window.innerHeight*4], [0,1]);
  const y3 = useTransform(scrollY ,[ window.innerHeight*3.6, window.innerHeight*4.2], [100, 0]);
  return (
    <div className='h-fit rounded-xl backdrop-blur-xl sm:p-3 w-full shadow-blue-600'>
        <motion.h1 style={{y, opacity:o}} className='font-[UnderStation] text-3xl text-slate-200 text-center'>About</motion.h1>
        <div className='flex flex-col sm:flex-row mt-28'>
          <motion.img src={logo} style={{x, opacity:o1}} className='h-80 sm:mr-20' />
          <motion.p style={{opacity:o2, y:y1}} className='sm:p-20 text-slate-200 m-auto'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi placeat voluptatem aliquid repellendus voluptate, a inventore. Fugiat corrupti minus explicabo facere voluptates, ad quasi. Porro quos ut nemo enim harum!
          Repudiandae quas dolores sint laudantium? Dolorem exercitationem fugiat nam nostrum quibusdam neque quam beatae ea, ab quas veritatis consequatur veniam, rem, cumque adipisci animi eligendi sapiente soluta non sequi molestias!
          Laudantium veniam dignissimos quos, culpa sint alias temporibus! Alias laboriosam eius, quia consequatur, reprehenderit unde rerum nemo corrupti dicta dolore, deleniti itaque id! Magnam natus repellendus, iure possimus ullam tempore.</motion.p>
        </div>
        <div className='flex flex-col sm:flex-row-reverse mt-28'>
        <motion.img src={logo} style={{x:x1, opacity:o3}} className='h-80 sm:mr-20' />
          <motion.p style={{opacity:o3, y:y2}} className='sm:p-20 text-slate-200 m-auto'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi placeat voluptatem aliquid repellendus voluptate, a inventore. Fugiat corrupti minus explicabo facere voluptates, ad quasi. Porro quos ut nemo enim harum!
          Repudiandae quas dolores sint laudantium? Dolorem exercitationem fugiat nam nostrum quibusdam neque quam beatae ea, ab quas veritatis consequatur veniam, rem, cumque adipisci animi eligendi sapiente soluta non sequi molestias!
          Laudantium veniam dignissimos quos, culpa sint alias temporibus! Alias laboriosam eius, quia consequatur, reprehenderit unde rerum nemo corrupti dicta dolore, deleniti itaque id! Magnam natus repellendus, iure possimus ullam tempore.</motion.p>
          
        </div>
        <div className='flex flex-col sm:flex-row mt-28'>
          <motion.img src={logo} style={{x:x2, opacity:o4}} className='h-80 sm:mr-20' />
          <motion.p style={{opacity:o4, y:y3}} className='sm:p-20 text-slate-200 m-auto'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi placeat voluptatem aliquid repellendus voluptate, a inventore. Fugiat corrupti minus explicabo facere voluptates, ad quasi. Porro quos ut nemo enim harum!
          Repudiandae quas dolores sint laudantium? Dolorem exercitationem fugiat nam nostrum quibusdam neque quam beatae ea, ab quas veritatis consequatur veniam, rem, cumque adipisci animi eligendi sapiente soluta non sequi molestias!
          Laudantium veniam dignissimos quos, culpa sint alias temporibus! Alias laboriosam eius, quia consequatur, reprehenderit unde rerum nemo corrupti dicta dolore, deleniti itaque id! Magnam natus repellendus, iure possimus ullam tempore.</motion.p>
        </div>
    </div>
  )
}

export default About