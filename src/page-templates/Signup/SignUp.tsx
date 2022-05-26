import React, { useState, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { Button, Input } from "../../components";
import { errorToast } from "../../components/Toast/Toast";
import { validateSignUp } from "../../lib/helpers";

import { createUser } from "./../../api/users";
import { IUser } from "./../../interfaces/user";

type errorProps = {
  firstName?: string;
  lastName?: string;
  email?: string;
  password?: string;
};

const SignUp: React.FC = () => {
  const [firstName, setFirstName] = useState<string>("");
  const [lastName, setLastName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [errors, setErrors] = useState<errorProps[]>([]);

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
      setErrors(errorsList);
      registerUser(firstName, lastName, email, password);
    } else {
      setErrors(errorsList);
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
    const response = await createUser(userData);
    if (response?.status === 201) {
      console.log("User Created successfully", response?.status);
      clearFields();
      navigate("/sign-in");
    } else {
      errorToast("Something went wrong");
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

        <form onSubmit={(e) => handleSubmit(e)} className="space-y-4">
          <Input
            label="First Name"
            name="firstName"
            type="text"
            onChange={handleFirstName}
            value={firstName}
            error={
              errors?.find((item: errorProps) => item.firstName) === undefined
                ? ""
                : errors?.find((item: errorProps) => item.firstName)?.firstName
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
              errors?.find((item: errorProps) => item.lastName) === undefined
                ? ""
                : errors?.find((item: errorProps) => item.lastName)?.lastName
            }
          />

          <Input
            name="email"
            type="text"
            label="Email"
            onChange={handleEmail}
            value={email}
            error={
              errors?.find((item: errorProps) => item.email) === undefined
                ? ""
                : errors?.find((item: errorProps) => item.email)?.email
            }
          />

          <Input
            name="password"
            type="password"
            label="Password"
            onChange={handlePassword}
            value={password}
            error={
              errors?.find((item: errorProps) => item.password) === undefined
                ? ""
                : errors?.find((item: errorProps) => item.password)?.password
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

          <div>
            <Button name="Sign Up" />
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
