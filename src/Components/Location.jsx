import React, { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'

const Location = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["end end", "start start"]
  });
  const opacity = useTransform(scrollYProgress, [0,.3],[0,1]);
  const scale = useTransform(scrollYProgress, [0,.3],[1.5,1]);
  const y = useTransform(scrollYProgress, [0,.3],[100,0]);
  return (
    <motion.div className=' py-9 my-9 sm:px-9 mx-auto rounded-lg bg-slate-900/60' ref={ref} style={{opacity, scale, y}}>
      <h1 className='font-[UnderStation] text-3xl text-slate-200 text-center my-9'>Location</h1>
      <div className=' flex sm:flex-row gap-7 flex-col'>
    <iframe className='sm:mx-auto w-96 rounded-lg sm:h-[300px] h-52 sm:w-[400px]' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3890.2680217684156!2d80.03873251162432!3d12.825949418000663!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a52f70d79722631%3A0x49afcd4648f94894!2sSRM%20Valliammai%20Engineering%20College!5e0!3m2!1sen!2sin!4v1696177047375!5m2!1sen!2sin" 

    style={{border:'0'}} 
    allowfullscreen="" 
    loading="lazy" 
    ></iframe>
    <div className='mx-auto'>
      <h2 className=' font-[UnderStation] text-lg text-slate-200 text-center my-9'>SRM Valliammai Engineering College</h2>
      <p className=' text-white text-center'>National Highway 45,<br/> Potheri, <br/>SRM Nagar, <br/>Kattankulathur, <br/>Tamil Nadu 603203</p>
    </div>
    </div>
    </motion.div>   
  );       
}

export default Location
