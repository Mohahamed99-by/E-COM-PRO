import React, { useState } from 'react';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';
import { Link } from 'react-router-dom';

const Navbar = () => {
  // State to manage the navbar's visibility
  const [nav, setNav] = useState(false);

  // Toggle function to handle the navbar's display
  const handleNav = () => {
    setNav(!nav);
  };

  // Array containing navigation items
  const navLinks = [
    { to: '/', label: 'Home' },
    { to: '/add', label: 'Add User' }
  ];

  return (
    <div className='bg-gray-950 flex justify-between items-center h-20 max-w-[1240px] mx-auto px-4 text-white'>
      {/* Logo */}
      <h1 className='w-full text-3xl font-bold text-[#00df9a]'>REACT.</h1>

      {/* Desktop Navigation */}
      <div className='hidden md:flex space-x-4'>
        {navLinks.map(link => (
          <Link
            key={link.to}
            to={link.to}
            className='px-4 py-2 hover:bg-[#00df9a] rounded-xl cursor-pointer duration-300 hover:text-black whitespace-nowrap'
          >
            {link.label}
          </Link>
        ))}
      </div>

      {/* Mobile Navigation Icon */}
      <div onClick={handleNav} className='block md:hidden'>
        {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
      </div>

      {/* Mobile Navigation Menu */}
      <div
        className={
          nav
            ? 'fixed md:hidden left-0 top-0 w-[60%] h-full border-r border-r-gray-900 bg-[#000300] ease-in-out duration-500'
            : 'ease-in-out w-[60%] duration-500 fixed top-0 bottom-0 left-[-100%]'
        }
      >
        {/* Mobile Logo */}
        <h1 className='w-full text-3xl font-bold text-[#00df9a] m-4'>REACT.</h1>

        {/* Mobile Navigation Items */}
        <div>
          {navLinks.map(link => (
            <Link
              key={link.to}
              to={link.to}
              className='block p-4 border-b rounded-xl hover:bg-[#00df9a] duration-300 hover:text-black cursor-pointer border-gray-600'
            >
              {link.label}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
