import "./App.css";
import { useState, useEffect } from "react";
import axios from "axios";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import SigninComp from "./components/signingForms/SigninComp";
import SinginUser from "./components/signingForms/SigninUser";
import SignupComp from "./components/signingForms/SignupComp";
import MainDashboard from "./components/AdminDashboard/MainDashboard";
import Stats from "./components/Stats/Stats";
import Messages from "./components/Messages/Messages";

function App() {
  const [adminData, setAdminData] = useState([]);
  const [userCount, setUserCount] = useState(0);

  useEffect(() => {
    axios
      .get("http://localhost/MyPHPWebsite/api/read.php")
      .then((response) => {
        setAdminData(response.data);
        setUserCount(response.data.length);
        console.log("response", response);
      })
      .catch((error) => {
        console.error("There was an error fetching the data!", error);
      });
  }, []);

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
        </Routes>
      </Router>
    </div>
  );
}

export default App;
