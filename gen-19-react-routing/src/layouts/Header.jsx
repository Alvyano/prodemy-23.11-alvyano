import React from 'react';
import LineNavbar from '../components/LineNavbar';
import header from '../data/header';
import logo from '../assets/logo.png';

function Header() {
  return (
    <div>
      <div className='flex place-content-between text-lg flex-row py-4 px-10 text-black'>
        <div className='flex items-center gap-5'>
          <img src={logo} alt="Logo" className="h-8 w-8" />
          <span>ITTS Coffee</span>
        </div>
        <div className='flex items-center gap-[3rem]'>
          {
            header.map((header) => (
              <div key={header.nama}><a href={header.link}>{header.nama}</a></div>
            ))}
        </div>
        <div className='flex items-center gap-x-1'>
          <button className="bg-orange-200 text-black px-3 py-1 rounded-md">Login</button>
        </div>
      </div>
      <div className='pb-1'>
        <LineNavbar />
      </div>
    </div>
  );
}

export default Header;
