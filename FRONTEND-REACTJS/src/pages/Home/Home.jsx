import { useState } from "react";
import Bk11 from "../../assets/background-11.png";
import Bk1 from "../../assets/background-6.png";
import Bk7 from "../../assets/background-7.jpg";
import Bk8 from "../../assets/background-8.png";
import Bk9 from "../../assets/background-9.jpg";
import Animated from "../../assets/animated-background.gif"
import Player from "../../components/Player/Player";
import "./Home.css";

const Home = () => {
  const [isOnair, setOnair] = useState(false);
  const [activeRadioId, setActiveRadioId] = useState(null);

  const radioStations = [
    {
      radioId: "Radio Maria 103.1 MHz",
      src: "https://dreamsiteradiocp2.com/proxy/rmmozambique2?mp=/stream",
      background: Bk1
    },
    {
      radioId: "RM ANTENA NACIONAL",
      src: "https://node.stream-africa.com:8443/AntenaNacional",
      background: Bk8
    },
    {
      radioId: "Radio Maria Papua New Guinea",
      src: "https://dreamsiteradiocp2.com/proxy/rmpapua2?mp=/stream",
      background: Bk1
    },
    {
      radioId: "Radio Miramar",
      src: "https://nl.digitalrm.pt:8150/stream",
      background: Animated
    },
    {
      radioId: "SUPER RM",
      src: "https://c1.mirror.africa:8443/227",
      background: Bk11
    },

    {
      radioId: "Radio Mocambique-GAZA",
      src: "https://node.stream-africa.com:8443/Gaza",
      background: Bk8
    },
    {
      radioId: "LM RADIO",
      src: "https://cast6.asurahosting.com/proxy/lmradioc/stream",
      background: Bk7
    }
  ];

  const sortedStations = activeRadioId
    ? [
        ...radioStations.filter((station) => station.radioId === activeRadioId),
        ...radioStations.filter((station) => station.radioId !== activeRadioId)
      ]
    : radioStations;

  const handlePlay = (radioId) => {
    console.log(`Playing: ${radioId}`);
    setActiveRadioId(radioId);
  };

  return (
    <div className="container-home min-w-screen min-h-screen bg-[#030916] flex flex-col items-center justify-center gap-6">
      <div
        className="hero-container min-w-screen min-h-[550px] flex flex-col justify-center bg-cover bg-center 
        bg-[linear-gradient(to_right,#66FCF1,#66fcf1),url('../../assets/background-1.jpg')]
        bg-blend-multiply items-start px-[100px] gap-9"
      >
        <h2 className="text-center text-[#66FCF1] font-bold text-2xl">
          YOUR BEST RADIO STATIONS
        </h2>
        <h1 className="text-center text-[#ffffff] font-bold text-7xl">
          Best Radio Stations
        </h1>
        <h1 className="text-center text-[#ffffff] font-bold text-7xl">
          In one <span className="text-[#f30909]">Place</span>
        </h1>
        <p className="text-amber-50">
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
        </p>
        <a
          href="#"
          className="text-center flex items-center justify-center 
          btn-sponsor bg-[#f10a1eef] hover:text-[#feffff]
          hover:bg-[#f10a1eef]/70 h-[3rem] w-[10rem] 
          rounded-lg text-[#fff]
          max-lg:hidden py-2"
          onClick={(e) => {
            e.preventDefault();
            setOnair(!isOnair);
          }}
        >
          {isOnair ? "HIDE STATIONS" : "SHOW STATIONS"}
        </a>
      </div>
      <div
        className={`player-container ${
          isOnair
            ? "min-h-auto max-w-[50%] bg-[#f8ecec] rounded-lg flex flex-col gap-1"
            : "hidden"
        }`}
      >
        {sortedStations.length > 0 ? (
          sortedStations.map((station) => (
            <Player
              key={station.radioId}
              radioId={station.radioId}
              src={station.src}
              background={station.background}
              onPlay={() => handlePlay(station.radioId)}
              isPlaying={activeRadioId === station.radioId}
            />
          ))
        ) : (
          <p>No stations available</p>
        )}
      </div>
      <div className="player min-h-[600px] min-w-[50%] bg-[#da0707] flex flex-col justify-center items-center rounded-lg"></div>
    </div>
  );
};

export default Home;
