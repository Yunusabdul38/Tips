import React from "react"
import { Link, Outlet } from "react-router-dom"
import { useLocation } from "react-router-dom"
import NavBar from "./components/NavBar"

function App(){
  const location = useLocation()
 return(
  <React.Fragment>
    <NavBar path={location.pathname} />
    <div className="" >
    <Outlet />
    </div>
    <footer className="bg-white m-4">
        <div className="w-full mx-auto p-4 md:py-8">
          <div className="sm:flex sm:items-center sm:justify-between">
          <h1 className="uppercase text-2xl text-indigo-950 font-extrabold"><Link >indigo</Link></h1>
            <ul className="flex flex-wrap items-center mb-6 text-sm font-medium text-gray-500 sm:mb-0">
              <li
                className={`cursor-pointer hover:bg-blue-950 hover:w-fit p-1 px-2 hover:rounded hover:text-sky-500 hover:transition ${
                  location== "/" ? "bg-blue-950 w-fit p-1 px-2 rounded" : ""
                }`}
              >
                <Link to="/">Home</Link>
              </li>
              <li
                className={`cursor-pointer hover:bg-blue-950 hover:w-fit p-1 px-2 hover:rounded hover:text-sky-500 hover:transition ${
                  location== "/add-tip" ? "bg-blue-950 w-fit p-1 px-2 rounded" : ""
                }`}
              >
                <Link to="./add-tip">Add Tip</Link>
              </li>
              <li
                className={`cursor-pointer hover:bg-blue-950 hover:w-fit p-1 px-2 hover:rounded hover:text-sky-500 hover:transition ${
                  location== "/filter" ? "bg-blue-950 w-fit p-1 px-2 rounded" : ""
                }`}
              >
                <Link to="./filter">filter</Link>
              </li>
            </ul>
          </div>
          <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
          <span className="block text-sm text-gray-500 sm:text-center gap-4">
            © 2024
            <Link className="uppercase text-xl text-indigo-950 font-extrabold"> indigo </Link>
            . All Rights Reserved.
          </span>
        </div>
      </footer>
  </React.Fragment>
 )
}
export default App