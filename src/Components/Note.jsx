import React, { useEffect, useState } from 'react'

function Note({main}) {
    const [Show, setShow] = useState(true);

  return (
    <dialog open={Show} className='top-0 left-0 fixed w-screen h-screen z-[100] bg-transparent flex'>
        <div className='m-auto'>

        </div>
    </dialog>
  )
}

export default Note