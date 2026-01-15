

import React, { useState, useEffect } from 'react';
import GroupCard from '../components/GroupCard';
import groupsData from '../data/groups.json';
import './Groups.css';

const Groups = () => {
  const [groups, setGroups] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulation de chargement
    setTimeout(() => {
      setGroups(groupsData);
      setLoading(false);
    }, 1000);
  }, []);

  if (loading) {
    return (
      <div className="loading-container">
        <div className="loading-spinner neon-glow"></div>
        <p className="loading-text neon-text">Chargement de l'univers K-Pop...</p>
      </div>
    );
  }

  return (
    <div className="groups-container">
      <header className="groups-header">
        <h1 className="page-title neon-text">Découvre les Groupes</h1>
        <p className="page-description">
          Explore les stars brillantes de la K-Pop
        </p>
      </header>

      <div className="groups-grid">
        {groups.map((group) => (
          <GroupCard key={group.id} group={group} />
        ))}
      </div>
    </div>
  );
};

export default Groups;