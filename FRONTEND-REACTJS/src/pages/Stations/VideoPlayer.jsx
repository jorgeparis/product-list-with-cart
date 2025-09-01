import canAutoplay from "can-autoplay";
import React, { useEffect, useRef, useState } from "react";

function VideoPlayer() {
  const videoRef = useRef(null);
  const [showPlayButton, setShowPlayButton] = useState(false);

  useEffect(() => {
    canAutoplay.video({ muted: true }).then(({ result }) => {
      if (result && videoRef.current) {
        videoRef.current.play().catch((error) => {
          console.error("Autoplay failed:", error);
          setShowPlayButton(true);
        });
      } else {
        setShowPlayButton(true); // Autoplay not supported, show button
      }
    });
  }, []);

  const handlePlay = () => {
    if (videoRef.current) {
      videoRef.current
        .play()
        .then(() => {
          setShowPlayButton(false);
        })
        .catch((error) => {
          console.error("Playback failed:", error);
        });
    }
  };

  return (
    <div>
      <video
        ref={videoRef}
        src="http://localhost:3000/stream"
        muted
        playsInline
      />
      {showPlayButton && <button onClick={handlePlay}>Play Video</button>}
    </div>
  );
}

export default VideoPlayer;
