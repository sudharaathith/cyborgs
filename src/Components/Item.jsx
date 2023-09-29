import React from 'react'

const Item = ({Links,title}) => {
  return (
    <div>
        <ul>
        <h1 className=' ml-10 text-[#f3534a]  text-3xl font-[zeniq]'>{title}</h1>
        {Links.map((Link)=>(
            <li key={Link.name} className='ml-10'>
                <a className='text-lg text-[#f7753e] '
                 href={Link.link}>{Link.name}</a>
            </li>
        ))}
        
        </ul>
    </div>
  )
}

export default Item