import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  const navigate = useNavigate();
  const HandleSignIn = (e) => {
    e.preventDefault();
  };

  const HandListItem = (e) => {
    e.preventDefault();
  };
  return (
    <div className="navbar min-w-screen min-h-[8rem] bg-linear-65 from-purple-500 to-pink-500 flex gap-[20rem] items-center justify-center sticky top-0 z-99 shadow">
      <div className="navbar-container">
        <ul className="text-[#ffffff] font-bold list-none flex items-center gap-4 cursor-pointer fixed">
          <NavLink to={"/"}>
            <li>Stations</li>
          </NavLink>
          <NavLink to={"/News"}>
            <li>News</li>
          </NavLink>
          <NavLink to={"/About"}>
            <li>About</li>
          </NavLink>
        </ul>
      </div>
      <div className="login-button text-[#222020] font-bold">
        <button
          className="bg-[#222020] text-white rounded-[1rem] w-[6rem] h-[3rem] hover:w-[7rem] hover:h-[3rem] cursor-pointer hover:bg-amber-200 hover:text-[#000] hover:font-extrabold"
          onClick={() => navigate("/", { replace: true })}
        >
          Login
        </button>
      </div>
    </div>
  );
}

export default Navbar;
