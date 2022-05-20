import React, { useState } from "react";

import { getUser } from "../../api/users";

const SignIn: React.FC = () => {
  const [userData, setUserData] = useState({ email: "", password: "" });

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (validate()) {
      const response = await getUser(userData);
      if (response?.data.length === 1) {
        console.log("login successful");
      } else {
        console.log("invalid email or password");
      }
    } else {
      console.log("Validation failed");
    }
  };

  const validate = () => {
    if (userData.email === "" || userData.password === "") {
      return false;
    } else {
      return true;
    }
  };

  return (
    <div className="mt-[70px]  min-h-screen flex flex-col item-center">
      <div className="max-w-md w-full mx-auto mt-4 bg-white p-8 border border-gray-300">
        <div className="max-w-md w-full mx-auto mb-5">
          <div className="text-3xl font-bold text-gray-800 mt-2 text-center">
            Sign In
          </div>
        </div>
        <form onSubmit={(e) => handleSubmit(e)} className="space-y-4">
          <div>
            <label htmlFor="" className="text-sm font-bold text-gray-600 block">
              Email
            </label>
            <input
              name="email"
              type="text"
              className="w-full p-2 border border-gray-300 mt-1 rounded-sm focus:outline-none"
              onChange={(e) =>
                setUserData({ ...userData, email: e.target.value })
              }
            />
          </div>
          <div>
            <label htmlFor="" className="text-sm font-bold text-gray-600 block">
              Password
            </label>
            <input
              name="email"
              type="password"
              className="w-full p-2 border border-gray-300 mt-1 rounded-sm  focus:outline-none"
              onChange={(e) =>
                setUserData({ ...userData, password: e.target.value })
              }
            />
          </div>
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <input type="checkbox" className="h-4 w-4 rounded " />
              <label htmlFor="" className="ml-2 text-sm text-gray-600">
                Remember me
              </label>
            </div>
            <p className="font-medium text-sm text-blue-500 cursor-pointer">
              Forgot Password?
            </p>
          </div>
          <div>
            <button className="w-full py-2 px-4 bg-blue-600 hover:bg-blue-700 rounded-md text-white font-bold">
              Sign In
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignIn;
