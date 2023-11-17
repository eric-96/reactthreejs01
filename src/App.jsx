import React from 'react';
import './index.css';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import { Home, About, Projects, Contact } from './pages';

const App = () => {
  return (
    <main className='bg-gray-900 font-poppins'>
      <Router>
      <Navbar className="z-50"/>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/projects' element={<Projects />} />
          <Route path='/contact' element={<Contact />} />
        </Routes>
      </Router>
    </main>
  )
}

export default App