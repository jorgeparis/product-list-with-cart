import { Play, Square } from "lucide-react";
import { React, useState } from "react";
import "./Stations.css";
const Stations = () => {
  const [isPlaying, setIsPlaying] = useState(true);
  return (
    <div
      onClick={() => setIsPlaying(!isPlaying)}
      className="container-player flex flex-col justify-center items-center whitespace-nowrap w-[40rem] h-[40rem] bg-[#353131] rounded-3xl"
    >
      <Play
        className={`px-4 py-2 rounded animate-none
        ${isPlaying ? "block text-amber-50" : "hidden"}`}
      />

      <Square
        className={`px-4 py-2 rounded  text-amber-50 animate-none
        ${isPlaying ? "hidden text-amber-50" : "block"}`}
      />
    </div>
  );
};

export default Stations;
