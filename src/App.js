import React, { useState } from 'react';
import Nav from './components/Nav';
import About from './components/About';
//import Work from './components/Work';
import Portfolio from './components/Portfolio';
import Resume from './components/Resume';
import Contact from './components/Contact';

function App() {
  const navLinks = ['About', 'Work', 'Resume', 'Contact' ];
  const [ currentPage, setCurrentPage ] = useState(navLinks[0]);

  const renderPage = () => {
    switch (currentPage) {
        case 'Work':
          return <Portfolio />;
        case 'Resume':
          return <Resume />;
        case 'Contact':
          return <Contact />;
        default:
            return <About />;
    }
  }

  return (
    <main>
      <img 
      src={require('./assets/imgs/amelia-logo.png').default} 
      className='logo'
      alt='Amelia Wasowski'/>
      <Nav 
      navLinks={navLinks} 
      currentPage={currentPage} 
      setCurrentPage={setCurrentPage}
      />
      {renderPage()}
      <footer>
        <i class="fab fa-github"></i> 
        <i class="fab fa-linkedin-in"></i> 
        <i class="fab fa-stack-overflow"></i>
      </footer>
    </main>
  );
};

export default App;
