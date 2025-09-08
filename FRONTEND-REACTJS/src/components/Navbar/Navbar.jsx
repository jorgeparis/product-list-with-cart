import { Menu, X } from "lucide-react";
import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();
  const handleClick = (event) => {
    event.preventDefault();
  };
  return (
    <>
      <div
        className="navbar text-[#fff] font-bold flex justify-between items-center gap-4 m-4 min-h-[100px] w-full
        px-[100px] bg-[#030407]
        opacity-70 backdrop-blur-lg
      "
      >
        <div className="logo">
          <h1
            className="logo-text font-black text-3xl cursor-pointer max-lg:text-xl"
            onClick={() => {
              navigate("/", { replace: true });
            }}
          >
            JORGE PARIS
            <span className="font-extrabold text-6xl text-[#f309d4]">.</span>
          </h1>
        </div>
        <div className="navbar-categories">
          <ul
            className="flex justify-center items-center gap-12 text-xl font-normal cursor-pointer 
          max-lg:flex-col max-lg:justify-center max-lg:items-start max-lg:gap-6 max-lg:text-base
          max-lg:hidden
          "
          >
            <NavLink to="/">
              {" "}
              <li className="hover:text-[#66FCF1]">Home</li>
            </NavLink>
            <NavLink to="/About">
              <li className="hover:text-[#66FCF1]">About Us</li>
            </NavLink>
            <NavLink to="/Radio Station">
              <li className="hover:text-[#66FCF1]">Radio Station</li>
            </NavLink>
            <NavLink to="/Blog">
              <li className="hover:text-[#66FCF1]">Blog</li>
            </NavLink>
            <NavLink to="/Pages">
              <li className="hover:text-[#66FCF1]">Pages</li>
            </NavLink>
            <NavLink to="/Contact">
              <li className="hover:text-[#66FCF1]">Contact</li>
            </NavLink>
          </ul>
        </div>
        <a
          href=""
          className="text-center flex items-center justify-center 
          btn-sponsor bg-[#66FCF1] hover:text-[#feffff]
           hover:bg-[#66FCF1]/70 h-[3rem] w-[10rem] 
           rounded-lg text-[#000]
           max-lg:hidden"
          onClick={handleClick}
        >
          LOGIN
        </a>
        <div className="navbar-icons flex items-center justify-center md:hidden">
          {isOpen ? (
            <X
              size={30}
              className="cursor-pointer text-[#ffffff]"
              onClick={() => setIsOpen(!isOpen)}
            />
          ) : (
            <Menu
              size={30}
              className="cursor-pointer text-[#ffffff]"
              onClick={() => setIsOpen(!isOpen)}
            />
          )}
        </div>
      </div>
    </>
  );
}

export default Navbar;
