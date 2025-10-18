import React from "react";
import { Github } from "lucide-react";
import { Link } from "react-router";
import { House } from 'lucide-react';

function Navbar() {
  return (
    <>
      <div className="navbar container mx-auto">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {" "}
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />{" "}
              </svg>
            </div>
            <ul
              tabIndex="-1"
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
            >
              <li>
                <Link className="text-lg  text-gray-700 font-medium" to="/">
                  Home
                </Link>
              </li>
              <li>
                <Link className="text-lg text-gray-700 font-medium" to="/app">
                  Apps
                </Link>
              </li>
              <li>
                <Link
                  className="text-lg text-gray-700 font-medium"
                  to="/installation"
                >
                  Installation
                </Link>
              </li>
            </ul>
          </div>
          <Link to='/' className="flex items-center">
            <img className="w-[50px] h-[50px] object-cover" src="/public/logo.png" alt="" />
            <h1
            className="btn  btn-ghost text-2xl text-[#9F62F2] font-bold"
          >
            HERO.IO
          </h1>
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <li>
              <Link className="text-lg text-gray-700 font-medium" to="/">
                Home
              </Link>
            </li>
            <li>
              <Link className="text-lg text-gray-700 font-medium" to="/app">
                Apps
              </Link>
            </li>
            <li>
              <Link
                className="text-lg text-gray-700 font-medium"
                to="/installation"
              >
                Installation
              </Link>
            </li>
          </ul>
        </div>
        <div className="navbar-end">
          <a
            href="https://github.com/zoyan120dev/ph-Assignment-8"
            target="_blank"
            className="btn bg-[#864CEC] text-white"
          >
            {" "}
            <Github /> Contribute
          </a>
        </div>
      </div>
    </>
  );
}

export default Navbar;
