import React from 'react'

function NavBar() {
  return (
    <div className=' backdrop-blur-xl  fixed top-0 w-screen bg-orange-500/5 text-orange-500  px-3 py-5 flex flex-row justify-between items-center'>
        <div className=' flex flex-row '>

        <img src='/Logo512.png' className=' w-32 h-32' />
        {/* <div className='my-auto mx-2 text-2xl font-bold font-["Poppin"]'>Cyborgs</div> */}
        </div>
        <div className='flex justify-stretch gap-5 mx-3'>
         <NavItem>Event</NavItem>
         <NavItem>About</NavItem>
         <NavItem>Contact</NavItem>
         <div>Register</div>
        </div>
    </div>
  )
}

function NavItem(props){
    return(
        <div>
            {props.children}
        </div>
    );
}

export default NavBar