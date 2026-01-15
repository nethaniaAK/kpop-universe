


import React, { useState } from 'react';
import './Gallery.css';

const Gallery = ({ images, groupName }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextImage = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <div className="gallery-container">
      <div className="gallery-image">
        <img src={images[currentIndex]} alt={`${groupName} - Image ${currentIndex + 1}`} />
        
        <button className="gallery-nav prev" onClick={prevImage}>‹</button>
        <button className="gallery-nav next" onClick={nextImage}>›</button>
      </div>
      
      <div className="gallery-indicators">
        {images.map((_, index) => (
          <span 
            key={index}
            className={`indicator ${index === currentIndex ? 'active' : ''}`}
            onClick={() => setCurrentIndex(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default Gallery;