import React from 'react'

function NavBar() {
  return (
    <div className='  fixed top-0 w-screen bg-[#15120f] text-orange-500  px-3 py-5 flex flex-row justify-between items-center'>
        <div className=' flex flex-row '>

        <img src='/Logo512.png' className=' w-12 h-12' />
        {/* <div className='my-auto mx-2 text-2xl font-bold font-["Poppin"]'>Cyborgs</div> */}
        </div>
        <div className='flex justify-stretch gap-5 mx-3'>
         <div>Event</div>
         <div>About</div>
         <div>Contact</div>
        </div>
    </div>
  )
}

export default NavBar