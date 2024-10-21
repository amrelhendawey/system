import React from "react";
import Signupimage from "../../images/sign up.png";
import logo from "../../images/Logo.png";
import { Link } from "react-router-dom";

const SignupComp = () => {
  return (
    <div className="signin-form w-full h-full flex justify-center items-center">
      <div className="flex  justify-center items-center max-w-[80%] h-screen shadow-2xl relative">
        {/* Logo */}
        <div className="absolute top-4 left-4">
          <img src={logo} alt="Logo" className="h-6" />
        </div>

        {/* Left Section: Form */}
        <div className="w-3/5 flex flex-col justify-center pl-24 pr-6">
          {" "}
          {/* Padding added */}
          <div className="w-4/5">
            {" "}
            {/* Ensure form width is consistent */}
            <h2 className="text-4xl font-bold mb-3">Sign up</h2>
            <p className="text-gray-500 text-sm mb-3">
              Sign up to enjoy the features of Revolutie
            </p>
            {/* Form */}
            <form className="space-y-5">
              <div className="mb-2">
                <label
                  className="block text-sm font-medium ml-2"
                  htmlFor="email"
                >
                  Your Name
                </label>
                <input
                  type="text"
                  placeholder="Your Name"
                  className="input input-bordered w-full border-none bg-slate-100 shadow-md rounded-2xl text-primary focus:outline-none focus:shadow-md pl-10"
                />
              </div>
              <div className="mb-3 space-y-3">
                <label
                  className="block text-sm font-medium ml-2"
                  htmlFor="password"
                >
                  Email
                </label>
                <input
                  type="text"
                  placeholder="Your Email"
                  className="input input-bordered w-full border-none bg-slate-100 shadow-md rounded-2xl text-primary focus:outline-none focus:shadow-md pl-10"
                />
                <label
                  className="block text-sm font-medium ml-2"
                  htmlFor="password"
                >
                  Password
                </label>
                <input
                  type="text"
                  placeholder="password"
                  className="input input-bordered w-full border-none bg-slate-100 shadow-md rounded-2xl text-primary focus:outline-none focus:shadow-md pl-10"
                />
              </div>
              <button className="btn bg-blue-500 hover:bg-blue-600 text-white w-full py-1.5 text-sm rounded-2xl">
                Sign up
              </button>
            </form>
            {/* Center the Sign In Link */}
            <p className="mt-3 text-sm text-center">
              Already have an account?{" "}
              <Link to="/" className="text-blue-500 underline">
                Sign in
              </Link>
            </p>
          </div>
        </div>

        {/* Right Section: Image with padding and rounded corners */}
        <div className="w-2/5 p-3 pr-3 h-full">
          {" "}
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
