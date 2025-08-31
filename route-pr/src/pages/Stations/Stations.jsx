import { Play, Square } from "lucide-react";
import { useRef, useState } from "react";
import "./Stations.css";

const Stations = () => {
  const [isPlaying, setIsPlaying] = useState(true); // Start with playing state (matches autoplay)
  const audioRef = useRef(null); // Ref for audio element
  const waveformRef = useRef(null); // Ref for WaveSurfer container
  const wavesurferRef = useRef(null);

  // Toggle play/pause
  const handleTogglePlay = () => {
    if (wavesurferRef.current) {
      if (isPlaying) {
        wavesurferRef.current.pause();
      } else {
        wavesurferRef.current.play().catch((error) => {
          console.error("Audio playback error:", error);
        });
      }
      setIsPlaying(!isPlaying);
    }
  };

  return (
    <div
      onClick={handleTogglePlay}
      className="container-player flex flex-col justify-center items-center whitespace-nowrap w-[40rem] h-[40rem] bg-[#353131] rounded-3xl"
    >
      <audio ref={audioRef} autoPlay name="media">
        <source
          src="https://node.stream-africa.com:8443/AntenaNacional"
          type="audio/mpeg"
        />
      </audio>
      <div ref={waveformRef} className="waveform" />
      <Play
        className={`px-4 py-2 rounded ${
          isPlaying ? "hidden" : "block text-amber-50"
        }`}
      />
      <Square
        className={`px-4 py-2 rounded text-amber-50 ${
          isPlaying ? "block" : "hidden"
        }`}
      />
    </div>
  );
};

export default Stations;
