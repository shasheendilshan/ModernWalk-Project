import React, { useState } from "react";

import { createUser } from "./../../api/users";
import { IUser } from "./../../interfaces/user";

const SignUp: React.FC = () => {
  const [userData, setUserData] = useState<IUser>({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (validate()) {
      const response = await createUser(userData);
      console.log("User Created successfully");
    } else {
      console.log("User Created Fail");
    }
  };

  const validate = () => {
    if (
      userData.firstName === "" ||
      userData.lastName === "" ||
      userData.email === "" ||
      userData.password === ""
    ) {
      return false;
    } else {
      return true;
    }
  };

  return (
    <div className="mt-[70px]  min-h-screen flex flex-col item-center">
      <div className="max-w-md w-full mx-auto mt-4 bg-white p-8 border border-gray-300">
        <div className="max-w-md w-full mx-auto mb-5">
          <div className="text-2xl font-bold text-gray-800 mt-2 text-center">
            Sign Up
          </div>
        </div>
        <form onSubmit={(e) => handleSubmit(e)} className="space-y-4">
          <div>
            <label htmlFor="" className="text-sm font-bold text-gray-600 block">
              First Name
            </label>
            <input
              name="firstName"
              type="text"
              onChange={(e) =>
                setUserData({ ...userData, firstName: e.target.value })
              }
              className="w-full p-2 border border-gray-300 mt-1 rounded-sm  focus:outline-none"
            />
          </div>
          <div>
            <label htmlFor="" className="text-sm font-bold text-gray-600 block">
              Last Name
            </label>
            <input
              name="lastName"
              type="text"
              className="w-full p-2 border border-gray-300 mt-1 rounded-sm focus:outline-none"
              onChange={(e) =>
                setUserData({ ...userData, lastName: e.target.value })
              }
            />
          </div>
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
              name="password"
              type="password"
              className="w-full p-2 border border-gray-300 mt-1 rounded-sm focus:outline-none"
              onChange={(e) =>
                setUserData({ ...userData, password: e.target.value })
              }
            />
          </div>

          <div>
            <button
              disabled={false}
              className="w-full py-2 px-4 bg-blue-600 hover:bg-blue-700 rounded-md text-white font-bold disabled:bg-slate-400"
            >
              Sign Up
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
