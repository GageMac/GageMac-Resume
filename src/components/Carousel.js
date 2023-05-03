import React, { useState } from 'react';
import './Carousel.css';

function Carousel({ items }) {
  const [activeIndex, setActiveIndex] = useState(0);
  const length = items.length;

  const goToPrevSlide = () => {
    let index = activeIndex;
    index = index === 0 ? length - 1 : index - 1;
    setActiveIndex(index);
  };

  const goToNextSlide = () => {
    let index = activeIndex;
    index = index === length - 1 ? 0 : index + 1;
    setActiveIndex(index);
  };

  const renderIndicators = () => {
    return (
      <ul className="indicators">
        {items.map((item, index) => (
          <li
            key={item.id}
            onClick={() => setActiveIndex(index)}
            className={index === activeIndex ? 'active' : ''}
          ></li>
        ))}
      </ul>
    );
  };

  const renderSlides = () => {
    return items.map((item, index) => (
      <div
        key={item.id}
        className={index === activeIndex ? 'slide active' : 'slide'}
      >
        <div className="content">
          <h2>{item.title}</h2>
          <p>{item.description}</p>
        </div>
        <img
          src={item.image}
          alt={item.title}
          style={{
            maxWidth: '100%',
            height: 'auto',
            display: 'block',
            margin: '0 auto'
          }}
        />
      </div>
    ));
  };
  

  return (
    <div className="carousel-container">
      <div className="carousel-inner">{renderSlides()}</div>
      <button className="carousel-arrow carousel-arrow--left" onClick={goToPrevSlide}>
        &#10094;
      </button>
      <button className="carousel-arrow carousel-arrow--right" onClick={goToNextSlide}>
        &#10095;
      </button>
      <div className="carousel-indicator">{renderIndicators()}</div>
    </div>
  );
}

export default Carousel;
