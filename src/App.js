import React from 'react';
import Header from './components/Header';
import Experience from './components/Experience';
import Education from './components/Education';
import About from './components/About';
import Footer from './components/Footer';
import StickyNav from './components/StickyNav';
import Contact from './components/Contact';
import Carousel from './components/Carousel';
import image1 from './assets/GlobalWarming.jpg';
import image2 from './assets/OSRS-Bot.jpg';
import image3 from './assets/Stock-Market.jpg';
import Exp from './components/Exp';
import './App.css';

function App() {
  return (
    <div>
      <Header />
      <StickyNav />
      <div className="container">
        <div className="column-left">
          <About />
          <Contact />
        </div>
        <div className="column-right">
          <Education />
          <Carousel items={[
            {
              id: 1,
              title: 'Global Warming Data Analysis',
              image: image1,
              description: 'Linear Regression Project',
            },
            {
              id: 2,
              title: 'Project 2',
              image: image2,
              description: 'This is project 2',
            },
            {
              id: 3,
              title: 'Project 3',
              image: image3,
              description: 'This is project 3',
            },
          ]} />
        </div>
      </div>
      <Exp />
      <Footer />
    </div>
  );
}

export default App;
