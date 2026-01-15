

import React, { useState } from 'react';
import './Navbar.css';

const Navbar = ({ audioPlaying, toggleAudio }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="navbar neon-border">
      <div className="nav-brand">
        <h1 className="neon-text">K-POP UNIVERSE</h1>
      </div>
      
      <div className="nav-controls">
        <button 
          className={`audio-toggle ${audioPlaying ? 'playing' : ''}`}
          onClick={toggleAudio}
        >
          {audioPlaying ? '🔊' : '🔇'}
        </button>
        
        <div className="menu-toggle" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>

      <ul className={`nav-links ${isMenuOpen ? 'active' : ''}`}>
        <li><a href="#home">Accueil</a></li>
        <li><a href="#groups">Groupes</a></li>
        <li><a href="#about">À propos</a></li>
      </ul>
    </nav>
  );
};

export default Navbar;