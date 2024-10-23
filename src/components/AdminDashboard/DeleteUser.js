import React from "react";
import axios from "axios";

const DeleteUser = ({ user, onClose, onDelete }) => {
  const handleDelete = async () => {
    console.log("Attempting to delete user:", user); // Log the user object
    try {
      const response = await axios.post(
        "http://localhost/MyPHPWebsite/api/delete.php",
        {
          id: user.id, // Include the ID of the user to delete
        },
        {
          headers: {
            "Content-Type": "application/json", // Specify the content type
          },
        }
      );

      console.log("Delete response:", response.data); // Log the response from the server
      onClose(); // Close the modal after deletion
      // Optionally, refresh the admin data here
    } catch (error) {
      console.error("Error deleting user:", error);
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div className="modal-box relative bg-white p-6 rounded-lg shadow-lg">
        <h3 className="font-bold text-lg">Delete User</h3>
        <p>Are you sure you want to delete {user.username}?</p>
        <div className="modal-action mt-4">
          <button type="button" className="btn" onClick={onClose}>
            Cancel
          </button>
          <button
            type="button"
            className="btn btn-danger"
            onClick={handleDelete}
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default DeleteUser;
