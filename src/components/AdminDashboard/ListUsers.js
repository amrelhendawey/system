import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";

const ListUsers = ({ adminData = [] }) => {
  return (
    <div className="w-full h-full flex flex-col justify-start items-start bg-slate-50 border-[2px] rounded-xl space-y-6 shadow-md">
      <div className="w-full bg-white h-14 rounded-xl flex justify-start items-center pl-2">
        <h1 className="text-xl font-semibold">List Users</h1>
      </div>

      <div className="overflow-x-auto w-full ">
        <div className="max-h-[60vh]">
          <table className="table border-separate border-spacing-0">
            {/* head */}
            <thead className="text-xl text-center shadow-md">
              <tr>
                <th className="sticky top-0 bg-slate-50"></th>
                <th className="font-medium sticky top-0 bg-slate-50">Username</th>
                <th className="font-medium sticky top-0 bg-slate-50">Password</th>
                <th className="font-medium sticky top-0 bg-slate-50">Email</th>
                <th className="font-medium sticky top-0 bg-slate-50">Gender</th>
                <th className="font-medium sticky top-0 bg-slate-50">Action</th>
              </tr>
            </thead>
            <tbody className="w-full">
              {/* row  */}
              {adminData.map((data, index) => (
                <tr
                  className="w-full text-center text-[16px] font-normal space-y-3"
                  key={index}
                >
                  <th>{data.id}</th>
                  <td>{data.username}</td>
                  <td>{data.password}</td>
                  <td>{data.email}</td>
                  <td>{data.gender}</td>
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
    </div>
  );
};

export default ListUsers;
