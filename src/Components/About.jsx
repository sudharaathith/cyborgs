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
  const x = useTransform(s1 ,[ 0, .5], [30, 0]);
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
    <div id='about1'  className='mt-1 rounded-xl backdrop-blur-xl sm:p-3 w-full shadow-blue-600 '>
        <motion.h1 style={{y, opacity:o, paddingTop: '15vh'}} className='font-[UnderStation] text-3xl text-slate-200 text-center'>About</motion.h1>
        <div  ref={ref1}  className='flex flex-col sm:flex-row mt-20 sm:mt-28'>
          <motion.img src={logo3} style={{x, opacity:o1}} className='h-52 -z-10 max-sm:mb-11 sm:mr-20' />
          <motion.p style={{opacity:o2, y:y1}} className='sm:p-20 text-slate-200 m-auto'>SRM Valliammai Engineering college (An Autonomous Institution) was established on September 9, 1999 and presently conducts 11 Under graduate courses and 8 Post graduate courses. The college has highly qualified, dynamic and dedicated renowned faculty both from academic and industrial background. Besides, the students bring laurels to the college by securing university ranks.The SRM Valliammai Engineering College is a part of the SRM Group of Educational Institutions, sponsored by the Valliammai Society.The department of Computer Science and Engineering came into existence from the very inception of the college.</motion.p>
        </div>
        <div ref={ref2} className='flex flex-col sm:flex-row-reverse mt-20'>
        <motion.img src={logo2} style={{x:x1, opacity:o3}} className='h-52 sm:mr-20' />
          <motion.p style={{opacity:o3, y:y2}} className='sm:p-20 text-slate-200 m-auto'>Our esteemed college is thrilled to announce the celebration of our Silver Jubilee, marking a remarkable 25 years of academic excellence and growth. Over the past quarter-century, we have nurtured countless talents, forged enduring connections, and contributed to our community's progress. This milestone is not only a celebration of our rich history but also a testament to our commitment to fostering knowledge, innovation, and inclusivity. Join us as we commemorate this achievement with pride, gratitude, and a vision for an even brighter future, where learning and success continue to flourish.</motion.p>
          
        </div>
        <div ref={ref3} className='flex flex-col sm:flex-row mt-20'>
          <motion.img src={logo} style={{x:x2, opacity:o4}} className='h-80 sm:mr-20' />
          <motion.p style={{opacity:o4, y:y3}} className='sm:p-20 text-slate-200 m-auto'>The CSE Department of SRM VALLIAMMAI ENGINEERING COLLEGE is back with the biggest Tech Fest of the year.CYBORGS'23 has been rendered with the most gripping events which will put your skills to the test.Step forward to perserve through a battle of wits and compete in a realm of challenges drafted by our dynamic students where your creativity,logic and knowledge will be required to thrive.</motion.p>
        </div>
    </div>
  )
}

export default About