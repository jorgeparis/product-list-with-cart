import React from "react";

function Navbar() {
  const HandleSignIn = (e) => {
    e.preventDefault();
    console.log("I was clicked");
    alert("OLA");
  };

  const HandListItem = (e) => {
    e.preventDefault();
    console.log("I was clicked");
    alert("OLA");
  };
  return (
    <div className="navbar min-w-[100vw] min-h-[10rem] bg-linear-65 from-purple-500 to-pink-500 flex gap-[20rem] items-center justify-center sticky top-0 z-99 shadow">
      <div className="navbar-container">
        <ul className="text-[#ffffff] font-bold list-none flex items-center gap-4 cursor-pointer">
          <li
            className="hover:text-[#000000] hover:text-3xl hover:gap-[20rem]"
            onClick={HandListItem}
          >
            <a
              href="#"
              className=""
              onClick={(event) => {
                event.preventDefault();
              }}
            >
              Stations
            </a>
          </li>
          <li
            className="hover:text-[#000000] hover:text-3xl"
            onClick={HandListItem}
          >
            <a
              href="#"
              className=""
              onClick={(event) => {
                event.preventDefault();
              }}
            >
              Stations
            </a>
          </li>
          <li
            className="hover:text-[#000000] hover:text-3xl"
            onClick={HandListItem}
          >
            <a
              href="#"
              className=""
              onClick={(event) => {
                event.preventDefault();
              }}
            >
              Stations
            </a>
          </li>
        </ul>
      </div>
      <div className="login-button text-[#222020] font-bold">
        <button
          className="bg-[#222020] text-white rounded-[1rem] w-[6rem] h-[3rem] hover:w-[7rem] hover:h-[3rem] cursor-pointer hover:bg-amber-200 hover:text-[#000] hover:font-extrabold"
          onClick={HandleSignIn}
        >
          Login
        </button>
      </div>
    </div>
  );
}

export default Navbar;
