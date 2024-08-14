// import PropType from "prop-types"
import { useState } from "react";
import { Link } from "react-router-dom";
import { FaXmark,FaBars } from "react-icons/fa6";
import ProductSearch from "./product-search";
import NavUl from "./nav-ul";
import { AnimatePresence } from "framer-motion";

// NavBar.propTypes={
//   path:PropType.string
// }

function NavBar({path}) {
  const [isValid,setIsValid] = useState(true)
  return (
    <nav className=" bg-slate-400 text-[#fff] md:px-0 px-3 sticky top-0 z-20 md:h-auto h-16">
      <div className="xl:max-w-screen-xl mx-auto md:flex justify-between py-4 items-center">
        <div className="flex justify-between sm:gap-52 mr-8 sm:mr-0">
            <h1 className="uppercase text-2xl text-indigo-950 font-extrabold"><Link >indigo</Link></h1>
            <ProductSearch/>
        </div>
        <AnimatePresence>
        {isValid && <NavUl isValid={isValid} path={path}/>}
        </AnimatePresence> 
       {!isValid && <NavUl isValid={isValid}/>}
        <div className="md:hidden text-black  absolute top-5 right-1 text-2xl" onClick={()=>{
          setIsValid(prev=>!prev)
        }}>{isValid?<FaBars/>:<FaXmark/>}</div>
      </div>
    </nav>
  );
}
export default NavBar;
