import React from "react";

const SignUp: React.FC = () => {
  return (
    <div className="mt-[70px]  min-h-screen flex flex-col item-center">
      <div className="max-w-md w-full mx-auto mt-4 bg-white p-8 border border-gray-300">
        <div className="max-w-md w-full mx-auto mb-5">
          <div className="text-2xl font-bold text-gray-800 mt-2 text-center">
            Sign Up
          </div>
        </div>
        <form action="" className="space-y-4">
          <div>
            <label htmlFor="" className="text-sm font-bold text-gray-600 block">
              First Name
            </label>
            <input
              name="firstName"
              type="text"
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
            />
          </div>

          <div>
            <button className="w-full py-2 px-4 bg-blue-600 hover:bg-blue-700 rounded-md text-white font-bold">
              Sign Up
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
