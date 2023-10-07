// Footer.js
//className="md:flex md:justify-between md:items-center sm:px-12 px-4  py-7"

import React from 'react';
import Item from './Item';
import { ADDRESS,NAME,EMAIL,PHONENUMBER } from './Menu'; 


import { BsInstagram,BsFacebook,BsLinkedin,BsWhatsapp} from "react-icons/bs"
import {BiLogoGmail} from "react-icons/bi"
import {SiThreads} from "react-icons/si"
import {FaXTwitter} from "react-icons/fa6"

const Footer = () => {
  return (
   <footer className="bg-[#131212] text-white py-8" id="contact">
        <div className="container mx-auto flex items-center justify-center">
            <h1 className='sm:text-4xl text-3xl font-[UnderStation] text-violet-400 text-center mb-6 '>Contact</h1>
        </div>
        <div className=
        'contact'
        // 'grid grid-cols-1 sm-grid-cols-3 lg:grid-cols-4 gap-6 sm:px-8 px-5 py-16 '
        >
            <Item Links={ADDRESS} title="ADDRESS"  />
            <Item Links={NAME} title="NAME"  />
            <Item Links={EMAIL} title="EMAIL"  />
            <Item Links={PHONENUMBER} title="PHONE NUMBER"  />
        </div>
        <div className="md:flex md:justify-between md:items-center sm:px-12 px-4 bg-[#ffffff19] py-4 z-[60]">
            <div className='container  mx-auto flex items-center justify-center '>
                <a style={{zIndex: '40'}} href='https://www.instagram.com/cyborgs_23/'><BsInstagram className='mx-3 sm:mx-5 w-[2rem] h-[2rem]' color="#938BDC" /></a>
                <a style={{zIndex: '40'}} href='https://www.facebook.com/profile.php?id=61551884400584'><BsFacebook className='mx-3 sm:mx-5 w-[2rem] h-[2rem]'color="#938BDC"/></a>
                <a style={{zIndex: '40'}} href='https://www.threads.net/@cyborgs_23'><SiThreads className='mx-3 sm:mx-5 w-[2rem] h-[2rem]'color="#938BDC"/></a>
                <a style={{zIndex: '40'}} href='https://www.linkedin.com/in/cyborgs2023/'><BsLinkedin className='mx-3 sm:mx-5 w-[2rem] h-[2rem]'color="#938BDC"/></a>
                <a style={{zIndex: '40'}} href='https://whatsapp.com/channel/0029VaBBhsqFXUuh631yrX45'><BsWhatsapp className='mx-3 sm:mx-5 w-[2rem] h-[2rem]'color="#938BDC"/></a>
                {/* <a style={{zIndex: '40'}} href='cyborgs2023@gmail.com'><BiLogoGmail className='mx-3 sm:mx-5 w-[2rem] h-[2rem]' color="#938BDC" /></a> */}
                <a style={{zIndex: '40'}} href='https://twitter.com/CYBORGS_SRM_VEC'><FaXTwitter  className='mx-3 sm:mx-5 w-[1.5rem] h-[1.5rem]'color="#938BDC"/></a>
            </div>
        </div>
        <div>
            
        </div>
    </footer> 
   

  );
};

export default Footer;
