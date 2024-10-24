import "./App.css";
import SigninComp from "./components/signingForms/SigninComp";
import SinginUser from "./components/signingForms/SigninUser";
import SignupComp from "./components/signingForms/SignupComp";
import MainDashboard from "./components/AdminDashboard/MainDashboard";
import Stats from "./components/Stats/Stats";
import Messages from "./components/Messages/Messages";
import React, { useEffect, useState } from "react";
import axios from "axios";
import Tickets from "./Tickets/Tickets";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"; // Import Router and Route

function App() {
  const [adminData, setAdminData] = useState([]); // Correct placement of useState
  const [userCount, setUserCount] = useState(0);
  const [tickets, setTickets] = useState([]); // Moved useState to the top level

  useEffect(() => {
    // Fetch admin data
    axios
      .get("http://localhost/MyPHPWebsite/api/read.php")
      .then((response) => {
        setAdminData(response.data);
        setUserCount(response.data.length);
      })
      .catch((error) => {
        console.error("There was an error fetching the admin data!", error);
      });
  }, []); // Empty dependency array to run once on mount

  useEffect(() => {
    // Fetch tickets
    axios
      .get("http://localhost/MyPHPWebsite/api/get-tickets.php")
      .then((response) => {
        setTickets(response.data);
      })
      .catch((error) => {
        console.error("Error fetching tickets:", error);
      });
  }, []); // Empty dependency array to run once on mount

  return (
    <div className="font-Poppins">
      <Router>
        <Routes>
          <Route path="/signup" element={<SignupComp />} />
          <Route path="/" element={<SigninComp />} />
          <Route
            path="/mainDashboard"
            element={
              <MainDashboard
                adminData={adminData}
                setAdminData={setAdminData}
              />
            }
          />
          <Route path="/SigninUser" element={<SinginUser />} />
          <Route
            path="/stats"
            element={<Stats userCount={userCount} adminData={adminData} />}
          />
          <Route path="/message" element={<Messages adminData={adminData} />} />
          <Route
            path="/tickets"
            element={<Tickets tickets={tickets} adminData={adminData} />}
          />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
