import React from "react";
import { FaPowerOff } from "react-icons/fa6";
import { useDispatch } from "react-redux";
import { logout } from "../../../app/auth/authSlice.jsx";

const TopBar = () => {
  const dispatch = useDispatch();
  const handleLogOut = (e) => {
    e.preventDefault();
    localStorage.clear();
    dispatch(logout());
    window.location.href = "/auth";
  };
  return (
    <nav className=" flex w-full justify-between items-center bg-[#0769b4] text-gray-100 h-20 border-l-2 border-l-zinc-700">
      <div className="flex items-center h-full w-auto gap-5 ml-auto">
        <div className="flex items-center gap-2 h-full hover:bg-[#0000001a] p-4 cursor-pointer">
          <img
            src="https://cardb.linnit.io/img/admin.png"
            alt="name"
            className="w-10 h-full"
          />
          {/* <p>{currentUser.dname}</p> */}
        </div>

        <div
          onClick={handleLogOut}
          className="text-xl flex items-center gap-2 h-full  hover:bg-[#0000001a] cursor-pointer px-4"
        >
          <span className="inline-block">
            <FaPowerOff />
          </span>
          Logout
        </div>
      </div>
    </nav>
  );
};

export default TopBar;
