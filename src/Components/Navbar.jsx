import React from 'react'
import { useDispatch } from 'react-redux';
import { setSearch } from '../Redux/Slices/searchSlice';
import { FaTelegram } from "react-icons/fa";
import logo from '../assets/logo.jpeg';

const Navbar = () => {
  const dispatch = useDispatch();
  return (
    <nav className='flex flex-col lg:flex-row justify-between mx-6 py-3 mb-12'>
      <div>
        <h3 className='text-xl font-bold text-gray-600 mb-2'>
          {new Date().toUTCString().slice(0, 16)}
        </h3>

        {/* Logo + Text in flex row */}
        <div className="flex items-center gap-3 mb-2">
          <img 
            src={logo} 
            alt="SANJAY Restaurant" 
            className="w-10 h-10 object-cover rounded-full"
          />
          <h1 className='text-2xl font-bold'>
            SANJAY Restaurant
          </h1>
        </div>

        <a 
          href="https://t.me/Sanjay62bot" 
          target="_blank" 
          className="flex items-center gap-2 mt-2 text-red-600 hover:underline"
        >
          <FaTelegram className="text-2xl" />
          <span className="font-medium">Order Quickly With Our Telegram Bot</span>
        </a>
        <a href='https://sanjay-62.github.io/Portfolio/' className="flex items-center gap-2 mt-3 text-red-500 hover:underline" target='_blank' >
        <img src={logo} alt="SANJAY PATEL" className="w-10 h-10 object-cover rounded-full"  /><h1 className='text-xl font-bold'>Click Here To Check My Portfolio</h1> </a>
      </div>

      <div className="mt-4 lg:mt-0">
        <input
          onChange={(e) => dispatch(setSearch(e.target.value))}
          type="search"
          placeholder='Search Here'
          autoComplete='off'
          className='p-3 border border-gray-400 text-sm rounded-lg outline-none w-full lg:w-[75vh]'
        />
      </div>
    </nav>
  )
}

export default Navbar;
