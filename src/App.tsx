import React, { useState } from 'react';
import './App.css';
import About from './pages/About';
import Contact from './pages/Contact';
import Home from './pages/Home';

import Navbar from './pages/Navbar';
import Skills from './pages/Skills';
import Work from './pages/Work';

function App() {

  const [navbarOpen, setNavbarOpen] = useState<boolean>(false)

  const toggleNav = () => setNavbarOpen(!navbarOpen)
  return (
    <main>
      <Navbar isOpen={navbarOpen} toggleNav={toggleNav} />
      <Home />
      <About />
      <Skills />
      <Work navbarOpen={navbarOpen} />
      <Contact />
    </main>
  );
}

export default App;
