import React, { useState } from 'react'
import menu from '../Image/hamburger1.svg'
import styled from 'styled-components'
import cross from '../Image/cross.svg'
import logo from '../Image/Logo512.png'


export default function Hamburger() {
  const [menuV, setMenuV] = useState(false)
  const options = (e) => {
    setMenuV(prev => !prev)
  }
  return (
    <Ham className='menu' show={menuV} onClick={options}>
      <div className='hamb'>
        <img src={menu} className='hamb_icon'  />
        <img src={logo} className='logo1207' />
        <img src={cross} className='cross_icon' />
      </div>
      <div className='options text-violet-300 font-[UnderStation]' >
          <a href='#home'>HOME</a>
          <a href="#about1">ABOUT</a>
          <a href="#event">EVENTS</a>
          <a href="#contact">CONTACT</a>
          <a href="https://forms.gle/7SrbYJdiAnknXV5v8" target='_blank'>REGISTER</a>
      </div>
    </Ham>
  )
}

const Ham = styled.div`
  font-size: 30px;
  .logo1207{
    position:absolute;
    width:70px;
    top:12px;
    left:12px;
  }
  .options{
    transform:${(props) => props.show ? 'traslateX(0)' : 'translateX(100%)'};
    transition: all 0.5s ease;
  };

  .hamb_icon{
    visibility:${(props) => props.show ? 'hidden' : 'visible'};
  }

  
  .cross_icon{
    visibility:${(props) => props.show ? 'visible' :'hidden'};
  }

`;
