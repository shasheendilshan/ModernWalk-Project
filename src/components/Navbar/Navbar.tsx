import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AiOutlineShopping, AiOutlineLogout } from "react-icons/ai";

import { IUserContext } from "./../../interfaces/user";
import { UserContext } from "./../../context/userContext";

const Navbar: React.FC = () => {
  const { user, removeUserDetails } = useContext(UserContext) as IUserContext;

  return (
    <div className="w-[100%] h-[70px] z-20 bg-white drop-shadow-lg fixed flex items-center top-0">
      <div className="container mx-auto flex items-center justify-between ">
        <div className="flex items-center justify-center h-full">
          <Link to="/">
            <h1 className="text-3xl md:text-4xl font-bold text-slate-700">
              Modern Walk
            </h1>
          </Link>
        </div>
        <div className="items-center  h-full flex justify-end flex-1 space-x-3 mr-5  ">
          {user === null ? (
            <>
              <Link to="/sign-in">
                <button className=" h-[40px] bg-[#2BD9AF] hover:bg-[#27c39e] text-white font-bold py-1 px-5 rounded-3xl">
                  Sign in
                </button>
              </Link>
            </>
          ) : (
            <div className="flex lg:space-x-10 item-center">
              <div className="items-center px-2 group inline-block relative cursor-pointer">
                <div className="flex items-center space-x-2">
                  <span className="bg-gray-300 text-blue-700 h-[35px] w-[35px] flex items-center justify-center rounded-full">
                    <h2 className="text-xl ">{user?.firstName?.charAt(0)}</h2>
                  </span>
                  <h3 className="text-md lg:text-xl">
                    Welcome {user?.firstName} !
                  </h3>
                </div>

                <ul className="absolute w-[150px] h-[100px] text-gray-700 pt-1  p-2 rounded-md shadow-lg hidden group-hover:block bg-white">
                  <li
                    onClick={removeUserDetails}
                    className="flex items-center rounded-sm justify-center hover:bg-[#27c39e] "
                  >
                    <AiOutlineLogout size={25} />
                    <a
                      className="rounded  py-2 px-2 block whitespace-no-wrap"
                      href="/"
                    >
                      log out
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          )}
          <div className=" relative cursor-pointer ">
            <span className="w-[25px] h-[25px]  rounded-full bg-red-500 text-center text-white absolute right-[-15px] top-[-2px]">
              1
            </span>
            <AiOutlineShopping size={35} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default React.memo(Navbar);
