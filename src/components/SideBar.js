import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import DashboardIcon from "@mui/icons-material/Dashboard";
import BarChartIcon from "@mui/icons-material/BarChart";
import InsertDriveFileIcon from "@mui/icons-material/InsertDriveFile";
import CleanHandsIcon from "@mui/icons-material/CleanHands";
import InsertPhotoIcon from "@mui/icons-material/InsertPhoto";
import MessageIcon from "@mui/icons-material/Message";
import HelpIcon from "@mui/icons-material/Help";
import SettingsIcon from "@mui/icons-material/Settings";
import Logo from "../images/logo (1).png";

const SideBar = () => {
  const links = [
    { title: "Dashboard", href: "/MainDashboard", icon: DashboardIcon },
    { title: "Stats", href: "/stats", icon: BarChartIcon },
    { title: "Documents", href: "", icon: InsertDriveFileIcon },
    { title: "Photos", href: "", icon: InsertPhotoIcon },
    { title: "Hierarchy", href: "", icon: CleanHandsIcon },
    { title: "Message", href: "/message", icon: MessageIcon },
    { title: "Help", href: "", icon: HelpIcon },
    { title: "Settings", href: "", icon: SettingsIcon },
  ];

  const [activeLink, setActiveLink] = useState("Dashboard");
  const navigate = useNavigate();

  const handleActiveLink = (value ,href) => {
    setActiveLink(value);
    navigate(href);
  };

  return (
    <div className="w-72 min-h-screen shadow-2xl rounded-3xl space-y-8">
      {/* LOGO HERE */}
      <div className="flex items-center justify-center w-full h-28">
        <img src={Logo} />
      </div>
      {/* Links here  */}
      <div className="w-full flex flex-col justify-center items-center text-xl font-medium  space-y-4">
        {links.map((link, index) => (
          <ul className="w-full flex items-center justify-start pl-12">
            <a>
              <li
                key={index}
                className={`flex w-full items-center mb-4 cursor-pointer ${
                  activeLink === link.title ? "text-blue-500" : "text-gray-500"
                }`}
                onClick={() => handleActiveLink(link.title ,link.href)}
              >
                <link.icon
                  sx={{
                    fontSize: 30,
                    justifySelf: "flex-start",
                    marginRight: "10px",
                  }}
                />
                {link.title}
              </li>
            </a>
          </ul>
        ))}
      </div>
    </div>
  );
};

export default SideBar;
