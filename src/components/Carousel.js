import React, { useState, useCallback } from 'react';
import './Carousel.css';
import myGitHubImage from '../assets/Github.webp';
import myLinkedinImage from '../assets/Linkedin.png';

function Carousel() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const images = [
    {
      src: myGitHubImage,
      alt: 'Project 1',
      link: 'https://github.com/project1'
    },
    {
      src: myLinkedinImage,
      alt: 'Project 2',
      link: 'https://github.com/project2'
    },
    {
      src: 'https://via.placeholder.com/150',
      alt: 'Project 3',
      link: 'https://github.com/project3'
    }
  ];

  const totalSlides = images.length;

  const handleScroll = useCallback(
    (e) => {
      e.preventDefault();
      e.stopPropagation();
      const delta = Math.sign(e.deltaY);
      const SCROLL_SPEED = 50;
      if (delta > 0 && e.target.id === 'carousel-container') {
        setCurrentSlide((currentSlide + 1) % totalSlides);
      } else if (delta < 0 && e.target.id === 'carousel-container') {
        setCurrentSlide((currentSlide - 1 + totalSlides) % totalSlides);
      }
    },
    [currentSlide, totalSlides]
  );


  return (
    <div className="carousel-container" id="carousel-container" onWheel={handleScroll}>
      <div className="carousel-slide">
        <a href={images[currentSlide].link} target="_blank" rel="noopener noreferrer">
          <img
            src={images[currentSlide].src}
            alt={images[currentSlide].alt}
          />
        </a>
      </div>
    </div>
  );
}

export default Carousel;
