import React, { useState } from "react";
import Signupimage from "../../images/sign up.png";
import logo from "../../images/Logo.png";
import { Link } from "react-router-dom";
import AdminPanelSettingsIcon from "@mui/icons-material/AdminPanelSettings";
import PersonIcon from "@mui/icons-material/Person";
import axios from "axios"; // To make the POST request

const SignupComp = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState(""); // For success/failure message

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Create the data object
    const newUser = { name, email, password };

    try {
      // Send POST request to the PHP backend
      const response = await axios.post(
        "http://localhost/MyPHPWebsite/createnewuser.php", // Update to your actual PHP endpoint
        newUser
      );

      // Display success/failure message
      if (response.data.success) {
        setMessage("User created successfully!");
      } else {
        setMessage(response.data.message);
      }
    } catch (error) {
      setMessage("There was an error creating the user!");
      console.error("Error:", error);
    }
  };

  return (
    <div className="signin-form w-full h-full flex justify-center items-center">
      <div className="flex w-full justify-center items-center max-w-[80%] h-screen shadow-2xl relative">
        {/* Logo */}
        <div className="absolute top-4 left-4">
          <img src={logo} alt="Logo" className="h-6" />
        </div>

        {/* Left Section: Form */}
        <div className="w-3/5 flex flex-col justify-center pl-24 pr-6">
          <div className="w-4/5">
            <h2 className="text-4xl font-bold mb-3">Sign up as User</h2>
            <p className="text-gray-500 text-sm mb-3">
              Sign up to enjoy the features of Revolutie
            </p>

            {/* Form */}
            <form className="space-y-5" onSubmit={handleSubmit}>
              <div className="mb-2">
                <label className="block text-sm font-medium ml-2" htmlFor="name">
                  Your Name
                </label>
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Your Name"
                  className="input input-bordered w-full border-none bg-slate-100 shadow-md rounded-2xl text-primary focus:outline-none focus:shadow-md pl-10"
                />
              </div>

              <div className="mb-2">
                <label className="block text-sm font-medium ml-2" htmlFor="email">
                  Email
                </label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Your Email"
                  className="input input-bordered w-full border-none bg-slate-100 shadow-md rounded-2xl text-primary focus:outline-none focus:shadow-md pl-10"
                />
              </div>

              <div className="mb-3 space-y-3">
                <label className="block text-sm font-medium ml-2" htmlFor="password">
                  Password
                </label>
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Your Password"
                  className="input input-bordered w-full border-none bg-slate-100 shadow-md rounded-2xl text-primary focus:outline-none focus:shadow-md pl-10"
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="btn bg-blue-500 hover:bg-blue-600 text-white w-full py-1.5 text-sm rounded-2xl"
              >
                Sign up
              </button>
            </form>

            {/* Display message */}
            {message && (
              <p className="mt-3 text-sm text-center text-red-500">
                {message}
              </p>
            )}

            {/* Center the Sign In Link */}
            <p className="mt-3 text-sm text-center">
              Already have an account?{" "}
              <Link to="/" className="text-blue-500 underline">
                Sign in
              </Link>
            </p>

            {/* SWITCH ICONS */}
            <div className="flex justify-center items-center space-x-7 mt-3">
              <Link
                to={"/"}
                className="text-blue-500 bg-gray-200 w-10 h-10 flex justify-center items-center rounded-full hover:text-blue-600"
              >
                <AdminPanelSettingsIcon style={{ fontSize: "35px" }} />
              </Link>
              <Link
                to={"/SigninUser"}
                className="text-blue-500 bg-gray-200 w-10 h-10 flex justify-center items-center rounded-full hover:text-blue-600"
              >
                <PersonIcon style={{ fontSize: "35px" }} />
              </Link>
            </div>
          </div>
        </div>

        {/* Right Section: Image with padding and rounded corners */}
        <div className="w-2/5 p-3 pr-3 h-full">
          <img
            src={Signupimage}
            alt="Signup"
            className="object-cover w-full h-full rounded-lg"
          />
        </div>
      </div>
    </div>
  );
};

export default SignupComp;
