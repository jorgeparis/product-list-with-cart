import React from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  const handleClick = (event) => {
    event.preventDefault();
  };
  return (
    <>
      <div
        className="navbar text-[#fff] font-bold flex justify-between items-center bg-[#071126] gap-4 m-4 min-h-25 w-screen
        pr-70 pl-70 
      "
      >
        <div className="logo">
          <h1 className="logo-text font-black text-3xl">
            FM LAND{" "}
            <span className="font-extrabold text-6xl text-[#f309d4]">.</span>
          </h1>
        </div>
        <div className="navbar-categories">
          <ul className="flex justify-center items-center gap-12 text-xl font-normal cursor-pointer">
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
          className="text-center flex items-center justify-center btn-sponsor bg-[#66FCF1] h-[3rem] w-[10rem] rounded-lg text-[#000]"
          onClick={handleClick}
        >
          Make Sponsor
        </a>
      </div>
    </>
  );
}

export default Navbar;
