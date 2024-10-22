import React, { useState } from "react";
import SearchUsers from "./SearchUsers";
import ListUsers from "./ListUsers";
import SideBar from "../SideBar";
import Nav from "./Nav";
import AddUser from "./AddUser";
import EditUser from "./EditUser";
import DeleteUser from "./DeleteUser";

const MainDashboard = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [modalType, setModalType] = useState(null); // 'edit', 'delete', 'add'
    const [selectedUserId, setSelectedUserId] = useState(null);

    const openModal = (type, userId) => {
        setModalType(type);
        setSelectedUserId(userId);
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
        setSelectedUserId(null);
        setModalType(null);
    };

    return (
        <div className="px-1 font-Poppins flex w-full justify-center">
            <SideBar />
            <div className="w-full flex flex-col justify-between items-center p-10 space-y-5">
                <Nav />
                <SearchUsers title={"Admin Dashboard"} onOpenModal={(type, userId) => openModal(type, userId)} />
                {isModalOpen && modalType === 'add' && (
                    <AddUser
                        onClose={closeModal}
                        onAddSuccess={() => closeModal()}
                    />
                )}
                <ListUsers onOpenModal={(type, userId) => openModal(type, userId)} />
                {isModalOpen && modalType === 'edit' && (
                    <EditUser
                        userId={selectedUserId}
                        onClose={closeModal}
                        onEditSuccess={() => closeModal()}
                    />
                )}
                {isModalOpen && modalType === 'delete' && (
                    <DeleteUser
                        userId={selectedUserId}
                        onClose={closeModal}
                        onDeleteSuccess={() => closeModal()}
                    />
                )}
            </div>
        </div>
    );
};

export default MainDashboard;
