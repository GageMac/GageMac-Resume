import React from 'react';
import Header from './components/Header';
import Experience from './components/Experience';
import Education from './components/Education';
import About from './components/About';
import Footer from './components/Footer';
import StickyNav from './components/StickyNav';
import Contact from './components/Contact';
import Projects from './components/Projects';
import './App.css';

function App() {
  return (
    <div>
      <Header />
      <StickyNav />
      <div className="container">
        <div className="column-left">
          <Experience />
          <Contact />
        </div>
        <div className="column-right">
          <Education />
          <About />
          <Projects />
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;
