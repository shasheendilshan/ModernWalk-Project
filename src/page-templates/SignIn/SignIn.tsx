import React, { useState, useCallback } from "react";
import { useNavigate } from "react-router-dom";

import { getUser } from "../../api/users";
import { useUserContext } from "./../../context/userContext";
import { IUser } from "./../../interfaces/user";
import { Button, Input } from "../../components";
import { errorToast } from "../../components/Toast/Toast";

const SignIn: React.FC = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { setUserDetails } = useUserContext();
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (validate()) {
      const userData: IUser = {
        email,
        password,
      };
      const response = await getUser(userData);
      if (response?.data.length === 1) {
        setUserDetails(response.data[0]);
        navigate("/");
      } else {
        errorToast("Invalid email or password");
      }
    } else {
      errorToast("Fill all required fields");
    }
  };

  const validate = () => {
    if (email === "" || password === "") {
      return false;
    } else {
      return true;
    }
  };

  const handleEmail = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  }, []);

  const handlePassword = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setPassword(e.target.value);
    },
    []
  );

  return (
    <div className="mt-[70px]  min-h-screen flex flex-col item-center">
      <div className="max-w-md w-full mx-auto mt-4 bg-white p-8 border border-gray-300">
        <div className="max-w-md w-full mx-auto mb-5">
          <div className="text-3xl font-bold text-gray-800 mt-2 text-center">
            Sign In
          </div>
        </div>
        <form onSubmit={(e) => handleSubmit(e)} className="space-y-4">
          <Input
            name="email"
            type="text"
            label="Email"
            onChange={handleEmail}
            value={email}
          />

          <Input
            name="password"
            type="password"
            label="Password"
            onChange={handlePassword}
            value={password}
          />

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
          <div className="flex items-center justify-center pt-4">
            <div className="flex items-center justify-center">
              <label htmlFor="" className="ml-2 text-sm text-gray-600">
                Not yet register?
              </label>
              <p
                className="font-medium text-md ml-2 text-blue-500 cursor-pointer"
                onClick={() => {
                  navigate("/sign-up");
                }}
              >
                Create an account.
              </p>
            </div>
          </div>
          <div>
            <Button name="Sign In" />
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignIn;
