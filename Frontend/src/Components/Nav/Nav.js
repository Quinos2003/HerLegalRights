import { Link } from "react-router-dom";
import React from "react";
import Logo from "../../Assets/Logo.png";

function Nav() {
  return (
    <div className="bg-white border-gray-200 dark:bg-gray-900">
      <Link to="/" class="navbar-brand mx-3">
        <img src={Logo} className="h-36" />
      </Link>
      <div className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700 justify-end mr-4">
        <Link
          to="/Resources"
          className="block py-2 px-3 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white md:dark:text-blue-500"
        >
          Legal Resources
        </Link>
        <Link to="/Case" className="block py-2 px-3 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white md:dark:text-blue-500">
          Case Studies
        </Link>
        <Link
          to="/Workshop"
          className="block py-2 px-3 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white md:dark:text-blue-500"
        >
          Empowerment workshop
        </Link>
        <Link
          to="/Actions"
          className="block py-2 px-3 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white md:dark:text-blue-500"
        >
          Legal Actons
        </Link>
        <Link to="/About" className="block py-2 px-3 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white md:dark:text-blue-500">
          About us
        </Link>
      </div>
    </div>
  );
}

export default Nav;
