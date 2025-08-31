import React from "react";
import { useNavigate } from "react-router-dom";
const NotFound = () => {
  const navigate = useNavigate();
  return (
    <div className="flex justify-center items-center flex-col gap-10 w-screen h-screen">
      <h1 className="text-6xl font-extrabold">ERROR 404 | PAGE NOT FOUND</h1>
      <button
        className="text-[#000] bg-amber-200 w-[10rem] h-[4rem] shadow rounded-3xl font-bold"
        onClick={() => navigate("/")}
      >
        Go Back to Home
      </button>
    </div>
  );
};

export default NotFound;
