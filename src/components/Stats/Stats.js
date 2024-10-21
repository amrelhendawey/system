import React from "react";
import Nav from "../AdminDashboard/Nav";
import SideBar from "../SideBar";
import SearchUsers from "../AdminDashboard/SearchUsers";
import NumberOf from "./NumberOf";
import ListUsers from "../AdminDashboard/ListUsers";

const Stats = () => {
  return (
    <section className="px-1 font-Poppins flex w-full justify-center  ">
      <SideBar />
      {/* STATS_HERE */}
      <div className="w-full flex flex-col justify-between items-center p-10 space-y-5">
        <Nav />
        <SearchUsers title={"Stats"} />
        <NumberOf />
        <ListUsers />
      </div>
    </section>
  );
};

export default Stats;
