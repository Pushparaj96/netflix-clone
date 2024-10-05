import React from 'react';
import logo from '../assets/logo.png';

const Header = () => {
  return (
    <div>
        <img src={logo} alt="logo" className='h-[148px] w-[200px] left-20 absolute cursor-pointer z-30'/>
    </div>
  )
}

export default Header;