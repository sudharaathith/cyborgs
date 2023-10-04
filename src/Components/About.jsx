import React, { useRef } from 'react'
import logo from '../Image/Logo512.png'
import { motion, useScroll, useTransform } from 'framer-motion'
import logo2 from '../Image/year.jpeg'
import logo3 from '../Image/srmvec.png'


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
        <motion.h1 style={{y, opacity:o}} className='font-[UnderStation] text-3xl text-slate-200 text-center mt-10' >About</motion.h1>
        <div  ref={ref1} className='flex flex-col sm:flex-row mt-25'>
          <motion.img src={logo3} style={{x, opacity:o1}} className='h-52 -z-10 max-sm:mb-11 sm:mr-20' />
          <motion.p style={{opacity:o2, y:y1}} className='sm:p-20 text-slate-200 m-auto'>SRM Valliammai Engineering college (An Autonomous Institution) was established on September 9, 1999.The SRM Valliammai Engineering College is a part of the SRM Group of Educational Institutions, sponsored by the Valliammai Society.The department of Computer Science and Engineering came into existence from the very inception of the college.</motion.p>
        </div>
        <div ref={ref2} className='flex flex-col sm:flex-row-reverse mt-28'>
        <motion.img src={logo2} style={{x:x1, opacity:o3}} className='h-52 sm:mr-20' />
          <motion.p style={{opacity:o3, y:y2}} className='sm:p-20 text-slate-200 m-auto'>A silver jubilee is a milestone of 25 years, a testament to unwavering dedication and resilience. It signifies a journey enriched with memories, challenges, and triumphs. As the silver thread of time weaves through this quarter-century, it promises a future filled with continued commitment and even brighter achievements.</motion.p>
          
        </div>
        <div ref={ref3} className='flex flex-col sm:flex-row mt-28'>
          <motion.img src={logo} style={{x:x2, opacity:o4}} className='h-80 sm:mr-20' />
          <motion.p style={{opacity:o4, y:y3}} className='sm:p-20 text-slate-200 m-auto'>The CSE Department of SRM VALLIAMMAI ENGINEERING COLLEGE is back with the biggest Tech Fest of the year.CYBORGS'23 has been rendered with the most gripping events which will put your skills to the test.Step forward to perserve through a battle of wits and compete in a realm of challenges drafted by our dynamic students where your creativity,logic and knowledge will be required to thrive.</motion.p>
        </div>
    </div>
  )
}

export default About