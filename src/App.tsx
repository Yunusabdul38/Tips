import React from "react";
import { Link, NavLink, Outlet } from "react-router-dom";
import NavBar from "./components/NavBar";

function App() {

  return (
    <React.Fragment>
      <NavBar />
      <div className="">
        <Outlet />
      </div>
      <footer className="bg-white m-4">
        <div className="w-full mx-auto p-4 md:py-8">
          <div className="sm:flex sm:items-center sm:justify-between">
            <h1 className="uppercase text-2xl text-indigo-950 font-extrabold">
              <Link to="/">indigo</Link>
            </h1>
            <ul className="flex flex-wrap items-center mb-6 text-sm font-medium text-gray-500 sm:mb-0">
              <NavLink
                to="/"
                className="cursor-pointer hover:bg-blue-950 hover:w-fit p-1 px-2 hover:rounded hover:text-sky-500 hover:transition bg-blue-950 w-fit p-1 px-2 rounded"
              >
                <li>Home</li>
              </NavLink>
              <NavLink
                to="./add-tip"
                className="cursor-pointer hover:bg-blue-950 hover:w-fit p-1 px-2 hover:rounded hover:text-sky-500 hover:transition bg-blue-950 w-fit p-1 px-2 rounded"
              >
                <li>Add Tip</li>
              </NavLink>
              <NavLink
                to="./filter"
                className="cursor-pointer hover:bg-blue-950 hover:w-fit p-1 px-2 hover:rounded hover:text-sky-500 hover:transition bg-blue-950 w-fit p-1 px-2 rounded"
              >
                <li>filter</li>
              </NavLink>
            </ul>
          </div>
          <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
          <span className="block text-sm text-gray-500 sm:text-center gap-4">
            © 2024
            <NavLink
              to="/"
              className="uppercase text-xl text-indigo-950 font-extrabold"
            >
              indigo
            </NavLink>
            . All Rights Reserved.
          </span>
        </div>
      </footer>
    </React.Fragment>
  );
}
export default App;
