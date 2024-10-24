import SearchUsers from "./SearchUsers";
import ListUsers from "./ListUsers";
import SideBar from "../SideBar";
import Nav from "./Nav";

const MainDashboard = ({ adminData , setAdminData }) => {
  return (
    <div className="px-1 font-Poppins flex w-full justify-center">
      <SideBar />
      <div className="w-full h-[80%] flex flex-col justify-between items-center p-10 space-y-5">
        <Nav />
        <SearchUsers title={"Admin Dashboard"}  adminData ={adminData}  setAdminData={setAdminData} />
        <ListUsers adminData={adminData} setAdminData={setAdminData} />
      </div>
    </div>
  );
};

export default MainDashboard;
