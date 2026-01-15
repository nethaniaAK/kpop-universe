import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import AudioPlayer from './components/AudioPlayer';
import Home from './pages/Home';
import Groups from './pages/Groups';
import GroupDetails from './pages/GroupDetails';
import './styles/global.css';
import './styles/neon.css';

function App() {
  const [audioPlaying, setAudioPlaying] = useState(false);
  const [audioSrc] = useState('/assets/audio/background-kpop.mp3');

  useEffect(() => {
    // Sauvegarder la préférence audio
    const savedAudioPref = localStorage.getItem('audioPlaying');
    if (savedAudioPref === 'true') {
      setAudioPlaying(true);
    }
  }, []);

  const toggleAudio = () => {
    const newState = !audioPlaying;
    setAudioPlaying(newState);
    localStorage.setItem('audioPlaying', newState.toString());
  };

  return (
    <Router>
      <div className="app">
        <Navbar audioPlaying={audioPlaying} toggleAudio={toggleAudio} />
        <AudioPlayer src={audioSrc} isPlaying={audioPlaying} />
        
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/groups" element={<Groups />} />
            <Route path="/group/:id" element={<GroupDetails />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;