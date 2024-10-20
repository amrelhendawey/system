import React from "react";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";

const ListUsers = () => {
  const data = [
    {
      id: 1,
      usename: "user1",
      password: "pass1",
      email: "email1",
      gender: "male",
    },
    {
      id: 2,
      usename: "user2",
      password: "pass2",
      email: "email2",
      gender: "female",
    },
    {
      id: 3,
      usename: "user3",
      password: "pass3",
      email: "email3",
      gender: "male",
    },
    {
      id: 4,
      usename: "user4",
      password: "pass4",
      email: "email4",
      gender: "female",
    },
    {
      id: 5,
      usename: "user5",
      password: "pass5",
      email: "email5",
      gender: "female",
    },
  ];
  return (
    <div className="w-full h-full flex flex-col justify-start items-start bg-slate-50 bordered border-[2px] rounded-xl space-y-6 shadow-md">
      <div className="w-full bg-white h-14 rounded-xl flex justify-start items-center pl-2">
        <h1 className="text-xl font-semibold">List Users </h1>
      </div>

      <div className="overflow-x-auto w-full ">
        <table className="table border-separate border-spacing-0">
          {/* head */}
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
            {/* row  */}
            {data.map((user, index) => (
              <tr
                className="w-full text-center text-[16px] font-normal space-y-3"
                key={index}
              >
                <th>{user.id}</th>
                <td>{user.usename}</td>
                <td>{user.password}</td>
                <td>{user.email}</td>
                <td>{user.gender}</td>
                <td className="flex justify-center space-x-4">
                  <EditIcon className="cursor-pointer text-gray-500 hover:text-blue-500" />
                  <DeleteIcon className="cursor-pointer text-gray-500 hover:text-red-500" />
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
