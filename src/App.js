import React, { useState } from 'react';
import Nav from './components/Nav';
import About from './components/About';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';

import { FaGithub, FaLinkedinIn, FaCode } from "react-icons/fa";

function App() {
  const navLinks = ['About', 'Work', 'Contact' ];
  const [ currentPage, setCurrentPage ] = useState(navLinks[0]);

  const renderPage = () => {
    switch (currentPage) {
        case 'Work':
          return <Portfolio />;
        case 'Contact':
          return <Contact />;
        default:
            return <About />;
    }
  }

  return (
    <main className='flex column align-center'>
      <img 
      src={require('./assets/imgs/amelia-logo-animate.png').default} 
      className='logo'
      alt='Amelia Wasowski'/>
      <Nav 
      navLinks={navLinks} 
      currentPage={currentPage} 
      setCurrentPage={setCurrentPage}
      />
      {renderPage()}
      <footer className='flex justify-center align-center'>
        <a href='https://github.com/amelia-was' className='icon-link' target='_blank'>
          <FaGithub className='icon' /> 
        </a>
        <a href='https://www.linkedin.com/in/amelia-wasowski-78839a200/' className='icon-link' target='_blank'>
          <FaLinkedinIn className='icon' /> 
        </a>
        <a href='https://app.codesignal.com/profile/amelia-was' className='icon-link' target='_blank'>
          <FaCode className='icon' />
        </a>
      </footer>
    </main>
  );
};

export default App;
