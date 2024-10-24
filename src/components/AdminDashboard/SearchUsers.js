import React from "react";
import TuneIcon from "@mui/icons-material/Tune";
import SearchIcon from "@mui/icons-material/Search";
import AddUser from "./AddUser";

const SearchUsers = ({ title, setAdminData, adminData }) => {
  return (
    <div className="w-full flex flex-col justify-center items-start space-y-4">
      <h1 className="text-2xl font-semibold text-blue-500">{title}</h1>

      {/* SEARCH USERS */}
      <div className="w-full flex items-center justify-between space-x-4">
        {/* SEARCH INPUT */}
        <div className="relative w-full max-w-7xl">
          <input
            type="text"
            placeholder="Search"
            className="input input-bordered w-full border-none bg-slate-100 shadow-md rounded-2xl text-primary focus:outline-none focus:shadow-md pl-10"
          />
          <SearchIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500" />
        </div>

        {/* BUTTON DIV */}
        <div className="flex items-center space-x-4">
          {/* ADD USER BUTTON */}
          <AddUser setAdminData={setAdminData} adminData={adminData} />
          {/* FILTER BUTTON */}
          <button className="btn btn-primary text-blue-600 border-[2px] hover:bg-blue-600 hover:text-white flex items-center space-x-2">
            <span>Filter</span> <TuneIcon />
          </button>
        </div>
      </div>
    </div>
  );
};

export default SearchUsers;
