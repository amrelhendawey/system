import React, { useState } from "react";
import axios from "axios";

const EditUser = ({ user, onClose, onUpdate }) => {
  const [formData, setFormData] = useState({
    username: user.username,
    password: user.password,
    email: user.email,
    gender: user.gender,
  });

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleEditSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost/MyPHPWebsite/api/update.php", {
        id: user.id, // Include the ID of the user being edited
        ...formData,
      });
      onUpdate(user.id, formData); // Update the user data in the list
      onClose(); // Close the modal after saving
    } catch (error) {
      console.error("Error updating user:", error);
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div className="modal-box relative bg-white p-6 rounded-lg shadow-lg">
        <h3 className="font-bold text-lg">Edit User</h3>
        <form className="space-y-4" onSubmit={handleEditSubmit}>
          <input
            type="text"
            name="username"
            value={formData.username}
            onChange={handleInputChange}
            className="input input-bordered w-full"
            placeholder="Username"
          />
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleInputChange}
            className="input input-bordered w-full mt-2"
            placeholder="Password"
          />
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            className="input input-bordered w-full mt-2"
            placeholder="Email"
          />
          <input
            type="text"
            name="gender"
            value={formData.gender}
            onChange={handleInputChange}
            className="input input-bordered w-full mt-2"
            placeholder="Gender"
          />
          <div className="modal-action mt-4">
            <button type="button" className="btn" onClick={onClose}>
              Cancel
            </button>
            <button type="submit" className="btn btn-success">
              Save
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditUser;
