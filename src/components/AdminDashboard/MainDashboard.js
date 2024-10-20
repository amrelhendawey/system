import React from "react";
import SearchUsers from "./SearchUsers";
import ListUsers from "./ListUsers";
import SideBar from "../SideBar";
import Nav from "./Nav";

const MainDashboard = () => {
  return (
    <div className="px-1 font-Poppins flex w-full justify-center ">
      <SideBar />
      <div className="w-full flex flex-col justify-between items-center p-10 space-y-5">
        <Nav />
        <SearchUsers />
        <ListUsers />
      </div>
    </div>
  );
};

export default MainDashboard;
