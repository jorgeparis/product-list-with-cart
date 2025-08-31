import "./Stations.css";

const Stations = () => {
  return (
    <div className="container-player flex flex-col justify-center items-center whitespace-nowrap w-[40rem] h-[40rem] bg-[#353131] rounded-3xl">
      <video src="http://localhost:3000/stream" controls autoplay></video>
    </div>
  );
};

export default Stations;
