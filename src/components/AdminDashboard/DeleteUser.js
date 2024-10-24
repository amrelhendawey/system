import React from "react";
import axios from "axios";

const DeleteUser = ({ user, onClose, onDelete }) => {
  const handleDelete = async () => {
    try {
      await axios.post("http://localhost/MyPHPWebsite/api/delete.php", {
        id: user.id, // Include the ID of the user to delete
      });
      onDelete(user.id); // Call the function to update the user list
      onClose(); // Close the modal after deletion
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
