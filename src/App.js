import "./App.css";
import SideBar from "./components/SideBar";
import SigninComp from "./components/signingForms/SigninComp";
import SinginUser from "./components/signingForms/SigninUser";
import SignupComp from "./components/signingForms/SignupComp";
import MainDashboard from "./components/AdminDashboard/MainDashboard";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Stats from "./components/Stats/Stats";
import Messages from "./components/Messages/Messages";

function App() {
  return (
    <div className="font-Poppins">
      <Router>
        <Routes>
          <Route path="/signup" element={<SignupComp />} />
          <Route path="/" element={<SigninComp />} />
          <Route path="/mainDashboard" element={<MainDashboard />} />
          <Route path="/SigninUser" element={<SinginUser />} />
          <Route path="/stats" element={<Stats />} />
          <Route path="/message" element={<Messages />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
