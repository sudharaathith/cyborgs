// Footer.js
//className="md:flex md:justify-between md:items-center sm:px-12 px-4  py-7"

import React from 'react';
import Item from './Item';
import { ADDRESS,NAME,EMAIL,PHONENUMBER } from './Menu'; 


import { BsInstagram,BsFacebook,BsLinkedin,BsWhatsapp } from "react-icons/bs"
import {SiThreads} from "react-icons/si"

const Footer = () => {
  return (
   <footer className="bg-[#131212] text-white py-8">
        <div className="container mx-auto flex items-center justify-center">
            <h1 className='text-4xl font-[zeniq] text-[#f3534a] text-center '>Contact</h1>
        </div>
        <div className='grid grid-cols-1 sm-grid-cols-3 lg:grid-cols-4 gap-6 sm:px-8 px-5 py-16'>
            <Item Links={ADDRESS} title="ADDRESS" />
            <Item Links={NAME} title="NAME"  />
            <Item Links={EMAIL} title="EMAIL"  />
            <Item Links={PHONENUMBER} title="PHONE NUMBER"  />
            
        </div>
        <div className="md:flex md:justify-between md:items-center sm:px-12 px-4 bg-[#ffffff19] py-4">
            <div className='container  mx-auto flex items-center justify-center '>
                <BsInstagram size = "2rem" className='mx-5' color="#f3534a" />
                <BsFacebook size = "2rem" className='mx-5'color="#f3534a"/>
                <SiThreads size="2rem" className='mx-5'color="#f3534a"/>
                <BsLinkedin size="2rem" className='mx-5'color="#f3534a"/>
                <BsWhatsapp size="2rem" className='mx-5'color="#f3534a"/>
            </div>
            
        </div>
      
    </footer> 
   

  );
};

export default Footer;
