import React from "react";
import SearchUsers from "./SearchUsers";
import ListUsers from "./ListUsers";
import SideBar from "../SideBar";
import Nav from "./Nav";

const MainDashboard = ({adminData}) => {


  return (
    <div className="px-1 font-Poppins flex w-full h-screen justify-center  ">
      <SideBar />
      <div className="w-full h-[80%] flex flex-col justify-between items-center p-10 space-y-5">
        <Nav />
        <SearchUsers title={"Admin Dashboard"} />
        <ListUsers adminData={adminData}/>
      </div>
    </div>
  );
};

export default MainDashboard;
