import React from 'react';
import axios from 'axios';

const DeleteUser = ({ userId, onClose, onDeleteSuccess }) => {
    const handleDelete = async () => {
        try {
            await axios.post('http://localhost/MyPHPWebsite/api/delete.php', `id=${userId}`, {
                headers: { 'Content-Type': 'application/x-www-form-urlencoded' }
            });
            onDeleteSuccess();
            onClose();
        } catch (error) {
            console.error('Error deleting user:', error);
        }
    };

    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
            <div className="modal-box relative bg-white p-6 rounded-lg shadow-lg">
                <h3 className="font-bold text-lg">Delete User</h3>
                <p>Are you sure you want to delete this user?</p>
                <div className="modal-action mt-4">
                    <button onClick={onClose} className="btn">Cancel</button>
                    <button onClick={handleDelete} className="btn btn-danger">Delete</button>
                </div>
            </div>
        </div>
    );
};

export default DeleteUser;
