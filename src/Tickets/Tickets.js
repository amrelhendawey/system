import React from "react";
import SideBar from "../components/SideBar";
import Nav from "../components/AdminDashboard/Nav";

const Tickets = ({ tickets, adminData }) => {
  return (
    <div className="px-1 font-Poppins flex w-full h-screen justify-center">
      <SideBar />
      <div className="w-full h-screen flex flex-col justify-between items-center p-10 space-y-5">
        <Nav />
        <div className="w-full h-full overflow-y-auto flex flex-col justify-start items-start bg-slate-50 border-[2px] rounded-lg p-3 space-y-6 shadow-md">
          {tickets.map((ticket, index) => (
            <ul
              key={index}
              className="w-full h-36 space-y-4 shadow-xl rounded-2xl p-2"
            >
              {/* Display adminData.username */}
              <li className="rounded-2xl">
                <span className="text-xl font-semibold text-blue-500">
                  From:{" "}
                </span>
                {adminData?.username}
              </li>
              <li className="rounded-2xl">
                <span className="text-xl font-semibold text-blue-500">
                  Subject:{" "}
                </span>
                {ticket.subject}
              </li>
              <li>
                <span className="text-xl font-semibold text-blue-500">
                  Description:{" "}
                </span>
                {ticket.description}
              </li>
            </ul>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Tickets;
