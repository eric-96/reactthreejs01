import { NavLink } from 'react-router-dom';
import { useState } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className='flex z-10 flex-wrap items-center justify-between w-full py-4 px-6 bg-transparent mt-2 fixed top-0 left-0'>
      <NavLink to='/' className='pl-2'>
        <p className='text-xl md:ml-24 font-thin text-white'>HOMEPAGE</p>
      </NavLink>
      <button className='p-2 md:hidden' onClick={() => setIsOpen(!isOpen)}>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6 text-white">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
        </svg>
      </button>
      <nav className={`font-thin w-full md:flex-end md:flex md:items-center md:w-auto ${isOpen ? '' : 'hidden'} md:block text-right`}>
        <NavLink to='/about' className='block md:inline-block text-lg px-2 py-3 focus:text-pink-200 md:py-0 md:px-4 text-white hover:text-teal-500'>About</NavLink>
        <NavLink to='/projects' className='block md:inline-block text-lg px-2 py-3 focus:text-pink-200 md:py-0 md:px-4 text-white hover:text-teal-500'>Projects</NavLink>
        <NavLink to='/contact' className='block md:inline-block text-lg px-2 py-3 focus:text-pink-200 md:py-0 md:px-4 text-white hover:text-teal-500'>Contact</NavLink>
      </nav>
    </header>
  );
}

export default Navbar;