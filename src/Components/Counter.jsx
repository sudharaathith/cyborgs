import React from 'react'
import Countdown from 'react-countdown'
import { motion } from 'framer-motion'

function Counter(props) {
  return (
    <Countdown
    date={Date.UTC(2023, 9, 21)}
    intervalDelay={.8}
    precision={3}
    renderer={props => <div className=' animate-border inline-block rounded-md bg-white bg-gradient-to-r from-orange-600 shadow-md drop-shadow-md  shadow-orange-800 to-orange-900 bg-[length:400%_400%] p-[3px]'>
        <div className='flex bg-black rounded-md'>

        <SingleFace>{props.days}</SingleFace>
        <SingleFace>{props.hours}</SingleFace>
        <SingleFace>{props.seconds}</SingleFace>
        </div>
    </div>}
  />
  )
}

function SingleFace(props) {
    return(
        <div className='p-2 '>{props.children}</div>
    );
}


export default Counter