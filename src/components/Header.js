import React from 'react';
import logo from '../assets/logo.png';

const Header = () => {
  return (
    <div className='relative'>
        <img src={logo} alt="logo" className='h-[148px] w-[200px] ms-10 cursor-pointer'/>
    </div>
  )
}

export default Header;