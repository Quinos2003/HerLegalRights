import { Link } from "react-router-dom";
import React from "react";
import Logo from "../../Assets/Logo.png";

function Nav() {
  return (
    <div className="  bg-gray-50">
      <div className="mx-2 flex justify-between">
        <Link to="/" class="navbar-brand">
          <img src={Logo} className="h-16 m-0" />
        </Link>
        <div className="font-medium flex pt-5 flex-row space-x-8 rtl:space-x-reverse justify-end mr-4">
          <Link
            to="/Resources"
            className="block py-2 px-3 text-black bg-blue-700 rounded md:bg-transparent  md:p-0 dark:text-black "
          >
            Legal Resources
          </Link>
          <Link
            to="/Case"
            className="block py-2 px-3 text-black bg-blue-700 rounded md:bg-transparent  md:p-0 dark:text-black "
          >
            Case Studies
          </Link>
          <Link
            to="/Workshop"
            className="block py-2 px-3 text-black bg-blue-700 rounded md:bg-transparent  md:p-0 dark:text-black "
          >
            Empowerment Workshop
          </Link>
          <Link
            to="/Actions"
            className="block py-2 px-3 text-black bg-blue-700 rounded md:bg-transparent  md:p-0 dark:text-black "
          >
            Legal Laws
          </Link>
          <Link
            to="/About"
            className="block py-2 px-3 text-black bg-blue-700 rounded md:bg-transparent  md:p-0 dark:text-black "
          >
            About us
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Nav;
