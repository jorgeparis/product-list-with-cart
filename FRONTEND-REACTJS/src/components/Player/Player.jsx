import { Play, SkipBack, SkipForward } from "lucide-react";
import React from "react";
import Background from "../../assets/background-3.jpg";
import "./Player.css";

const Player = ({ radioId }) => {
  return (
    <div className="player-container p-5 min-w-auto min-h-auto flex items-center gap-4">
      <div className="radio-logo-container max-h-[100px] w-[180px]">
        <img src={Background} alt="" className="logo rounded-4xl" />
      </div>
      <div className="container-radio flex flex-col gap-3 items-start w-[800px] max-h-[100px] bg-[#e0d8d8] px-4 py-4 rounded-lg shadow backdrop-blur-3xl">
        <div className="radio-id flex gap-80 items-center justify-between max-w-[800px] h-[100px]">
          <h2 className="radio-id text-xl font-bold text-[#072c29] hover:text-[#5ca2f1]">
            {radioId}
          </h2>
          <a
            href="#"
            className="onair bg-[#f70707] text-white rounded-4xl px-4 py-2 font-bold text-center"
            onClick={(event) => {
              event.preventDefault();
            }}
          >
            Live
          </a>
        </div>
        <div className="player-controls flex gap-1.5 items-start">
          <SkipBack className="text-[#e93407] hover:text-[##e93407]/40 shadow backdrop-blur-lg" />
          <Play className="text-[#e93407] hover:text-[##e93407]/40" />
          <SkipForward className="text-[#e93407] hover:text-[##e93407]/40" />
        </div>
      </div>
    </div>
  );
};

export default Player;
