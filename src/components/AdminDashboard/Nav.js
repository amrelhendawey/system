import React from "react";
import NotificationsIcon from "@mui/icons-material/Notifications";

const Nav = () => {
  return (
    <section className="w-full">
      <div className="navbar bg-base-100">
        {/* TEXT-HERE */}
        <div className="flex-1 flex flex-col items-start justify-center">
          <h2 className="font-semibold text-xl">Hello, Ahmed</h2>
          <p className="text-sm text-gray-500">Have a nice day</p>
        </div>

        {/* ICON-HERE */}
        <div className="flex-none">
          {/* NOTIFICATION_HERE */}
          <div className="dropdown dropdown-end">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost btn-circle"
            >
              <div className="indicator hover:text-blue-500">
                <NotificationsIcon />
                <span className="badge badge-sm indicator-item">1</span>
              </div>
            </div>
            <div
              tabIndex={0}
              className="card card-compact dropdown-content bg-base-100 z-[1] mt-3 w-52 shadow"
            >
              <div className="card-body">
                <span className="text-xs font-bold">
                  You have 1 notification
                </span>
              </div>
            </div>
          </div>

          {/* AVATAR-HERE */}
          <div className="dropdown dropdown-end">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost btn-circle avatar"
            >
              <div className="w-10 rounded-full">
                <img
                  alt="Tailwind CSS Navbar component"
                  src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
                />
              </div>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-white rounded-box z-[1] mt-3 w-52 p-2 shadow-2xl"
            >
              <li>
                <a className="justify-between">Profile</a>
              </li>
              <li>
                <a>Settings</a>
              </li>
              <li>
                <a>Logout</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Nav;
