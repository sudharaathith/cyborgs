import React, { useEffect, useState } from 'react'

function Note({main}) {
    const [Show, setShow] = useState(true);

  return (
    <dialog open={Show} className='top-0 left-0 fixed w-screen h-screen z-[100] bg-transparent flex'>
        <div className='m-auto bg-black rounded-xl w-2/3 h-2/3 backdrop-blur-lg'>
          <h1>Note</h1>

        </div>
    </dialog>
  )
}

export default Note