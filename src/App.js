import React, { useState } from 'react';
import Nav from './components/Nav';
import About from './components/About';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';

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
        <a href='https://github.com/amelia-was' className='footer-link' target='_blank' rel='noreferrer'>
          github
        </a>
        <a href='https://www.linkedin.com/in/amelia-wasowski/' className='footer-link' target='_blank' rel='noreferrer'>
          linkedin
        </a>
        <a href='https://app.codesignal.com/profile/amelia-was' className='footer-link' target='_blank' rel='noreferrer'>
          code signal
        </a>
      </footer>
    </main>
  );
};

export default App;
