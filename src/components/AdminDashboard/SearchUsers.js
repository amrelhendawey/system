import React, { useState } from "react";
import AddIcon from "@mui/icons-material/Add";
import TuneIcon from "@mui/icons-material/Tune";
import SearchIcon from "@mui/icons-material/Search";
import AddUser from "./AddUser"; // Import the AddUser component

const SearchUsers = ({ title }) => {
  const [showModal, setShowModal] = useState(false); // State to control the modal visibility
  const [showModalAnimation, setShowModalAnimation] = useState(false); // State for modal animation

  // Function to open the modal
  const openModal = () => {
    setShowModal(true);
    setShowModalAnimation(true); // Start the animation
  };

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
          <button
            className="btn btn-primary bg-blue-500 text-white hover:bg-blue-600 flex items-center space-x-2"
            onClick={openModal} // Open the modal on button click
          >
            <span>Add User</span> <AddIcon />
          </button>

          {/* FILTER BUTTON */}
          <button className="btn btn-primary text-blue-600 border-[2px] hover:bg-blue-600 hover:text-white flex items-center space-x-2">
            <span>Filter</span> <TuneIcon />
          </button>
        </div>
      </div>

      {/* Render the AddUser modal */}
      {showModal && (
        <AddUser
          onClose={() => {
            setShowModalAnimation(false); // Prepare for animation out
            setTimeout(() => setShowModal(false), 300); // Close after animation
          }}
          showModalAnimation={showModalAnimation} // Pass animation state
        />
      )}
    </div>
  );
};

export default SearchUsers;
