import React, { useState, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { BallBeat } from "react-pure-loaders";

import { getUser } from "../../services/users.services";
import { useUserContext } from "../../context/userContext";
import { IUser } from "../../interfaces/users/users.interfaces";
import { Button, Input } from "../../components";
import { validateSignIn } from "../../lib/helpers";
import { IValidationProps } from "../../interfaces/global/global.interface";

const SignIn: React.FC = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [validationErrors, setValidationErrors] = useState<IValidationProps[]>(
    []
  );

  const userCtx = useUserContext();
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const errorsList = validateSignIn(email, password);

    if (errorsList.length === 0) {
      setValidationErrors(errorsList);
      signInUser(email, password);
    } else {
      setValidationErrors(errorsList);
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

  const signInUser = async (email: string, password: string) => {
    const userData: IUser = {
      email,
      password,
    };

    setLoading(true);
    const response = await getUser(userData);
    setLoading(false);

    if (!response.error) {
      if (response?.data.length === 1) {
        userCtx?.setUserDetails(response.data[0]);
        navigate("/");
      } else {
        setError("Invalid email or password");
      }
    } else {
      setError(response.error.message);
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
        {error && (
          <div className="flex items-center justify-center py-1">
            <p className="text-red-500">{error}</p>
          </div>
        )}
        <form onSubmit={(e) => handleSubmit(e)} className="space-y-4">
          <Input
            name="email"
            type="text"
            label="Email"
            onChange={handleEmail}
            value={email}
            error={
              validationErrors &&
              validationErrors.find((item) => item.email)?.email
            }
          />

          <Input
            name="password"
            type="password"
            label="Password"
            onChange={handlePassword}
            value={password}
            error={
              validationErrors &&
              validationErrors.find((item) => item.password)?.password
            }
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
          <div className="container mx-auto flex justify-center">
            <BallBeat color={"#2BD9AF"} loading={loading} />
          </div>
          <div>
            <Button name="Sign In" disable={loading} />
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignIn;
