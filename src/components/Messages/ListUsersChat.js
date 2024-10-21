import React, { useState } from 'react';
import MessageIcon from "@mui/icons-material/Message";

const ListUsersChat= () => {
  const [users] = useState([
    {
      id: 1,
      username: "user1",
      password: "pass1",
      email: "email1",
      gender: "male",
    },
    {
      id: 2,
      username: "user2",
      password: "pass2",
      email: "email2",
      gender: "female",
    },
    {
      id: 3,
      username: "user3",
      password: "pass3",
      email: "email3",
      gender: "male",
    },
    {
      id: 4,
      username: "user4",
      password: "pass4",
      email: "email4",
      gender: "female",
    },
    {
      id: 5,
      username: "user5",
      password: "pass5",
      email: "email5",
      gender: "female",
    },
  ]);

  const [isChatOpen, setIsChatOpen] = useState(false); // Chat modal visibility
  const [activeUser, setActiveUser] = useState(null);  // Selected user for chat
  const [messages, setMessages] = useState([]);        // Messages for chat
  const [input, setInput] = useState('');              // Input field value

  // Open chat for a specific user
  const openChat = (user) => {
    setActiveUser(user);
    setMessages([]); // Reset chat for the selected user
    setIsChatOpen(true);
    document.body.style.overflow = 'hidden'; // Prevent background scroll
  };

  // Close chat modal
  const closeChat = () => {
    setIsChatOpen(false);
    setActiveUser(null);
    document.body.style.overflow = 'auto'; // Restore scroll
  };

  // Send message
  const sendMessage = () => {
    if (input.trim()) {
      setMessages([...messages, input]);
      setInput('');
    }
  };

  return (
    <div className="relative z-10 w-full h-full flex flex-col justify-start items-start bg-slate-50 border-[2px] rounded-xl space-y-6 shadow-md">
      <div className="w-full bg-white h-14 rounded-xl flex justify-start items-center pl-2 z-20">
        <h1 className="text-xl font-semibold">List Users</h1>
      </div>

      <div className="overflow-x-auto w-full z-20">
        <table className="table border-separate border-spacing-0 z-20">
          {/* head */}
          <thead className="text-xl text-center shadow-md z-20">
            <tr>
              <th></th>
              <th className="font-medium">Username</th>
              <th className="font-medium">Password</th>
              <th className="font-medium">Email</th>
              <th className="font-medium">Gender</th>
              <th className="font-medium">Action</th>
            </tr>
          </thead>
          <tbody className="w-full z-20">
            {users.map((user, index) => (
              <tr className="w-full text-center text-[16px] font-normal space-y-3 z-20" key={index}>
                <th>{user.id}</th>
                <td>{user.username}</td>
                <td>{user.password}</td>
                <td>{user.email}</td>
                <td>{user.gender}</td>
                <td className="flex justify-center space-x-4">
                  <MessageIcon
                    className="cursor-pointer text-gray-500 hover:text-blue-500 z-20"
                    onClick={() => openChat(user)} // Open chat when clicked
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Chat Modal */}
      {isChatOpen && activeUser && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black bg-opacity-50"
          style={{ zIndex: 100 }} // Ensure it sits above everything
        >
          <div className="modal-box relative z-[110] bg-white p-6 rounded-lg shadow-lg">
            {/* Close "×" icon */}
            <button
              className="absolute top-2 right-2 text-gray-600 hover:text-black text-2xl"
              onClick={closeChat}
            >
              &times;
            </button>

            <h3 className="font-bold text-lg">Chat with {activeUser.username}</h3>

            {/* Chat interface */}
            <div className="flex flex-col h-64 p-4">
              <div className="flex-grow overflow-y-auto border p-2 rounded">
                {messages.length === 0 ? (
                  <p>No messages yet.</p>
                ) : (
                  messages.map((message, index) => (
                    <div key={index} className="mb-2">
                      <strong>{activeUser.username}:</strong> {message}
                    </div>
                  ))
                )}
              </div>
              <div className="mt-4 flex">
                <input
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  placeholder="Type a message"
                  className="input input-bordered w-full mr-2"
                />
                <button onClick={sendMessage} className="btn btn-primary bg-blue-500 text-white hover:bg-blue-600">
                  Send
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ListUsersChat;
