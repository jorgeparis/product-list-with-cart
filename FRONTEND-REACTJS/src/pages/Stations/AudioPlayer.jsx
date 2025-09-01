import React, { useRef, useState } from "react";
import "./AudioPlayer.css"; // Optional: Add your own CSS file for styling

const AudioPlayer = ({ src }) => {
  const audioRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [volume, setVolume] = useState(0.5);

  const togglePlay = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };


  const handleVolumeChange = (e) => {
    const newVolume = e.target.value;
    if (audioRef.current) {
      audioRef.current.volume = newVolume;
      setVolume(newVolume);
    }
  };

  return (
    <div className="audio-player">
      <audio ref={audioRef} src={src} />
      <div className="controls">
        <button onClick={togglePlay}>{isPlaying ? "Pause" : "Play"}</button>
        <h1>{isPlaying ? "LIVE" : "OFFLINE"}</h1>
        <div className="volume-control">
          <label htmlFor="volume">Volume: </label>
          <input
            id="volume"
            type="range"
            min="0"
            max="1"
            step="0.01"
            value={volume}
            onChange={handleVolumeChange}
          />
          <span>{Math.round(volume * 100)}%</span>
        </div>
      </div>
    </div>
  );
};

export default AudioPlayer;
