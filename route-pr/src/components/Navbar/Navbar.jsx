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
    <div className="navbar w-screen h-[150px] bg-[#e4e2e2] flex gap-[20rem] items-center justify-center sticky top-0 z-99">
      <div className="navbar-container">
        <ul className="text-[#222020] font-bold list-none flex items-center gap-4 cursor-pointer">
          <li
            className="hover:text-[#f57591] hover:text-3xl hover:gap-[20rem]"
            onClick={HandListItem}
          >
            Stations
          </li>
          <li
            className="hover:text-[#f57591] hover:text-3xl"
            onClick={HandListItem}
          >
            News
          </li>
          <li
            className="hover:text-[#f57591] hover:text-3xl"
            onClick={HandListItem}
          >
            About
          </li>
        </ul>
      </div>
      <div className="login-button text-[#222020] font-bold">
        <button
          className="bg-[#222020] text-white rounded-[1rem] w-[6rem] h-[3rem] cursor-pointer"
          onClick={HandleSignIn}
        >
          Login
        </button>
      </div>
    </div>
  );
}

export default Navbar;
