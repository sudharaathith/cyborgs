import React, { useRef } from 'react'
import logo from '../Image/Logo512.png'
import { motion, useScroll, useTransform } from 'framer-motion'
import logo2 from '../Image/year.jpeg'
import logo3 from '../Image/logo2.jpg'


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
  const o1 = useTransform(s1 ,[ 0,.7], [0,1]);
  const y1 = useTransform(s1 ,[ 0,.4], [300, 0]);
  const o2 = useTransform(s1 ,[ 0,.7], [0,1]);
  const x1 = useTransform(s2 ,[ 0, .5], [-300,0]);
  const o3 = useTransform(s2 ,[ 0, .5], [0,1]);
  const y2 = useTransform(s2 ,[ 0, .5], [300, 0]);
  const x2 = useTransform(s3 ,[ 0, .5], [300, 0]);
  const y3 = useTransform(s3 ,[ 0, .5], [300, 0]);
  const o4 = useTransform(s3 ,[ 0, .5], [0,1]);
  return (
    <div id='about1'  className=' rounded-xl backdrop-blur-xl  sm:p-3 w-full shadow-blue-600 '>
        <motion.h1 style={{y, opacity:o}} className='font-[UnderStation] text-3xl text-slate-200 text-center'>About</motion.h1>
        <div  ref={ref1}  className='flex flex-col sm:flex-row text-lg sm:mt-28 max-sm:mt-20 font-[Stylish-Regular]'>
          <motion.img src={logo3} style={{x, opacity:o1}} className='h-52 -z-10 max-sm:mb-11 sm:mr-20 m-auto' />
          <motion.p style={{opacity:o2, y:y1}} className='p-10 sm:p-20 text-slate-200 m-auto text-justify'>SRM Valliammai Engineering college (An Autonomous Institution) was established on September 9, 1999. The college has highly qualified, dynamic and dedicated renowned faculty both from academic and industrial background. Besides, the students bring laurels to the college by securing university ranks.The SRM Valliammai Engineering College is a part of the SRM Group of Educational Institutions, sponsored by the Valliammai Society.<br /><span>Vision :"Educate to Excel in Social Transformation". </span><span> Mission :To contribute to the development of human resources in the form of professional engineers and managers of international excellence and competence with high motivation and dynamism</span></motion.p>
        </div>
        <div ref={ref2} className='flex flex-col sm:flex-row-reverse text-lg mt-20 font-[Stylish-Regular]'>
        <motion.img src={logo2} style={{x:x1, opacity:o3}} className='h-52 sm:mr-20 m-auto' />
        <motion.p style={{opacity:o3, y:y2}} className='p-10 sm:p-20 text-slate-200 m-auto text-justify'>The 25th year of SRM Valliammai Engineering College marks a significant milestone in its journey of academic excellence. Over the past quarter-century, the institution has consistently upheld its commitment to fostering innovation, knowledge, and holistic development among its students. With state-of-the-art infrastructure, experienced faculty, and a dynamic curriculum, SRM Valliammai has produced graduates who have made notable contributions in various fields. As it celebrates this silver jubilee, the college continues to inspire, educate, and empower the next generation of engineers and leaders, ensuring a bright future for both the institution and its alumni. Cheers to 25 years of educational excellence!</motion.p>
          
        </div>
        <div ref={ref3} className='flex flex-col sm:flex-row mt-20 text-lg font-[Stylish-Regular]'>
          <motion.img src={logo} style={{x:x2, opacity:o4}} className='h-80 sm:mr-20 m-auto' />
        <motion.p style={{opacity:o4, y:y3}} className='p-10 sm:p-20 text-slate-200 m-auto text-justify'>"Cyborgs 2K23: Where Human Minds and Digital Dreams Converge" is not just a symposium; it's a journey into the future of Computer Science and Engineering. This event explores the fusion of human intelligence and artificial cognition in the realms of AI, robotics, and cybernetics. It promises innovation, creativity, and boundless possibilities. Building on the achievements of its past editions, Cyborgs 2K23 continues to push the boundaries of technology, nurturing talent, and facilitating knowledge sharing. Join us in shaping the digital future, where human ingenuity meets technological marvels, at Cyborgs 2K23!</motion.p>
        </div>
    </div>
  )
}

export default About