import React, { useContext } from "react";
import { Link } from "react-router-dom";

import logo from "../../Assets/logo/logo.png";
import { AuthContext } from "../../Contexts/AuthProvider/AuthProvider";

const Navbar = () => {
  const user = useContext(AuthContext);
  const menuItem = (
    <>
      <li className="font-semibold mr-2">
        <Link to="/">Home</Link>
      </li>

      <li className="font-semibold mr-2">
        <Link to="/blog">Blog</Link>
      </li>
    </>
  );

  return (
    <div className="navbar h-14 bg-blue-50 mb-10">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost md:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
          >
            {menuItem}
          </ul>
        </div>
        <Link className="btn btn-ghost normal-case">
          <img className="h-16 w-16 rounded-full" src={logo} alt="" />
        </Link>
      </div>
      <div className="navbar-center hidden md:flex">
        <ul className="menu menu-horizontal p-0">{menuItem}</ul>
      </div>
      <div className="navbar-end ">
        <div className="font-semibold">
          {user?.email ? (
            <div className="flex">
              <li className="list-none mr-2">
                <Link to="/myreviews">My reviews</Link>
              </li>
              <li className="list-none mr-2">
                <Link to="/login">Add Services</Link>
              </li>
              <li className="list-none mr-2">
                <button>Log Out</button>
              </li>
            </div>
          ) : (
            <>
              <li className="list-none mr-2">
                <Link to="/login">Login</Link>
              </li>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
