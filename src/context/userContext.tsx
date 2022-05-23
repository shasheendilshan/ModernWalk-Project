import React, { useState, createContext, useEffect } from "react";

import { IUser, IUserContext } from "./../interfaces/user";
import {
  getUserFromLocalStorage,
  removeUserFromLocalStorage,
} from "../lib/helpers";

export const UserContext = createContext<IUserContext | null>(null);

type Props = {
  children: React.ReactNode;
};

const AuthProvider = ({ children }: Props) => {
  const [user, setUser] = useState<IUser | null>(null);

  useEffect(() => {
    const getUser = () => {
      const userDetails = getUserFromLocalStorage();
      if (userDetails) {
        setUser(userDetails);
      }
    };
    getUser();
  }, []);

  const setUserDetails = (user: IUser) => {
    setUser(user);
  };
  const removeUserDetails = () => {
    setUser(null);
    removeUserFromLocalStorage();
  };

  return (
    <UserContext.Provider value={{ user, setUserDetails, removeUserDetails }}>
      {children}
    </UserContext.Provider>
  );
};

export default AuthProvider;
