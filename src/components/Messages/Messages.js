import React from "react";
import SearchUsers from "../AdminDashboard/SearchUsers";
import ListUsersChat from "./ListUsersChat";
import SideBar from "../SideBar";
import Nav from "../AdminDashboard/Nav";

const Messages = () => {
  return (
    <div className="px-1 font-Poppins flex w-full justify-center ">
      <SideBar />
      <div className="w-full flex flex-col justify-between items-center p-10 space-y-5">
        <Nav />
        <SearchUsers title={"Messages"} />
        <ListUsersChat />
      </div>
    </div>
  );
};

export default Messages;
