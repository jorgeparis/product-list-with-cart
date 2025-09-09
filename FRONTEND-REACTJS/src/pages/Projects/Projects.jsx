import React from "react";
import { replace, useNavigate } from "react-router-dom";

const Projects = () => {
  const navigate=useNavigate();
  return (
    <div className="container-home min-w-screen min-h-screen bg-[#030916] flex">
      <div
        className="hero-container min-w-screen min-h-[550px] flex flex-col justify-center bg-cover bg-center 
      bg-[linear-gradient(to_right,#66FCF1,#66fcf1),url('../../assets/background-1.jpg')]
      bg-blend-multiply items-start px-[100px] m-0 gap-1 fixed top-0
    "
      >
        <h2 className="text-center text-[#66FCF1] font-bold text-2xl">
          Live Music
        </h2>
        <h1 className="text-center text-[#ffffff] font-bold text-7xl">
          Best Radio Station
        </h1>
        <h1 className="text-center text-[#ffffff] font-bold text-7xl">
          In A Place
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
        onClick={(event)=>{navigate("/")}}
        >
          GO BACK 
        </a>
      </div>
      <div className="player max-h-screen min-w-screen bg-[#ffffff] flex flex-col justify-center items-center">
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Doloribus,
          sapiente harum consequatur nesciunt cum et delectus enim dicta eaque
          provident ex ea, ad vero? Nulla reprehenderit asperiores quas numquam
          magni.
        </p>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Doloribus,
          sapiente harum consequatur nesciunt cum et delectus enim dicta eaque
          provident ex ea, ad vero? Nulla reprehenderit asperiores quas numquam
          magni.
        </p>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Doloribus,
          sapiente harum consequatur nesciunt cum et delectus enim dicta eaque
          provident ex ea, ad vero? Nulla reprehenderit asperiores quas numquam
          magni.
        </p>
      </div>
    </div>
  );
};

export default Projects;
