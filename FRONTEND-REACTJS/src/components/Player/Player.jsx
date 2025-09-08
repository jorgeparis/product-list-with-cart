import { Play, SkipBack, SkipForward, Square } from "lucide-react";
import React, { useRef, useState } from "react";
import Background from "../../assets/background-3.jpg";
import "./Player.css";

const Player = (props) => {
  const audioRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const play = () => {
    audioRef.current.play();
    audioRef.current.volume = 1.0; // Ensure volume is reset to full when playing
  };

  const stop = () => {
    const fadeOutInterval = 50; // Interval in ms for volume reduction
    const fadeOutSteps = 20; // Number of steps for fade-out
    const volumeStep = audioRef.current.volume / fadeOutSteps; // Volume reduction per step

    const fadeOut = () => {
      if (audioRef.current.volume > 0.05) {
        audioRef.current.volume = Math.max(
          0,
          audioRef.current.volume - volumeStep
        );
        setTimeout(fadeOut, fadeOutInterval);
      } else {
        audioRef.current.pause();
        audioRef.current.volume = 1.0; // Reset volume for next play
      }
    };

    fadeOut();
  };
  return (
    <div className="player-container p-5 min-w-auto min-h-auto flex items-center gap-4">
      <div className="radio-logo-container max-h-[100px] w-[180px]">
        <img
          src={Background}
          alt=""
          className="logo rounded-4xl hover:scale-106"
        />
      </div>
      <div className="container-radio flex flex-col gap-3 items-start w-[800px] max-h-[100px] bg-[#e0d8d8] px-4 py-4 rounded-lg shadow backdrop-blur-3xl">
        <div className="radio-id flex gap-8 items-center justify-between max-w-[800px] h-[100px]">
          <h2 className="radio-id text-xl font-bold text-[#072c29] hover:text-[#5ca2f1]">
            {props.radioId}
          </h2>

          {isPlaying ? (
            <a
              href="#"
              className="onair bg-[#f70707] text-white rounded-4xl px-4 py-2 font-bold text-center"
              onClick={(event) => {
                event.preventDefault();
              }}
            >
              Live
            </a>
          ) : (
            <a
              href="#"
              className="onair bg-[#000000] text-white rounded-4xl px-4 py-2 font-bold text-center"
              onClick={(event) => {
                event.preventDefault();
              }}
            >
              Offline
            </a>
          )}

          <audio ref={audioRef}>
            <source src={props.src} type="audio/mpeg" />
          </audio>
        </div>
        <div className="player-controls flex gap-1.5 items-start">
          <SkipBack className="text-[#e93407] hover:text-[##e93407]/40 shadow backdrop-blur-lg" />
          {isPlaying ? (
            <Square
              className="text-[#e93407] hover:text-[##e93407]/40"
              onClick={() => {
                stop();
                setIsPlaying(!isPlaying);
              }}
            />
          ) : (
            <Play
              className="text-[#e93407] hover:text-[##e93407]/40"
              onClick={() => {
                play();
                setIsPlaying(!isPlaying);
              }}
            />
          )}
          <SkipForward className="text-[#e93407] hover:text-[##e93407]/40" />
        </div>
      </div>
    </div>
  );
};

export default Player;
