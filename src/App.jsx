import React from "react"
import { Outlet } from "react-router-dom"
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
    
  </React.Fragment>
 )
}
export default App