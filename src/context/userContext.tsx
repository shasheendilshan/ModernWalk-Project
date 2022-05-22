import React, { useState, createContext } from "react";

import { IUser, IUserContext } from "./../interfaces/user";

export const UserContext = createContext<IUserContext | null>(null);

type Props = {
  children: React.ReactNode;
};

const AuthProvider = ({ children }: Props) => {
  const [user, setUser] = useState<IUser | null>(null);

  const setUserDetails = (user: IUser) => {
    setUser(user);
  };
  const removeUserDetails = () => {
    setUser(null);
  };

  return (
    <UserContext.Provider value={{ user, setUserDetails, removeUserDetails }}>
      {children}
    </UserContext.Provider>
  );
};

export default AuthProvider;
