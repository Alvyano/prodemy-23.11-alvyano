import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.png';
import LineNavbar from '../components/LineNavbar';
import header from '../data/header';

function Header() {
  return (
    <div>
      <div className='flex place-content-between text-lg flex-row py-4 px-10 text-black'>
        <div className='flex items-center gap-5'>
          <img src={logo} alt="Logo" className="h-8 w-8" />
          <span>ITTS Coffee</span>
        </div>
        <div className='flex items-center gap-[3rem]'>
          {header.map((headerItem) => (
            <div key={headerItem.nama}>
              <a href={headerItem.link}>{headerItem.nama}</a>
            </div>
          ))}
        </div>
        <div className='flex items-center gap-x-1'>
        <Link to={"/cart"}>
          <button className="bg-red-500 text-black  px-3 py-1 hover:text-white rounded-md">Whislist</button>
         </Link> 
          <Link to="/admin">
            <button className="bg-orange-200 text-black  px-3 py-1 hover:text-white rounded-md">Admin</button>
          </Link>
        </div>
      </div>
      <div className='pb-1'>
        <LineNavbar />
      </div>
    </div>
  );
}

export default Header;
