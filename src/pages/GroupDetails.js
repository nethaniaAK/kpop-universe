

import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Gallery from '../components/Gallery';
import groupsData from '../data/groups.json';
import './GroupDetails.css';

const GroupDetails = () => {
  const { id } = useParams();
  const [group, setGroup] = useState(null);
  const [currentTrack, setCurrentTrack] = useState('');

  useEffect(() => {
    const foundGroup = groupsData.find(g => g.id === parseInt(id));
    if (foundGroup) {
      setGroup(foundGroup);
      setCurrentTrack(foundGroup.music);
    }
  }, [id]);

  if (!group) {
    return <div className="loading">Groupe non trouvé</div>;
  }

  // Images de galerie simulées
  const galleryImages = [
    group.image,
    `/assets/images/${group.name.toLowerCase()}-2.jpg`,
    `/assets/images/${group.name.toLowerCase()}-3.jpg`,
    `/assets/images/${group.name.toLowerCase()}-4.jpg`
  ];

  return (
    <div className="group-details">
      <div className="details-header">
        <div className="group-info">
          <h1 className="group-title neon-text">{group.name}</h1>
          <p className="group-description">{group.description}</p>
          
          <div className="group-meta">
            <div className="meta-item">
              <span className="meta-label">Membres:</span>
              <span className="meta-value">{group.members}</span>
            </div>
            <div className="meta-item">
              <span className="meta-label">Début:</span>
              <span className="meta-value">{group.debut}</span>
            </div>
            <div className="meta-item">
              <span className="meta-label">Agence:</span>
              <span className="meta-value">{group.company}</span>
            </div>
          </div>
        </div>
        
        <div className="group-visual">
          <img src={group.image} alt={group.name} className="group-main-image neon-border" />
        </div>
      </div>

      <section className="music-section">
        <h2 className="section-title neon-text">Musique</h2>
        <div className="music-player neon-border">
          <audio controls className="audio-controls">
            <source src={currentTrack} type="audio/mpeg" />
            Votre navigateur ne supporte pas l'audio.
          </audio>
        </div>
      </section>

      <section className="gallery-section">
        <h2 className="section-title neon-text">Galerie</h2>
        <Gallery images={galleryImages} groupName={group.name} />
      </section>
    </div>
  );
};

export default GroupDetails;