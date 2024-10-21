import React, { useState } from "react";
import Signinimage from "../../images/sign in.png";
import logo from "../../images/Logo.png";
import { Link, useNavigate } from "react-router-dom";
import AdminPanelSettingsIcon from "@mui/icons-material/AdminPanelSettings";
import PersonIcon from "@mui/icons-material/Person";

const SigninComp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(""); // To hold error messages
  const navigate = useNavigate(); // Hook to programmatically navigate

  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent form submission

    // API endpoint to validate the user
    const apiUrl = "http://localhost/check.php"; // Change this to your PHP script path

    try {
      const response = await fetch(apiUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }), // Send email and password
      });

      const data = await response.json();

      if (data.success) {
        // Assuming your API returns { success: true } on correct credentials
        navigate("/mainDashboard"); // Redirect to the desired component
      } else {
        setError("Invalid email or password."); // Set error message
      }
    } catch (error) {
      console.error("Error:", error);
      setError("Something went wrong. Please try again.");
    }
  };

  return (
    <div className="signin-form w-full h-full flex justify-center items-center">
      <div className="flex justify-center items-center max-w-[80%] w-[1280px] h-screen shadow-2xl relative">
        {/* Logo */}
        <div className="absolute top-4 left-4">
          <img src={logo} alt="Logo" className="h-6" />
        </div>

        {/* Left Section: Form */}
        <div className="w-3/5 flex flex-col justify-center pl-24 pr-6">
          <div className="w-4/5">
            <h2 className="text-4xl font-bold mb-3">Sign in as Admin</h2>
            <p className="text-gray-500 text-sm mb-3">
              Please login to continue to your account.
            </p>
            {error && <p className="text-red-500 mb-3">{error}</p>}{" "}
            {/* Display error message */}
            {/* Form */}
            <form className="space-y-5" onSubmit={handleSubmit}>
              <div className="mb-2">
                <label
                  className="block text-sm font-medium ml-2"
                  htmlFor="email"
                >
                  Email
                </label>
                <input
                  type="text"
                  placeholder="Email"
                  className="input input-bordered w-full border-none bg-slate-100 shadow-md rounded-2xl text-primary focus:outline-none focus:shadow-md pl-10"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)} // Capture email
                />
              </div>
              <div className="mb-3">
                <label
                  className="block text-sm font-medium ml-2"
                  htmlFor="password"
                >
                  Password
                </label>

                <input
                  type="password"
                  placeholder="Password"
                  className="input input-bordered w-full border-none bg-slate-100 shadow-md rounded-2xl text-primary focus:outline-none focus:shadow-md pl-10"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)} // Capture password
                />
              </div>
              <button className="btn bg-blue-500 hover:bg-blue-600 text-white w-full py-1.5 text-sm rounded-2xl">
                Sign in
              </button>
            </form>
            {/* Center the Sign In Link */}
            <p className="mt-3 text-sm text-center">
              Need an account?{" "}
              <Link to="/signup" className="text-blue-500 underline">
                Create one
              </Link>
            </p>
            {/* SWITCH ICONS */}
            <div className="flex justify-center items-center space-x-7 mt-3">
              <Link to={"/"} className="text-blue-500 bg-gray-200 w-10 h-10 flex justify-center items-center rounded-full hover:text-blue-600">
                <AdminPanelSettingsIcon style={{ fontSize: "35px" }} />
              </Link>
              <Link to={"/SigninUser"} className="text-blue-500 bg-gray-200 w-10 h-10 flex justify-center items-center rounded-full hover:text-blue-600">
                <PersonIcon style={{ fontSize: "35px" }} />
              </Link>
            </div>
          </div>
        </div>

        {/* Right Section: Image with padding and rounded corners */}
        <div className="w-2/5 p-3 pr-3 h-full">
          <img
            src={Signinimage}
            alt="Signin"
            className="object-cover w-full h-full rounded-lg"
          />
        </div>
      </div>
    </div>
  );
};

export default SigninComp;
