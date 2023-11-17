import { NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <header className='flex justify-between align-center h-16 py-4 px-10 text-white'>
      <NavLink to='/' className=''>
        <p alt='home' className=''> &#x0126;&#xd8;ME</p>
      </NavLink>

        <nav className='flex align-center justify-evenly'>
          <NavLink to='/about' className={({ isActive }) => isActive ? 'text-green-200 px-2' : 'px-2' }>About</NavLink>
          <NavLink to='/projects' className={({ isActive }) => isActive ? 'text-green-200 px-2' : 'px-2' }>Projects</NavLink>
          <NavLink to='/contact' className={({ isActive }) => isActive ? 'text-green-200 px-2' : 'px-2' }>Contact</NavLink>
        </nav>
      
    </header>
  );
}

export default Navbar;