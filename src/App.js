import React, { useState } from 'react';
import About from './components/About';
import Nav from './components/Nav';

function App() {
  const navLinks = ['About', 'Work', 'Contact'];
  const [ currentPage, setCurrentPage ] = useState(navLinks[0]);
  return (
    <main>
      <Nav 
      navLinks={navLinks} 
      currentPage={currentPage} 
      setCurrentPage={setCurrentPage}
      ></Nav>
    </main>
  );
};

export default App;
