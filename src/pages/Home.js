

import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

const Home = () => {
  return (
    <div className="home-container">
      <section className="hero-section">
        <div className="hero-content">
          <h1 className="hero-title neon-text">
            Bienvenue dans l'<span className="highlight">Univers K-Pop</span>
          </h1>
          <p className="hero-description">
            Plonge dans un monde de musique, de couleurs et d'énergie sans précédent
          </p>
          
          <div className="hero-cta">
            <Link to="/groups" className="cta-button neon-glow">
              Explorer les groupes
            </Link>
          </div>
        </div>
        
        <div className="hero-visual">
          <div className="floating-cards">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className={`floating-card card-${i}`}></div>
            ))}
          </div>
        </div>
      </section>

      <section className="features-section">
        <h2 className="section-title neon-text">Pourquoi K-Pop Universe ?</h2>
        <div className="features-grid">
          <div className="feature-card neon-border">
            <div className="feature-icon">🎵</div>
            <h3>Ambiance Sonore</h3>
            <p>Plongée musicale avec nos playlists immersives</p>
          </div>
          
          <div className="feature-card neon-border">
            <div className="feature-icon">🌟</div>
            <h3>Design Néon</h3>
            <p>Univers visuel futuriste et lumineux</p>
          </div>
          
          <div className="feature-card neon-border">
            <div className="feature-icon">🚀</div>
            <h3>Expérience Unique</h3>
            <p>Navigation fluide et interactions modernes</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;