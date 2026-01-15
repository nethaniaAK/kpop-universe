


import React, { useEffect, useRef, useState } from 'react';

const AudioPlayer = ({ src, isPlaying, onToggle }) => {
  const audioRef = useRef(null);
  const [volume, setVolume] = useState(0.3);

  useEffect(() => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.play().catch(e => console.log('Audio play failed:', e));
      } else {
        audioRef.current.pause();
      }
    }
  }, [isPlaying]);

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = volume;
    }
  }, [volume]);

  return (
    <audio 
      ref={audioRef}
      src={src}
      loop
      preload="auto"
    />
  );
};

export default AudioPlayer;