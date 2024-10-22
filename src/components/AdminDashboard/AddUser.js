import React, { useState } from 'react';
import axios from 'axios';

const AddUser = ({ onClose, onAddSuccess }) => {
    const [formData, setFormData] = useState({
        username: '',
        password: '',
        email: '',
        gender: '',
    });

    const handleInputChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleAddSubmit = async (e) => {
        e.preventDefault();
        console.log('Submitting:', formData); // Log the form data
        try {
            const response = await axios.post('http://localhost/MyPHPWebsite/api/create.php', formData, {
                headers: {
                    'Content-Type': 'application/json' // Specify the content type
                }
            });
            console.log('Response:', response.data); // Log the response from the API
            onAddSuccess();
            onClose();
        } catch (error) {
            console.error('Error adding user:', error.response ? error.response.data : error.message);
        }
    };
    

    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
            <div className="modal-box relative bg-white p-6 rounded-lg shadow-lg">
                <h3 className="font-bold text-lg">Add New User</h3>
                <form onSubmit={handleAddSubmit}>
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
                        <button onClick={onClose} className="btn">Cancel</button>
                        <button type="submit" className="btn btn-success">Add</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default AddUser;
