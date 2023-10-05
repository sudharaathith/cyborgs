// Footer.js
//className="md:flex md:justify-between md:items-center sm:px-12 px-4  py-7"

import React from 'react';
import Item from './Item';
import { ADDRESS,NAME,EMAIL,PHONENUMBER } from './Menu'; 


import { BsInstagram,BsFacebook,BsLinkedin,BsWhatsapp,} from "react-icons/bs"
import {BiLogoGmail} from "react-icons/bi"
import {SiThreads} from "react-icons/si"

const Footer = () => {
  return (
   <footer className="bg-[#131212] text-white py-8" id="contact">
        <div className="container mx-auto flex items-center justify-center">
            <h1 className='text-4xl font-[UnderStation] text-violet-300 text-center '>Contact</h1>
        </div>
        <div className='grid grid-cols-1 fo sm-grid-cols-3 lg:grid-cols-4 gap-6 sm:px-8 px-5 py-16 '>
            <Item Links={ADDRESS} title="ADDRESS"  />
            <Item Links={NAME} title="NAME"  />
            <Item Links={EMAIL} title="EMAIL"  />
            <Item Links={PHONENUMBER} title="PHONE NUMBER"  />
            
        </div>
        <div className="md:flex md:justify-between md:items-center sm:px-12 px-4 bg-[#ffffff19] py-4 z-[60]">
            <div className='container  mx-auto flex items-center justify-center '>
                <a style={{zIndex: '90'}} href='https://www.instagram.com/cyborgs_23/'><BsInstagram size = "2rem" className='mx-5' color="#938BDC" /></a>
                <a style={{zIndex: '90'}} href=''><BsFacebook size = "2rem" className='mx-5'color="#938BDC"/></a>
                <a style={{zIndex: '90'}} href='https://www.threads.net/@cyborgs_23'><SiThreads size="2rem" className='mx-5'color="#938BDC"/></a>
                <BsLinkedin size="2rem" className='mx-5'color="#938BDC"/>
                <a style={{zIndex: '90'}} href='https://whatsapp.com/channel/0029VaBBhsqFXUuh631yrX45'><BsWhatsapp size="2rem" className='mx-5'color="#938BDC"/></a>
                <a style={{zIndex: '90'}} href='https://whatsapp.com/channel/0029VaBBhsqFXUuh631yrX45'><BiLogoGmail size = "2.5rem" className='mx-5' color="#938BDC" /></a>
            </div>
        </div>
    </footer> 
   

  );
};

export default Footer;
