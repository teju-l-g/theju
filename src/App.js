import React from 'react';
import Navbar from './components/Navbar';
import About from './components/About';
import Education from './components/Education';
import Projects from './components/Projects';
import Intern from './components/Intern';
import Skills from './components/Skills';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div style={{ fontFamily: 'Arial, sans-serif', color: '#333' }}>
      <Navbar />
      <About />
      <Education />
      <Projects />
      <Intern/>
      <Skills />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;