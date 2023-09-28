import React, { useEffect, useState } from 'react'
import image from '../Image/Cyborgs.gif'

function Loader({children}) {
    
  const[show, setShow]=useState(true);
  useEffect(()=>{setTimeout(()=>{setShow(false)},5000)},[])
  return (
    <>
    {show?<img className='fixed top-0 left-0 w-screen h-screen z-50' src={image} alt="My Image" />:children}
    </>
  )
}

export default Loader