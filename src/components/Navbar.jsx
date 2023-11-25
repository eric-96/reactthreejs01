import { NavLink } from 'react-router-dom';
import { useState } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className='flex z-10 items-center justify-between w-full py-5 px-5 bg-stone-900'>
      <NavLink to='/' className='pl-2'>
        <p className='text-xl md:ml-24 font-thin text-white'>HOMEPAGE</p>
      </NavLink>{/* 
      <button className='p-2 md:hidden' onClick={() => setIsOpen(!isOpen)}>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6 text-white">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
        </svg>
      </button> */}
      <div className={`font-thin`}>
        <NavLink to='/about' className='px-1 focus:text-pink-200 md:py-0 md:px-4 text-white hover:text-teal-500'>About</NavLink>
        <NavLink to='/projects' className='px-1 focus:text-pink-200 md:py-0 md:px-4 text-white hover:text-teal-500'>Projects</NavLink>
        <NavLink to='/contact' className='px-1 focus:text-pink-200 md:py-0 md:px-4 text-white hover:text-teal-500'>Contact</NavLink>
      </div>
    </nav>
  );
}

export default Navbar;