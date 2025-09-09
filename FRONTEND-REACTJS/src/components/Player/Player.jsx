import {
  Play,
  SkipBack,
  SkipForward,
  Square,
  Volume2,
  VolumeOff
} from "lucide-react";
import React, { useRef, useState } from "react";
import "./Player.css";

const Player = (props) => {
  const audioRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const play = () => {
    audioRef.current.play();
    audioRef.current.volume = 0.3;
  };

  const stop = () => {
    const fadeOutInterval = 50;
    const fadeOutSteps = 20;
    const volumeStep = audioRef.current.volume / fadeOutSteps;

    const fadeOut = () => {
      if (audioRef.current.volume > 0.05) {
        audioRef.current.volume = Math.max(
          0,
          audioRef.current.volume - volumeStep
        );
        setTimeout(fadeOut, fadeOutInterval);
      } else {
        audioRef.current.pause();
        audioRef.current.volume = 1.0;
      }
    };

    fadeOut();
  };
  return (
    <div className="player-container p-5 min-w-auto min-h-auto flex items-center gap-4">
      <div className="radio-logo-container max-h-[80px] w-[80px] rounded-full">
        <img
          src={props.background}
          alt="LOGO"
          className="logo rounded-4xl hover:scale-106 max-h-[80px] w-[80px] rounded-full bg-cover"
        />
      </div>
      <div className="container-radio flex flex-col gap-3 items-start w-[800px] max-h-[100px] bg-[#fcf3f3] px-4 py-4 rounded-lg shadow backdrop-blur-5xl">
        <div className="radio-id flex gap-8 items-center justify-between max-w-[800px] h-[100px]">
          <h2 className="radio-id text-xl font-light text-[#072c29] hover:text-[#5ca2f1]">
            {props.radioId}
          </h2>

          {isPlaying ? (
            <a
              href="#"
              className="onair bg-[#d00000] text-white rounded-4xl px-4 py-2 font-bold text-center"
              onClick={(event) => {
                event.preventDefault();
                audioRef.current.pause();
                setIsPlaying(!isPlaying);
              }}
            >
              Live
            </a>
          ) : (
            <a
              href="#"
              className="off-onair bg-[#000000] text-white rounded-4xl px-4 py-2 font-bold text-center"
              onClick={(event) => {
                event.preventDefault();
                audioRef.current.play();
                setIsPlaying(!isPlaying);
              }}
            >
              Offline
            </a>
          )}
          <div className="volume-controller">
            {isPlaying ? (
              <div className="volume-controller-container flex gap-5 items-center justify-center">
                <Volume2
                  className="text-[#ff0054] hover:text-[##e93407]/40 font-light"
                  size={35}
                  onClick={(event) => {
                    event.preventDefault();
                    audioRef.current.pause();
                    setIsPlaying(!isPlaying);
                  }}
                />
                <input
                  type="range"
                  name="volume"
                  min="0"
                  max="1"
                  step="0.15"
                  className="slider w-full h-2 accent-[#ff0054] rounded-lg cursor-pointer hover:accent-[#ff0054]"
                  id="volume"
                  onClick={(event) => {
                    event.preventDefault();
                    audioRef.current.volume = event.target.value;
                  }}
                />
              </div>
            ) : (
              <VolumeOff
                size={25}
                onClick={(event) => {
                  event.preventDefault();
                  audioRef.current.play();
                  setIsPlaying(!isPlaying);
                }}
              />
            )}
          </div>

          <audio ref={audioRef}>
            <source src={props.src} type="audio/mpeg" />
          </audio>
        </div>
        <div className="player-controls flex gap-1.5 items-start">
          <SkipBack className="text-[#ff0054] hover:text-[##e93407]/40" />
          {isPlaying ? (
            <Square
              className="text-[#ff0054] hover:text-[##e93407]/40 font-light"
              onClick={() => {
                stop();
                setIsPlaying(!isPlaying);
              }}
            />
          ) : (
            <Play
              className="text-[#ff0054] hover:text-[#00a6fb]/40"
              onClick={() => {
                play();
                setIsPlaying(!isPlaying);
              }}
            />
          )}
          <SkipForward className="text-[#ff0054] hover:text-[##e93407]/40" />
        </div>
      </div>
    </div>
  );
};

export default Player;
