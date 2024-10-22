import React, { useState, useEffect } from 'react';
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import axios from 'axios';

const ListUsers = ({ onOpenModal }) => {
    const [users, setUsers] = useState([]);

    // Fetch users from the API
    useEffect(() => {
        const fetchUsers = async () => {
            try {
                const response = await axios.get('http://localhost/MyPHPWebsite/api/read.php');
                setUsers(response.data);
            } catch (error) {
                console.error('Error fetching users:', error);
            }
        };
        fetchUsers();
    }, []);

    return (
        <div className="w-full h-full flex flex-col justify-start items-start bg-slate-50 border-[2px] rounded-xl space-y-6 shadow-md">
            <div className="w-full bg-white h-14 rounded-xl flex justify-start items-center pl-2">
                <h1 className="text-xl font-semibold">List Users</h1>
            </div>

            <div className="overflow-x-auto w-full">
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
                    <tbody className="w-full">
                        {users.map(user => (
                            <tr className="w-full text-center text-[16px] font-normal space-y-3" key={user.id}>
                                <th>{user.id}</th>
                                <td>{user.username}</td>
                                <td>{user.password}</td>
                                <td>{user.email}</td>
                                <td>{user.gender}</td>
                                <td className="flex justify-center space-x-4">
                                    <EditIcon
                                        onClick={() => onOpenModal('edit', user.id)}
                                        className="cursor-pointer text-gray-500 hover:text-blue-500"
                                    />
                                    <DeleteIcon
                                        onClick={() => onOpenModal('delete', user.id)}
                                        className="cursor-pointer text-gray-500 hover:text-red-500"
                                    />
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ListUsers;
