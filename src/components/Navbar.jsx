import { NavLink } from 'react-router-dom';
import Cube from '../models/cube';
import { Canvas } from '@react-three/fiber';
import { Suspense } from 'react';
import { Loader } from '@react-three/drei';

const Navbar = () => {
  return (

    <header className='flex top-0 left-0 w-full font-light text-2xl justify-between align-center h-16 py-4 px-10 text-white bg-opacity-0'>
      
      <NavLink to='/' className=''>
        <p alt='home' className='px-20 py-2 hover:text-gray-300'>HOMEPAGE</p>
      </NavLink>
        <nav className='flex align-center justify-evenly'>
          <NavLink to='/about' className={({ isActive }) => isActive ? 'text-teal-300 px-2' : 'px-2 hover:text-gray-300' }>About</NavLink>
          <NavLink to='/projects' className={({ isActive }) => isActive ? 'text-teal-300 px-2' : 'px-2 hover:text-gray-300' }>Projects</NavLink>
          <NavLink to='/contact' className={({ isActive }) => isActive ? 'text-teal-300 px-2' : 'px-2 hover:text-gray-300' }>Contact</NavLink>
        </nav>
      
    </header>
  );
}

export default Navbar;