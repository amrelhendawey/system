import React, { useState, useEffect } from 'react';
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import axios from 'axios';

const ListUsers = () => {
    const [users, setUsers] = useState([]);
    const [selectedUser, setSelectedUser] = useState(null);
    const [formData, setFormData] = useState({ username: '', email: '', gender: '' });
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [showModalAnimation, setShowModalAnimation] = useState(false);

    // Fetch users from the API on component mount
    useEffect(() => {
        const fetchUsers = async () => {
            try {
                const response = await axios.get('http://localhost/MyPHPWebsite/api/read.php');
                setUsers(response.data); // Assume your read.php returns a JSON array of users
            } catch (error) {
                console.error('Error fetching users:', error);
            }
        };
        
        fetchUsers();
    }, []);

    const handleEditClick = (user) => {
        setSelectedUser(user);
        setFormData({
            username: user.username,
            email: user.email,
            gender: user.gender,
        });
        setIsModalOpen(true);
        setTimeout(() => setShowModalAnimation(true), 50); // Delay to trigger the animation
    };

    const handleInputChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            // Send update request to API
            const response = await axios.post('http://localhost/MyPHPWebsite/api/update.php', `id=${selectedUser.id}&username=${formData.username}&email=${formData.email}&gender=${formData.gender}`, {
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded',
                },
            });

            console.log(response.data.message); // Log success message

            // Update local state to reflect changes
            setUsers(prevUsers =>
                prevUsers.map(user =>
                    user.id === selectedUser.id ? { ...user, ...formData } : user
                )
            );

            setShowModalAnimation(false); // Hide the modal with animation
            setTimeout(() => setIsModalOpen(false), 300); // Delay to match animation time
        } catch (error) {
            console.error('Error updating user:', error);
        }
    };

    const handleDelete = async (id) => {
        try {
            const response = await axios.post('http://localhost/MyPHPWebsite/api/delete.php', `id=${id}`, {
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded',
                },
            });
            console.log(response.data.message); // Log success message
            setUsers(users.filter(user => user.id !== id)); // Update local state
        } catch (error) {
            console.error('Error deleting user:', error);
        }
    };

    return (
        <div className="w-full h-full flex flex-col justify-start items-start bg-slate-50 border-[2px] rounded-xl space-y-6 shadow-md">
            <div className="w-full bg-white h-14 rounded-xl flex justify-start items-center pl-2">
                <h1 className="text-xl font-semibold">List Users</h1>
            </div>

            <div className="overflow-x-auto w-full ">
                <table className="table border-separate border-spacing-0">
                    <thead className="text-xl text-center shadow-md">
                        <tr>
                            <th></th>
                            <th className="font-medium">Username</th>
                            <th className="font-medium">Password</th>
                            <th className="font-medium">Email</th>
                            <th className="font-medium">Gender</th>
                            <th className="font-medium">Action</th>
                        </tr>
                    </thead>
                    <tbody className="w-full ">
                        {users.map((user) => (
                            <tr className="w-full text-center text-[16px] font-normal space-y-3" key={user.id}>
                                <th>{user.id}</th>
                                <td>{user.username}</td>
                                <td>{user.password}</td>
                                <td>{user.email}</td>
                                <td>{user.gender}</td>
                                <td className="flex justify-center space-x-4">
                                    <EditIcon onClick={() => handleEditClick(user)} className="cursor-pointer text-gray-500 hover:text-blue-500" />
                                    <DeleteIcon onClick={() => handleDelete(user.id)} className="cursor-pointer text-gray-500 hover:text-red-500" />
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            {/* Modal with animations */}
            {isModalOpen && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
                    <div className={`modal-box relative bg-white p-6 rounded-lg shadow-lg transition-all duration-300 ease-out ${showModalAnimation ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}>
                        <form onSubmit={handleSubmit}>
                            <button
                                type="button"
                                className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
                                onClick={() => {
                                    setShowModalAnimation(false);
                                    setTimeout(() => setIsModalOpen(false), 300); // Close with animation
                                }}
                            >
                                ✕
                            </button>
                            <h3 className="font-bold text-lg">Edit User</h3>
                            <div className="form-control">
                                <label className="label">Username</label>
                                <input
                                    type="text"
                                    name="username"
                                    className="input input-bordered"
                                    value={formData.username}
                                    onChange={handleInputChange}
                                />
                            </div>
                            <div className="form-control">
                                <label className="label">Email</label>
                                <input
                                    type="email"
                                    name="email"
                                    className="input input-bordered"
                                    value={formData.email}
                                    onChange={handleInputChange}
                                />
                            </div>
                            <div className="form-control">
                                <label className="label">Gender</label>
                                <select
                                    name="gender"
                                    className="select select-bordered"
                                    value={formData.gender}
                                    onChange={handleInputChange}
                                >
                                    <option value="male">Male</option>
                                    <option value="female">Female</option>
                                </select>
                            </div>
                            <div className="modal-action mt-4">
                                <button type="submit" className="btn">Update</button>
                            </div>
                        </form>
                    </div>
                </div>
            )}
        </div>
    );
};

export default ListUsers;
