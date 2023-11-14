import { NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <header className='w-full relative'>
      <NavLink to='/' className='absolute left-0 ml-10 p-6 font-bold'>
        <p className='text-2xl'> &#10096; DEV.ERIC  &#10097;</p>
      </NavLink>
      <div className='flex justify-center bg-grey-100 h-full w-full py-1'>
        <nav className='flex text-lg  p-6 space-x-7 font-bold'>
          <NavLink to='/about' className={({ isActive }) => isActive ? 'text-blue-500' : 'text-black' }>About</NavLink>
          <NavLink to='/projects' className={({ isActive }) => isActive ? 'text-blue-500' : 'text-black' }>Projects</NavLink>
          <NavLink to='/contact' className={({ isActive }) => isActive ? 'text-blue-500' : 'text-black' }>Contact</NavLink>
        </nav>
      </div>
    </header>
  );
}

export default Navbar;