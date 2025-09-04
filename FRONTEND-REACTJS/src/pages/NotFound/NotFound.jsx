import React from "react";
import { useNavigate } from "react-router-dom";
import Background from "../../assets/background-2.png";

const NotFound = () => {
  const navigate = useNavigate();
  const handleClick = (event) => {
    event.preventDefault();
    navigate("/");
  };
  return (
    <div className="container-home min-w-screen min-h-screen bg-[#030916] flex flex-col items-center gap-8 fixed top-25">
      <img
        src={Background}
        alt="background"
        className="max-w-[960px] max-h-[600px]"
      />
      <h1 className="text-center text-[#ff0000] text-xl font-bold">
        ERROR 404 | PAGE NOT FOUND
      </h1>

      <a
        href=""
        className="text-center flex items-center justify-center btn-sponsor bg-[#66FCF1] h-[3rem] w-[10rem] rounded-lg text-[#000]"
        onClick={handleClick}
      >
        GO BACK HOME
      </a>
    </div>
  );
};

export default NotFound;
