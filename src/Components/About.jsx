import React, { useRef } from 'react'
import logo from '../Image/Logo512.png'
import { motion, useScroll, useTransform } from 'framer-motion'

function About(props) {
  const { scrollY } = useScroll();
  const ref1 = useRef(null);
  const s1 = useScroll({
    target: ref1,
    offset: ["end end", "start start"]
  }).scrollYProgress;
  const ref2 = useRef(null);
  const s2 = useScroll({
    target: ref2,
    offset: ["end end", "start start"]
  }).scrollYProgress;
  const ref3 = useRef(null);
  const s3 = useScroll({
    target: ref3,
    offset: ["end end", "start start"]
  }).scrollYProgress;
  const y = useTransform(scrollY ,[ window.innerHeight*1.5, window.innerHeight*2.6], [100, 0]);
  const o = useTransform(scrollY ,[ window.innerHeight*1.5, window.innerHeight*2], [0, 1]);
  const x = useTransform(s1 ,[ 0, .7], [30, 0]);
  const o1 = useTransform(s1 ,[ 0,.5], [0,1]);
  const y1 = useTransform(s1 ,[ 0,.5], [300, 0]);
  const o2 = useTransform(s1 ,[ 0,.5], [0,1]);
  const x1 = useTransform(s2 ,[ 0, .5], [-300,0]);
  const o3 = useTransform(s2 ,[ 0, .5], [0,1]);
  const y2 = useTransform(s2 ,[ 0, .5], [300, 0]);
  const x2 = useTransform(s3 ,[ 0, .5], [300, 0]);
  const y3 = useTransform(s3 ,[ 0, .5], [300, 0]);
  const o4 = useTransform(s3 ,[ 0, .5], [0,1]);
  return (
    <div className='h-fit rounded-xl backdrop-blur-xl sm:p-3 w-full shadow-blue-600'>
        <motion.h1 style={{y, opacity:o}} className='font-[UnderStation] text-3xl text-slate-200 text-center'>About</motion.h1>
        <div  ref={ref1} className='flex flex-col sm:flex-row mt-28'>
          <motion.img src={logo} style={{x, opacity:o1}} className='h-80 max-sm:mb-11 sm:mr-20' />
          <motion.p style={{opacity:o2, y:y1}} className='sm:p-20 text-slate-200 m-auto'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi placeat voluptatem aliquid repellendus voluptate, a inventore. Fugiat corrupti minus explicabo facere voluptates, ad quasi. Porro quos ut nemo enim harum!
          Repudiandae quas dolores sint laudantium? Dolorem exercitationem fugiat nam nostrum quibusdam neque quam beatae ea, ab quas veritatis consequatur veniam, rem, cumque adipisci animi eligendi sapiente soluta non sequi molestias!
          Laudantium veniam dignissimos quos, culpa sint alias temporibus! Alias laboriosam eius, quia consequatur, reprehenderit unde rerum nemo corrupti dicta dolore, deleniti itaque id! Magnam natus repellendus, iure possimus ullam tempore.</motion.p>
        </div>
        <div ref={ref2} className='flex flex-col sm:flex-row-reverse mt-28'>
        <motion.img src={logo} style={{x:x1, opacity:o3}} className='h-80 sm:mr-20' />
          <motion.p style={{opacity:o3, y:y2}} className='sm:p-20 text-slate-200 m-auto'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi placeat voluptatem aliquid repellendus voluptate, a inventore. Fugiat corrupti minus explicabo facere voluptates, ad quasi. Porro quos ut nemo enim harum!
          Repudiandae quas dolores sint laudantium? Dolorem exercitationem fugiat nam nostrum quibusdam neque quam beatae ea, ab quas veritatis consequatur veniam, rem, cumque adipisci animi eligendi sapiente soluta non sequi molestias!
          Laudantium veniam dignissimos quos, culpa sint alias temporibus! Alias laboriosam eius, quia consequatur, reprehenderit unde rerum nemo corrupti dicta dolore, deleniti itaque id! Magnam natus repellendus, iure possimus ullam tempore.</motion.p>
          
        </div>
        <div ref={ref3} className='flex flex-col sm:flex-row mt-28'>
          <motion.img src={logo} style={{x:x2, opacity:o4}} className='h-80 sm:mr-20' />
          <motion.p style={{opacity:o4, y:y3}} className='sm:p-20 text-slate-200 m-auto'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi placeat voluptatem aliquid repellendus voluptate, a inventore. Fugiat corrupti minus explicabo facere voluptates, ad quasi. Porro quos ut nemo enim harum!
          Repudiandae quas dolores sint laudantium? Dolorem exercitationem fugiat nam nostrum quibusdam neque quam beatae ea, ab quas veritatis consequatur veniam, rem, cumque adipisci animi eligendi sapiente soluta non sequi molestias!
          Laudantium veniam dignissimos quos, culpa sint alias temporibus! Alias laboriosam eius, quia consequatur, reprehenderit unde rerum nemo corrupti dicta dolore, deleniti itaque id! Magnam natus repellendus, iure possimus ullam tempore.</motion.p>
        </div>
    </div>
  )
}

export default About