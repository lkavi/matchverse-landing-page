import React, { useState } from 'react';
import {AiOutlineClose, AiOutlineMenu} from 'react-icons/ai'
import { Link } from 'react-router-dom';

const Navbar = () => {

  const [nav, setNav] = useState(false)

  const handleNav = () => {
    setNav(!nav)
  }

  return (
        <div className='flex h-24 px-4 mx-auto  md:px-20 justify-between items-center bg-transparent'>
          <h1 className='w-full text-3xl font-bold bg-gradient-to-r from-[#49d154] to-[#b2ff5f] bg-clip-text text-transparent font-Montserrat'>
            MatchVerse
          </h1>
          <ul className='hidden md:flex text-lg text-slate-50'>
            <li className='p-4'><Link to='/' viewTransition>Home</Link></li>
            <li className='p-4'><Link to='/about' viewTransition>About</Link></li>
            <li className='p-4'><Link to='/contact' viewTransition>Contact</Link></li>
          </ul>
          <div className="text-white block md:hidden" onClick={handleNav}>
            <div className="relative w-6 h-6">

              <AiOutlineMenu size={24} className={`absolute top-0 left-0 transition-all duration-500 ease-in-out ${
                  nav ? 'opacity-0 scale-90' : 'opacity-100 scale-100'
                }`}
              />

              <AiOutlineClose size={24} className={`absolute top-0 left-0 transition-all duration-500 ease-in-out ${
                  nav ? 'opacity-100 scale-100' : 'opacity-0 scale-90'
                }`}
              />
            </div>
          </div>
          <div className={`fixed top-0 left-0 h-full w-[60%] bg-black bg-opacity-80 backdrop-blur-sm text-white border-r-2 border-[#0f2e11] transition-all duration-500 ease-in-out ${
                            nav ? 'translate-x-0 opacity-100' : '-translate-x-full opacity-0'
                            }`} >
            <h1 className='text-3xl font-bold bg-gradient-to-r from-[#49d154] to-[#b2ff5f] bg-clip-text text-transparent font-Montserrat my-8 mt-[30px] mx-4'>
              MatchVerse
            </h1>
            <ul className='text-lg pt-4 uppercase p-4'>
              <li className='p-4 border-b-2 border-b-white'><Link to='/' viewTransition>Home</Link></li>
              <li className='p-4 border-b-2 border-b-white'><Link to='/about' viewTransition>About</Link></li>
              <li className='p-4'><Link to='/contact' viewTransition>Contact</Link></li>
            </ul>
          </div>
          
        </div>
  )
}

export default Navbar
