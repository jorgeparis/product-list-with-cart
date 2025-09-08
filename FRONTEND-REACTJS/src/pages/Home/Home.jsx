import Player from "../../components/Player/Player";

const Home = () => {
  return (
    <div className="container-home min-w-screen min-h-screen bg-[#030916] flex flex-col items-center justify-center gap-6">
      <div
        className="hero-container min-w-screen min-h-[550px] flex flex-col justify-center bg-cover bg-center 
        bg-[linear-gradient(to_right,#66FCF1,#66fcf1),url('../../assets/background-1.jpg')]
        bg-blend-multiply items-start px-[100px] gap-9
      "
      >
        <h2 className="text-center text-[#66FCF1] font-bold text-2xl">
          YOUR BEST RADIO STATION
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
        >
          ON AIR
        </a>
      </div>
      <div className="player min-h-auto max-w-[50%] bg-[#f8ecec] rounded-lg flex flex-col gap-1">
        <Player
          radioId={"Radio 1 103.1 MHz"}
          src="https://dreamsiteradiocp2.com/proxy/rmmozambique2?mp=/stream"
        />
        <Player
          radioId={"RM ANTENA NACIONAL"}
          src="https://node.stream-africa.com:8443/AntenaNacional"
        />
        <Player
          radioId={"Radio Maria Papua New Guinea"}
          src="https://dreamsiteradiocp2.com/proxy/rmpapua2?mp=/stream"
        />
        <Player
          radioId={"Radio Miramar"}
          src="https://nl.digitalrm.pt:8150/stream"
        />
        <Player radioId={"SUPER RM"} src="https://c1.mirror.africa:8443/227" />
        <Player radioId={"Radio 6 99FM"} />
      </div>
      <div className="player min-h-[600px] min-w-[50%] bg-[#da0707] flex flex-col justify-center items-center rounded-lg"></div>
    </div>
  );
};

export default Home;
