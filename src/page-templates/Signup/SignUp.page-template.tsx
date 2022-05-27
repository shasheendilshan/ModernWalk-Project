import React, { useState, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { BallBeat } from "react-pure-loaders";

import { Button, Input } from "../../components";
import { validateSignUp } from "../../lib/helpers";
import { createUser } from "../../services/users.services";
import { IUser } from "../../interfaces/users/users.interfaces";
import { IValidationProps } from "../../interfaces/global/global.interface";

const SignUp: React.FC = () => {
  const [firstName, setFirstName] = useState<string>("");
  const [lastName, setLastName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [validationErrors, setValidationErrors] = useState<IValidationProps[]>(
    []
  );

  const navigate = useNavigate();

  const handleFirstName = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setFirstName(e.target.value);
    },
    []
  );
  const handleLastName = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setLastName(e.target.value);
    },
    []
  );
  const handleEmail = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  }, []);
  const handlePassword = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setPassword(e.target.value);
    },
    []
  );

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const errorsList = validateSignUp(firstName, lastName, email, password);

    if (errorsList.length === 0) {
      setValidationErrors(errorsList);
      registerUser(firstName, lastName, email, password);
    } else {
      setValidationErrors(errorsList);
    }
  };

  const registerUser = async (
    firstName: string,
    lastName: string,
    email: string,
    password: string
  ) => {
    const userData: IUser = {
      firstName,
      lastName,
      email,
      password,
    };

    setLoading(true);
    const response = await createUser(userData);
    setLoading(false);

    if (!response.error) {
      if (response?.status === 201) {
        console.log("User Created successfully", response.status);
        clearFields();
        navigate("/sign-in");
      } else {
        setError("Something went wrong");
      }
    } else {
      setError(response.error.message);
    }
  };

  const clearFields = () => {
    setFirstName("");
    setLastName("");
    setEmail("");
    setPassword("");
  };

  return (
    <div className="mt-[70px]  min-h-screen flex flex-col item-center">
      <div className="max-w-md w-full mx-auto mt-4 bg-white p-8 border border-gray-300">
        <div className="max-w-md w-full mx-auto mb-5">
          <div className="text-3xl font-bold text-gray-800 mt-2 text-center">
            Sign Up
          </div>
        </div>
        {error && (
          <div className="flex items-center justify-center py-1">
            <p className="text-red-500">{error}</p>
          </div>
        )}
        <form onSubmit={(e) => handleSubmit(e)} className="space-y-4">
          <Input
            label="First Name"
            name="firstName"
            type="text"
            onChange={handleFirstName}
            value={firstName}
            error={
              validationErrors &&
              validationErrors.find((item) => item.firstName)?.firstName
            }
          />

          <Input
            label="Last Name"
            name="lastName"
            type="text"
            className="w-full p-2 border border-gray-300 mt-1 rounded-sm focus:outline-none"
            onChange={handleLastName}
            value={lastName}
            error={
              validationErrors &&
              validationErrors.find((item) => item.lastName)?.lastName
            }
          />

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

          <div className="flex items-center justify-center pt-4">
            <div className="flex items-center justify-center">
              <label htmlFor="" className="ml-2 text-sm text-gray-600">
                Do you have an account?
              </label>
              <p
                className="font-medium text-md text-blue-500 cursor-pointer ml-2"
                onClick={() => {
                  navigate("/sign-in");
                }}
              >
                Sign in
              </p>
            </div>
          </div>
          <div className="container mx-auto flex justify-center">
            <BallBeat color={"#2BD9AF"} loading={loading} />
          </div>
          <div>
            <Button name="Sign Up" disable={loading} />
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
