import React, { useState } from 'react';
import Nav from './components/Nav';
import About from './components/About';
import Work from './components/Work';
import Contact from './components/Contact';

function App() {
  const navLinks = ['About', 'Work', 'Contact'];
  const [ currentPage, setCurrentPage ] = useState(navLinks[0]);

  const renderPage = () => {
    switch (currentPage) {
        case 'Work':
          return <Work />;
        case 'Contact':
          return <Contact />;
        default:
            return <About />;
    }
  }

  return (
    <main>
      <Nav 
      navLinks={navLinks} 
      currentPage={currentPage} 
      setCurrentPage={setCurrentPage}
      />
      {renderPage()}
    </main>
  );
};

export default App;
