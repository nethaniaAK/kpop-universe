

import React from 'react';
import { useNavigate } from 'react-router-dom';
import './GroupCard.css';

const GroupCard = ({ group }) => {
  const navigate = useNavigate();

  return (
    <div 
      className="group-card neon-glow"
      onClick={() => navigate(`/group/${group.id}`)}
      style={{ '--group-color': group.color }}
    >
      <div className="card-image">
        <img src={group.image} alt={group.name} />
        <div className="card-overlay">
          <span className="debut-badge">{group.debut}</span>
        </div>
      </div>
      
      <div className="card-content">
        <h3 className="group-name neon-text">{group.name}</h3>
        <p className="group-description">{group.description}</p>
        <div className="group-stats">
          <span>{group.members} membres</span>
          <span>{group.company}</span>
        </div>
      </div>
    </div>
  );
};

export default GroupCard;