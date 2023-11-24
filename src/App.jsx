import React from 'react';
import './index.css';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import { Home, About, Projects, Contact } from './pages';

const App = () => {
  return (
    <>
      <Router>
      <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/projects' element={<Projects />} />
          <Route path='/contact' element={<Contact />} />
        </Routes>
      </Router>
    <main className='bg-stone-900 font-poppins'>
    </main>
    </>
  )
}

export default App