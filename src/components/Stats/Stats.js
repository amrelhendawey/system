import React from "react";
import Nav from "../AdminDashboard/Nav";
import SideBar from "../SideBar";
import SearchUsers from "../AdminDashboard/SearchUsers";
import NumberOf from "./NumberOf";
import ListUsers from "../AdminDashboard/ListUsers";

const Stats = ({ userCount , adminData }) => {
  return (
    <section className="px-1 font-Poppins flex w-full h-screen justify-center  ">
      <SideBar />
      {/* STATS_HERE */}
      <div className="w-full h-[70%] flex flex-col justify-between items-center p-10 space-y-5">
        <Nav />
        <SearchUsers title={"Stats"} />
        <NumberOf userCount={userCount} />
        <ListUsers adminData={adminData}/>
      </div>
    </section>
  );
};

export default Stats;
