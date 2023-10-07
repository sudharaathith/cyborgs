import React from 'react'

const Item = ({Links,title}) => {
  return (
    <div>
        <ul className='contact_topics'>
        <h1 className='heading  text-violet-300 sm:text-2xl text-xl font-[UnderStation]'>{title}</h1>
        {Links.map((Link)=>(
            <li key={Link.name} className='name'>
                <a className='sm:text-lg text-md text-white '
                 href={Link.link}>{Link.name}</a>
            </li>
        ))}
        
        </ul>
    </div>
  )
}

export default Item