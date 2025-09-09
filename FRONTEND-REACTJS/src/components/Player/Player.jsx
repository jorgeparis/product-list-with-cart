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
    audioRef.current.volume = 1.0;
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
    <div className="player-container p-5 min-w-[50%] min-h-[50%] flex flex-col items-center justify-center gap-3">
      <div className="radio-logo-container max-h-[80px] w-[80px] rounded-full">
        <img
          src={props.background}
          alt="LOGO"
          className="logo hover:scale-150 max-h-[80px] w-[80px] rounded-full bg-cover"
        />
      </div>

      <div className="live-indicator-volume flex gap-4 items-center justify-center min-w-[300px] h-[80px]">
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
                step="0.1"
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
      </div>
      <div
        className={
          isPlaying
            ? "container-radio flex flex-col min-w-[80%] max-h-[550px] bg-[#fd0000] px-4 py-4 rounded-lg shadow backdrop-blur-5xl items-center justify-center"
            : "container-radio flex flex-col min-w-[80%] max-h-[550px] bg-[#fcf3f3] px-4 py-4 rounded-lg shadow backdrop-blur-5xl items-center justify-center"
        }
      >
        <div className="radio-id flex items-center justify-center max-w-[500px] min-h-[130px]">
          <h2 className="radio-id text-xl font-bold text-[#000000] hover:text-[#ffffff]">
            {props.radioId}
          </h2>
        </div>

        <audio ref={audioRef}>
          <source src={props.src} type="audio/mpeg" />
        </audio>
        <div className="player-controls flex gap-1.5 items-center justify-center">
          <SkipBack className="text-[#ffffff] hover:text-[##e93407]/40" />
          {isPlaying ? (
            <Square
              className="text-[#ffffff] hover:text-[##e93407]/40 font-light"
              onClick={() => {
                stop();
                setIsPlaying(!isPlaying);
              }}
            />
          ) : (
            <Play
              className="text-[#ffffff] hover:text-[#ffffff]"
              onClick={() => {
                play();
                setIsPlaying(!isPlaying);
              }}
            />
          )}
          <SkipForward className="text-[#ffffff] hover:text-[##e93407]/40" />
        </div>
      </div>
    </div>
  );
};

export default Player;
