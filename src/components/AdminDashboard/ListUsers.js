import React, { useState } from "react";
import EditUser from "./EditUser";
import DeleteUser from "./DeleteUser";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";

const ListUsers = ({ adminData = [], setAdminData }) => {
  const [selectedUser, setSelectedUser] = useState(null);
  const [isEditModalOpen, setEditModalOpen] = useState(false);
  const [isDeleteModalOpen, setDeleteModalOpen] = useState(false);

  const openEditModal = (user) => {
    setSelectedUser(user);
    setEditModalOpen(true);
  };

  const closeEditModal = () => {
    setEditModalOpen(false);
    setSelectedUser(null);
  };

  const openDeleteModal = (user) => {
    setSelectedUser(user);
    setDeleteModalOpen(true);
  };

  const closeDeleteModal = () => {
    setDeleteModalOpen(false);
    setSelectedUser(null);
  };
  const handleDelete = (userId) => {
    setAdminData((prevAdminData) =>
      prevAdminData.filter((user) => user.id !== userId)
    );
  };
  const handleUpdate = (userId, updatedData) => {
    setAdminData((prevAdminData) =>
      prevAdminData.map((user) =>
        user.id === userId ? { ...user, ...updatedData } : user
      )
    );
  };

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
            {adminData.map((user) => (
              <tr
                className="w-full text-center text-[16px] font-normal space-y-3"
                key={user.id}
              >
                <th>{user.id}</th>
                <td>{user.username}</td>
                <td>{user.password}</td>
                <td>{user.email}</td>
                <td>{user.gender}</td>

                <td className="flex justify-center space-x-4">
                  <EditIcon
                    className="cursor-pointer text-gray-500 hover:text-blue-500"
                    onClick={() => openEditModal(user)}
                  />
                  <DeleteIcon
                    className="cursor-pointer text-gray-500 hover:text-blue-500"
                    onClick={() => openDeleteModal(user)}
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {isEditModalOpen && selectedUser && (
        <EditUser
          user={selectedUser}
          onClose={closeEditModal}
          onUpdate={handleUpdate}
        />
      )}
      {isDeleteModalOpen && selectedUser && (
        <DeleteUser
          user={selectedUser}
          onClose={closeDeleteModal}
          onDelete={handleDelete}
        />
      )}
    </div>
  );
};

export default ListUsers;
